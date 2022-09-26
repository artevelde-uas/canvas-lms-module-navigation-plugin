import store from 'store2';


// Get the namespace from the package
const namespace = require('../package.json').name;

// Get a namespaced local storage
const storage = store.namespace(namespace);


export default storage;
