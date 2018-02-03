function calculate (action, ...values)
{
	let result = 0;
	switch(action)
	{
		case "+" :
			for (let value in values)
			
				result = result  + values[value];
			
		break;
		case "-" :
		for (let value in values)
			
				result = result  - values[value];
		break;
	}
	return result;
}
console.log(calculate("-",1,2,3));