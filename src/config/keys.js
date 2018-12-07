import * as key from './devKeys';

let keys = {};

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    keys = {
        key: key.keyTMDBapi
    }
} else {
    keys = {
        key: process.env.keyTMDBapi
    }
}


export default keys;
