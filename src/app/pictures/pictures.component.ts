import { Component, OnInit, Input } from '@angular/core';
import { PictureapiService } from '../pictureapi.service'


@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent  {
  url: string;

  constructor(private pictureapi: PictureapiService) {
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.pictureapi.getPhoto().subscribe( (response) => {
      this.url = response;
    })
  }
}
