import React, { useState } from 'react';
import { Flex } from '@instructure/ui-flex';
import { Button } from '@instructure/ui-buttons';
import { IconArrowOpenStartSolid, IconArrowOpenEndSolid } from '@instructure/ui-icons';
import { View } from '@instructure/ui-view';

import ModuleListItem from './ModuleListItem';


export default ({ modules }) => (
    <View
        as='nav'
        padding='medium none'
    >
        <View
            as='div'
            padding='small none none'
        >
            {modules && modules.map(module => (
                <ModuleListItem
                    key={module.id}
                    module={module}
                />
            ))}
        </View>
    </View>
);
