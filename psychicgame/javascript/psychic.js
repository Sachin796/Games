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
document.getElementById('allguess').innerHTML=(`<span style='color:yellowgreen'>Your word guess of ${event.key} is correct </span>`);
document.getElementById('wins').innerHTML = correct;
document.getElementById('loses').innerHTML = incorrect;
document.getElementById('guess').append = guess;
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
document.getElementById('wins').innerHTML = correct;
document.getElementById('loses').innerHTML = incorrect;
document.getElementById('guessleft').innerHTML = guess;
document.getElementById('allguess').append(event.key+" , ");
}
function alldata()
{
var dummy="";
for(var i=0;i<data.length;i++)
{
document.getElementById('allguess').innerHTML=data+"<br><br>";
}
}
}