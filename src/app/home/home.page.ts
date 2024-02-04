import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

event_list: any;
catego_list: any;

  constructor(private router: Router,
    private storage: Storage,
    private events: EventsService
    ) {}

    ionViewDidEnter(){
     this.events.getEvents().then(
      res =>{
        this.event_list = res;
        console.log("Eventos desde el servidor",this.event_list);
      }
     );
     console.log("local Events",this.events.getLocalEvents().events);

     this.events.getCatego().then(
      res =>{
        this.catego_list = res;
        console.log("Categorias desde el servidor",this.catego_list);
        }
    );

    this.events.getCategoId('1').then(
      res => {
        this.catego_list = res;
        console.log("Id de categoria desde el servidor", this.catego_list);
      }
    );









    }





  goToIntro(){
    console.log("go to intro");
    this.router.navigateByUrl('/menu/intro');
  }

}
