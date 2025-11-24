import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../modelo/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'http://localhost:8080/artists'

constructor(private http: HttpClient) { }

getAlbums(): Observable<Album[]> {
  return this.http.get<Album[]>(this.apiUrl);
}

}
