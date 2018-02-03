/*let myContent = document.getElementById("mContent");
myContent.style.color = "red";
let course  = "php";
let price   = "300k";
myContent.innerHTML = `<div> Khóa Học : ${course}, giá ${price} </div>`;*/
var myContent = document.getElementById("mContent");

var todo = {
	id : 69,
	name : "play game",
	done : false
};
myContent.innerHTML = `
<div class="id-todo-${todo.id}">
<span class="glyphicon ${todo.done == true ? "glyphicon-ok" : ""} "></span>
<span>${todo.name}</span>
</div>`;