// import getUser, { course, user, getCourse } from "./modules/home.js";

// console.log(getUser());
// console.log(user);
// console.log(course);
// console.log(getCourse());

// import tất cả 1 file
import * as home from "./modules/home.js";
const { course, default: getUser, getCourse, user } = home;
console.log(getUser());
console.log(getCourse());
console.log(user);
console.log(course);
