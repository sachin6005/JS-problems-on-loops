
// for loop

// To check a prime number

var num = 7;
var i = 1;
var count = 0;

for(i=1; i<=num; i++)
{
 if(num % i == 0)
  count++;
}

if(count == 2)
 console.log(num +" is a prime number");
else
 console.log(num +" is not a prime number");


// Find even and odd numbers between upto 15

for (var i=0; i<=15; i++) {
        if (i === 0) {
                console.log(i +  " is even");
        }
        else if (i % 2 === 0) {
                console.log(i + " is even");   
        }
        else {
                console.log(i + " is odd");
        }
}

// while loop

//GCD

var num1=2
var num2=4
function gcd(num1, num2) {
while(num1!=num2){
  if(num1 > num2){
    num1 -=num2;
    console.log(num1)
  }
  else{
    num2-=num1;
    console.log(num2)
  }
}
return num2;
}

console.log(gcd(num1,num2))


// To check a prime number
var num = 7;
var i = 1;
var count = 0;

while(num >= i)
{
 if(num % i == 0)
  count++;
 i++;
}

if(count == 2)
 console.log(num +" is a prime number");
else 
 console.log(num +" is not a prime number");

