var todoArray = [
	"Quay Tay",
	"play game",
	"học tiếng nhật"	
];
/*var todolength = todoArray.length;
for(var i = 0; i<todolength; i++)
{
	console.log(todoArray[i]);
}*/
var todoObj = {
	id : 69,
	name : "play game",
	done : false
};
for (var todo in todoObj)
{
	console.log(todo+":"+todoObj[todo]);
}