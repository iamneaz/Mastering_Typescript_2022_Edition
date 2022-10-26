type User = {
    readonly id: number;
    username: string;
}

const user: User = {
    id: 1234,
    username: "catgurl"
}

console.log(user.id);
//user.id = 27372 // will give error