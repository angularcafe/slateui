import { Rule, chain } from '@angular-devkit/schematics';
import { AddRegistryItemSchema } from './schema';
import { addRegistryItem, getAllRegistryItems } from './rules';

export function add(options: AddRegistryItemSchema): Rule {
  return chain([
    async (tree, context) => {
      if (options.all) {
        // Add all components
        context.logger.info('📦 Adding all available SlateUI directives...');
        return tree;
      }

      if (!options.itemName) {
        // Interactive prompt to select component
        context.logger.info('📋 Available SlateUI directives:');

        try {
          const allItems = await getAllRegistryItems();
          if (allItems && allItems.length > 0) {
            allItems.forEach((item, index) => {
              context.logger.info(
                `  ${index + 1}. ${item.name} - ${item.description || 'No description'}`,
              );
            });

            context.logger.info('\n💡 Usage:');
            context.logger.info(
              '  ng g cli:add <directive-name>     # Add specific directive',
            );
            context.logger.info(
              '  ng g cli:add --all                # Add all directives',
            );
          } else {
            context.logger.error('❌ No directives found in registry.json');
          }
        } catch (error) {
          context.logger.error(`❌ Error reading registry: ${error}`);
        }

        return tree;
      }
      return tree;
    },
    addRegistryItem({
      itemName: options.itemName,
      all: options.all,
    }),
  ]);
}
