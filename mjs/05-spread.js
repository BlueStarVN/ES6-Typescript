let courseWeb = ["php", "wordpress", "html"];
let courseMobile = ["android", "ios", "window phone"];
// sử dụng spread để nối 2 array
let sumCourse = [...courseMobile, ...courseWeb];
for (coures in sumCourse)
{
	console.log(sumCourse[coures]);
}