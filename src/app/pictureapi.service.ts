import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface PictureapiResponse {
  urls: {
    regular: string;
  }
}


@Injectable({
  providedIn: 'root'
})
export class PictureapiService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http
      .get<PictureapiResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization: 'Client-ID I5WGxSUAnIeWuwm59dHYD-a4vWAw_Rx-7h3JdPDnzjs'
        }
      })
      .pipe(pluck('urls', 'regular'))
  }

}
