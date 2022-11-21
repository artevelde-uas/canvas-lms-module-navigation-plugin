import React, { Fragment } from 'react';
import { Heading } from '@instructure/ui-heading';
import { IconLockLine } from '@instructure/ui-icons';
import { Link } from '@instructure/ui-link';
import { View } from '@instructure/ui-view';


export default ({ module }) => {

    function handleClick() {
        const moduleElement = document.getElementById(module.id);

        moduleElement.scrollIntoView();
    }

    return (
        <View
            as='div'
            margin='small none'
        >
            <Heading level='h4'>
                <Link
                    isWithinText={false}
                    onClick={handleClick}
                >
                    {module.name}
                </Link>
                {(module.state === 'locked') && (
                    <Fragment>
                        &nbsp;
                        <IconLockLine />
                    </Fragment>
                )}
            </Heading>
        </View>
    );
};
