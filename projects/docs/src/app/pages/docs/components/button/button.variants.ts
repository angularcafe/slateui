import { Button } from 'ui';

export const buttonVariants = [
    {
        title: 'Default',
        code: `<button button>Button</button>`,
        imports: [Button]
    },
    {
        title: 'Outline',
        code: `<button button variant="outline">Outline</button>`,
        imports: [Button]
    },
    {
        title: 'Destructive',
        code: `<button button variant="destructive">Delete</button>`,
        imports: [Button]
    },
];