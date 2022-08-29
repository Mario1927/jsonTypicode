import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interface/Photo';
import { PhotoService } from 'src/app/service/photo.services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public photos: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe({
      next: (response: Photo[]) => this.photos = response.slice(0, 10),
      error: (e: HttpErrorResponse) => console.log(e.message)
    })
  }

}
