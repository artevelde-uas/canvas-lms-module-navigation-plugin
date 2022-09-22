import React from 'react';
import { ToggleDetails } from '@instructure/ui-toggle-details';


export default ({ module, currentItem }) => {
    return (
        <ToggleDetails
            summary={module.name}
            defaultExpanded={module.id === currentItem?.module_id}
        >
            <span>TEST</span>
        </ToggleDetails>
    );
};
