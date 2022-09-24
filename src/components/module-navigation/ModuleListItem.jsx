import React, { useEffect, useState } from 'react';
import { ToggleDetails } from '@instructure/ui-toggle-details';


export default ({ module, currentItem }) => {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        setExpanded(module.id === currentItem?.module_id);
    }, [currentItem]);

    function handleToggle(event, expanded) {
        setExpanded(expanded);
    }

    return (
        <ToggleDetails
            summary={module.name}
            expanded={expanded}
            onToggle={handleToggle}
        >
            <span>TEST</span>
        </ToggleDetails>
    );
};
