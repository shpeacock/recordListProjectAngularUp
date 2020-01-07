import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/records`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/records/${id}`);
  }

  addIssue(artist, title, genre, rating) {
    const record = {
      artist: artist,
      title: title,
      genre: genre,
      rating: rating
    };
    return this.http.post(`${this.uri}/records/add`, record);
  }

  updateIssue(id, artist, title, genre, rating) {
    const record = {
      artist: artist,
      title: title,
      genre: genre,
      rating: rating
    };
    return this.http.post(`${this.uri}/records/update/${id}`, record);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/record/delete/${id}`);
  }
}