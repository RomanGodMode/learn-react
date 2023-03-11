import {array, getSnus} from "./file1";
import {array as array2} from "./file3";
import gigaConst from "./file4";

console.log('array', array)
console.log('array2', array2)
console.log(getSnus().then(res => console.log(res)))