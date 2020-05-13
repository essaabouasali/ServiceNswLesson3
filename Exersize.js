
// quistion 1
let me = {
    name : "essa",
    age : 24
};

// Q2
me.age++;

// Q3
me.hobbies = ["programming","swimming","cooking"];

//Q4
me.pets = [
    {
        name : "rex" ,
        age : 6,
        species : "Dog"

    } ,
    {
        name : "rex" ,
        age : 6,
        species : "Dog"
    },
    {
        name : "rex" ,
        age : 6,
        species : "Dog"
    }
];
//console.log(me.pets[0]);
//console.log(me.age);

// Q5 
let hobbiess = "My hobbies are ";
me.hobbies.push("painting");
for(let j=0 ; j<me.hobbies.length; j++)
{
    let hobby = me.hobbies[j];
    hobbiess += hobby;
}
console.log(hobbiess);


