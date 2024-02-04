import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(
    private menu: MenuController,
    private navCtrl: NavController
  ) { }


  closeMenu(){
    console.log("cerrar menu")
    this.menu.close();
  }
   logout(){
    this.navCtrl.navigateRoot("/login")
   }
   goToIntro() {
    this.navCtrl.navigateRoot("menu/intro")
  }
  goHome() {
    this.navCtrl.navigateRoot("menu/home")
  }
}
