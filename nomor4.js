let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

//Jawaban a
let newData = {...data, name: "Shania Risky Agustin", email: "Saniarizkiagustin@gmail.com", hobby : ["Ngoding", "Menyanyi", "Menonton"]};
console.log(newData);

//Jawaban b
//Tidak menggunakan destructuring
console.log(data.address.street);
console.log(data.address.city);

//Menggunakan destructuring
let {street, city} = data.address;
console.log(street);
console.log(city);