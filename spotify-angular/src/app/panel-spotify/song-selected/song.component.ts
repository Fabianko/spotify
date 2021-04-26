import { Component, OnInit } from '@angular/core';
import { AppleService } from '../apple.service';
@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
  providers: [AppleService]
})
export class SongComponent implements OnInit {
  album;
  songs;
  constructor(private appleService: AppleService) { }

  ngOnInit(): void {
    this.getAlbum();
    this.getSongs();
  }

  public getAlbum() {
    this.album = this.appleService.getAlbum();
    console.log(this.album);
  }
  public getSongs() {
    this.songs = this.appleService.getSongs();
  }
}
