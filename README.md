<div align="center"><img src="https://github.com/wise-introvert/react-component-library/blob/master/assets/logo.png?raw=true" width="200"/></div>
<h1 align="center">react-component-library</h1>
<p>
  <a href="https://www.github.com/wise-introvert/react-component-library.git#README.md" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/wise__introvert" target="_blank">
    <img alt="Twitter: wise__introvert" src="https://img.shields.io/twitter/follow/wise__introvert.svg?style=social" />
  </a>
</p>

> React component library boilerplate, created using rollup and typescript.

## Technologies used

<div style="display: grid; grid-template-columns: repeat(7, 55px); justify-content: center; align-items: center; grid-gap: 1em;">
  <a href="https://eslint.org"><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/eslint.svg"/></a>
  <a href="https://jestjs.io"><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/jest.svg"/></a>
  <a href="https://prettier.io"><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/prettier.svg"/></a>
  <a href="https://reactjs.org"><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg"/></a>
  <a href="https://rollupjs.org"><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/rollup.svg"/></a>
  <a href="https://www.typescriptlang.org/"><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/typescript-icon.svg"/></a>
  <a href="https://storybook.js.org"><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/storybook-icon.svg"/></a>
  <a href="https://sass-lang.com"><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/sass.svg"/></a>
</div>

- [RollupJS](https://rollupjs.org)
- [TypeScript](https://typescriptlang.org)
- [ReactJS](https://reactjs.org)
- [React Testing Library](https://react-testing-library.com)
- [Husky](https://typicode.github.io/husky/#/)
- [Commitizen](http://commitizen.github.io/cz-cli/)
- [Commitlint](https://commitlint.js.org)
- [Storybook](https://storybook.js.org/)
- [SASS](https://sass-lang.com)

## Instructions

- Simply clone this repo and start coding!

## Commands

- `yarn build`
  <p>Compile the code using RollupJS</p>
- `yarn test`
  <p>Test the code using react-testing-library and Jest</p>
- `yarn storybook`
  <p>Preview your components using StorybookJS</p>
- `yarn lint`
  <p>Lint using ESLint</p>
- `yarn clean`
  <p>Cleans `dist` directory and replaces it with an empty folder (used by build script)</p>

## Enable automatic semantic versioning (Optional)

- [x] Only allow squash merging of pull requests
- [x] Install https://github.com/apps/semantic-pull-requests
- [x] Create npm token using `npm token create` or https://www.npmjs.com/settings
- [x] Add token to repo secrets as `NPM_TOKEN`
- [x] Add release workflow file to `.github/workflows/release.yml`

  ```yml
  name: Release npm package

  on:
    push:
      branches:
        - master

  jobs:
    release:
      name: Release
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@master
        - uses: actions/setup-node@v1
          with:
            node-version: "12.x"
        - run: yarn install --frozen-lockfile
        - run: yarn build --if-present
        - run: yarn test
        - run: npx semantic-release
          env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
            NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
  ```

- [x] Set `version` to `0.0.0-development` in package.json
- [x] Install `semantic-release` as a dev dependency: `yarn -D semantic-release`
  > Watch Zeke Sikelianos's demo at https://www.youtube.com/watch?v=rCXq86FOlzQ for a more detailed explanination

## Author

👤 **Wise Introvert**

- Twitter: [@wise\_\_introvert](https://twitter.com/wise__introvert)
- Github: [@wise-introvert](https://github.com/wise-introvert)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://www.github.com/wise-introvert/react-component-library/issues).

## Show your support

Give a ⭐️ if this project helped you!
