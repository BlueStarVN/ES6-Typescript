var myContent = document.getElementById("mContent");
function drawShape()
{
	myContent.innerHTML=("");
	for(var i = 1 ; i <= 10 ; i++)
	{
		var elmP = document.createElement("p");
		elmP.innerHTML = i;
		myContent.appendChild(elmP);
	}
}
function clearShape()
{

	myContent.innerHTML=("");
}