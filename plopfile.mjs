/* eslint-disable func-names */
/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
export default function (plop) {
  plop.setGenerator('table', {
    description: 'Table resource page',
    prompts: [
      {
        type: 'input',
        name: 'resource',
        message: 'Nextjs file/folder name for the page',
        validate(value) {
          let message = true;
          if (!/.+/.test(value)) {
            message = console.error('Missing', 'you must define the file name');
          } else if (value.length < 4) {
            // send new message for user feedback
            message = console.error(
              'Too Short',
              `"${value}" is not descriptive enough for a page fileName, please make it longer than 4 characters`
            );
          }

          return message;
        },
      },
      {
        type: 'input',
        name: 'url',
        message: 'Endpoint to get the data kebabCase e.g. kebab-case',
      },
      {
        type: 'confirm',
        name: 'expandable',
        message: '¿Does this table have expandable rows? (default: false)',
        default: false,
      },
      {
        type: 'confirm',
        name: 'checkboxes',
        message: '¿Does this table have checkboxes rows? (default: false)',
        default: false,
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: 'src/pages/home/{{camelCase resource}}/index.tsx',
        templateFile: 'plop-templates/next-page.hbs',
      },
      // {
      //   type: 'add',
      //   path: 'src/pages.test/{{camelCase fileName}}.test.tsx',
      //   templateFile: 'plop-templates/next-page-test.hbs',
      // },
      {
        type: 'add',
        path: 'src/components/common/{{camelCase resource}}Components/{{camelCase resource}}/table-config.tsx',
        templateFile: 'plop-templates/table-config.hbs',
      },
      {
        type: 'add',
        path: 'src/components/common/{{camelCase resource}}Components/{{camelCase resource}}/query.tsx',
        templateFile: 'plop-templates/query.hbs',
      },
      {
        type: 'add',
        path: 'src/infrastructure/services/{{camelCase resource}}Resource.ts',
        templateFile: 'plop-templates/resource-service.hbs',
      },
    ], // array of actions
  });
}
