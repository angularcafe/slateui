import { afterNextRender, ChangeDetectorRef, Component, effect, inject, Injector, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'docs-quick-links',
  imports: [],
  templateUrl: './quick-links.html',
  host: {
    class: 'hidden xl:block',
  },
})
export class QuickLinks {
  private readonly router = inject(Router);
  private readonly injector = inject(Injector);
  private readonly changeDetector = inject(ChangeDetectorRef);
  private readonly platform = inject(PLATFORM_ID);
  
  protected links = signal<HeadingLink[]>([]);
  protected readingProgress = signal<number>(0);

  constructor() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        afterNextRender(
          () => {
            this.links.set(getHeadingList());
            this.updateReadingProgress();
            this.changeDetector.detectChanges();
          },
          { injector: this.injector },
        );
      });

    // Setup reading progress tracking
    if (isPlatformBrowser(this.platform)) {
      fromEvent(window, 'scroll')
        .pipe(takeUntilDestroyed())
        .subscribe(() => this.updateReadingProgress());

      // Update progress when links change
      effect(() => {
        if (this.links().length > 0) {
          this.updateReadingProgress();
        }
      });
    }
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop - 80; // Account for header
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  private updateReadingProgress(): void {
    if (!isPlatformBrowser(this.platform)) return;

    const content = document.querySelector('[data-page-content]');
    if (!content) return;

    const scrollTop = window.scrollY;
    const docHeight = content.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = scrollTop / (docHeight - winHeight);
    const progress = Math.min(100, Math.max(0, scrollPercent * 100));
    
    this.readingProgress.set(Math.round(progress));
    
    // Update DOM elements directly for smooth animation
    const progressElement = document.getElementById('reading-progress');
    const progressBar = document.getElementById('progress-bar');
    
    if (progressElement) {
      progressElement.textContent = `${Math.round(progress)}%`;
    }
    
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
  }
}

interface HeadingLink {
  level: number;
  id: string;
  text: string;
}

function getHeadingList(): HeadingLink[] {
  const content = document.querySelector('[data-page-content]');
  const headings = content?.querySelectorAll('h1[id], h2[id], h3[id], h4[id]');
  
  return Array.from(headings ?? [])
    .filter(heading => {
      // Include all component documentation headings
      return heading.id && heading.textContent?.trim();
    })
    .map(heading => {
      const level = parseInt(heading.tagName.substring(1));
      return {
        level,
        id: heading.id,
        text: heading.textContent?.trim() || '',
      };
    })
    .filter(link => link.text); // Remove empty text entries
}