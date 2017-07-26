import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SpinnerState, SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnDestroy, OnInit {

  private spinnerStateChanged: Subscription;
  private spinElement: any;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinElement = document.getElementById('spinner');
    this.spinnerStateChanged = this.spinnerService.spinnerState
      .subscribe((state: SpinnerState) => {
        if (state.show) {
          this.show();
        } else {
          this.hide();
        }
      });
  }

  ngOnDestroy() {
    this.spinnerStateChanged.unsubscribe();
  }

  private show() {
    this.spinElement.style.display = 'block';
  }

  private hide() {
    this.spinElement.style.display = 'none';
  }

}
