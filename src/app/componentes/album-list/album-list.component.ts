import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Album } from '../../modelo/album';
import { AlbumService } from '../../servicios/album.service';
import { flush } from '@angular/core/testing';
import { AlbumDetailComponent } from '../album-detail/album-detail.component';

@Component({
  selector: 'app-album-list',
  standalone: true,
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: Album[]=[];
  selectedAlbum!: AlbumDetailComponent;
  selected: boolean = false;

  @Output() onOpenTracks = new EventEmitter<Album>();

  constructor(private albumService: AlbumService) { }

  onSelected(album: AlbumDetailComponent): void {
    if(this.selected && album.id ==  this.selectedAlbum.id){
      this.selected = false;
      return
    }
    this.selected = true;
    this.selectedAlbum = album;
  }

  ngOnInit() {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
    })
  }

  verAlbum(album: Album){
    this.onOpenTracks.emit(album);
  }

}
