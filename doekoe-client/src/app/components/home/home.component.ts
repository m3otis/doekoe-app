import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntryService } from 'src/app/services/entry.service';
import Entry from 'src/app/models/entry';
import { ToastService } from 'src/app/services/toast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  entries: Entry[];

  constructor(
    private fb: FormBuilder,
    private entryService: EntryService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.createForm();
    this.getEntries();
  }

  getEntries() {
    this.entryService.getEntries().subscribe(x => (this.entries = x));
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  addEntry() {
    const test: Entry = new Entry(
      this.form.controls.name.value,
      this.form.controls.description.value,
      this.form.controls.amount.value
    );

    const res = this.entryService.addEntry(test);
    res.subscribe(x => {
      this.toastService.show(x.entry, {
        classname: 'bg-success text-light',
        delay: 2000
      });

      this.entryService.getEntries().subscribe(h => (this.entries = h));
    });
  }
}
