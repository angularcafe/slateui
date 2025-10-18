import { Injectable, inject, effect } from '@angular/core';
import { HighlightLoader } from 'ngx-highlightjs';
import { ThemeService } from '@slateui/theme';

export interface HighlightTheme {
  name: string;
  path: string;
  type: 'light' | 'dark';
}

@Injectable({
  providedIn: 'root',
})
export class HighlightThemeService {
  private hljsLoader = inject(HighlightLoader);
  private themeService = inject(ThemeService);
  readonly availableThemes: HighlightTheme[] = [
    {
      name: 'GitHub Light',
      path: 'assets/styles/highlight-themes/github.css',
      type: 'light',
    },
    {
      name: 'GitHub Dark',
      path: 'assets/styles/highlight-themes/github-dark.css',
      type: 'dark',
    },
  ];

  constructor() {
    this.setInitialTheme();

    // Watch theme changes and update highlight.js theme accordingly
    effect(() => {
      const currentTheme = this.themeService.resolvedTheme();
      this.updateHighlightTheme(currentTheme);
    });
  }

  /**
   * Set the initial theme on service initialization
   */
  private setInitialTheme(): void {
    const currentAppTheme = this.themeService.isDark() ? 'dark' : 'light';
    this.updateHighlightTheme(currentAppTheme);
  }

  /**
   * Update the highlight.js theme based on the current app theme
   * @param theme The current theme ('light' or 'dark')
   */
  private updateHighlightTheme(theme: 'light' | 'dark'): void {
    const matchingTheme = this.availableThemes.find((t) => t.type === theme);
    if (matchingTheme) {
      this.hljsLoader.setTheme(matchingTheme.path);
    }
  }

  /**
   * Get the current highlight.js theme
   * @returns The current theme object
   */
  getCurrentTheme(): HighlightTheme | undefined {
    const currentAppTheme = this.themeService.isDark() ? 'dark' : 'light';
    return this.availableThemes.find((t) => t.type === currentAppTheme);
  }
}
