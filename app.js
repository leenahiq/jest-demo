//example 1
const add = (num1,num2) =>{
    return num1 + num2;
}

//example 2
const myArray = ["dave","steve","gary"];

//activity 1 

const getNotNull  = ()=>{
    return 20
}

//activity 2
const truthy = (num1,num2)=>{
 if (num1 === num2){
    return true;  
 }else{
    return false;
 }
  
}

//activity 3

const obj = {
    name:"leenah",
    age:"forever young"

}

//activity 4
const getItems = (array) =>{
    return array.filter((e) =>e.length >= 6);
}

// activity 5 
const convertNumberToString = (num) => {
	return num.toString();
};

//activity 6
const getPlanetFromOrder = (order) => {
	const planets = [
		'Mercury',
		'Venus',
		'Earth',
		'Mars',
		'Jupiter',
		'Saturn',
		'Uranus',
		'Neptune',
	];
	return planets[order - 1];
};




module.exports = {add,myArray,truthy,obj,getNotNull,getItems,convertNumberToString,getPlanetFromOrder}








