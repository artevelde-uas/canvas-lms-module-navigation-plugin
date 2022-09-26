import React, { useState, useEffect } from 'react';
import { EmotionThemeProvider } from '@instructure/emotion';

import { dom, theme } from '@artevelde-uas/canvas-lms-app';

import ModuleNavigationTray from './module-navigation/NavigationTray';

import __ from '../i18n';
import storage from '../storage';


export default () => {
    const [trayOpen, setTrayOpen] = useState(storage.get('trayOpen', false));
    const [button, setButton] = useState();

    useEffect(async () => {
        const footer = await dom.onElementReady('.module-sequence-footer-content');

        footer.insertAdjacentHTML('beforeend', `
            &nbsp;
            <a class="btn" disabled>
                <i class="icon-module"></i>
                ${__('show_module_navigation')}
            </a>
        `);

        const button = footer.lastElementChild;

        button.onclick = () => { setTrayOpen(true); };

        setButton(button);
    }, []);

    useEffect(() => {
        storage.set('trayOpen', trayOpen);
    }, [trayOpen]);

    useEffect(() => {
        button?.toggleAttribute('disabled', trayOpen);
    }, [trayOpen, button]);

    return (
        <EmotionThemeProvider theme={theme}>
            <ModuleNavigationTray
                open={trayOpen}
                onCloseButtonClick={() => { setTrayOpen(false); }}
            />
        </EmotionThemeProvider>
    );
};
