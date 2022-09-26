import React from 'react';
import { Link } from '@instructure/ui-link';

import ModuleItemIcon from './ModuleItemIcon';


export default ({ item }) => (
    <div style={{
        paddingLeft: `${item.indent}rem`
    }}>
        <ModuleItemIcon type={item.type} />
        &nbsp;
        <Link href={item.html_url}>
            {item.title}
        </Link>
    </div>
);
