import React from 'react';


function typeToClass(type) {
    switch (type) {
        case 'File': return 'paperclip';
        case 'Page': return 'document';
        case 'Discussion': return 'discussion';
        case 'Assignment': return 'assignment';
        case 'Quiz': return 'quiz';
        case 'ExternalUrl':
        case 'ExternalTool': return 'link';
    }
}

export default ({ type }) => (
    <i className={`icon-${typeToClass(type)}`}></i>
);
