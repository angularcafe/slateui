import { computed, Directive, input } from '@angular/core';
import { tv } from 'tailwind-variants';

const tableVariants = tv({
  slots: {
    table: 'w-full caption-bottom text-sm',
    tableHeader: '[&_tr]:border-b',
    tableBody: '[&_tr:last-child]:border-0',
    tableFooter: 'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0',
    tableRow:
      'border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50',
    tableHead:
      'text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
    tableCell:
      'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
    tableCaption: 'text-muted-foreground mt-4 text-sm',
  },
});

const {
  table,
  tableHeader,
  tableBody,
  tableFooter,
  tableRow,
  tableHead,
  tableCell,
  tableCaption,
} = tableVariants();

@Directive({
  selector: '[uiTable]',
  exportAs: 'uiTable',
  host: {
    '[class]': 'computedClass()',
  },
})
export class UiTable {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => table({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiTableHeader]',
  exportAs: 'uiTableHeader',
  host: {
    '[class]': 'computedClass()',
  },
})
export class UiTableHeader {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => tableHeader({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiTableBody]',
  exportAs: 'uiTableBody',
  host: {
    '[class]': 'computedClass()',
  },
})
export class UiTableBody {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => tableBody({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiTableFooter]',
  exportAs: 'uiTableFooter',
  host: {
    '[class]': 'computedClass()',
  },
})
export class UiTableFooter {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => tableFooter({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiTableRow]',
  exportAs: 'uiTableRow',
  host: {
    '[class]': 'computedClass()',
  },
})
export class UiTableRow {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => tableRow({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiTableHead]',
  exportAs: 'uiTableHead',
  host: {
    '[class]': 'computedClass()',
  },
})
export class UiTableHead {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => tableHead({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiTableCell]',
  exportAs: 'uiTableCell',
  host: {
    '[class]': 'computedClass()',
  },
})
export class UiTableCell {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => tableCell({ class: this.inputClass() }));
}

@Directive({
  selector: '[uiTableCaption]',
  exportAs: 'uiTableCaption',
  host: {
    '[class]': 'computedClass()',
  },
})
export class UiTableCaption {
  inputClass = input<string>('', { alias: 'class' });
  computedClass = computed(() => tableCaption({ class: this.inputClass() }));
}
