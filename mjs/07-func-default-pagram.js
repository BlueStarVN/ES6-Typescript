function course (name, price = 20)
{
	return `Tên Khóa Học : ${name}, Giá ${price}`;
}
var dom =  document.getElementById("mContent");
dom.style.color = "blue";
dom.innerHTML = course("PHP",5);