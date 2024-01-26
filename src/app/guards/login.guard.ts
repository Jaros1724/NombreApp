import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private storage: Storage,
    private Router: Router){}
  async canActivate(){
   const userLoggedIn = await this.storage.get('userLoggedIn');
   if(userLoggedIn){
    console.log(userLoggedIn);
    console.log('El usuario esta logueado');
    return true;
   }else{
    console.log('El usuario no esta logueado');
    this.Router.navigateByUrl('/login');
    return false;
   }
  }

}
