import { Injectable, Type } from '@angular/core';
import { IComponentMeta, IVariant } from '@components/component-preview/component-preview';

export interface DocsConfig {
  title: string;
  description: string;
  packageName?: string;
  importStatement: string;
  basicUsage: string;
  variants: IVariant[];
  apiProps?: Array<{
    name: string;
    type: string;
    default?: string;
    description: string;
    required?: boolean;
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class DocsHelperService {
  
  /**
   * Creates component metadata from a docs configuration
   */
  createComponentMeta(config: DocsConfig): IComponentMeta {
    return {
      title: config.title,
      description: config.description,
      installation: {
        package: config.packageName,
        import: config.importStatement,
        usage: config.basicUsage
      },
      api: {
        props: config.apiProps || []
      }
    };
  }

  /**
   * Creates a variant with a component for dynamic rendering
   */
  createVariant(
    title: string,
    description: string,
    code: string,
    component: Type<any>
  ): IVariant {
    return {
      title,
      description,
      code,
      component
    };
  }

  /**
   * Helper method to create consistent example components
   */
  createExampleComponent(selector: string, template: string, imports: any[]): Type<any> {
    const componentClass = class {
      static selector = selector;
      static template = template;
      static imports = imports;
    };
    
    return componentClass as Type<any>;
  }
}