import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Album } from '../../modelo/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent  {

  @Input() albumDetail!: AlbumDetailComponent;
  id: any;
}
