import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  size: 'sm' | 'md' | 'lg' = 'sm';
  bpSubscription: Subscription;

  constructor(private bpObserver: BreakpointObserver) { }

  ngOnInit(): void {
    const mediaSm = '(max-width: 599px)';
    const mediaMd = '(min-width: 600px) and (max-width: 899px)';
    this.bpSubscription = this.bpObserver.observe([
      mediaSm, mediaMd
    ])
      .subscribe((result) => {
        if (result.breakpoints[mediaSm]) {
          this.size = 'sm';
        } else if (result.breakpoints[mediaMd]) {
          this.size = 'md';
        } else {
          this.size = 'lg';
        }
      });
  }

}
