//console.log('Hello Dawood!');







//         1
//lecture for VARIABLES

/*
var name='Dawood';
console.log(name);

var lastName="Chouhan";
console.log(lastName);

var age=24;
console.log(age);

var maxAge=true;
console.log(maxAge); */





///             2

//Variables Extended Lecture


/*

var name='Dawood';
var age=24;
console.log(name + ' ' + age); //here javaScript mixes the string and the number because it has Dynamic Typing and this is called Type COERTION
console.log(age + name); //converted to string
console.log(age + age); //converted to int

var job, isMarried;

console.log(job); //this will be displayed as undefined as the variable is not given a value, and if we declare it afterwords , still it will be "UNDEFINED"

job="Developer";

console.log(job);//here it is declared

isMarried=false;

console.log(name + ' is a ' +  age + ' years old ' + job +'. Is he married? ' + isMarried + '.') //Output: Dawood is a 24 years old Developer. Is he married? false.




age="twenty four"; //we have MUTATED(over ridden) this variable and changed its value to string
job='Integrator';
//The Code is read line by line in a sequence
//As the variables are mutated and we are writing the below console after mutation we will get a different out with changed variable declaration

console.log(name + ' is a ' +  age + ' years old ' + job +'. Is he married? ' + isMarried + '.') //Output: Dawood is a twenty four years old Integrator. Is he married? false.


//var fullName=prompt('What is the Full Name?');//this will give a prompt window asking a question.
//to print what we type in the prompt in the console we write the below code
//console.log(fullName);

alert('Do you want to exit?'); //this gives a alert popout on the screen  


alert(name + ' is a ' +  age + ' years old ' + job +'. Is he married? ' + isMarried + '.');   */










//////                3

// Operators Explained




//Even the below code will present the same output, but as 2018 is repeated , we can give it a variable name
/* var birthYear= 2018 - 24;



birthYear= 2018 - 24*2; */
/*
var now = 2018;
var birthYear= now - 24;

birthYear= now - 24*2; //2018-48=1970

console.log(birthYear);// Output: 1970 at the console


*/









//Example of operator precedence is below


//Link:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

/* console.log(3 + 4 * 5); // 3 + 20
// expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// expected output: 36

var a;
var b;

console.log(a = b = 5);
// expected output: 5;
*/
/*
var ageJohn=30;
var ageSmith=24;

//ageJohn= (3 + 5) * 2 +2; Output:18
//ageJohn=  3 + 5 * 2 +2; Output:15

ageJohn = ageSmith=(3 + 5) * 2 +2;
//ageJohn = ageSmith= 18; //right to left will be executed


console.log(ageJohn);//o/p=18
console.log(ageSmith);

ageJohn++ ;//this is increment operator
ageJohn= ageJohn + 1; //this is same as ageJohn++ //o/p=20

--ageJohn; //o/p=19
ageJohn--; // o/p=18

console.log(ageJohn);


ageSmith *= 2; //ageSmith * 2 = 18 * 2 =36
ageSmith = ageSmith * 2;//O/p= 36* 2=  72

console.log(ageSmith);
*/










//                  4

/////////////////////////////////////
////////////If/Else Statements


//These are the structure that allows us to execute only certain parts of code and some times allows us to execute certain parts multiple times

/*var name ='Vinay';
var age =23;
isMarried = 'yes';

if(isMarried =='no'){
    console.log(name + ' Hopefully he will marry soon.');
} else{
    console.log(name + ' shadi ki party de.')
}

if(isMarried ==='yes'){
    console.log(name + ' Hopefully he will marry soon.');
} else{
    console.log(name + ' shadi ki party de.')
}


isMarried= false;
if(isMarried){
    console.log('Yes');
}else{
    console.log('No');///here as we are giving a false value in if statement it is giving NO as output, as it takes boolean here
}

isMarried= true;
if(isMarried){
    console.log('Yes');
}else{
    console.log('No');//O/p: Yes
}



isMarried= false;
if(isMarried){
    console.log('Yes');
}//In this case output doesnt appear as it is false, it will appear if its true
*/

//////////////////////////////
//////////IMPORTANT////////////
//////////////////////////////
////// DIFFERENCE B/W   "  == " AND "  ===  "


//In contrast to double equals operator, another operator with three equals not made the implicit conversion so it not only compare values but also the type of variable that's why it is also called strict comparison.Due to not implicit conversion, it is not only better in performance but guarantees the correct results always.

// == does type coertion and === doesnt
//Example
/*if(23 =="23"){
    console.log("It does Type Coertion and doesnt care about the data type");//This will be printed
}

if(23==="23"){
    console.log('It Compares strictly even the data type');// this will not be printed
}*/


/*
var marksinBE = prompt('enter your marks in BE');

if (marksinBE >= 35 && marksinBE <= 50)
{
    console.log('Life is difficult');
    
} else if (marksinBE >= 50 && marksinBE <= 70)
{
    console.log('eligible to work');
    
} 
else
{
    console.log('Can work any where');
}*/








//                 5

/////////////////////////////////////
//////Boolean Logic and Switch (Lecture)
///////////////////////////////////////////////////////////////////////
/*
var age=35;
if(age<=19){//=,<=,>=,<,>,
    console.log('Teenager');
}else{
    console.log("Adult");
}

if(age<20){
    console.log('Teenager');
}else if(age>20 && age<30){
    console.log('Young man');
}else{
    console.log('old man');
}


var job ='teacher';

job=prompt('What does john do'); ///important//////////////////////////////////////////


//switch-break statements

switch(job){
    case 'teacher':
        console.log('John is a teacher');
        break;
    case 'driver':
        console.log('John is a driver');
        break;
    case 'cop':
        console.log('John is a cop');
                    break;
    default: //here default acts same as ELSE statement
        console.log('John does something else');
}

*/





//                        6



/////////////////////////////////////////////////////////////
//Coding Challenge 1/////////////
///////////////////////////////////////////////
/*
var ageJohn, ageSmith, heightJohn, heightSmith;

ageJohn=20;
ageSmith=20;
heightJohn=140;
heightSmith=140;

var scoreJohn= heightJohn + 5* ageJohn;
var scoreSmith= heightSmith + 5* ageSmith; */


/*
if(scoreJohn > scoreSmith ){
    console.log('John is winner with' + scoreJohn + ' points.');
}else if(scoreJohn === scoreSmith){
    console.log('Score of john is '+ scoreJohn +'. Score of Smith is ' + scoreSmith + '.');
}else{
    console.log('Smith is Winner with '+ scoreSmith + ' points');
}
*/

/*
var ageDawood= 20;
var heightDawood= 140;
 var scoreDawood= heightDawood + 5 * ageDawood;

if(scoreDawood>scoreJohn && scoreDawood> scoreSmith){
    console.log ( 'Dawoods wins with ' + scoreDawood + ' points.');
}else if(scoreJohn>scoreDawood && scoreJohn>scoreSmith){
    console.log ( 'John wins with ' + scoreJohn + ' points.');
    
}else if(scoreSmith>scoreDawood && scoreSmith>scoreJohn){
    console.log ( 'Smith wins with ' + scoreSmith + ' points.')
    
    
}else{
    console.log('All Score\'s are equal='+ scoreDawood + ' = ' + scoreJohn + ' = '+ scoreSmith);//here in between string we use backslash to escape that symbol/////////////IMPORTANT POINT
}


*/


/////DONE BY MYSELF


//////////////////Below is taken from Q&A


/*


const playerOne = {
 age: 30,
 height: 60,
 score: 0
};
const playerTwo = {
 age: 30,
 height: 50,
 score: 0
};
const playerThree = {
 age: 30,
 height: 60,
 score: 0
}
playerOne.score = (playerOne.age * 5) + playerOne.height;
playerTwo.score = (playerTwo.age * 5) + playerTwo.height;
playerThree.score = (playerThree.age * 5) + playerThree.height;
console.log(playerOne.score, playerTwo.score, playerThree.score);
if(playerOne.score > playerTwo.score && playerOne.score > playerThree.score){
 console.log(`Player One wins`);
}
if(playerTwo.score > playerOne.score && playerTwo.score > playerThree.score){
 console.log(`Player Two wins`);
}
if(playerThree.score > playerOne.score && playerThree.score > playerTwo.score){
 console.log(`Player Three wins`);
}
if(playerOne.score === playerTwo.score && playerTwo.score > playerThree.score && playerOne.score > playerThree.score){
 console.log(`Draw - Players One & Two Win`);
} else if(playerOne.score === playerThree.score && playerOne.score > playerTwo.score && playerThree.score > playerTwo.score){
 console.log(`Draw - Players One & Three win`);
} else if(playerTwo.score === playerThree.score && playerTwo.score > playerOne.score && playerThree.score > playerOne.score){
 console.log(`Draw - Players Two & Three Win`);
}
else(playerOne.score === playerTwo.score && playerOne.score === playerThree.score){
 console.log(`Draw - All players win`);
}


*/













//                      7

////////////////////////////////////////////////////////////
///////////FUNCTIONS
///////////////////////////////////////////////////////////
//Def: Can be called as machine(function here) to which we give some input , it does some stuff with it and gives us output
//Functions are useful to avoid REPETITION

//Arguments is the data we want to pass into the function.

/*

function calAge(yearOfBirth){
    var age = 2018  - yearOfBirth;
    
//here yearOfBirth is the information we pass into the function when we call the function.
    return age;
}
//calAge(1990);//here the value is not stored anywhere as we didnt assign this a variable

var ageJohn = calAge(1990);
var ageVinay = calAge(1994);
var ageShashank = calAge(1994);
var ageAkshay = calAge(1995);
var ageDawood = calAge(1993);
var ageRakesh = calAge(1992);//and so on we can assign as many variables as we want without repetition

//console.log(ageDawood, ageAkshay, ageJohn , ageShashank , ageVinay);

//Explanation: the calAge Function gets called with an argument of yearOfBirth and is sent into the function as assigned the value and returns the age

function yearsUntilRetirement(name, year){
    //var age= calAge(year);
    //var retirement = 65 - age;//here this function calls the above function
    //above statement is for calling function into another function we can also write it as var retirement=65 - calAge(year);
    
    var retirement=65 - calAge(year);
    //console.log(name + ' retires in ' + retirement + ' years.');
    
    if(retirement>=0){
        console.log(name + ' retires in ' + retirement + ' years.');
    }else{
        console.log(name +' already retired ' + Math.abs(retirement) + ' years ago');/////MATh.abs to change + to -
    }
}
 yearsUntilRetirement('Dawood', 1993);//O/p=40
yearsUntilRetirement('Vinay', 1994);
yearsUntilRetirement('shashank', 1948);//since this will be negative, we can put if-else



*/









//                      8

////////////////////////////////////////////////////////////
///////////FUNCTIONS: Statements and Expressions
///////////////////////////////////////////////////////////

/*
//we write STATEMENT as BELOW
function someFunction(parameter){
    
    //our code
}
//Examole: 3  + 2;
// or var x = 3; since these have outputs


//WE WRITE PARAMETER AS BELOW
var someFunction = function(parameter){
    
    //our code
}

//Example: if (x===3){
//do something
//}


//DIFFERENCE BETWEEN STATEMENT AND EXPRESSION
//EXPRESSION PRODUCES A VALUE and OUTCOME WHILE A STATEMENT PERFORMS A ACTION

*/






/////                    9

/////////////////////////////////////////////////////////////////////
//////////////////////ARRAYS
//////////////////////////////////////////////////////////////////////

/*

var names=['Dawood', 'Shashank', 'Vinay'];//one way of declaring an array
var years= new Array(1993 , 1994, 1995);//Another way of declaring an array

console.log(names[1]);
console.log(years[2]);

//Mutating an array is same as we did before

names[2] = 'Akshay';
console.log(names);

//ONE ARRAY CAN HOLD AS MANY DATA TYPES AS WE WANT

var dawood=['dawood','chouhan', 1993, 'Developer',false];
dawood.push('Red');//push adds an element at the end of an array

console.log(dawood);

dawood.unshift('Mr.');//adds one or more element at the beginning

console.log(dawood);
dawood.pop();//removes the last element from the array
console.log(dawood);


dawood.shift();//removes from beginning
console.log(dawood);

//dawood.indexOf('chouhan'); //It gives the value of position at which the string in array is stored, we need to log it to console for the value. IT IS USED TO CHECK WEATHER THE VALUE IS PRESENT IN THE ARRAY OR NOT
//and if the element is not in the array it returns minus 1.

if (dawood.indexOf('Developer')=== -1){
    console.log('Dawood is not a designer');
}


*/












//                    10                



////////////////////////////////////////////////
/////////////    OBJECTS
///////////////////////////////////////////////



//In order to access specific arrays not by their number but by keywords we use objects

//In Objects Order doesnt matter while in arrays order matters
/*
var john={
    name: 'Dawood',
    lastName: 'chouhan',
    yearOfBirth:1993,
    job:'Developer',
    isMarried:false
    
};

console.log(john);
//below is how we retrieve values from objects

console.log(john.lastName);
console.log(john['lastName']);



var x= 'job';
console.log(john[x]);//this is how we retrieve values from objects

john.lastName='Ibrahim';//this is how e data mutate
console.log(john.lastName);

/// Below is another way of creating an object, same as we did in arrays

var jane =new Object();
jane.name="Jane";
jane.age=24;
jane['yearOfBirth']=1993;
jane['isMarried']=false;

console.log(jane);


*/




////////////               11

/////////////////////////
//OBJECTS & METHODS
////////////////////////////////////////////
//Objects can have string , boolean etc and even arrays, functions etc

/*  version 1.0
var john={
    name: 'Dawood',
    lastName: 'chouhan',
    yearOfBirth:1993,
    job:'Developer',
    isMarried:false,
    family: ['mummy','papa','brother','sisters'],
   // calculateAge: function(yearOfBirth){
        //return 2016-yearOfBirth;
    //}
    calculateAge : function(){
        return 2018 - this.yearOfBirth;//here this means john and we can also write john.yearOfBirth
    }
};
//console.log(john.calculateAge(2000));
//Objects contain functions and these functions are called METHODS


console.log(john.calculateAge());


var age=john.calculateAge();
john.age=age;//for getting in the list of console(storing it)
console.log(john);


*/

/* version 2.0
var john={
    name: 'Dawood',
    lastName: 'chouhan',
    yearOfBirth:1993,
    job:'Developer',
    isMarried:false,
    family: ['mummy','papa','brother','sisters'],
    calculateAge: function(){
        this.age= 2018-this.yearOfBirth;
    }
   
};
john.calculateAge();
console.log(john);

*/










//                    12               



////////////////////////////////////////////////
/////////////    LOOPS & ITERATIONS
///////////////////////////////////////////////
/*
for(i=0; i<10; i++){
    //console.log(i);
}


var names=['dawood','shashank','vinay','chandu','akshay']
//For LOOP

//for(var i=0; i<names.length; i++){
  //  console.log(names[i]);
//}



for(var i=names.length-1; i>=0; i--){
    console.log(names[i]);
}

//While LOOP

var i=0;
while(i<names.length){
    console.log(names[i]);
    i++;
}




for(var i=1; i<=5; i++){
    console.log(i);
    //if we want to break this at 3 we do
    if(i===3){
        break;//O/p:1 2 3
    }
}

for(var i=1; i<=5; i++){
    
    
    if(i===3){
        continue;
    }
    console.log(i);//O/p:1 2 4 5
}
*/













///////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/


////////////Answer


/* 


function printFullAge(years) {
    var ages = [];
    var fullAges = [];
    
    for (var i = 0; i < years.length; i++) {
        ages[i] = 2016 - years[i];
    }

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
            fullAges.push(false);
        }
    }
    
    return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);


/////////////OUTPUT
script.js:799 Person 1 is 15 years old, and is NOT of full age.
script.js:796 Person 2 is 31 years old, and is of full age.
script.js:796 Person 3 is 22 years old, and is of full age.
script.js:799 Person 4 is 2 years old, and is NOT of full age.
script.js:796 Person 5 is 43 years old, and is of full age.
script.js:799 Person 1 is 4 years old, and is NOT of full age.
script.js:796 Person 2 is 101 years old, and is of full age.
script.js:799 Person 3 is 17 years old, and is NOT of full age.

*/

