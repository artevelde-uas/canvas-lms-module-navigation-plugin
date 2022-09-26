import React from 'react';
import { Link } from '@instructure/ui-link';


export default ({ item }) => (
    <div style={{
        paddingLeft: `${item.indent}rem`
    }}>
        <Link href={item.html_url}>
            {item.title}
        </Link>
    </div>
);
