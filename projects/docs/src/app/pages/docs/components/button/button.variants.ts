import { UiButton } from 'ui';

export const buttonVariants = [
    {
        title: 'Default',
        code: `<button button>Button</button>`,
        imports: [UiButton]
    },
    {
        title: 'Outline',
        code: `<button button variant="outline">Outline</button>`,
        imports: [UiButton]
    },
    {
        title: 'Destructive',
        code: `<button button variant="destructive">Delete</button>`,
        imports: [UiButton]
    },
];