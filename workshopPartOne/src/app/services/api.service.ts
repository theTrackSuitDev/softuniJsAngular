import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from '../types/theme';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  getThemes() {
    return this.http.get<Theme[]>(`${environment.apiUrl}/themes`)
  }

  getPosts(limit: number) {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts?limit=${limit}`)
  }

}
