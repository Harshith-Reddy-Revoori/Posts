import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
type TPost = {
  id: number;
  title: string;
  userId: number;
  content: string;
  likes: number;
  hits: number;
  categoryId: number;
  imageUrl: string;
};
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }


  public fetchAll(): Observable<TPost[]> {
    const observable = this.http.get<TPost[]>(`${this.baseUrl}/posts`);
    return observable;
  }
  public addPost(post: TPost): Observable<TPost> {
    return this.http.post<TPost>(`${this.baseUrl}/posts`, post);
  }
  public removePost(id: number): Observable<TPost> {
    return this.http.delete<TPost>(`${this.baseUrl}/posts/${id}`);
  }

  public getPostDetailById(id: number): Observable < TPost > {
    return this.http.get<TPost>(`${this.baseUrl}/posts/${id}`);
  }
  public editPost(id: number, data: TPost): Observable<TPost> {
    return this.http.put<TPost>(`${this.baseUrl}/posts/${id}`, data);
  }
}
