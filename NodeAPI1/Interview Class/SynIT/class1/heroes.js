//How to preserve the immutability on my heroes list?
// Make sure the original list does not change
const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]
//var newHeroes =  Object.create(heroes);

// newHeroes.map(h => {
//     h.name = h.name.toUpperCase();
//     return h;
// })

// const newHeroes = heroes.map(h => {
//   h.name = h.name.toUpperCase()
//   return h
// })
//console.log("heroes: ", heroes);
console.log("new heroes: ", newHeroes);