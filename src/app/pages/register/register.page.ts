import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService:AuthService,
              private storageService:StorageService,
              private toastController:ToastController,
              private router: Router) {

    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

  }

  ngOnInit() {
  }

  registerUser() {

    this.authService.registerUser(this.registrationForm.value).subscribe(
      (response) => {
        this.storageService.setUser(response.data).then(res=>{
          this.router.navigate(['/rooms']); 
        })
      },
      (error) => {
        const message = error?.error?.message;
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
