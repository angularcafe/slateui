import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function installDependencies(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask({
      packageName: '@angular/cdk @floating-ui/dom ng-primitives tailwind-variants tailwind-merge tailwindcss @tailwindcss/postcss postcss'
    }));
    
    return tree;
  };
} 