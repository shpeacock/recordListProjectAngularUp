
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  createForm: FormGroup;



  constructor(private recordService: RecordsService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      artist: '',
      genre: '',
      rating: Number,
    });
  }

  addRecord(title, artist, genre, rating) {
    this.recordService.addRecord(title, artist, genre, rating).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

}
