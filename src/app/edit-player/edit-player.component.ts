import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss'],
})
export class EditPlayerComponent implements OnInit {
  allProfilePictures = [
    '../assets/images.jpg',
    '../assets/profile_pic_1.webp',
    '../assets/ape_1.png',
    '../assets/dog.png',
    '../assets/pig.png',
  ];

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>) {}

  ngOnInit(): void {}
}
