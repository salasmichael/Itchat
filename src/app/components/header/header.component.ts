import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  handlerMessage = '';
  @Input() pageTitle: string = '';
  @Input() backButton: boolean = false;
  @Input() logoutbtn: boolean = false;

  constructor(private router: Router,
    private storageService:StorageService,
    private alertController: AlertController) { }

ngOnInit() {}

async logout() {

    const alert = await this.alertController.create({
    header: 'Are you sure you want to log out?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          this.handlerMessage = 'Canceled';
        },
      },
      {
      text: 'OK',
      role: 'confirm',
        handler: () => {
          this.handlerMessage = 'Confirmed';
        },
      },
    ],
});

  await alert.present();

  const { role } = await alert.onDidDismiss();

  if(role==='confirm'){
    
    this.storageService.logoutUser();
    this.router.navigate(['/login']);
  }

}

back(){
  this.router.navigate(['/rooms']);
}

}
