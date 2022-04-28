# Canvas LMS Module Navigation Plugin

Plugin for the [Canvas LMS theme app](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-app).

[![NPM version](https://img.shields.io/npm/v/@artevelde-uas/canvas-lms-module-navigation-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-module-navigation-plugin)
[![License](https://img.shields.io/github/license/artevelde-uas/canvas-lms-module-navigation-plugin.svg)](https://spdx.org/licenses/ISC)
[![Downloads](https://img.shields.io/npm/dt/@artevelde-uas/canvas-lms-module-navigation-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-module-navigation-plugin)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/artevelde-uas/canvas-lms-module-navigation-plugin/pulls)

## Installation

Using NPM:

    npm install @artevelde-uas/canvas-lms-module-navigation-plugin

Using Yarn:

    yarn add @artevelde-uas/canvas-lms-module-navigation-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import canvas from '@artevelde-uas/canvas-lms-app';
import moduleNavigationPlugin from '@artevelde-uas/canvas-lms-module-navigation-plugin';

canvas.addPlugin(moduleNavigationPlugin);

canvas.run();
```
