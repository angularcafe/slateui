import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightThemeService } from './shared/services/highlight-theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html'
})
export class App {
  // Inject the service to ensure it's initialized
  private highlightThemeService = inject(HighlightThemeService);
}
