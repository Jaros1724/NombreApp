import { register } from 'swiper/element/bundle';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
  registerForm: FormGroup;

  Validation_messages ={
    email: [
      { type: 'required', message: 'El email es obligatorio.' },
      { type: 'pattern', message: 'El email ingresado no es valido.' },
    ],
    password: [
      { type: 'required', message: 'la contraseña es obligatorio.' },
      { type: 'pattern', message: 'la contraseña ingresada no es valido.' },
      { type: 'minLength', message: 'incluye poco caracteres' }
    ],
    name: [
      { type: 'required', message: 'El nombre es obligatorio.' },
      { type: 'pattern', message: 'El nombre ingresado no es valido.' }


    ],
    last_name:[
      { type: 'required', message: 'El apellido es obligatorio.' },
      { type: 'pattern', message: 'El apellido ingresado no es valido.' }

    ],
    confirmation_password: [
      {type: 'required', message: 'la confirmacion de la contraseña es obligatorio'},
      { type: 'pattern', message: 'la contraseña ingresada no es valido.' },
      { type: 'minLength', message: 'incluye poco caracteres' }
    ]
  };
  registerMessage: any = '';

  constructor(
    private formBuilder: FormBuilder,
    private AuthService: AuthService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.registerForm = this.formBuilder.group({
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
          Validators.minLength(5),

        ])
      ),
      confirmation_password: new FormControl(
        '',
        Validators.compose([
          Validators.maxLength(12),
          Validators.required,
          Validators.minLength(5),

        ])
      ),
      name: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z ]+$")
        ])
      ),
      last_name: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z ]+$")
        ])
      )
    })
   }
   register(register_data: any) {
    console.log(register_data);
    this.AuthService.registeredUser(register_data).then(resi => {
      this.registerMessage = resi;
      this.storage.set('Successfulregistration', true);
      this.navCtrl.navigateForward('/login')
    }).catch(Error =>{
      this.registerMessage = Error;
    })
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login")
  }


}
