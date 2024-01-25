import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any){
    return new Promise ((accept, reject) => {
      if(
        credential.email == 'jair@gmail.com'
         && credential.password == '12345635'
         ){
        accept('login correcto');
      }else{
        reject('login incorrecto');
      }
    });

  }
}
