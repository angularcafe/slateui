import { Component, inject, model } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '@slateui/theme';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapTwitterX } from '@ng-icons/bootstrap-icons'
import { tablerBlur, tablerMenu } from '@ng-icons/tabler-icons';
import { UiButton } from 'ui';

@Component({
  selector: 'docs-header',
  imports: [NgIcon, UiButton, RouterLink],
  viewProviders: [provideIcons({ bootstrapGithub, bootstrapTwitterX, tablerBlur, tablerMenu })],
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
