// ****************************************
// 1	Assertion testing
import assert from "assert";

function add (a, b) {
    return a + b;
}
let doAdd = add(1, 2);
assert(doAdd === 3, '1 + 2 = 3'); // nothing will happen
// assert(doAdd === 1, '1 + 2 != 1'); // AssertionError [ERR_ASSERTION]: 1 + 2 != 1

// assert.ok(doAdd === 3, '1 + 2 = 3'); // nothing, same as line7
// assert.equal(doAdd, 3, '1 + 2 = 3'); // returnes true
// assert.notEqual(doAdd, 3, '1 + 2 = 3'); // returnes false

// after one false, stopes returning ??? 

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

// assert.equal(arr1, arr2, 'checks equal'); // false
assert.deepEqual(arr1, arr2, 'checks deep equal'); // true
// assert.notDeepEqual(arr1, arr2, 'checks deep equal'); // false

// assert.strictEqual(1, 2); // ???? 


// assert.doesNotMatch('I will fail', /fail/); // true
// assert.doesNotMatch(123, /pass/);

// ****************************************
// 2	Console

const number = 5;
console.error('error #%d', number); // error #5
console.error('error', number); // error 5

// 3	Errors
// 4	Globals
// 5	Modules: CommonJS modules

// ****************************************
// 6	OS

import os from "os";

let totalMemory = os.totalmem();

const freeMemory = os.freemem();

console.log(`Total memmory: ${totalMemory}`); // 8423616512
console.log(`Free memmory: ${freeMemory}`); // 1563324416

console.log(os.homedir()); //C:\Users\Lilit
console.log(os.hostname()); //DESKTOP-B8GMD39

console.log(os.loadavg()); // [ 0, 0, 0 ] // always for windows
// console.log(os.networkInterfaces()); //wifi address, netmask, family, amc, internal, sidr, 

console.log(os.platform()); // win32
console.log(os.release());  // 10.0.22000
console.log(os.type()); // Windows_NT
console.log(os.uptime()); // 99844 => Returns the system uptime in number of seconds.
console.log(os.userInfo()); // returned values for uid, gid, username, homedir, shell
console.log(os.version()); // Windows 10 Pro
// console.log(os.cpus());

// ****************************************
// 7	Path
import path from "path";

const currentDir = path.resolve();
console.log(currentDir); //C:\Users\Lilit\Desktop\nodeJS\modules

const  filePath = path.join(currentDir, 'index.js');
console.log(filePath); //C:\Users\Lilit\Desktop\nodeJS\modules\index.js

const pathObj = path.parse(filePath);
console.log(pathObj);
// {
//   root: 'C:\\',
//   dir: 'C:\\Users\\Lilit\\Desktop\\nodeJS\\modules',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }

console.log(path.format(pathObj));
// C:\Users\Lilit\Desktop\nodeJS\modules\index.js

console.log(
path.format({
    root: '/',
    name: 'file',
    ext: '.txt'
})); // /file.txt

console.log(path.basename('C:\Users\Lilit\Desktop\nodeJS\modules\index.js'));
// UsersLilitDesktop
// odeJSmodulesindex.js

console.log(path.basename('C:\Users\Lilit\Desktop\nodeJS\modules\index.js', '.html'));

console.log(process.env.PATH);

console.log(path.dirname(currentDir));
// C:\Users\Lilit\Desktop\nodeJS

console.log(path.extname(filePath)); // .js

console.log(path.isAbsolute('.')); // false

console.log(path.isAbsolute('\Lilit'));  // false

console.log(path.isAbsolute('C:/Users/..')); // true

console.log(path.normalize('C:\\\Users\Lilit\AppData\Roaming\npm')); // true


// ****************************************
// 8	Timers

// ****************************************
// 9	URL

// C:\Users\Lilit\Desktop\JS-agbu course\Lilit_Khalatyan_10

const newURL = new URL('C:\Users\Lilit\Desktop\JS-agbu course\Lilit_Khalatyan_10');

console.log('newURL.hash', newURL.hash);
console.log('newURL.host', newURL.host);
console.log('newURL.hostname', newURL.hostname);
console.log('newURL.href', newURL.href); // c:UsersLilitDesktopJS-agbu courseLilit_Khalatyan_10
console.log('newURL.origin', newURL.origin); // null
console.log('newURL.pathname', newURL.pathname); //UsersLilitDesktopJS-agbu courseLilit_Khalatyan_10
console.log('newURL.port', newURL.port); //  
console.log('newURL.protocol', newURL.protocol); //  c:
console.log('newURL.search', newURL.search); //

const newURL2 = new URL('https://www.google.am/imghp?hl=en&ogbl');

console.log('newURL2.hash', newURL2.hash);
console.log('newURL2.host', newURL2.host); // www.google.am
console.log('newURL2.hostname', newURL2.hostname); // www.google.am
console.log('newURL2.href', newURL2.href); // https://www.google.am/imghp?hl=en&ogbl
console.log('newURL2.origin', newURL2.origin); //  https://www.google.am
console.log('newURL2.pathname', newURL2.pathname); ///imghp
console.log('newURL2.port', newURL2.port); //  
console.log('newURL2.protocol', newURL2.protocol); // https:
console.log('newURL2.search', newURL2.search); // ?hl=en&ogbl

// ****************************************
// 10	Utilities
