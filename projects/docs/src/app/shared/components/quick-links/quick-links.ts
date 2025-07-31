import { afterNextRender, ChangeDetectorRef, Component, inject, Injector, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'docs-quick-links',
  imports: [],
  templateUrl: './quick-links.html',
  host: {
    class: 'hidden lg:block sticky w-64 h-[calc(100vh-8rem)] overflow-y-auto pl-10',
  },
})
export class QuickLinks {
  private readonly router = inject(Router);
  private readonly injector = inject(Injector);
  private readonly changeDetector = inject(ChangeDetectorRef);
  protected links = signal<any[]>([]);

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
            this.changeDetector.detectChanges();
          },
          { injector: this.injector },
        );
      });
  }

  scrollTo(id: string): void {
    const offset = document.getElementById(id)?.offsetTop || 0;
    window.scrollTo({
      top: offset - 60,
      behavior: 'smooth',
    });
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

function getHeadingList(): any[] {
  const content = document.querySelector('[data-page-content]');
  const headings = content?.querySelectorAll('h2[id]');
  
  // Only include main section headings
  const allowedIds = ['keyFeatures', 'community', 'support', 'acknowledgements'];

  return Array.from(headings ?? [])
    .filter(heading => allowedIds.includes(heading.id))
    .map(heading => {
      return {
        level: 2,
        id: heading.id,
        text: heading.textContent,
      } as any;
    });
}