import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getRecords() {
    return this.http.get(`${this.uri}/records`);
  }

  getRecordById(id) {
    return this.http.get(`${this.uri}/records/${id}`);
  }

  addRecord(artist, title, genre, rating) {
    const record = {
      artist: artist,
      title: title,
      genre: genre,
      rating: rating
    };
    return this.http.post(`${this.uri}/records/add`, record);
  }

  updateRecord(id, artist, title, genre, rating) {
    const record = {
      artist: artist,
      title: title,
      genre: genre,
      rating: rating
    };
    return this.http.post(`${this.uri}/records/update/${id}`, record);
  }

  deleteRecord(id) {
    return this.http.get(`${this.uri}/record/delete/${id}`);
  }
}