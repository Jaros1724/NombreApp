import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  Validation_messages = {
    email: [
      { type: 'required', message: 'El email es obligatorio.' },
      { type: 'pattern', message: 'El email ingresado no es valido.' },
    ],
    password: [
      { type: 'required', message: 'la contraseña es obligatorio.' },
      { type: 'pattern', message: 'la contraseña ingresada no es valido.' },
    ]
  };
   loginMessage: any = '';
  constructor(
    private formBuilder: FormBuilder,
    private AuthService: AuthService,
    private navCtrl: NavController,
    private storage: Storage
    ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.maxLength(12),
          Validators.required,
          Validators.minLength(8),
        ])
      ),
    });
  }

  login(login_data: any) {
    console.log(login_data);
    this.AuthService.loginUser(login_data).then(res => {
      this.loginMessage = res;
      this.storage.set('userLoggedIn', true);
      console.log("login correcto te dirigo al home")
      this.navCtrl.navigateForward('/home');
    }).catch(Error =>{
      this.loginMessage = Error;
    })
  }
}
