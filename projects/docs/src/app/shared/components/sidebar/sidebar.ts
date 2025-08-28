import { NgTemplateOutlet } from '@angular/common';
import { Component, model, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { UiButton } from 'ui';

interface NavLink {
  name: string;
  path: string;
}

interface NavSection {
  title: string;
  link?: string;
  links: NavLink[];
}

// Angular 20 standalone component with enhanced navigation
@Component({
  selector: 'docs-sidebar',
  standalone: true,
  imports: [RouterLink, NgIcon, NgTemplateOutlet, RouterLinkActive, UiButton],
  viewProviders: [provideIcons({ lucideX })],
  templateUrl: './sidebar.html'
})
export class Sidebar {
  // Two-way binding model signal for menu state
  readonly menuOpen = model(false);
  
  // Clean navigation structure
  readonly sections = signal<NavSection[]>([
    {
      title: 'Getting Started',
      links: [
        { name: 'Introduction', path: 'introduction' },
        { name: 'Installation', path: 'installation' },
        { name: 'Theming', path: 'theming' },
        { name: 'Dark Mode', path: 'dark-mode' },
        { name: 'CLI', path: 'cli' }
      ]
    },
    {
      title: 'Components',
      link: 'components',
      links: [
        { name: 'Accordion', path: 'accordion' },
        { name: 'Alert', path: 'alert' },
        { name: 'Alert Dialog', path: 'alert-dialog' },
        { name: 'Avatar', path: 'avatar' },
        { name: 'Badge', path: 'badge' },
        { name: 'Button', path: 'button' },
        { name: 'Breadcrumb', path: 'breadcrumb' },
        { name: 'Card', path: 'card' },
        // { name: 'Checkbox', path: 'checkbox' },
        { name: 'Dialog', path: 'dialog' },
        { name: 'Dropdown Menu', path: 'dropdown-menu' },
        //         { name: 'Label', path: 'label' },
        { name: 'Input', path: 'input' },
        { name: 'Popover', path: 'popover' },
        { name: 'Progress', path: 'progress' },
        // { name: 'Select', path: 'select' },
        { name: 'Separator', path: 'separator' },
        // { name: 'Switch', path: 'switch' },
        { name: 'Tabs', path: 'tabs' },
        // { name: 'Toast', path: 'toast' },
        { name: 'Tooltip', path: 'tooltip' },
        { name: 'Table', path: 'table' }
      ]
    }
  ]);

  // Close menu method for better UX
  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
