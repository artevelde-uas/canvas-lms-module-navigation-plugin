import __ from './i18n';


export default function () {
    return {
        ...require('../package.json'),
        title: __('package.title'),
        description: __('package.description')
    };
}
