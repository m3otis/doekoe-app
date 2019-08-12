import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Entry from '../models/entry';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  uri = 'http://localhost:4000/entry';

  constructor(private http: HttpClient) {}

  addEntry(entry: Entry): Observable<any> {
    const obj = {
      name: entry.name,
      description: entry.description,
      amount: entry.amount
    };

    const add: Observable<any> = this.http.post(`${this.uri}/add`, obj);
    return add;
  }

  getEntries(): Observable<Entry[]> {
    const test = this.http
      .get(`${this.uri}`)
      .pipe(map(x => this.mapToEntry(x)));
    return test;
  }

  mapToEntry(res: object): Entry[] {
    const b = res as Entry[];
    return b;
  }
}
