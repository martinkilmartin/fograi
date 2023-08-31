const fs = require('fs');
const AllNewsSources = require('../constants/NEWS_SOURCES');

/**
 * Writes out a .ts file with a map export.
 * @param {Map<string, any>} inputMap The input map of objects.
 * @param {string} property The property of the object to be used in the exported map.
 * @param {string} outputPath Path to the output .ts file.
 */
function writeMapToTSFile(
  inputMap: Map<string, any> = AllNewsSources,
  property: string = 'name',
  outputPath: string = './src/constants/NS_BI_MAP.ts',
) {
  const mapFromObject = new Map(Object.entries(inputMap));
  let content = 'export const NS_BI_MAP = new Map([\n';
  mapFromObject.forEach((v, k) => {
    if (k === 'AllNewsSources') {
      for (const [key, value] of mapFromObject.get(k)) {
        content += `  ["${key}", "${(value[property] as string)
          .toLowerCase()
          .replaceAll(' ', '-')}"],\n`;
        content += `  ["${(value[property] as string)
          .toLowerCase()
          .replaceAll(' ', '-')}", "${key}"],\n`;
      }
    }
  });

  content += ']);\n';

  fs.writeFileSync(outputPath, content, 'utf-8');
}

writeMapToTSFile();
