import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {
  rooms: any[] = [];

  constructor(private roomService: RoomsService,
    private router: Router) {}

  ngOnInit() {
    this.loadRooms();
  }

  openRoom(roomId: number) {
    this.router.navigate(['/chat', roomId]);
  }

  loadRooms() {
    this.roomService.getRooms().subscribe(
      (data) => {
        this.rooms = data?.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
