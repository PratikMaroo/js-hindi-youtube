let arr = [1,2,3,4,5,6,7]

for (const x of arr) {
  //  console.log(x);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if(greet == " ")
    continue
   // console.log(`Each char is ${greet}`)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America") 
map.set('Fr', "France")
map.set('IN', "India")


//console.log(map);
for (const [key, value] of map) {
   //console.log(key, ':-', value);
}

const myObject = {
  game1: 'NFS',
  game2: 'Spiderman'
}

for (const [key, value] of myObject) {
   // console.log(key, ':-', value);
}