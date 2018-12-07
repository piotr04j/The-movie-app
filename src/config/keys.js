
// import key from './devKeys';
import keyPro from './prodKeys';


let keys = {};

// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//     keys = {
//         key: key.keyTMDBapi
//     }
// } else {
    keys = {
        key: keyPro.keyTMDBapi
    }
// }

export default keys;