import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socketUrl = environment.socketUrl;
  private socket: any;

  constructor() {
    this.socket = io(this.socketUrl);
  }

  sendMessage( roomId: number, userId:number, nickname:string, message: string ) {
    this.socket.connect();
    this.socket.emit('set-nickname', nickname);
    this.socket.emit('add-message', { text: message, user_id:userId, room_id: roomId });
  }

  receiveMessages(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('message', (message: any) => {
        observer.next(message);
      });
    });
  }

}
