let student = { 
	name : "tin",
	courses : ["php", "java"],
	showInfor: function(para = "-"){
		this.courses.forEach(course => console.log(`${this.name} ${para} hoc khóa : ${course}`))
	}

};
student.showInfor();