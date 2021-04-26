import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-song',
  templateUrl: './option-song.component.html',
  styleUrls: ['./option-song.component.css']
})
export class OptionSongComponent implements OnInit {
  @Input() song;
  constructor() { }

  ngOnInit(): void {
    console.log(this.song)
    let trackTime = this.song.trackTimeMillis /1000
    let min =(Math.trunc(trackTime/60))
    let seg = trackTime- min * 60

    this.song.trackTime = min.toString() + ':' + seg.toString()

  }

}
