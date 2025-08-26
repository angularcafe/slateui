import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { validateProject, validateBaseColor, installDependencies, setupTailwind, setupImportAliases } from './rules';

export function init(options: Schema): Rule {
  return chain([
    (tree: Tree, context: SchematicContext) => {
      const baseColor = options.baseColor || 'neutral';
      const project = options.project;
      
      // Log the user selections
      context.logger.info('SlateUI Initialization Started');
      context.logger.info(`Project: ${project || '(default)'}`);
      context.logger.info(`Base Color: ${baseColor}`);
      
      return tree;
    },
    validateProject({ project: options.project }),
    validateBaseColor({ baseColor: options.baseColor || 'neutral' }),
    installDependencies(),
    setupTailwind({ 
      project: options.project, 
      baseColor: options.baseColor || 'neutral',
      confirmOverwrite: options.confirmOverwrite
    }),
    setupImportAliases(),
  ]);
}