import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function setupImportAliases(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    try {
      const tsConfigPath = 'tsconfig.json';

      if (!tree.exists(tsConfigPath)) {
        context.logger.warn(
          'tsconfig.json not found, skipping import alias setup',
        );
        return tree;
      }

      const tsConfigContent = tree.read(tsConfigPath)?.toString() || '';

      // Check if the import alias already exists
      if (tsConfigContent.includes('@workspace/ui/*')) {
        context.logger.info(
          'Import alias @workspace/ui/* already exists, skipping',
        );
        return tree;
      }

      // Find the paths section and add our alias
      let updatedContent = tsConfigContent;

      // Check if paths section exists
      if (tsConfigContent.includes('"paths"')) {
        // Find the paths section and add our alias
        const pathsRegex = /("paths"\s*:\s*\{)([^}]*)(\})/;
        const match = tsConfigContent.match(pathsRegex);

        if (match) {
          const beforePaths = match[1];
          const pathsContent = match[2];
          const afterPaths = match[3];

          // Add our alias to the existing paths
          const newPathsContent =
            pathsContent.trim() +
            (pathsContent.trim().endsWith(',') ? '' : ',') +
            '\n      "@workspace/ui/*": ["./ui/*"]';

          updatedContent = tsConfigContent.replace(
            pathsRegex,
            beforePaths + newPathsContent + afterPaths,
          );
        }
      } else {
        // If no paths section exists, add it to compilerOptions
        const compilerOptionsRegex = /("compilerOptions"\s*:\s*\{)([^}]*)(\})/;
        const match = tsConfigContent.match(compilerOptionsRegex);

        if (match) {
          const beforeCompilerOptions = match[1];
          const compilerOptionsContent = match[2];
          const afterCompilerOptions = match[3];

          // Add paths section to compilerOptions
          const newCompilerOptionsContent =
            compilerOptionsContent.trim() +
            (compilerOptionsContent.trim().endsWith(',') ? '' : ',') +
            '\n    "paths": {\n      "@workspace/ui/*": ["./ui/*"]\n    }';

          updatedContent = tsConfigContent.replace(
            compilerOptionsRegex,
            beforeCompilerOptions +
              newCompilerOptionsContent +
              afterCompilerOptions,
          );
        }
      }

      // Only update if content changed
      if (updatedContent !== tsConfigContent) {
        tree.overwrite(tsConfigPath, updatedContent);
        context.logger.info('Import aliases configured successfully');
      } else {
        context.logger.info('No changes needed for import aliases');
      }
    } catch (error) {
      context.logger.warn(`Failed to setup import aliases: ${error}`);
    }

    return tree;
  };
}
