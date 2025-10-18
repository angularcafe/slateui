import {
  Component,
  effect,
  inject,
  PLATFORM_ID,
  signal,
  computed,
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Sidebar } from '@components/sidebar/sidebar';
import { Header } from '@components/header/header';
import { QuickLinks } from '@components/quick-links/quick-links';
import { Footer } from '@components/footer/footer';

// Angular 20 standalone component with modern features
@Component({
  selector: 'docs-docs',
  standalone: true,
  imports: [RouterOutlet, Sidebar, Header, QuickLinks, Footer],
  templateUrl: './docs.html',
  host: {
    class: 'block min-h-screen',
  },
})
export class Docs {
  // Injected dependencies using Angular 20 inject function
  private readonly router = inject(Router);
  private readonly platform = inject(PLATFORM_ID);

  // Signal-based state management
  readonly menuOpen = signal(false);

  // Computed values using Angular 20 computed signals
  readonly currentYear = computed(() => new Date().getFullYear());
  readonly isBrowser = computed(() => isPlatformBrowser(this.platform));

  constructor() {
    // Navigation listener with automatic cleanup
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.menuOpen.set(false));

    // Body overflow management only in browser
    if (this.isBrowser()) {
      effect(() => {
        // Prevent scrolling when mobile menu is open
        if (this.menuOpen()) {
          document.body.style.overflow = 'hidden';
          document.body.classList.add('menu-open');
        } else {
          document.body.style.overflow = '';
          document.body.classList.remove('menu-open');
        }
      });
    }
  }

  // Enhanced menu toggle with proper accessibility
  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  // Close menu programmatically
  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
