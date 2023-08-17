import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private userLoggedIn: boolean = false;
  private userInfo: any = null;

  constructor(private storage: Storage) {}

  async loginUser(userInfo: any) {
    await this.storage.create();
    this.storage.set('user', userInfo);
    this.userLoggedIn = true;
    this.userInfo = userInfo;
  }

 async getUserInfo() {
    this.userInfo = await this.storage.get('user');
    return this.userInfo;
  }

  async logoutUser() {
    this.userLoggedIn = false;
    this.userInfo = null;
    await this.storage.clear();
  }
}
