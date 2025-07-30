import { Alert, AlertDescription, AlertTitle } from 'ui';

export const alertVariants = [
    {
        title: 'Default',
        code: `<div alert>
                    <div alertTitle>Heads up!</div>
                    <div alertDescription>
                        You can add components to your app using the cli.
                    </div>
                </div>`,
        imports: [Alert, AlertTitle, AlertDescription]
    }
];