// Code your solutions in this file

let messages = [];
let names = ["Guadalupe", "Ollie","Aki"]


function writeCards(names, eventName){
for (let i =0; i < names.length; i++)
{
    messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
}
return  messages
}
//writeCards(names, "sprise")
function countDown(number){
for (let i =0; i < 11; i++)
{
    console.log(i)
}
}