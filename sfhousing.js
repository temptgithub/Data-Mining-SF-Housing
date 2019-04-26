const fs = require("fs");

let rawdata = fs.readFileSync("data.json","utf8");

let dataObject = JSON.parse(rawdata);

///   below is for INCLUSIVE


let csvdata = fs.readFileSync("housing.csv","utf8");


let linesArray = csvdata.split("\n"); // splits data into usable lines for analysis
//console.log(linesArray[0]);  // == string
//console.log( linesArray[9]); // =string
//console.log( linesArray[10]); // =string
// ------make data
let dataarr = [];

function isNum(n) {
    return !isNaN(n/0);
}
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

let myArr = [];
for (var i = 0; i < linesArray.length ; i++)  {
 dataarr[i] = linesArray[i].split(",");
 
let rid = isNum( dataarr[i][22] );
let rida = isNumber( dataarr[i][22]  );

 if ( rid === true ) {
    dataarr[i].splice(22, 1);
 }
 // below stmts intetionally put in to clean up the data further
 
 while ( rid === "true" ) {
    dataarr[i].splice(22, 1);
 }  

 if ( isNum( dataarr[i][22]) === true ) {   
 dataarr[i].splice(22, 1);
 }
 if ( isNumber( dataarr[i][22]) === true ) {   
 dataarr[i].splice(22, 1);
 }

  
  myArr.push(dataarr[i]);  // array that is to be sorted


}

// below code short arRAY by element zero, the precise year
function Comparator(a, b) {
   if (a[0] < b[0]) return -1;
   if (a[0] > b[0]) return 1;
   return 0;
 }

 myArr = myArr.sort(Comparator);

// changes  string in column 12  to uppercase for easier search 

//DEMO

let demoarr = [];
let erectarr = [];

for (var i = 1; i < myArr.length; i++) {

myArr[i][22]  = myArr[i][22].toUpperCase(); 
let astring = myArr[i][12].toUpperCase();
  


// find all demos with year, date, quarter, neighborhood

	if ( astring.includes('DEMO') ) {
    
     let d = [  myArr[i][1] , myArr[i][0] , myArr[i][2], myArr[i][22]   ];
     demoarr.push(d);
 	}
//	console.log( "DEMO", myArr[i][1] , myArr[i][0] , myArr[i][2], myArr[i][22] );

	if ( astring.includes('ERECT') ) {
       let e = [  myArr[i][1] , myArr[i][0] , myArr[i][2], myArr[i][22]   ];
       erectarr.push(e);
//	console.log( "ERECT: " ,  myArr[i][1] , myArr[i][0] , myArr[i][2], myArr[i][22] );
	
	}
 
}

console.log("Total number of housing unit Demolitions between 2005-2018:", demoarr.length);
console.log("Total number of housing units ERECTed  between 2005-2018:" , erectarr.length);

// console.log(demoarr);



  
//   	console.log( ` ${distloc[i]} has ${district(distname)} Demolitions`);


 //console.log(demoarr[10][3]);
    let c = [];
    let dcount = 0;
	for (var i = 0; i < demoarr.length; i++) {
//   console.log(demoarr[i][3]);
	let d = demoarr[i][3];
	
			if ( d.includes('BAYVIEW ') ) {
			  dcount = dcount + 1;
//
			}
	}

//	let dd = c.length
	console.log(` The greatest number of demolitions btwn 2005 - 2018 is the BAYVIEW district with ${dcount} demolitions `);

console.log("The below data shows the trends of housing demolitions from 2005 to 2018. ");
const util = require('util')
console.log(util.inspect(demoarr, { maxArrayLength: null }))
//console.log(demoarr);


