import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { CommonModule } from '@angular/common';
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
  lucideWrench,
  lucideX,
  lucideZap,
} from '@ng-icons/lucide';
import { UiButton } from 'ui';
import { Header } from '@components/header/header';
import { Footer } from '@components/footer/footer';
import { bootstrapGithub } from '@ng-icons/bootstrap-icons';
import { Sidebar } from '@components/sidebar/sidebar';

@Component({
  selector: 'docs-landing',
  imports: [
    NgIcon,
    RouterLink,
    UiButton,
    Header,
    Footer,
    CommonModule,
    Sidebar,
  ],
  viewProviders: [
    provideIcons({
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
      lucideWrench,
      lucideX,
      lucideZap,
      bootstrapGithub,
    }),
  ],
  templateUrl: './landing.html',
})
export class Landing {
  readonly menuOpen = signal(false);

  features = [
    {
      icon: 'lucideComponent',
      title: 'Modern Components',
      description:
        'Built with the latest Angular features including Signals, standalone components, and modern architecture. Leveraging Angular Primitives for robust, accessible foundation and exceptional developer experience.',
      iconBg: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: 'lucidePalette',
      title: 'Tailwind CSS',
      description:
        'Fully styled with Tailwind CSS 4, featuring built-in dark mode and complete theme customization.',
      iconBg: 'bg-purple-100 dark:bg-purple-900/30',
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      icon: 'lucideShield',
      title: 'Accessible',
      description:
        'Keyboard navigation and screen reader support built-in, following WAI-ARIA best practices.',
      iconBg: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600 dark:text-green-400',
    },
    {
      icon: 'lucideZap',
      title: 'Developer Experience',
      description:
        'Easy integration via CLI with hot reloading, TypeScript support, and excellent IDE integration.',
      iconBg: 'bg-orange-100 dark:bg-orange-900/30',
      iconColor: 'text-orange-600 dark:text-orange-400',
    },
    {
      icon: 'lucideSmartphone',
      title: 'Responsive Design',
      description:
        'Mobile-first approach ensuring perfect rendering across all device sizes and orientations.',
      iconBg: 'bg-teal-100 dark:bg-teal-900/30',
      iconColor: 'text-teal-600 dark:text-teal-400',
    },
    {
      icon: 'lucideLayers',
      title: 'Composable',
      description:
        'Mix and match components to build complex UIs. Each component is designed to work seamlessly together.',
      iconBg: 'bg-pink-100 dark:bg-pink-900/30',
      iconColor: 'text-pink-600 dark:text-pink-400',
    },
  ];
}
