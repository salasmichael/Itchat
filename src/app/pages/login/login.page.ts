import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  message:string ='';
  
  constructor(private router: Router,
             
              private toastController:ToastController ) { }
  formData:any = {}
  
  ngOnInit() {
  }

  login() {
    const credentials = {
      email: this.formData.email,
      password: this.formData.password
    };

  
}


async presentToast(message: string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 2000, 
    position: 'bottom',
    color: 'danger'
  });
  toast.present();
}


}
