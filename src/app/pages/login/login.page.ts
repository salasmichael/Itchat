import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  message:string ='';
  
  constructor(private router: Router,
              private authService:AuthService,
              private toastController:ToastController ) { }
  formData:any = {}
  
  ngOnInit() {
  }

  login() {
    const credentials = {
      email: this.formData.email,
      password: this.formData.password
    };

    this.authService.loginUser(credentials).subscribe(
      (response) => {
        // this.authService.loginUser(response.user).then(res=>{
        // })
        this.router.navigate(['/rooms']); 
      },
      (error) => {
        console.log(error);
        
        const message = error?.error?.error;
        this.presentToast(message);
      }
    );
  
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
