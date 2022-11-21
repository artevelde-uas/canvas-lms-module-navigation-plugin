import React, { useState } from 'react';
import { Flex } from '@instructure/ui-flex';
import { Button } from '@instructure/ui-buttons';
import { IconArrowOpenStartSolid, IconArrowOpenEndSolid } from '@instructure/ui-icons';
import { View } from '@instructure/ui-view';

import ModuleListItem from './ModuleListItem';


export default ({ modules, itemSequence }) => (
    <View
        as='nav'
        padding='medium none'
    >
        <Flex
            justifyItems='space-between'
        >
            <Flex.Item>
                <Button
                    href={itemSequence?.prev?.html_url}
                    interaction={itemSequence?.prev ? 'enabled' : 'disabled'}
                >
                    <IconArrowOpenStartSolid />
                </Button>
            </Flex.Item>
            <Flex.Item>
                <Button
                    href={itemSequence?.next?.html_url}
                    interaction={itemSequence?.next ? 'enabled' : 'disabled'}
                >
                    <IconArrowOpenEndSolid />
                </Button>
            </Flex.Item>
        </Flex>
        <View
            as='div'
            padding='small none none'
        >
            {modules && modules.map(module => (
                <ModuleListItem
                    key={module.id}
                    module={module}
                    currentItem={itemSequence?.current}
                />
            ))}
        </View>
    </View>
);
