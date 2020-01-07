import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private recordsService: RecordsService) { }

  ngOnInit() {

    this.recordsService.getRecords().subscribe((records => {
      console.log(records)
    }))
  }

}
