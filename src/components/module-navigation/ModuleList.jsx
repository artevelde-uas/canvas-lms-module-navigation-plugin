import React, { useEffect, useState } from 'react';
import { View } from '@instructure/ui-view';

import { router, api } from '@artevelde-uas/canvas-lms-app';


export default () => {
    const [modules, setModules] = useState();

    useEffect(() => {
        const params = router.getParams();

        api.get(`/courses/${params.courseId}/modules`, {
            per_page: 100
        }).then(setModules);
    }, []);

    return (
        <View>
            <ul>
                {modules && modules.map(module => (
                    <li
                        key={module.id}
                    >
                        {module.name}
                    </li>
                ))}
            </ul>
        </View>
    );
};
