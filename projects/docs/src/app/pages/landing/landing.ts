import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideArrowRight,
  lucideArrowUpRight,
  lucideCheck,
  lucideCode,
  lucideComponent,
  lucideCopy,
  lucideExternalLink,
  lucideGithub,
  lucideHeart,
  lucideLayers,
  lucideMessageCircle,
  lucidePalette,
  lucideRocket,
  lucideSearch,
  lucideSettings,
  lucideShield,
  lucideSmartphone,
  lucideSparkles,
  lucideSun,
  lucideTwitter,
  lucideX,
  lucideZap
} from '@ng-icons/lucide';
import { UiButton } from 'ui';
import { Header } from '@components/header/header';
import { Footer } from "@components/footer/footer";

@Component({
  selector: 'docs-landing',
  imports: [NgIcon, RouterLink, UiButton, Header, Footer],
  viewProviders: [provideIcons({
    lucideArrowRight,
    lucideArrowUpRight,
    lucideCheck,
    lucideCode,
    lucideComponent,
    lucideCopy,
    lucideExternalLink,
    lucideGithub,
    lucideHeart,
    lucideLayers,
    lucideMessageCircle,
    lucidePalette,
    lucideRocket,
    lucideSearch,
    lucideSettings,
    lucideShield,
    lucideSmartphone,
    lucideSparkles,
    lucideSun,
    lucideTwitter,
    lucideX,
    lucideZap
  })],
  templateUrl: './landing.html'
})
export class Landing {

  readonly menuOpen = signal(false);

  features = [
    {
      icon: 'lucideComponent',
      title: 'Modern Components',
      description: 'Built with the latest Angular features including Signals, standalone components, and modern architecture.'
    },
    {
      icon: 'lucidePalette',
      title: 'Tailwind CSS',
      description: 'Fully styled with Tailwind CSS 4, featuring built-in dark mode and complete theme customization.'
    },
    {
      icon: 'lucideShield',
      title: 'Accessible',
      description: 'Keyboard navigation and screen reader support built-in, following WAI-ARIA best practices.'
    },
    {
      icon: 'lucideZap',
      title: 'Developer Experience',
      description: 'Easy integration via CLI with hot reloading, TypeScript support, and excellent IDE integration.'
    },
    {
      icon: 'lucideSmartphone',
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect rendering across all device sizes and orientations.'
    },
    {
      icon: 'lucideLayers',
      title: 'Composable',
      description: 'Mix and match components to build complex UIs. Each component is designed to work seamlessly together.'
    }
  ];

}
