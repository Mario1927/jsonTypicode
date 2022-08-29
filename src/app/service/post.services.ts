import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../interface/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  public addPost(post: Post): Observable<any> {
    return this.http.post<Post>(this.url, post);
  }

  public updatePost(post: any): Observable<any> {
    return this.http.put<Post>(`${this.url}/${post.id}`, post);
  }

  public patchPost(post: any): Observable<any> {
    return this.http.patch<Post>(`${this.url}/${post.id}`, post);
  }

  public deletePost(id: number): Observable<any> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
  
}