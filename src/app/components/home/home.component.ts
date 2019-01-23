import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  selectedTab: number;
  private routeParamsSub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selectedTab = 0;

    this.routeParamsSub = this.route.queryParams
      .subscribe((params) => {
        this.selectedTab = params.tab ? +params.tab : 0;
      });
  }

  onTabChange(index: number) {
    this.selectedTab = index;
    this.router.navigate(['/'], {queryParams: {tab: index}});
  }

  ngOnDestroy(): void {
    this.routeParamsSub.unsubscribe();
  }

}
