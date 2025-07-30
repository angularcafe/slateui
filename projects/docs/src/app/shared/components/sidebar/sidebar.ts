import { NgTemplateOutlet } from '@angular/common';
import { Component, model } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBook, lucideExternalLink, lucideGithub, lucideInfo, lucideMessageCircle, lucidePalette, lucideRocket, lucideTerminal, lucideX } from '@ng-icons/lucide';

@Component({
  selector: 'docs-sidebar',
  imports: [RouterLink, NgIcon, NgTemplateOutlet, RouterLinkActive],
  viewProviders: [provideIcons({ lucideInfo, lucideBook, lucideRocket, lucidePalette, lucideTerminal, lucideGithub, lucideExternalLink, lucideMessageCircle, lucideX })],
  templateUrl: './sidebar.html',
  host: {
    class: 'md:pe-12',
  }
})
export class Sidebar {
  sections: NavSection[] = [
    {
      title: 'Getting Started',
      link: '',
      links: [
        { name: 'Introduction', icon: 'lucideBook', path: 'introduction' },
        { name: 'Installation', icon: 'lucideRocket', path: 'installation' },
        { name: 'Theming', icon: 'lucidePalette', path: 'theming' },
        { name: 'Schematics', icon: 'lucideTerminal', path: 'schematics' }
      ]
    },
    {
      title: 'Components',
      link: 'components',
      links: [
        { name: 'Accordion', path: 'accordion' },
        { name: 'Alert', path: 'alert' },
        { name: 'Tabs', path: 'tabs' },
        { name: 'Avatar', path: 'avatar' },
        { name: 'Badge', path: 'badge' },
        { name: 'Button', path: 'button' },
        { name: 'Dialog', path: 'dialog' },
        { name: 'Dropdown Menu', path: 'dropdown-menu' },
        { name: 'Popver', path: 'popover' },
        { name: 'Tooltip', path: 'tooltip' },
        { name: 'Card', path: 'card' },
        { name: 'Toast', path: 'toast' },
        { name: 'Separator', path: 'separator' },
        { name: 'Input', path: 'input' },
        { name: 'Checkbox', path: 'checkbox' },
        { name: 'Progress', path: 'progress' },
      ]
    }
  ];

  readonly menuOpen = model(false);

  ngOnInit() {
    const componentsSection = this.sections.find((section: any) => section.title === 'Components');
    if (componentsSection) {
      componentsSection.links.sort((a: NavLink, b: NavLink) => a.name.localeCompare(b.name));
    }
  }

}

interface NavLink {
  name: string;
  icon?: string;
  path: string;
}

interface NavSection {
  title: string;
  link?: string;
  links: NavLink[];
}
