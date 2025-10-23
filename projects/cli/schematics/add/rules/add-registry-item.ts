import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import * as https from 'https';
import * as path from 'path';

// Constants
const SLATEUI_BASE_URL =
  'https://api.github.com/repos/angularcafe/slateui/contents/projects/ui/src';
const SLATEUI_REGISTRY_URL =
  'https://api.github.com/repos/angularcafe/slateui/contents/registry.json';
const USER_AGENT = '@slateui/cli';

/**
 * Options for adding registry items
 */
export interface AddRegistryItemOptions {
  /** Name of the specific item to add */
  itemName?: string;
  /** Whether to add all available items */
  all?: boolean;
}

interface RegistryItem {
  name: string;
  type: string;
  title?: string;
  description?: string;
  files: RegistryFile[];
  dependencies?: string[];
  cssVars?: any;
  categories?: string[];
}

interface RegistryFile {
  path: string;
  type: string;
  target?: string;
}

/**
 * Schematic rule to add registry items from SlateUI
 * @param options Configuration options for adding items
 * @returns A rule that adds the specified items to the project
 */
export function addRegistryItem(options: AddRegistryItemOptions): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const { itemName, all } = options;

    try {
      if (all) {
        // Add all items from registry.json
        const allItems = await getAllRegistryItems();
        if (!allItems || allItems.length === 0) {
          context.logger.error('No items found in registry.json');
          return tree;
        }

        for (const item of allItems) {
          await addSingleItem(tree, context, item);
        }

        context.logger.info('✅ All directives added successfully!');
        return tree;
      }

      if (!itemName) {
        context.logger.error('Item name is required when not using --all flag');
        return tree;
      }

      const registryItem = await getRegistryItem(itemName);

      if (!registryItem) {
        context.logger.error(
          `Registry item "${itemName}" not found in registry.json`,
        );
        return tree;
      }

      // Only single-file generation is needed; iterate through defined files anyway
      for (const file of registryItem.files) {
        const targetPath = resolveTargetPathFromType(file, registryItem);

        // Ensure directory exists by creating empty placeholders if necessary
        const dirPath = path.dirname(targetPath);
        if (!tree.exists(dirPath)) {
          // Create directory structure by creating a placeholder then deleting, as Tree has no mkdir
          tree.create(path.join(dirPath, '.gitkeep'), '');
          tree.delete(path.join(dirPath, '.gitkeep'));
        }

        // Build the GitHub URL using the file path from registry
        const githubUrl = `${SLATEUI_BASE_URL}/${file.path}`;

        // First get the file metadata to extract download_url
        const fileInfo = await fetchFileInfo(githubUrl);
        if (!fileInfo || !fileInfo.download_url) {
          context.logger.error(`Failed to get file info for ${itemName}`);
          return tree;
        }

        const fileContent = await fetchRawFile(fileInfo.download_url);

        if (tree.exists(targetPath)) {
          context.logger.warn(
            `File already exists: ${targetPath}. Overwriting...`,
          );
          tree.overwrite(targetPath, fileContent);
        } else {
          tree.create(targetPath, fileContent);
        }
      }

      context.logger.info(`✅ Successfully added ${registryItem.name} to ui/`);
    } catch (error) {
      context.logger.error(`❌ Error adding registry item: ${error}`);
      return tree;
    }

    return tree;
  };
}

async function fetchFileInfo(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': USER_AGENT,
      },
    };

    https
      .get(url, options, (res) => {
        if (
          res.statusCode &&
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          // Handle redirects
          return resolve(fetchFileInfo(res.headers.location));
        }

        if (res.statusCode && res.statusCode >= 400) {
          reject(new Error(`HTTP ${res.statusCode} when fetching ${url}`));
          return;
        }

        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            resolve(parsed);
          } catch (error) {
            reject(new Error(`Failed to parse GitHub API response: ${error}`));
          }
        });
      })
      .on('error', (err) => reject(err));
  });
}

async function fetchRawFile(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': USER_AGENT,
      },
    };

    https
      .get(url, options, (res) => {
        if (
          res.statusCode &&
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          // Handle redirects
          return resolve(fetchRawFile(res.headers.location));
        }

        if (res.statusCode && res.statusCode >= 400) {
          reject(new Error(`HTTP ${res.statusCode} when fetching ${url}`));
          return;
        }

        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            // This should be raw file content, not base64
            resolve(data);
          } catch (error) {
            reject(new Error(`Failed to process file content: ${error}`));
          }
        });
      })
      .on('error', (err) => reject(err));
  });
}

async function getRegistryItem(itemName: string): Promise<RegistryItem | null> {
  try {
    const registry = await fetchRegistryFromGitHub();

    if (!registry || !registry.items) {
      throw new Error('Invalid registry format from GitHub');
    }

    const item = registry.items.find(
      (item: RegistryItem) => item.name === itemName,
    );
    return item || null;
  } catch (error) {
    throw new Error(`Failed to fetch registry from GitHub: ${error}`);
  }
}

function resolveTargetPathFromType(
  file: RegistryFile,
  registryItem: RegistryItem,
): string {
  const typeFolder = mapTypeToFolder(registryItem.type);
  const filename = path.basename(file.path || `${registryItem.name}.ts`);
  return path.join('ui', typeFolder, filename);
}

function mapTypeToFolder(itemType: string): string {
  switch (itemType) {
    case 'registry:directive':
      return 'directives';
    case 'registry:component':
      return 'components';
    default:
      return '';
  }
}

export async function getAllRegistryItems(): Promise<RegistryItem[]> {
  try {
    const registry = await fetchRegistryFromGitHub();

    if (!registry || !registry.items) {
      throw new Error('Invalid registry format from GitHub');
    }

    return registry.items;
  } catch (error) {
    throw new Error(`Failed to fetch registry from GitHub: ${error}`);
  }
}

async function addSingleItem(
  tree: Tree,
  context: SchematicContext,
  registryItem: RegistryItem,
): Promise<void> {
  try {
    const itemName = registryItem.name;

    // Only single-file generation is needed; iterate through defined files anyway
    for (const file of registryItem.files) {
      const targetPath = resolveTargetPathFromType(file, registryItem);

      // Ensure directory exists by creating empty placeholders if necessary
      const dirPath = path.dirname(targetPath);
      if (!tree.exists(dirPath)) {
        // Create directory structure by creating a placeholder then deleting, as Tree has no mkdir
        tree.create(path.join(dirPath, '.gitkeep'), '');
        tree.delete(path.join(dirPath, '.gitkeep'));
      }

      // Build the GitHub URL using the file path from registry
      const githubUrl = `${SLATEUI_BASE_URL}/${file.path}`;

      // First get the file metadata to extract download_url
      const fileInfo = await fetchFileInfo(githubUrl);
      if (!fileInfo || !fileInfo.download_url) {
        context.logger.error(`Failed to get file info for ${itemName}`);
        return;
      }

      const fileContent = await fetchRawFile(fileInfo.download_url);

      if (tree.exists(targetPath)) {
        context.logger.warn(
          `File already exists: ${targetPath}. Overwriting...`,
        );
        tree.overwrite(targetPath, fileContent);
      } else {
        tree.create(targetPath, fileContent);
      }
    }
  } catch (error) {
    context.logger.error(`❌ Error adding ${registryItem.name}: ${error}`);
  }
}

async function fetchRegistryFromGitHub(): Promise<{ items: RegistryItem[] }> {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': USER_AGENT,
      },
    };

    https
      .get(SLATEUI_REGISTRY_URL, options, (res) => {
        if (
          res.statusCode &&
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          // Handle redirects
          return resolve(fetchRegistryFromGitHub());
        }

        if (res.statusCode && res.statusCode >= 400) {
          reject(
            new Error(
              `HTTP ${res.statusCode} when fetching registry from GitHub`,
            ),
          );
          return;
        }

        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            // The GitHub API returns content as base64 encoded
            if (parsed.content && parsed.encoding === 'base64') {
              const decodedContent = Buffer.from(
                parsed.content,
                'base64',
              ).toString('utf-8');
              const registry = JSON.parse(decodedContent);

              // Validate registry structure
              if (!registry.items || !Array.isArray(registry.items)) {
                reject(
                  new Error(
                    'Invalid registry structure: missing or invalid items array',
                  ),
                );
                return;
              }

              resolve(registry);
            } else {
              reject(new Error('Invalid registry content format from GitHub'));
            }
          } catch (error) {
            reject(new Error(`Failed to parse registry from GitHub: ${error}`));
          }
        });
      })
      .on('error', (err) => reject(err));
  });
}
