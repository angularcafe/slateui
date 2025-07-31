import { Component } from '@angular/core';
import { alertVariants } from './alert.variants';

@Component({
  selector: 'docs-alert',
  imports: [],
  templateUrl: './alert.html'
})
export class Alert {
  alertVariants = alertVariants;
}
