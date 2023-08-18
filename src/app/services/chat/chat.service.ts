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

  sendMessage( roomId: number, userId:number, message: string ) {
    this.socket.connect();
    this.socket.emit('add-message', { text: message, user_id:userId, room_id: roomId });
  }

  receiveMessages(room_id:number): Observable<any> {
    return new Observable((observer) => {
      this.socket.connect();
      this.socket.emit('set-roomId', room_id);
      this.socket.on('message', (message: any) => {
        observer.next(message);
      });
    });
  }

}
