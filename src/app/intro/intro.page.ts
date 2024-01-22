import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  constructor(private router: Router) { }
  slides = [

    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "../../assets/images/2.webp",
      help_text: "For more information on Ionic, please see <a href='https://ionicframework.com/docs/'>our docs</a>.",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "../../assets/images/3.webp",
      help_text: "For more information on Ionic, please see <a href='https://ionicframework.com/docs/'>our docs</a>.",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "../../assets/images/3.webp",
      help_text: "For more information on Ionic, please see <a href='https://ionicframework.com/docs/'>our docs</a>.",
    }
  ]
  goToHome(){
    console.log("go to home");
    this.router.navigateByUrl('/home');
  }
 }

