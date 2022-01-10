
// 1.Given a and b, your function should return the value of a power b

const powerFunc=(a,b)=>Math.pow(a,b);
console.log(powerFunc(2,3));

// 2.Given length of a regular hexagon, your function should return area of the hexagon
const areaofHexagon=(size)=>size*size*2.598;
console.log(areaofHexagon(10));
// 3.Given a sentence, your functions should return the number of words in the sentence

const noOfWords=sentece=>{
     let ans=0;
     for(let i=0;i<sentece.length;i++){
         if(sentece[i]===" "||i===sentece.length-1)
         ans++;
     }

     return ans;
}
console.log(noOfWords("We are neoGrammers"))

// 4.Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user

const findMin=(...args)=>Math.min(...args)
console.log(findMin(1,2,2,4,4,0,-1));//-1

// 5.Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
const findMax=(...args)=>Math.max(...args);
console.log(findMax(1,2,2,4,4,0,-1));//4

//6.Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all
const typeOfTriangle=(angle1,angle2,angle3)=>angle1+angle2+angle3!=180?"not a":angle1===angle2&&angle2===angle3?"equilateral":angle1!=angle2&&angle2!=angle3?"scalene":"isosceles";
console.log(`${typeOfTriangle(40,30,120)} triangle`);



