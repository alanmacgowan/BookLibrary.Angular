import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface ToastMessage {
  message: string,
  type: number
}

export class ToasterType {
  static Success = 1;
  static Info = 2;
  static Warning: 3;
  static Error: 4;
}

@Injectable()
export class ToastService {

  private toastSubject = new Subject<ToastMessage>();

  toastState = this.toastSubject.asObservable();

  constructor( @Optional() @SkipSelf() prior: ToastService) {
    if (prior) {
      console.log('toast service already exists');
      return prior;
    } else {
      console.log('created toast service');
    }
  }

  activate(type?: number, message?: string) {
    this.toastSubject.next(<ToastMessage>{ message: message, type: type });
  }

  success(message?: string) {
    this.activate(ToasterType.Success, message);
  }

  warning(message?: string) {
    this.activate(ToasterType.Warning, message);
  }

  info(message?: string) {
    this.activate(ToasterType.Info, message);
  }

  error(message?: string) {
    this.activate(ToasterType.Error, message);
  }
  
}
