import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  yearProgress: Number;
  monthProgress: Number;
  dayProgress: Number;
  today: any;
  now = dayjs();
  ngOnInit() {
    this.today = dayjs().format('dddd DD/MM/YYYY');
    this.dayProgress = this.findProgress('day');
    this.monthProgress = this.findProgress('month');
    this.yearProgress = this.findProgress('year');
  }
  findProgress(a) {
    const start = dayjs(this.now).startOf(a);
    const end = dayjs(this.now).endOf(a);
    const totalMillisInRange = end.valueOf() - start.valueOf();
    const elapsedMillis = this.now.valueOf() - start.valueOf();
    return Math.max(
      0,
      Math.min(100, 100 * (elapsedMillis / totalMillisInRange))
    );
  }
}
