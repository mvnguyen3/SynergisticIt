const items = [
    { "name": "Gaurav", "email": "gaurav@gmail.com", "salary": "100" },
    { "name": "Sultan", "email": "sultan@gmail.com", "salary": "8989" },
    { "name": "Hitesh", "email": "kast@gmail.com", "salary": "76" },
    { "name": "John", "email": "john@gmail.com", "salary": "60" },
    { "name": "Bob", "email": "bob@gmail.com", "salary": "2" },
    { "name": "Roy", "email": "roy@gmail.com", "salary": "2000" },
    { "name": "Peter", "email": "peter@gmail.com", "salary": "78" },
    { "name": "Rahul", "email": "rahul@gmail.com", "salary": "3000" },
    { "name": "Senorita", "email": "senorita@gmail.com", "salary": "3800" }
];

const filteredItems = items.find((item) => {
    return item.name === "Senorita";
});

console.log(filteredItems);