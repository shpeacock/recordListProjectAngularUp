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

  addRecord(title, artist, genre, rating) {
    const record = {
      title: title,
      artist: artist,
      genre: genre,
      rating: rating
    };
    return this.http.post(`${this.uri}/records/add`, record);
  }

  updateRecord(id, title, artist, genre, rating) {
    const record = {
      title: title,
      artist: artist,
      genre: genre,
      rating: rating
    };
    console.log(id);
    return this.http.post(`${this.uri}/records/update/${id}`, record);
  }

  deleteRecord(id) {
    console.log('hitting the service');
    return this.http.get(`${this.uri}/records/delete/${id}`);
  }
}