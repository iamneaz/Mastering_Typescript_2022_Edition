"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
lodash_1.default.partition;
// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then((result) => {
//     console.log("WOO !!!");
//     printUser(result.data);
//   })
//   .catch((error) => {
//     console.log("ERROR!", error);
//   });
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users")
    .then((result) => {
    console.log("WOO !!!");
    result.data.forEach(printUser);
})
    .catch((error) => {
    console.log("ERROR!", error);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
