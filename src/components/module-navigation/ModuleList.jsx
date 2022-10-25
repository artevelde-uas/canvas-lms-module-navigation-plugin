import React, { useEffect, useState } from 'react';
import { Flex } from '@instructure/ui-flex';
import { Button } from '@instructure/ui-buttons';
import { Link } from '@instructure/ui-link';
import { IconArrowOpenStartSolid, IconArrowOpenEndSolid } from '@instructure/ui-icons';
import { View } from '@instructure/ui-view';

import { router, api } from '@artevelde-uas/canvas-lms-app';

import ModuleListItem from './ModuleListItem';


export default () => {
    const [modules, setModules] = useState();
    const [itemSequence, setItemSequence] = useState();

    useEffect(() => {
        const params = router.getParams();

        api.get(`/courses/${params.courseId}/modules`).then(setModules);

        api.get(`/courses/${params.courseId}/module_item_sequence`, {
            asset_id: params.module_item_id,
            asset_type: 'ModuleItem'
        }).then(itemSequence => {
            setItemSequence(itemSequence.items[0]);
        });
    }, []);

    return (
        <View
            as='nav'
            padding='medium none'
        >
            <Flex
                justifyItems='space-between'
            >
                <Flex.Item>
                    <Link
                        as={Button}
                        href={itemSequence?.prev.html_url}
                    >
                        <IconArrowOpenStartSolid />
                    </Link>
                </Flex.Item>
                <Flex.Item>
                    <Link
                        as={Button}
                        href={itemSequence?.next.html_url}
                    >
                        <IconArrowOpenEndSolid />
                    </Link>
                </Flex.Item>
            </Flex>
            <View
                as='div'
                padding='small none none'
            >
                {(modules && itemSequence) && modules.map(module => (
                    <ModuleListItem
                        key={module.id}
                        module={module}
                        currentItem={itemSequence.current}
                    />
                ))}
            </View>
        </View>
    );
};
