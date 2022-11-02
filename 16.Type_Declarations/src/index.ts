import axios from "axios";
import _ from "lodash";

_.partition;

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then((result) => {
//     console.log("WOO !!!");
//     printUser(result.data);
//   })
//   .catch((error) => {
//     console.log("ERROR!", error);
//   });

axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users")
  .then((result) => {
    console.log("WOO !!!");
    result.data.forEach(printUser);
  })
  .catch((error) => {
    console.log("ERROR!", error);
  });

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}
