[TEST PROJECT]

This repo is a basic serverless app, written in TypeScript, that serves as a training to build a CI/CD pipeline with CircleCi and Github.

## Local tests & manual deployment

```
git clone git@github.com:htaidirt/test-serverless-ts-circleci.git
cd test-serverless-ts-circleci
npm install
```

To run locally, use `npm run hello`, which will first transpile TypeScript into JavaScript (using Webpack), then shows a basic hello world message.

Basic unit test can be run using `npm test`, with the courtesy of jest. Code coverage can be obtained using `npx jest --coverage`.

To deploy on AWS Lambda, run `serverless deploy` which will transpile like previously done, then upload the code to S3 and finally shows AWS Gateway URL. Open that URL in a browser.

Source:
- [Serverless and Typescript](https://www.jamestharpe.com/serverless-typescript-getting-started/)
- [Using Jest with TypeScript](https://basarat.gitbooks.io/typescript/docs/testing/jest.html)

## Automatic deployment with CircleCi

[WIP]

Source:
- [Automating CI/CD workflow for serverless apps with CircleCI](https://serverless.com/blog/ci-cd-workflow-serverless-apps-with-circleci/)
