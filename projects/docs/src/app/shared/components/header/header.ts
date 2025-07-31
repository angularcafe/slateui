import { Component, inject, model } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '@angularui/theme';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideMenu, lucideSearch, lucideSun, lucideTwitter, lucideMoon } from '@ng-icons/lucide';
import { UiButton } from 'ui';
@Component({
  selector: 'docs-header',
  imports: [NgIcon, UiButton, RouterLink],
  viewProviders: [provideIcons({ lucideGithub, lucideTwitter, lucideMenu, lucideSun, lucideSearch, lucideMoon })],
  templateUrl: './header.html'
})
export class Header {
  themeService = inject(ThemeService);
  /**
   * Whether the mobile menu is open.
   */
  readonly menuOpen = model(false);

  toggle(): void {
    this.menuOpen.update(open => !open);
  }

  toggleTheme() {
    this.themeService.setTheme(
      this.themeService.isDark() ? 'light' : 'dark'
    );
  }
}
