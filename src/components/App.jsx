import React, { useState, useEffect } from 'react';
import { EmotionThemeProvider } from '@instructure/emotion';

import { dom, theme } from '@artevelde-uas/canvas-lms-app';

import ModuleNavigationTray from './module-navigation/NavigationTray';

import __ from '../i18n';


export default () => {
    const [trayOpen, setTrayOpen] = useState(false);

    useEffect(async () => {
        const footer = await dom.onElementReady('.module-sequence-footer-content');

        footer.insertAdjacentHTML('beforeend', `
            &nbsp;
            <a class="btn">
                <i class="icon-module"></i>
                ${__('show_module_navigation')}
            </a>
        `);

        const button = footer.lastElementChild;

        button.onclick = () => { setTrayOpen(true); };
    }, []);

    return (
        <EmotionThemeProvider theme={theme}>
            <ModuleNavigationTray
                open={trayOpen}
                onCloseButtonClick={() => { setTrayOpen(false); }}
            />
        </EmotionThemeProvider>
    );
};
