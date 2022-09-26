import React, { useEffect, useState } from 'react';
import { ToggleDetails } from '@instructure/ui-toggle-details';
import { Link } from '@instructure/ui-link';
import { List } from '@instructure/ui-list';
import { Spinner } from '@instructure/ui-spinner';

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
        <ToggleDetails
            summary={module.name}
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
                            <ModuleItem item={item} />
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
    );
};
