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
      rating: '',
    });
  }
  addIssue(title, artist, genre, rating) {
    this.recordService.addRecord(title, artist, genre, rating).subscribe(() => {
      this.router.navigate(['/list']);
    })
  }
  ngOnInit() {
  }

  updateIssue(title, artist, genre, rating) {
    this.recordService.updateRecord(this.id, title, artist, genre, rating).subscribe(() => {
      this.snackBar.open('Record updated successfully', 'OK', {
        duration: 3000
      });
    });
  }

}
