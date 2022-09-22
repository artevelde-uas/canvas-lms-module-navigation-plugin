import React, { useEffect, useState } from 'react';
import { View } from '@instructure/ui-view';

import { router, api } from '@artevelde-uas/canvas-lms-app';


export default () => {
    const [modules, setModules] = useState();
    const [itemSequence, setItemSequence] = useState();

    useEffect(() => {
        const params = router.getParams();

        api.get(`/courses/${params.courseId}/modules`, {
            per_page: 100
        }).then(setModules);

        api.get(`/courses/${params.courseId}/module_item_sequence`, {
            asset_id: params.module_item_id,
            asset_type: 'ModuleItem'
        }).then(itemSequence => {
            setItemSequence(itemSequence.items[0]);
        });
    }, []);

    return (
        <View>
            <ul>
                {(modules && itemSequence) && modules.map(module => (
                    <li
                        key={module.id}
                    >
                        {module.id === itemSequence.current.module_id ? (
                            <b>{module.name}</b>
                        ) : (
                            <a>{module.name}</a>
                        )}
                    </li>
                ))}
            </ul>
        </View>
    );
};
