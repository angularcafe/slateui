import { Component } from '@angular/core';
import { UiSheet, UiSheetDescription, UiSheetFooter, UiSheetHeader, UiSheetOverlay, UiSheetTitle, UiSheetTrigger } from 'ui';
import { UiButton } from 'ui';
import { UiInput } from 'ui';
import { UiLabel } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';

@Component({
  selector: 'sheet-default-example',
  template: `
    <button uiButton variant="outline" [uiSheetTrigger]="sheet">Open</button>
    <ng-template #sheet let-close="close">
        <div uiSheetOverlay>
            <div uiSheet>
                <div uiSheetHeader>
                    <h1 uiSheetTitle>Edit profile</h1>
                    <p uiSheetDescription>Make changes to your profile here. Click save when you're done.</p>
                    <button uiButton variant="ghost" size="sm" (click)="close()" class="absolute top-4 right-4">
                        <ng-icon name="lucideX" size="18px"></ng-icon>
                    </button>
                </div>
                <div class="grid flex-1 auto-rows-min gap-6 px-4">
                    <div class="grid gap-3">
                        <label uiLabel for="sheet-demo-name">Name</label>
                        <input uiInput id="sheet-demo-name" value="Pedro Duarte" />
                    </div>
                    <div class="grid gap-3">
                        <label uiLabel for="sheet-demo-username">Username</label>
                        <input uiInput id="sheet-demo-username" value="@peduarte" />
                    </div>
                </div>
                <div uiSheetFooter>
                    <button (click)="close()" uiButton>Save changes</button>
                    <button (click)="close()" uiButton variant="outline">Close</button>
                </div>
            </div>
        </div>
    </ng-template>
  `,
  providers: [provideIcons({ lucideX })],
  imports: [UiSheet, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetTrigger, UiSheetOverlay, UiButton, UiInput, UiLabel, NgIcon]
})
export class SheetDefaultExample {}

@Component({
  selector: 'sheet-side-right-example',
  template: `
    <button uiButton variant="outline" [uiSheetTrigger]="sheet">Right</button>
    <ng-template #sheet let-close="close">
        <div uiSheetOverlay>
            <div uiSheet side="right">
                <div uiSheetHeader>
                    <h1 uiSheetTitle>Right Side Sheet</h1>
                    <p uiSheetDescription>This sheet slides in from the right side of the screen.</p>
                </div>
                <div class="px-4 py-6">
                    <p class="text-sm text-muted-foreground">Content goes here...</p>
                </div>
                <div uiSheetFooter>
                    <button (click)="close()" uiButton>Close</button>
                </div>
            </div>
        </div>
    </ng-template>
  `,
  imports: [UiSheet, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetTrigger, UiSheetOverlay, UiButton]
})
export class SheetSideRightExample {}

@Component({
  selector: 'sheet-side-left-example',
  template: `
    <button uiButton variant="outline" [uiSheetTrigger]="sheet">Left</button>
    <ng-template #sheet let-close="close">
        <div uiSheetOverlay>
            <div uiSheet side="left">
                <div uiSheetHeader>
                    <h1 uiSheetTitle>Left Side Sheet</h1>
                    <p uiSheetDescription>This sheet slides in from the left side of the screen.</p>
                </div>
                <div class="px-4 py-6">
                    <p class="text-sm text-muted-foreground">Content goes here...</p>
                </div>
                <div uiSheetFooter>
                    <button (click)="close()" uiButton>Close</button>
                </div>
            </div>
        </div>
    </ng-template>
  `,
  imports: [UiSheet, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetTrigger, UiSheetOverlay, UiButton]
})
export class SheetSideLeftExample {}

@Component({
  selector: 'sheet-side-top-example',
  template: `
    <button uiButton variant="outline" [uiSheetTrigger]="sheet">Top</button>
    <ng-template #sheet let-close="close">
        <div uiSheetOverlay>
            <div uiSheet side="top">
                <div uiSheetHeader>
                    <h1 uiSheetTitle>Top Side Sheet</h1>
                    <p uiSheetDescription>This sheet slides in from the top of the screen.</p>
                </div>
                <div class="px-4 py-6">
                    <p class="text-sm text-muted-foreground">Content goes here...</p>
                </div>
                <div uiSheetFooter>
                    <button (click)="close()" uiButton>Close</button>
                </div>
            </div>
        </div>
    </ng-template>
  `,
  imports: [UiSheet, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetTrigger, UiSheetOverlay, UiButton]
})
export class SheetSideTopExample {}

@Component({
  selector: 'sheet-side-bottom-example',
  template: `
    <button uiButton variant="outline" [uiSheetTrigger]="sheet">Bottom</button>
    <ng-template #sheet let-close="close">
        <div uiSheetOverlay>
            <div uiSheet side="bottom">
                <div uiSheetHeader>
                    <h1 uiSheetTitle>Bottom Side Sheet</h1>
                    <p uiSheetDescription>This sheet slides in from the bottom of the screen.</p>
                </div>
                <div class="px-4 py-6">
                    <p class="text-sm text-muted-foreground">Content goes here...</p>
                </div>
                <div uiSheetFooter>
                    <button (click)="close()" uiButton>Close</button>
                </div>
            </div>
        </div>
    </ng-template>
  `,
  imports: [UiSheet, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetTrigger, UiSheetOverlay, UiButton]
})
export class SheetSideBottomExample {}

@Component({
  selector: 'sheet-size-example',
  template: `
    <button uiButton variant="outline" [uiSheetTrigger]="sheet">Custom Size</button>
    <ng-template #sheet let-close="close">
        <div uiSheetOverlay>
            <div uiSheet side="right" class="w-[400px] sm:w-[540px]">
                <div uiSheetHeader>
                    <h1 uiSheetTitle>Custom Size Sheet</h1>
                    <p uiSheetDescription>You can adjust the size of the sheet using CSS classes.</p>
                </div>
                <div class="px-4 py-6">
                    <p class="text-sm text-muted-foreground">This sheet has custom width classes applied.</p>
                </div>
                <div uiSheetFooter>
                    <button (click)="close()" uiButton>Close</button>
                </div>
            </div>
        </div>
    </ng-template>
  `,
  imports: [UiSheet, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetTrigger, UiSheetOverlay, UiButton]
})
export class SheetSizeExample {}

export const sheetMeta: IComponentMeta = {
  title: 'Sheet',
  description: 'Extends the Dialog component to display content that complements the main content of the screen.',
  installation: {
    package: 'sheet',
    import: `import { UiSheet, UiSheetTrigger, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetOverlay } from '@workspace/ui/directives/sheet';`,
    usage: `<button [uiSheetTrigger]="sheet">Open</button><ng-template #sheet let-close="close"><div uiSheetOverlay><div uiSheet>...</div></div></ng-template>`
  },
  api: {
    props: [
      { name: 'uiSheetTrigger', type: 'TemplateRef', description: 'Template ref for sheet content.' },
      { name: 'uiSheetModal', type: 'boolean', description: 'Whether the sheet is modal.' },
      { name: 'side', type: "'right' | 'left' | 'top' | 'bottom'", description: 'The edge of the screen where the sheet will appear.' },
      { name: 'class', type: 'string', description: 'Additional CSS classes.' }
    ]
  }
};

export const sheetVariants: IVariant[] = [
  {
    title: 'Default',
    description: 'Basic sheet with header, content, and footer. Slides in from the right by default.',
    code: `import { UiSheet, UiSheetTrigger, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetOverlay } from '@workspace/ui/directives/sheet';
import { UiButton } from '@workspace/ui/directives/button';
import { UiInput } from '@workspace/ui/directives/input';
import { UiLabel } from '@workspace/ui/directives/label';

@Component({
  selector: 'sheet-default-example',
  template: \`
    <button uiButton variant="outline" [uiSheetTrigger]="sheet">Open</button>
    <ng-template #sheet let-close="close">
        <div uiSheetOverlay>
            <div uiSheet>
                <div uiSheetHeader>
                    <h1 uiSheetTitle>Edit profile</h1>
                    <p uiSheetDescription>Make changes to your profile here. Click save when you're done.</p>
                </div>
                <div class="grid flex-1 auto-rows-min gap-6 px-4">
                    <div class="grid gap-3">
                        <label uiLabel for="sheet-demo-name">Name</label>
                        <input uiInput id="sheet-demo-name" value="Pedro Duarte" />
                    </div>
                    <div class="grid gap-3">
                        <label uiLabel for="sheet-demo-username">Username</label>
                        <input uiInput id="sheet-demo-username" value="@peduarte" />
                    </div>
                </div>
                <div uiSheetFooter>
                    <button (click)="close()" uiButton>Save changes</button>
                    <button (click)="close()" uiButton variant="outline">Cancel</button>
                </div>
            </div>
        </div>
    </ng-template>
  \`,
  imports: [UiSheet, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetTrigger, UiSheetOverlay, UiButton, UiInput, UiLabel]
})
export class SheetDefaultExample {}`,
    component: SheetDefaultExample
  },
  {
    title: 'Side',
    description: 'Use the side property to indicate the edge of the screen where the component will appear.',
    code: `// Right side (default)
<div uiSheet side="right">...</div>

// Left side
<div uiSheet side="left">...</div>

// Top side
<div uiSheet side="top">...</div>

// Bottom side
<div uiSheet side="bottom">...</div>`,
    component: SheetSideRightExample
  },
  {
    title: 'Left Side',
    description: 'Sheet that slides in from the left side of the screen.',
    code: `import { UiSheet, UiSheetTrigger, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetOverlay } from '@workspace/ui/directives/sheet';
import { UiButton } from '@workspace/ui/directives/button';

@Component({
  selector: 'sheet-side-left-example',
  template: \`
    <button uiButton variant="outline" [uiSheetTrigger]="sheet">Left</button>
    <ng-template #sheet let-close="close">
        <div uiSheetOverlay>
            <div uiSheet side="left">
                <div uiSheetHeader>
                    <h1 uiSheetTitle>Left Side Sheet</h1>
                    <p uiSheetDescription>This sheet slides in from the left side of the screen.</p>
                </div>
                <div class="px-4 py-6">
                    <p class="text-sm text-muted-foreground">Content goes here...</p>
                </div>
                <div uiSheetFooter>
                    <button (click)="close()" uiButton>Close</button>
                </div>
            </div>
        </div>
    </ng-template>
  \`,
  imports: [UiSheet, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetTrigger, UiSheetOverlay, UiButton]
})
export class SheetSideLeftExample {}`,
    component: SheetSideLeftExample
  },
  {
    title: 'Top Side',
    description: 'Sheet that slides in from the top of the screen.',
    code: `import { UiSheet, UiSheetTrigger, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetOverlay } from '@workspace/ui/directives/sheet';
import { UiButton } from '@workspace/ui/directives/button';

@Component({
  selector: 'sheet-side-top-example',
  template: \`
    <button uiButton variant="outline" [uiSheetTrigger]="sheet">Top</button>
    <ng-template #sheet let-close="close">
        <div uiSheetOverlay>
            <div uiSheet side="top">
                <div uiSheetHeader>
                    <h1 uiSheetTitle>Top Side Sheet</h1>
                    <p uiSheetDescription>This sheet slides in from the top of the screen.</p>
                </div>
                <div class="px-4 py-6">
                    <p class="text-sm text-muted-foreground">Content goes here...</p>
                </div>
                <div uiSheetFooter>
                    <button (click)="close()" uiButton>Close</button>
                </div>
            </div>
        </div>
    </ng-template>
  \`,
  imports: [UiSheet, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetTrigger, UiSheetOverlay, UiButton]
})
export class SheetSideTopExample {}`,
    component: SheetSideTopExample
  },
  {
    title: 'Bottom Side',
    description: 'Sheet that slides in from the bottom of the screen.',
    code: `import { UiSheet, UiSheetTrigger, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetOverlay } from '@workspace/ui/directives/sheet';
import { UiButton } from '@workspace/ui/directives/button';

@Component({
  selector: 'sheet-side-bottom-example',
  template: \`
    <button uiButton variant="outline" [uiSheetTrigger]="sheet">Bottom</button>
    <ng-template #sheet let-close="close">
        <div uiSheetOverlay>
            <div uiSheet side="bottom">
                <div uiSheetHeader>
                    <h1 uiSheetTitle>Bottom Side Sheet</h1>
                    <p uiSheetDescription>This sheet slides in from the bottom of the screen.</p>
                </div>
                <div class="px-4 py-6">
                    <p class="text-sm text-muted-foreground">Content goes here...</p>
                </div>
                <div uiSheetFooter>
                    <button (click)="close()" uiButton>Close</button>
                </div>
            </div>
        </div>
    </ng-template>
  \`,
  imports: [UiSheet, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetTrigger, UiSheetOverlay, UiButton]
})
export class SheetSideBottomExample {}`,
    component: SheetSideBottomExample
  },
  {
    title: 'Size',
    description: 'You can adjust the size of the sheet using CSS classes.',
    code: `import { UiSheet, UiSheetTrigger, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetOverlay } from '@workspace/ui/directives/sheet';
import { UiButton } from '@workspace/ui/directives/button';

@Component({
  selector: 'sheet-size-example',
  template: \`
    <button uiButton variant="outline" [uiSheetTrigger]="sheet">Custom Size</button>
    <ng-template #sheet let-close="close">
        <div uiSheetOverlay>
            <div uiSheet side="right" class="w-[400px] sm:w-[540px]">
                <div uiSheetHeader>
                    <h1 uiSheetTitle>Custom Size Sheet</h1>
                    <p uiSheetDescription>You can adjust the size of the sheet using CSS classes.</p>
                </div>
                <div class="px-4 py-6">
                    <p class="text-sm text-muted-foreground">This sheet has custom width classes applied.</p>
                </div>
                <div uiSheetFooter>
                    <button (click)="close()" uiButton>Close</button>
                </div>
            </div>
        </div>
    </ng-template>
  \`,
  imports: [UiSheet, UiSheetHeader, UiSheetTitle, UiSheetDescription, UiSheetFooter, UiSheetTrigger, UiSheetOverlay, UiButton]
})
export class SheetSizeExample {}`,
    component: SheetSizeExample
  }
];
