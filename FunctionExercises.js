// Q1
function Addnumber(num1,num2)
{
    return num1 + num2 ;
}


// Q2
function greaterthan(num1 , num2)
{
    if(num1> num2)
    {
        return num1;
    }
    else
    {
        return num2;
    }
}


// Q3
function printarry(arry)
{
    for(let i=0;i<arry.length;i++)
    {
        console.log(arry[i]);
    }
}

//Q4
function addproperty(name, age)
{
    return {
    name : name,
    age : age
    }
}

//Q5
let people1 =[
    {
        name : "essa",
        age : 50 
    },
    {
        name : "david",
        age : 30

    },
    {
        name : "helen",
        age : 20
    }

];

function getoldest(people)
{
    let oldestcurrent;
    for(let i=0;i< people.length;i++)
    {
        let person = people[i];
        if(oldestcurrent)
        {
            if(person.age > oldestcurrent.age)
            {
                oldestcurrent = person;
            }
        }
        else{
            oldestcurrent = person;
        }
        
    }
    return oldestcurrent.name;
}
let name1=getoldest(people1);
console.log(name1);