import { Component } from '@angular/core';
import { UiTable, UiTableHeader, UiTableBody, UiTableFooter, UiTableRow, UiTableHead, UiTableCell, UiTableCaption } from 'ui';
import { UiBadge, UiButton } from 'ui';
import { IVariant, IComponentMeta } from '@components/component-preview/component-preview';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowUpDown, lucideX } from '@ng-icons/lucide';

// Basic table example
@Component({
  selector: 'table-basic-example',
  standalone: true,
  host: {
    class: 'w-full'
  },
  template: `
    <div class="relative w-full overflow-x-auto">
      <table uiTable>
        <thead uiTableHeader>
          <tr uiTableRow>
            <th uiTableHead>Name</th>
            <th uiTableHead>Email</th>
            <th uiTableHead>Role</th>
          </tr>
        </thead>
        <tbody uiTableBody>
          <tr uiTableRow>
            <td uiTableCell>John Doe</td>
            <td uiTableCell>john@example.com</td>
            <td uiTableCell>Admin</td>
          </tr>
          <tr uiTableRow>
            <td uiTableCell>Jane Smith</td>
            <td uiTableCell>jane@example.com</td>
            <td uiTableCell>User</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  imports: [UiTable, UiTableHeader, UiTableBody, UiTableRow, UiTableHead, UiTableCell],
})
export class TableBasicExample {}

// Table with footer example
@Component({
  selector: 'table-with-footer-example',
  standalone: true,
  host: {
    class: 'w-full'
  },
  template: `
    <div class="relative w-full overflow-x-auto">
      <table uiTable>
        <thead uiTableHeader>
          <tr uiTableRow>
            <th uiTableHead>Product</th>
            <th uiTableHead>Price</th>
            <th uiTableHead>Quantity</th>
            <th uiTableHead>Total</th>
          </tr>
        </thead>
        <tbody uiTableBody>
          <tr uiTableRow>
            <td uiTableCell>Laptop</td>
            <td uiTableCell>$999</td>
            <td uiTableCell>2</td>
            <td uiTableCell>$1,998</td>
          </tr>
          <tr uiTableRow>
            <td uiTableCell>Mouse</td>
            <td uiTableCell>$25</td>
            <td uiTableCell>3</td>
            <td uiTableCell>$75</td>
          </tr>
        </tbody>
        <tfoot uiTableFooter>
          <tr uiTableRow>
            <td uiTableCell colSpan="3" class="text-right font-medium">Total</td>
            <td uiTableCell class="font-medium">$2,073</td>
          </tr>
        </tfoot>
      </table>
    </div>
  `,
  imports: [UiTable, UiTableHeader, UiTableBody, UiTableFooter, UiTableRow, UiTableHead, UiTableCell]
})
export class TableWithFooterExample {}

// Table with caption example
@Component({
  selector: 'table-with-caption-example',
  standalone: true,
  host: {
    class: 'w-full'
  },
  template: `
    <div class="relative w-full overflow-x-auto">
      <table uiTable>
        <caption uiTableCaption>A list of your recent invoices.</caption>
        <thead uiTableHeader>
          <tr uiTableRow>
            <th uiTableHead>Invoice</th>
            <th uiTableHead>Status</th>
            <th uiTableHead>Method</th>
            <th uiTableHead>Amount</th>
          </tr>
        </thead>
        <tbody uiTableBody>
          <tr uiTableRow>
            <td uiTableCell>INV001</td>
            <td uiTableCell>Paid</td>
            <td uiTableCell>Credit Card</td>
            <td uiTableCell>$250.00</td>
          </tr>
          <tr uiTableRow>
            <td uiTableCell>INV002</td>
            <td uiTableCell>Pending</td>
            <td uiTableCell>PayPal</td>
            <td uiTableCell>$150.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  imports: [UiTable, UiTableHeader, UiTableBody, UiTableRow, UiTableHead, UiTableCell, UiTableCaption]
})
export class TableWithCaptionExample {}

// Table with actions example
@Component({
  selector: 'table-with-actions-example',
  standalone: true,
  host: {
    class: 'w-full'
  },
  template: `
    <div class="relative w-full overflow-x-auto">
      <table uiTable>
        <thead uiTableHeader>
          <tr uiTableRow>
            <th uiTableHead>User</th>
            <th uiTableHead>Email</th>
            <th uiTableHead>Status</th>
            <th uiTableHead class="w-[50px]"></th>
          </tr>
        </thead>
        <tbody uiTableBody>
          <tr uiTableRow>
            <td uiTableCell>
              <div class="flex items-center gap-3">
                <div>
                  <div class="font-medium">John Doe</div>
                  <div class="text-sm text-muted-foreground">@johndoe</div>
                </div>
              </div>
            </td>
            <td uiTableCell>john@example.com</td>
            <td uiTableCell>
              <div uiBadge variant="default">Active</div>
            </td>
            <td uiTableCell>
              <button uiButton variant="ghost" size="icon">
                <ng-icon name="lucideX" size="16" />
              </button>
            </td>
          </tr>
          <tr uiTableRow>
            <td uiTableCell>
              <div class="flex items-center gap-3">
                <div>
                  <div class="font-medium">Jane Smith</div>
                  <div class="text-sm text-muted-foreground">@janesmith</div>
                </div>
              </div>
            </td>
            <td uiTableCell>jane@example.com</td>
            <td uiTableCell>
              <div uiBadge variant="secondary">Pending</div>
            </td>
            <td uiTableCell>
              <button uiButton variant="ghost" size="icon">
                <ng-icon name="lucideX" size="16" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  imports: [UiTable, UiTableHeader, UiTableBody, UiTableRow, UiTableHead, UiTableCell, NgIcon, UiBadge, UiButton],
  providers: [provideIcons({ lucideX })]
})
export class TableWithActionsExample {}

export const tableMeta: IComponentMeta = {
  title: 'Table',
  description: 'A responsive table component for displaying tabular data with proper styling and accessibility.',
  installation: {
    package: 'table',
    import: `import { UiTable, UiTableHeader, UiTableBody, UiTableFooter, UiTableRow, UiTableHead, UiTableCell, UiTableCaption } from '@workspace/ui/directives/table';`,
    usage: `
<div class="relative w-full overflow-x-auto">
  <table uiTable>
    <thead uiTableHeader>
      <tr uiTableRow>
        <th uiTableHead>Name</th>
        <th uiTableHead>Email</th>
      </tr>
    </thead>
    <tbody uiTableBody>
      <tr uiTableRow>
        <td uiTableCell>John Doe</td>
        <td uiTableCell>john@example.com</td>
      </tr>
    </tbody>
  </table>
</div>`
  },
  api: {
    props: [
      {
        name: 'uiTable',
        type: 'Directive',
        description: 'Main table container directive with responsive styling.'
      },
      {
        name: 'uiTableHeader',
        type: 'Directive',
        description: 'Table header section with border styling.'
      },
      {
        name: 'uiTableBody',
        type: 'Directive',
        description: 'Table body section with proper row border handling.'
      },
      {
        name: 'uiTableFooter',
        type: 'Directive',
        description: 'Table footer section with muted background and border.'
      },
      {
        name: 'uiTableRow',
        type: 'Directive',
        description: 'Table row with hover effects and selection states.'
      },
      {
        name: 'uiTableHead',
        type: 'Directive',
        description: 'Header cell with proper alignment and checkbox support.'
      },
      {
        name: 'uiTableCell',
        type: 'Directive',
        description: 'Data cell with padding and checkbox alignment.'
      },
      {
        name: 'uiTableCaption',
        type: 'Directive',
        description: 'Table caption with muted text styling.'
      },
      {
        name: 'class',
        type: 'string',
        description: 'Additional CSS classes to apply to the table elements.'
      }
    ]
  }
};

export const tableVariants: IVariant[] = [
  {
    title: 'Basic Table',
    description: 'A simple table with basic data display.',
    code: `import { UiTable, UiTableHeader, UiTableBody, UiTableRow, UiTableHead, UiTableCell } from '@workspace/ui/directives/table';

@Component({
  selector: 'table-basic-example',
  standalone: true,
  template: \`
    <div class="relative w-full overflow-x-auto">
      <table uiTable>
        <thead uiTableHeader>
          <tr uiTableRow>
            <th uiTableHead>Name</th>
            <th uiTableHead>Email</th>
            <th uiTableHead>Role</th>
          </tr>
        </thead>
        <tbody uiTableBody>
          <tr uiTableRow>
            <td uiTableCell>John Doe</td>
            <td uiTableCell>john@example.com</td>
            <td uiTableCell>Admin</td>
          </tr>
          <tr uiTableRow>
            <td uiTableCell>Jane Smith</td>
            <td uiTableCell>jane@example.com</td>
            <td uiTableCell>User</td>
          </tr>
        </tbody>
      </table>
    </div>
  \`,
  imports: [UiTable, UiTableHeader, UiTableBody, UiTableRow, UiTableHead, UiTableCell]
})
export class TableBasicExample {}`,
    component: TableBasicExample
  },
  {
    title: 'Table with Footer',
    description: 'A table with a footer section for totals or summaries.',
    code: `import { UiTable, UiTableHeader, UiTableBody, UiTableFooter, UiTableRow, UiTableHead, UiTableCell } from '@workspace/ui/directives/table';

@Component({
  selector: 'table-with-footer-example',
  standalone: true,
  template: \`
    <div class="relative w-full overflow-x-auto">
      <table uiTable>
        <thead uiTableHeader>
          <tr uiTableRow>
            <th uiTableHead>Product</th>
            <th uiTableHead>Price</th>
            <th uiTableHead>Quantity</th>
            <th uiTableHead>Total</th>
          </tr>
        </thead>
        <tbody uiTableBody>
          <tr uiTableRow>
            <td uiTableCell>Laptop</td>
            <td uiTableCell>$999</td>
            <td uiTableCell>2</td>
            <td uiTableCell>$1,998</td>
          </tr>
        </tbody>
        <tfoot uiTableFooter>
          <tr uiTableRow>
            <td uiTableCell colSpan="3" class="text-right font-medium">Total</td>
            <td uiTableCell class="font-medium">$1,998</td>
          </tr>
        </tfoot>
      </table>
    </div>
  \`,
  imports: [UiTable, UiTableHeader, UiTableBody, UiTableFooter, UiTableRow, UiTableHead, UiTableCell]
})
export class TableWithFooterExample {}`,
    component: TableWithFooterExample
  },
  {
    title: 'Table with Caption',
    description: 'A table with a descriptive caption.',
    code: `import { UiTable, UiTableHeader, UiTableBody, UiTableRow, UiTableHead, UiTableCell, UiTableCaption } from '@workspace/ui/directives/table';

@Component({
  selector: 'table-with-caption-example',
  standalone: true,
  template: \`
    <div class="relative w-full overflow-x-auto">
      <table uiTable>
        <caption uiTableCaption>A list of your recent invoices.</caption>
        <thead uiTableHeader>
          <tr uiTableRow>
            <th uiTableHead>Invoice</th>
            <th uiTableHead>Status</th>
            <th uiTableHead>Method</th>
            <th uiTableHead>Amount</th>
          </tr>
        </thead>
        <tbody uiTableBody>
          <tr uiTableRow>
            <td uiTableCell>INV001</td>
            <td uiTableCell>Paid</td>
            <td uiTableCell>Credit Card</td>
            <td uiTableCell>$250.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  \`,
  imports: [UiTable, UiTableHeader, UiTableBody, UiTableRow, UiTableHead, UiTableCell, UiTableCaption]
})
export class TableWithCaptionExample {}`,
    component: TableWithCaptionExample
  },
  {
    title: 'Table with Actions',
    description: 'A table with user avatars, status badges, and action buttons.',
    code: `import { UiTable, UiTableHeader, UiTableBody, UiTableRow, UiTableHead, UiTableCell } from '@workspace/ui/directives/table';
import { UiBadge } from '@workspace/ui/directives/badge';
import { UiButton } from '@workspace/ui/directives/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';

@Component({
  selector: 'table-with-actions-example',
  standalone: true,
  template: \`
    <div class="relative w-full overflow-x-auto">
      <table uiTable>
        <thead uiTableHeader>
          <tr uiTableRow>
            <th uiTableHead>User</th>
            <th uiTableHead>Email</th>
            <th uiTableHead>Status</th>
            <th uiTableHead class="w-[50px]"></th>
          </tr>
        </thead>
        <tbody uiTableBody>
          <tr uiTableRow>
            <td uiTableCell>
              <div class="flex items-center gap-3">
                <div>
                  <div class="font-medium">John Doe</div>
                  <div class="text-sm text-muted-foreground">@johndoe</div>
                </div>
              </div>
            </td>
            <td uiTableCell>john@example.com</td>
            <td uiTableCell>
              <div uiBadge variant="default">Active</div>
            </td>
            <td uiTableCell>
              <button uiButton variant="ghost" size="icon">
                <ng-icon name="lucideX" size="16" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  \`,
  imports: [UiTable, UiTableHeader, UiTableBody, UiTableRow, UiTableHead, UiTableCell, NgIcon, UiBadge, UiButton],
  providers: [provideIcons({ lucideX })]
})
export class TableWithActionsExample {}`,
    component: TableWithActionsExample
  }
];
