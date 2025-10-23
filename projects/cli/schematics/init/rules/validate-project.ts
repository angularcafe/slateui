import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/workspace';

export interface ProjectValidationOptions {
  project?: string;
}

export function validateProject(options: ProjectValidationOptions): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    let { project } = options;
    
    // Get workspace configuration and filter only application projects
    const workspace = await getWorkspace(tree);
    const allProjects = Array.from(workspace.projects.entries());
    const applicationProjects = allProjects.filter(([_, project]) => 
      project.extensions.projectType === 'application'
    );
    const applicationProjectNames = applicationProjects.map(([name]) => name);
    
    // If no project specified, use the first available application project as default
    if (!project || project.trim() === '') {
      if (applicationProjectNames.length === 0) {
        context.logger.error('No application projects found in workspace');
        throw new Error('No application projects found in workspace');
      }
      project = applicationProjectNames[0];
      context.logger.info(`Using default project: ${project}`);
    }
    
    // Validate project exists
    if (!workspace.projects.has(project)) {
      context.logger.error(`Project "${project}" not found in workspace`);
      throw new Error(`Project "${project}" not found in workspace`);
    }
    
    const selectedProject = workspace.projects.get(project)!;
    
    // Validate project is an application
    if (selectedProject.extensions.projectType !== 'application') {
      context.logger.error(`Project "${project}" is not an application`);
      throw new Error(`Project "${project}" is not an application`);
    }
    
    return tree;
  };
} 