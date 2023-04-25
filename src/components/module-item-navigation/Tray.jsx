import React, { useEffect, useState } from 'react';
import { CloseButton } from '@instructure/ui-buttons';
import { Flex } from '@instructure/ui-flex';
import { Heading } from '@instructure/ui-heading';
import { Tray } from '@instructure/ui-tray';
import { View } from '@instructure/ui-view';

import { router, api } from '@artevelde-uas/canvas-lms-app';

import ModuleList from './ModuleList';

import t from '../../i18n';

import styles from '../../index.module.css';


export default ({ open, onCloseButtonClick }) => {
    const [modules, setModules] = useState();
    const [itemSequence, setItemSequence] = useState();

    const content = document.getElementById('content');
    const crumbs = document.querySelector('.ic-app-nav-toggle-and-crumbs');

    useEffect(() => {
        const params = router.getParams();

        // Get all the course modules
        api.get(`/courses/${params.courseId}/modules`).then(setModules);

        // Get the current module item
        api.get(`/courses/${params.courseId}/module_item_sequence`, {
            asset_id: params.module_item_id,
            asset_type: 'ModuleItem'
        }).then(itemSequence => {
            setItemSequence(itemSequence.items[0]);
        });
    }, []);

    function handleEntered() {
        content.style.boxSizing = 'border-box';
        content.style.width = 'calc(100% - 320px)';
        crumbs.style.width = 'calc(100% - 368px)';
    }

    function handleExited() {
        content.style.width = '';
        crumbs.style.width = '';
    }

    function handleTrayRef(tray) {
        tray?.ref?.classList.add(styles.navigationTray);
    }

    return (
        <Tray
            open={open}
            placement='end'
            label={t('module_navigation')}
            onEntered={handleEntered}
            onExited={handleExited}
            ref={handleTrayRef}
        >
            <View as='div' padding='medium'>
                <Flex>
                    <Flex.Item shouldGrow shouldShrink>
                        <Heading>{t('module_navigation')}</Heading>
                    </Flex.Item>
                    <Flex.Item>
                        <CloseButton
                            placement='end'
                            offset='small'
                            screenReaderLabel='Close'
                            onClick={onCloseButtonClick} />
                    </Flex.Item>
                </Flex>
                <ModuleList
                    modules={modules}
                    itemSequence={itemSequence}
                />
            </View>
        </Tray>
    );
};
