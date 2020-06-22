                    //===Chapter21-25===//
//Task1.
// var a=prompt('Enter first name');
// var b=prompt('Enter last name');
// var fullName=a+" "+ b;
// alert('Hello ' + fullName);   

//Task2.
// var a=prompt('Enter your fav mobile phone')
// var len=a.length;
// document.write('Length of string : '+ len);

//Task3.
// var a="Pakistani";
// document.write("Index of n is: "+a.indexOf('n'));

//Task4.
// var a="Hello World";
// document.write("Last index of 'l' is: "+a.lastIndexOf('l'));

//Task5.
// var a="Pakistani";
// document.write("Character at index 3 is:  "+a.charAt(3));

//Task6.
// var a=prompt('Enter first name');
// var b=prompt('Enter last name');
//var c=a.concat(b);
//alert(c);

//Task7.
// var a="Hyderabad";
// document.write("City: "+ a+ "<br>");
// var rep= a.replace("Hyder","Islam");
// document.write("After Replacement: "+rep)

//Task8.
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message +"<br>");
// for (var i = 0; i < message.length; i++) { 
//        if (message.slice(i, i + 3) === "and") { 
//          message = message.slice(0, i) + "&" + message.slice(i + 3); 
//         } 
// }
// document.write(message); 

//Task9.
// var a= "472"
// document.write("Value: "+a);
// document.write("Type: String");
// var b=parseInt(a);
// document.write("Value: "+a);

// document.write("Type: Number");

//Task10.
// var a=prompt("Enter any sentence in small letters");
// var b= a.toUpperCase();
// alert(b);

//Task11.
// var str = prompt("Enter to convert in title case");

// alert("In Title case:  "+

// str.split(' ')
//    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
//    .join(' ')

// )

//Task12.
// var num =35.36; 
// var a= num.toString();
// console.log(a);

//Task13.
// var name=prompt("Enter username");
// var name1=prompt("Enter valid username");
// if(name==='!' && name===',' && name===',' && name==='@'){
// alert(name1);
// }

//Task14.
// var sear=prompt("What do you want to order");
// sear=sear.toLowerCase();
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]; 
// for(var i=0;i<A.length;i++){
//     if(A[i]===sear){
//         alert("This is available");
//     }
//     else{
//         alert("This is not available");
//     }
// }


//Task15.

//Task16.
// var university="University of Karachi";
// var b=split(university);
// document.write(b);

//Task17.
// var str = "Pakistan";
// var res = str.charAt(str.length-1);
// alert(res);

//Task18.
// function gfg() { 
//     var a = "The quick brown fox jumps over the lazy dog"; 
//     var b = "the"; 
//     var r = a.split(b).length - 1; 
//     document.write(r); 
// }
// gfg();

                    //===Chapter26-30===//

//Task1.
// var a=prompt("Enter positive integer");
// if(a<0){
//     var a=prompt("Enter positive integer");  
// }  
// document.write("number: "+a+"<br>");
// document.write("round off value: "+Math.round(a)+"<br>");
// document.write("floor value: "+Math.floor(a)+"<br>");
// document.write("ceil value: "+Math.ceil(a)+"<br>");  

//Task2.
// var a=prompt("Enter negative float num");
// if(a>0){
//     var a=prompt("Enter negative float num");  
// }  
// document.write("number: "+a+"<br>");
// document.write("round off value: "+Math.round(a)+"<br>");
// document.write("floor value: "+Math.floor(a)+"<br>");
// document.write("ceil value: "+Math.ceil(a)+"<br>");

//Task3.
// var a=prompt("Enter any value");
// var b=Math.abs(a);
// alert(b);

//Task4.
// document.write("Random dice value: "+ Math.floor((Math.random() * 6) + 1));

//Task5.


//Task6.
// document.write("Random value b/w 1 to 100: "+ Math.floor((Math.random() * 100) + 1));

//Task8.
// var sec=5;
// var b=prompt("Enter number b/w 1 to 10");
// if(b==5){
//     alert("Yayy! Correct")
// }
// else{
//     alert("Try again")
// }

                    //===Chapter31-34===//

//Task1.
// var a= new Date();
// console.log(a)

//Task2.
// var month_name = function(dt){
// mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//       return mlist[dt.getMonth()];
//     };
// console.log(month_name(new Date()));

//Task3.
// var a=new Date();
// var b=a.toString();
// var c=b.slice(0,3);
// alert("Today is: "+ c);

//Task4.
// var a=new Date();
// var b=a.toString();
// var c=b.slice(0,3);
// if(c==="Sun" && "Sat"){
//     alert("Its Fun day")
// }
// else{
//     alert("Its not sat or sunday today")
// }

//Task5.
// var a=new Date();
// var b=a.toString();
// var c=b.slice(7,10);
// if(c<16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

//Task6.
// var a=new Date();
// document.write("Current date: "+ a+"<br>");
// var b=a.getTime();
// document.write("Ellapsed MilliSeconds since january 1,1970: "+b+"<br>");
// var c=a.getMinutes();
// document.write("Ellapsed Minutes since january 1,1970: "+c);

//Task7.
// function myFunction() { 
// var date = new Date(); 
// var hours = date.getHours(); 
// var minutes = date.getMinutes(); 
// if(hours >= 12){
//      alert("Its PM")
// }
// else{
//      alert("Its AM")
// } 

// document.write(  newformat )                   
// } 
// myFunction();

//Task8.
// var d = new Date()
// var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
// var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
// document.write(weekday[d.getDay(4)] + " ")
// document.write(d.getDate(31) + ". ")
// document.write(monthname[d.getMonth(11)] + " ")
// document.write(d.getFullYear(2020))

//Task9.
// function days_passed(dt) {
//     var current = new Date(dt.getTime());
//     var previous = new Date(dt.getFullYear(), 0, 1);
  
//     return Math.ceil((current - previous + 1) / 86400000);
// }
// document.write(days_passed(new Date(2020, 5, 25))+" days has passed since 1st Ramdan,2015");

//Task10.
// var startTime, endTime;

// function start() {
//   startTime = new Date();
// };

// function end() {
//   endTime = new Date();
//   var timeDiff = endTime - startTime; //in ms
//   // strip the ms
//   timeDiff /= 1000;

//   // get seconds 
//   var seconds = Math.round(timeDiff);
//   console.log(seconds + " seconds");
// }
// start(2015);
// end(2020);





//Task11.
// function myFunction() {
//     var a = new Date();
//     document.write("current date: "+a+"<br>");
//     a.setHours(a.getHours() - 1);
//     document.write("1 hour ago it was, "+ a);
// }
// myFunction();

//Task12.
// function myFunction() {
//     var a = new Date();
//     alert("current date: "+a);
//     a.setFullYear(a.getFullYear() - 100);
//     alert("100 years ago it was, "+ a);
// }
// myFunction();

//Task13.
// var a=prompt("Enter your age");

//Task14.
// document.write("K-Electric Bill");
// var a=prompt("Enter name");
// var b= prompt("Enter month");
// var c=prompt("Enter number of units");
// var d=prompt("Enter charge per unit");

// var netam=c*d;
// document.write(netam);
// var gross=netam*late
// document.write(gross)


                    //===Chapter35-38===//

//Task1.
// function date(){
//     var a=new Date();
//     alert(a)
// }
// date();

//Task2.
// function greet(){
//     var a=prompt("Enter first name");
//     var b=prompt("enter last name");
//     var c=a + b;
//     alert("Welcome "+c);
// }
// greet();


//Task3.
// var a=+prompt("Enter first num");
// var b=+prompt("Enter second num");
// function add(){
//   return a+b;
// }
// document.write("The sum is "+add());


//Task4.
// function cal(){

// }

//Task5.
// function Square(num) {
// var i = num*num;
// document.write("The square of number "+num + " is " + i ) ;
// }
// var num = parseInt(prompt("Enter a number:"));
// Square(num);

//Task6.
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
// n=prompt('Enter number')
  
// document.write( "The factorial of "+n+" is " +factorial(n) );


//Task7.
// var a=+prompt("Enter first number to start counting from");
// var b=+prompt("Enter last number where counting end");
// function counting(){
//     for(i=a;i<=b;i++){
//         if(i===b){
//             break;
//         }
//     document.write(i)    
//     }
// }
// counting();

//Task8.
// function findHypotenuse(side1, side2){
//     h = (((side1 * side1) + (side2 * side2))**(1/2)); 
//     return h; 
// } 
  
// side1 = 3; 
// side2 = 4; 
  
// alert(findHypotenuse(side1, side2)); 


//Task9.
// var length = +prompt("Enter a number for the length of your rectangle.");
// var width = +prompt("Enter a number for the width of your rectangle.");
// function area(length, width) {
//     return length * width;
// }
// document.writeln('The area of your rectangle is ' + area(length, width)); 

//Task10.
// function check_Palindrome(str_entry){
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//     // Check whether the string is empty or not
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//     // Check if the length of the string is even or odd 
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//     // If the length of the string is 1 then it becomes a palindrome
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//     // If the length of the string is odd ignore middle character
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//     // Loop through to check the first character to the last character and then move next
//         for (var x = 0; x < ccount; x++) {
//     // Compare characters and drop them if they do not match 
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return true;
//     }
//     var a=prompt("Enter to check palindrome");
//     check_Palindrome(a);


//Task11.
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// var a=prompt("Enter string");
// console.log(uppercase(a));

//Task12.
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// var a=prompt("Enter string");
// document.write("Longest word is  "+find_longest_word(a));

//Task13.
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSResourceS.com', 'o'));

//Task14.
// function calcGeometry(radius) {
//     var circumference = Math.PI * 2*radius;
//     console.log("The circumference is " + circumference);
//     var area = Math.PI * radius*radius;
//     console.log("The area is " + area);
// }

 
    



    