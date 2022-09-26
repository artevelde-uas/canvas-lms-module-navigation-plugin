import React, { Fragment } from 'react';
import { Heading } from '@instructure/ui-heading';
import { Link } from '@instructure/ui-link';

import ModuleItemIcon from './ModuleItemIcon';


export default ({ item }) => (
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
                <Link href={item.html_url}>
                    {item.title}
                </Link>
            </Fragment>
        )}
    </div>
);
