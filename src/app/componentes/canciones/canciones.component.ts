import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumArtista } from '../../modelo/albumArtista';

@Component({
  selector: 'app-canciones',
  standalone: true,
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {
  ngOnInit(): void {
    
  }

  //Este input no me genera mucha lógica :(
  @Input() cancionesAlbum: AlbumArtista[] = [];
  @Output() onLoved = new EventEmitter<AlbumArtista>();

  loved(camcion: AlbumArtista){
    this.onLoved.emit(camcion);
  }

}
