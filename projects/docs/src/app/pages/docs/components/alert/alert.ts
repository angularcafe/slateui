import { Component } from '@angular/core';
import { Tab } from '@components/tab/tab';
import { Tabs } from '@components/tabs/tabs';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideComponent } from '@ng-icons/lucide';


@Component({
  selector: 'docs-alert',
  imports: [Tabs, Tab],
  viewProviders: [provideIcons({ lucideComponent })],
  templateUrl: './alert.html'
})
export class Alert {

}
