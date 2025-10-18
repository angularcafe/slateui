import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/workspace';
import { styles } from '../constants/styles.constants';

export interface SetupTailwindOptions {
  project?: string;
  baseColor: 'neutral' | 'slate' | 'zinc' | 'stone' | 'gray';
  confirmOverwrite?: string;
}

export function setupTailwind(options: SetupTailwindOptions): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    let { project, baseColor, confirmOverwrite } = options;

    // If no project specified, get the default application project
    if (!project || project.trim() === '') {
      const workspace = await getWorkspace(tree);
      const allProjects = Array.from(workspace.projects.entries());
      const applicationProjects = allProjects.filter(
        ([_, project]) => project.extensions.projectType === 'application',
      );
      const applicationProjectNames = applicationProjects.map(([name]) => name);

      if (applicationProjectNames.length === 0) {
        context.logger.error('No application projects found in workspace');
        return tree;
      }
      project = applicationProjectNames[0];
    }

    // Get the project configuration
    const workspace = await getWorkspace(tree);
    const selectedProject = workspace.projects.get(project);

    if (!selectedProject) {
      context.logger.error(`Project "${project}" not found`);
      return tree;
    }

    // Get the source root and determine the styles.css path
    const sourceRoot = selectedProject.sourceRoot || 'src';
    const stylesPath = `${sourceRoot}/styles.css`;

    // Get the theme styles for the selected base color
    const themeStyles = styles[baseColor];

    if (!themeStyles) {
      context.logger.error(
        `Theme styles not found for base color: ${baseColor}`,
      );
      return tree;
    }

    // Check if styles.css exists and has content
    const fileExists = tree.exists(stylesPath);

    if (fileExists) {
      // File exists - check if user wants to overwrite
      if (confirmOverwrite === 'y' || confirmOverwrite === 'Y') {
        // User confirmed overwrite, replace with new theme
        tree.overwrite(stylesPath, themeStyles);
        context.logger.info(`Theme updated to ${baseColor}`);
      } else {
        // User did not confirm, keep existing file
        context.logger.info(`style.css unchanged`);
        return tree;
      }
    } else {
      // File doesn't exist, create it with new theme
      tree.create(stylesPath, themeStyles);
      context.logger.info(`Theme added to ${stylesPath}`);
    }

    // Create .postcssrc.json file in workspace root
    const postcssConfigPath = '.postcssrc.json';
    const postcssConfig = {
      plugins: {
        '@tailwindcss/postcss': {},
      },
    };

    if (tree.exists(postcssConfigPath)) {
      context.logger.info(`.postcssrc.json config already exists`);
    } else {
      tree.create(postcssConfigPath, JSON.stringify(postcssConfig, null, 2));
    }

    return tree;
  };
}
