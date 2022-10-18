import React, { Fragment, useEffect, useState } from 'react';
import { Heading } from '@instructure/ui-heading';
import { IconPlaySolid, IconLockLine } from '@instructure/ui-icons';
import { List } from '@instructure/ui-list';
import { Spinner } from '@instructure/ui-spinner';
import { Text } from '@instructure/ui-text';
import { ToggleDetails } from '@instructure/ui-toggle-details';
import { View } from '@instructure/ui-view';

import { router, api } from '@artevelde-uas/canvas-lms-app';

import ModuleItem from './ModuleItem';


export default ({ module, currentItem }) => {
    const [expanded, setExpanded] = useState(false);
    const [moduleItems, setModuleItems] = useState(null);

    useEffect(() => {
        setExpanded(module.id === currentItem?.module_id);
    }, [currentItem]);

    useEffect(() => {
        if (!expanded || moduleItems !== null) return;

        const params = router.getParams();

        // Get module items
        api.get(`/courses/${params.courseId}/modules/${module.id}/items`).then(setModuleItems);
    }, [expanded]);

    function handleToggle(event, expanded) {
        setExpanded(expanded);
    }

    return (
        <View
            as='div'
            margin='small none'
        >
            <ToggleDetails
                summary={(
                    <Heading level='h4'>
                        {(module.id === currentItem.module_id) ? (
                            <Fragment>
                                <IconPlaySolid color='brand' />
                                &nbsp;
                                <em>{module.name}</em>
                            </Fragment>
                        ) : (
                            <Text
                                color={(module.state === 'unlocked') ? 'primary' : 'secondary'}
                            >
                                {module.name}
                            </Text>
                        )}
                        {(module.state === 'locked') && (
                            <Fragment>
                                &nbsp;
                                <IconLockLine />
                            </Fragment>
                        )}
                    </Heading>
                )}
                expanded={expanded}
                onToggle={handleToggle}
            >
                {moduleItems ? (
                    <List
                        isUnstyled
                        margin='none'
                    >
                        {moduleItems.map(item => (
                            <List.Item key={item.id}>
                                <ModuleItem
                                    item={item}
                                    isCurrentItem={(item.id === currentItem.id)}
                                    isLocked={module.state === 'locked'}
                                />
                            </List.Item>
                        ))}
                    </List>
                ) : (
                    <Spinner
                        size="x-small"
                        renderTitle="Loading"
                    />
                )}
            </ToggleDetails>
        </View>
    );
};
