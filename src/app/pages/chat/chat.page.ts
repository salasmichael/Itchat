import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ChatService } from 'src/app/services/chat/chat.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  @ViewChild(IonContent, { static: true }) content: IonContent | undefined;
  scrollingDown = false;

  messages:any = [];
  nickname = '';
  message = '';
  UserLogged:any;
  roomId:any;

  constructor(private chatService: ChatService,
               private storageService: StorageService,
               private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => { this.roomId = params.get('roomId'); });
    this.userLoggedIn();
    this.receiveMessages();
  }

  handleScroll(event: any) {
    this.scrollingDown = event.detail.scrollTop > event.detail.scrollHeight - event.detail.contentHeight - 100;
  }

  receiveMessages(){
    this.chatService.receiveMessages(this.roomId).subscribe((msg) => {
      this.messages.push(msg);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.roomId,this.UserLogged?.id,this.message);
    this.message = '';
    if (this.content) {
      this.content.scrollToBottom();
    }
  }

  userLoggedIn(){
    this.storageService.getUserInfo().then(res=>{
      this.UserLogged = res  
      this.nickname =this.UserLogged?.name;
    })
  }

  scrollToBottom() {
    if (this.content) {
      this.content.scrollToBottom();
    }
  }

}
