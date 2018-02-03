let courses = ["android", "java", "php"];
var courses1 = courses.map( course => course.toUpperCase()
	);

console.log(courses1);
let scores = [11, 4, 9, 12];
scores.sort((x, y) => x > y ? true : false );
