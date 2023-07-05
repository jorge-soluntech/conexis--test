
# Conexis


# Table of Contents
1. [Project Description](#project-description)
2. [Install Instructions](#install-instructions)
3. [Test Instructions](#test-instructions)
4. [Integration Sequence](#integration-sequence)
5. [Other Settings](#other-settings)

## Project Description
It is the front end of the Conexis VMS Software.

Conexis VMS is an easy-to-use, cost-effective vendor management system (VMS) built on the latest technology, designed with the user in mind. Conexis automates and consolidates to procure to pay process of contingent non-employee contractors and the vendors that supply them. Conexis helps companies improve transparency, process, compliance and cost-saving opportunities across the entire organization through detailed reporting and analytics. Join the hundreds of thousands of people that are using Conexis to manage their contingent workforce.

Architecture Link: https://docs.google.com/document/d/1ozCcnM9OmHT8x1-NyPXzxUgpW_NyZIyk6kNo_sBi40s/edit

## Install Instructions

1. Run command npm install

```bash
$ npm install
```
2. Run project npm run dev

```bash
$ npm run dev
```

## Test Instructions

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

You can run the tests with the command

```bash
$ npm run test
```


## Integration Sequence
The integration sequence for the staging environment is defined on the file /.github/workflows/staging.yml
It is divided in two jobs

**CI**
  
  1. **Run command npm install:** Install project to generate node_modules folder on github machine
  2. **Run command npm test:** Run unit and integration tests. The process stops here if one test fail
  3. **Perform Sonarqube Scan:** Run sonarqube scan on soluntech.sonarqube.com to check quality code, security vulnerabilities and test coverage

**CD**

  1. **Run command npm install vercel:** Install Vercel npm module globally on github machine
  2. **Run vercel pull command:** Pull Vercel environment information to generate the vercel build on next command using the preview environment
  3. **Run vercel build command:** Build app using vercel command 
  4. **Run vercel deploy command** Deploy app using vercel command with the prebuilt option
  
The integration sequence for the production environment is defined in two files, one for the continuos integration and one for the continuos delivery that has to be trigger manually. The files are located on /.github/workflows/productionCI.yml for the continuos integration and /.github/workflows/productionCD.yml for the continuos delivery

**productionCI.yml**

  1. **Run command npm install:** Install project to generate node_modules folder on github machine
  2. **Run command npm test:** Run unit and integration tests. The process stops here if one test fail
  3. **Perform Sonarqube Scan:** Run sonarqube scan on soluntech.sonarqube.com to check quality code, security vulnerabilities and test coverage
  
**productionCD.yml**

  1. **Run command npm install vercel:** Install Vercel npm module globally on github machine
  2. **Run vercel pull command:** Pull Vercel environment information to generate the vercel build on next command using the production environment
  3. **Run vercel build command:** Build app using vercel command 
  4. **Run vercel deploy command** Deploy app using vercel command with the prebuilt option

## Other Settings

### Features

Developer experience first:

- ⚡ [Next.js](https://nextjs.org) for Static Site Generator
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Sass](https://sass-lang.com)
- ✅ Strict Mode for TypeScript and React 18
- 🐳 Docker local configuration [Docker](https://www.docker.com/)
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 🦺 Unit Testing with Jest and React Testing Library
- 🧪 E2E Testing with Cypress
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ Call Request [Axios](https://axios-http.com/)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js 16 and npm

### Getting started

This is a Next.js project bootstrapped with create-next-app.

Run the following command on your local environment:

```shell
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
# or
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
├── README.md                       # README file
├── __mocks__                       # Mocks for testing
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── application                 # Global state management about entities and views
│   ├── components                  # Custom components and hooks
│       ├── common                  # Common components
│       ├── hooks                   # Custom hooks folder
│       ├── layouts                 # Layouts components
│   ├── infrastructure              # Api calls, config fetch
│   ├── pages                       # Next JS Pages
│   ├── pages.test                  # Next JS Pages tests (this avoid test to treated as a Next.js pages)
│   ├── styles                      # Styles folder
│   ├── templates                   # Default template
│   └── utils                       # Utility functions
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.scss`: your SCSS file using Sass
- `src/styles/_variables.scss`: your SCSS variables file
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/Main.tsx`: default theme

---
### Deploy with Docker

* Have Docker Desktop version 4.5.0 installed, here are the download links:  
    * [Windows][downloadDockerWindows]
    * [MAC][downloadDockerMAC]

[downloadDockerWindows]: https://docs.docker.com/desktop/windows/release-notes/
[downloadDockerMAC]: https://docs.docker.com/desktop/mac/release-notes/

### Before any commit, check that the docker container is working, for it follow the next steps

1. Generate dependencies, you will have to open a terminal inside the project, and execute with:  
```shell
$ npm i
```

2. Build a docker image of the project (if there's an existing image,
delete it and build another one), execute in terminal with:  
```shell
$ docker build -t your-app .
```
The last dot ( . ) is part of the command and change the name-app

3. Finally build a container from the compiled image built from the last step, 
execute in terminal with:
```shell
$ docker run --rm -p 3000:3000 -e NEXT_PUBLIC_ENV_VARIABLE={YOUR_URL} your-app
```  
 Remove the brackets before adding URL ( {} )
 - Good examples for {YOUR_URL}: http://0.0.0.0 or http://127.0.0.1

You can deploy it with docker-compose too, just run:

```shell
$ docker-compose up
```

---
### Management of fetch data (Axios)
All fetch request is in `infrastructure/service/index.ts` specifically in the RequestService class. So, add your own requests as many times as you want with a specific configuration, depending on the type of fetch, e.g:

- Good example for update something, receives data as a parameter and with the apiClient method, constructs the request with the put configuration.
```
  updateData = (data) =>
    apiClient(
      configPut([createUrl(BASE_URL, `/your url/${data.id}`)], data.dataBody)
    );
```

- All config requests is in `infrastructure/api/configFetch.ts` you can add more as many times as you want

- Finally you can use the request importing RequestService and calling the request, exmaple: 

```
  const response = await RequestService.updateData({ id: youID, dataBody: yourDataBody })
```
---
### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

---

