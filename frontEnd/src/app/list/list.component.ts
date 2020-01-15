import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Record } from '../record.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private recordsService: RecordsService, private router: Router) { }

  records: Record[];
  displayedColumns = ['title', 'artist', 'genre', 'rating', 'actions'];

  ngOnInit() {
    this.fetchRecords();
  }

  fetchRecords() {
    this.recordsService.getRecords().subscribe((data: Record[]) => {
      this.records = data;
    });
  }

  editRecord(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteRecord(id) {
    this.recordsService.deleteRecord(id).subscribe(() => {
      this.fetchRecords();
    });
  }
}
