import React, { Fragment } from 'react';
import { Heading } from '@instructure/ui-heading';
import { IconPlaySolid } from '@instructure/ui-icons';
import { Link } from '@instructure/ui-link';

import ModuleItemIcon from './ModuleItemIcon';


export default ({ item, isCurrentItem }) => (
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
                        <em><strong>{item.title}</strong></em>
                    </Fragment>
                ) : (
                    <Link href={item.html_url}>
                        {item.title}
                    </Link>
                )}
            </Fragment>
        )}
    </div>
);
