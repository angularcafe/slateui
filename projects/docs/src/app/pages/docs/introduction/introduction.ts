import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideRocket,
  lucideZap,
  lucideSettings,
  lucidePalette,
  lucideAccessibility,
  lucideTerminal,
  lucidePlay,
  lucideSmartphone,
  lucideMessageCircle,
  lucideGithub,
  lucideBook,
  lucideCode,
  lucideBox,
  lucideComponent,
} from '@ng-icons/lucide';

@Component({
  selector: 'app-introduction',
  imports: [NgIcon],
  viewProviders: [
    provideIcons({
      lucideRocket,
      lucideZap,
      lucideSettings,
      lucidePalette,
      lucideAccessibility,
      lucideTerminal,
      lucidePlay,
      lucideSmartphone,
      lucideMessageCircle,
      lucideGithub,
      lucideBook,
      lucideCode,
      lucideBox,
      lucideComponent,
    }),
  ],
  templateUrl: './introduction.html',
})
export class Introduction {}
