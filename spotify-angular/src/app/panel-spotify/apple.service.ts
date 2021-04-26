import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import * as album from './data/album.json';
import * as songs from './data/song.json';


@Injectable({
  providedIn: 'root'
})
export class AppleService {
  urlAlbum = 'https://itunes.apple.com/lookup?upc=196051224035';
  urlSong = 'https://itunes.apple.com/lookup?upc=196051224035&entity=song';

  constructor(private http: HttpClient) {}
  /*
  public getAlbum(): Observable<any> {
    // problema de CORS
    return this.http.get<any>(this.urlAlbum);
  }
  */
  public getAlbum(): any{

    return album.default.results[0];
  }




  public getSongs() {
    return songs.default.results
  }
}
