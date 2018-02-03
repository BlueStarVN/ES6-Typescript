function func1(name, age){
	return `${name} + ${age}`;
} 
var func2 = function(name, age){
	return `${name} + ${age}`;
} 
var func3 = (name, age)=>{
	return `${name} + ${age}`;
} 

var func3 = (name, age) => `ten:${name}-tuổi:${age} `;
console.log(func2("tin",10));