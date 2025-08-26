import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export type BaseColor = 'neutral' | 'slate' | 'zinc' | 'stone' | 'gray';

export interface BaseColorValidationOptions {
  baseColor: BaseColor;
}

const VALID_BASE_COLORS: BaseColor[] = ['neutral', 'slate', 'zinc', 'stone', 'gray'];

export function validateBaseColor(options: BaseColorValidationOptions): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const { baseColor } = options;
    
    // Validate base color is valid
    if (!VALID_BASE_COLORS.includes(baseColor)) {
      context.logger.error(`Invalid base color: "${baseColor}"`);
      throw new Error(`Invalid base color: "${baseColor}"`);
    }
    
    return tree;
  };
} 