import React, { useState, useEffect } from 'react';
import { EmotionThemeProvider } from '@instructure/emotion';

import { dom, theme } from '@artevelde-uas/canvas-lms-app';

import Tray from './Tray';

import __ from '../../i18n';
import storage from '../../storage';


export default () => {
    const [trayOpen, setTrayOpen] = useState(storage.get('trayOpen', false));
    const [button, setButton] = useState();

    useEffect(async () => {
        dom.onElementReady('#content > .header-bar').then(header => {
            // Inject the left button container if it does not exist yet
            if (header.querySelector('.header-bar-left') === null) {
                header.insertAdjacentHTML('afterbegin', `
                    <div class="header-bar-left header-bar__module-layout">
                        <div class="header-bar-left__buttons"></div>
                    </div>
                `);
            }

            const leftButtonBar = header.querySelector('.header-bar-left__buttons');

            // Append the module buttons
            leftButtonBar.insertAdjacentHTML('beforeend', `
                <a class="btn" disabled>
                    <i class="icon-module"></i>
                    ${__('show_module_navigation')}
                </a>
            `);

            const button = leftButtonBar.lastElementChild;

            button.onclick = () => {
                setTrayOpen(true);
            };

            setButton(button);
        });
    }, []);

    useEffect(() => {
        storage.set('trayOpen', trayOpen);
    }, [trayOpen]);

    useEffect(() => {
        button?.toggleAttribute('disabled', trayOpen);
    }, [trayOpen, button]);

    return (
        <EmotionThemeProvider theme={theme}>
            <Tray
                open={trayOpen}
                onCloseButtonClick={() => { setTrayOpen(false); }}
            />
        </EmotionThemeProvider>
    );
};
