import React from 'react';
import ReactDOM from 'react-dom';

import { dom, router } from '@artevelde-uas/canvas-lms-app';

import ModulesNavigation from './components/modules-navigation';
import ModuleItemNavigation from './components/module-item-navigation';

import __ from './i18n';


export default function () {
    // Render on the modules page
    router.onRoute('courses.modules', () => {
        // Create the container element
        const container = document.createDocumentFragment();

        // Render the component
        ReactDOM.render(React.createElement(ModulesNavigation), container);
    });

    // Render on each module item page
    router.onRoute('courses.*', () => {
        dom.onElementReady('.module-sequence-footer').then(() => {
            // Create the container element
            const container = document.createDocumentFragment();

            // Render the component
            ReactDOM.render(React.createElement(ModuleItemNavigation), container);
        });
    });

    return {
        ...require('../package.json'),
        title: __('package.title'),
        description: __('package.description')
    };
}
