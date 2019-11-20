let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "javascript"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

// let personsWithAllTags = persons.filter(persons => persons.tags.indexOf("java") >-1);
// console.log(personsWithAllTags);

let nameswithJsATags = persons.map(p => p.tags.indexOf("java") > -1 ? p.name: "").filter(p => p != "");
console.log(nameswithJsATags);






