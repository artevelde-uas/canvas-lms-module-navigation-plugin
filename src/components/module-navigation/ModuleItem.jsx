import React, { Fragment } from 'react';
import { Heading } from '@instructure/ui-heading';
import { IconPlaySolid } from '@instructure/ui-icons';
import { Link } from '@instructure/ui-link';
import { Text } from '@instructure/ui-text';

import ModuleItemIcon from './ModuleItemIcon';


export default ({ item, isCurrentItem, isLocked }) => (
    <div style={{
        paddingLeft: `${item.indent}rem`
    }}>
        {(item.type === 'SubHeader') ? (
            <Heading
                level='h4'
                margin='x-small none'
            >
                {item.title}
            </Heading>
        ) : (
            <Fragment>
                <ModuleItemIcon type={item.type} />
                &nbsp;
                {isCurrentItem ? (
                    <Fragment>
                        <IconPlaySolid color="brand" />
                        &nbsp;
                        <Text
                            weight='bold'
                            fontStyle='italic'
                        >
                            {item.title}
                        </Text>
                    </Fragment>
                ) : isLocked ? (
                    <Text color='secondary'>
                        {item.title}
                    </Text>
                ) : (
                    <Link href={item.html_url}>
                        {item.title}
                    </Link>
                )}
            </Fragment>
        )}
    </div>
);
