import { Component, effect, inject, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Sidebar } from "@components/sidebar/sidebar";
import { Header } from "@components/header/header";
import { filter } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { QuickLinks } from '@components/quick-links/quick-links';
import { Footer } from "@components/footer/footer";

@Component({
  selector: 'docs-docs',
  imports: [RouterOutlet, Sidebar, Header, QuickLinks, Footer],
  templateUrl: './docs.html'
})
export class Docs {

  private readonly router = inject(Router);
  private readonly platform = inject(PLATFORM_ID);
  readonly year = new Date().getFullYear();

  readonly menuOpen = signal(false);

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.menuOpen.set(false));

    if (isPlatformBrowser(this.platform)) {
      effect(() => {
        // if the menu is open prevent scrolling on the body
        if (this.menuOpen()) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      });
    }
  }

}
