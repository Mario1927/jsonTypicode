import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Photo } from "../interface/Photo";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.url);
  }

}