import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  message:string ='';
  
  constructor(private router: Router,
              private authService:AuthService,
              private toastController:ToastController,
              private storageService:StorageService ) { }
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
        this.storageService.loginUser(response.data).then(res=>{
          this.router.navigate(['/rooms']); 
        })
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
