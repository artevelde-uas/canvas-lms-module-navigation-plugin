import React, { useState } from 'react';
import { EmotionThemeProvider } from '@instructure/emotion';
import { theme } from '@artevelde-uas/canvas-lms-app';

import ModuleNavigationTray from './module-navigation/NavigationTray';

import __ from '../i18n';


export default () => {
    const [trayOpen, setTrayOpen] = useState(true);

    return (
        <EmotionThemeProvider theme={theme}>
            <ModuleNavigationTray
                open={trayOpen}
                onCloseButtonClick={() => { setTrayOpen(false); }}
            />
        </EmotionThemeProvider>
    );
};
