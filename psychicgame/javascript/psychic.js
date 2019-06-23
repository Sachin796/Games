var correct=0;
var incorrect=0;
var  guess=10;
var words = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l'];
var data = []
var word ;

document.onkeyup = function(event)
{
word = words[Math.floor(Math.random()*words.length)];
if(word===event.key)
{
console.log(word);
correct++;
alert("Congragulations the answer is correct !!!")
// data.push("Your word guess of "+event.key+" is correct");
document.getElementById('allguess').append("Your word guess of "+event.key+" is correct"+"\n");
document.getElementById('wins').innerHTML = correct;
document.getElementById('loses').innerHTML = incorrect;
document.getElementById('guess').append = guess;
//alldata();
}
else
{

incorrect++;
if(guess>=1)
{
guess--;
}
else
{
alert("Sorry no more gusses left");
return ;
}
alert("Sorry the answer is incorrect :( ")
//data.push("Your word guess of "+event.key+" is incorrect \n");

document.getElementById('wins').innerHTML = correct;
document.getElementById('loses').innerHTML = incorrect;
document.getElementById('guessleft').innerHTML = guess;
document.getElementById('allguess').append("Your word guess of "+event.key+" is incorrect"+"\n");
//alldata();
}
function alldata()
{
var dummy="";
//     data.forEach(function(element,i)
//     {
//       //  console.log(element);
//         dummy+=element;
//         document.getElementById('allguess').innerHTML="";
// document.getElementById('allguess').innerHTML+=element;
// console.log(element);
//     })

for(var i=0;i<data.length;i++)
{
document.getElementById('allguess').innerHTML=data+"<br><br>";
}
}
}