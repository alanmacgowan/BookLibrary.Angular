import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastService, ToasterType } from './toast.service';

import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-toast',
   templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnDestroy, OnInit {
  private defaults = {
    title: '',
    message: '',
    type: ToasterType.Success
  };
  private toastElement: any;
  private toastSubscription: Subscription;

  title: string;
  message: string;
  toasterClass: string;

  constructor(private toastService: ToastService) {
    this.toastSubscription = this.toastService.toastState.subscribe((toastMessage) => {
      console.log(`activiting toast: ${toastMessage.message}`)
      this.activate(toastMessage.type, toastMessage.message);
    });
  }

  activate(type = this.defaults.type, message = this.defaults.message, title = this.defaults.title) {
    this.title = title;
    this.message = message;
    this.toasterClass = 'toast-container ' + this.getToasterClass(type);
    this.show();
  }

  getToasterClass(type:number){
    switch(type){
      case ToasterType.Success:
        return 'toast-success';
      case ToasterType.Info:
        return 'toast-info';
      case ToasterType.Warning:
        return 'toast-warning';
      case ToasterType.Error:
        return 'toast-error';
      default:
        return 'toast-success';
    }
  }

  ngOnInit() {
    this.toastElement = document.getElementById('toast');
  }

  ngOnDestroy() {
    this.toastSubscription.unsubscribe();
  }

  private show() {
    console.log(this.message);
    this.toastElement.style.opacity = 1;
    this.toastElement.style.zIndex = 9999;

    window.setTimeout(() => this.hide(), 2500);
  }

  private hide() {
    this.toastElement.style.opacity = 0;
    window.setTimeout(() => this.toastElement.style.zIndex = 0, 400);
  }
}
