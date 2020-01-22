import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import { RecordsService } from '../records.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  record: any = {};
  updateForm: FormGroup;

  constructor(
    private recordService: RecordsService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      artist: '',
      genre: '',
      rating: Number,
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.recordService.getRecordById(this.id).subscribe(res => {
        this.record = res;;
        this.updateForm.get('title').setValue(this.record.title);
        this.updateForm.get('artist').setValue(this.record.artist);
        this.updateForm.get('genre').setValue(this.record.genre);
        this.updateForm.get('rating').setValue(this.record.rating);
      });
    });
  }

  updateRecord(title, artist, genre, rating) {
    this.recordService.updateRecord(this.id, title, artist, genre, rating).subscribe(() => {
      this.snackBar.open('Record updated successfully', 'OK', {
        duration: 3000
      });
      this.router.navigate(['/']);

    });
  }

}
