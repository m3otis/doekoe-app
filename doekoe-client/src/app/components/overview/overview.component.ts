import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { EntryService } from 'src/app/services/entry.service';
import Entry from 'src/app/models/entry';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @Input() entries: Entry[];

  constructor() {}

  ngOnInit() {}

  calculateTotal(): number {
    if (this.entries !== undefined) {
      let amount = 0;

      this.entries.forEach(e => {
        amount = amount + e.amount;
      });

      return amount;
    }
  }
}
