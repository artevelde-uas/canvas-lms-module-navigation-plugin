import React from 'react';
import ReactDOM from 'react-dom';

import { dom, router } from '@artevelde-uas/canvas-lms-app';

import App from './components/App';

import __ from './i18n';


export default function () {
    router.onRoute('courses.*', () => {
        dom.onElementReady('.module-sequence-footer').then(() => {
            // Create the container element
            const container = document.createDocumentFragment();

            // Render the component
            ReactDOM.render(React.createElement(App), container);
        });
    });

    return {
        ...require('../package.json'),
        title: __('package.title'),
        description: __('package.description')
    };
}
