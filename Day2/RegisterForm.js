function validateForm()
{

	document.getElementById('firstn').innerHTML = document.getElementById('name').value
	document.getElementById('add').innerHTML = document.getElementById('address').value
	document.getElementById('mobile').innerHTML = document.getElementById('mnum').value
    document.getElementById('em').innerHTML = document.getElementById('email').value
	document.getElementById('nty').innerHTML = document.getElementById('nationality').value

	if(document.getElementById('male').checked)
	{
		document.getElementById("disp").innerHTML= document.getElementById("male").value;
	}
		else if(document.getElementById('female').checked)
	{
		document.getElementById("disp").innerHTML = document.getElementById("female").value;
	}

	var inputs = document.querySelectorAll('.pl');   
        for (var i = 0; i < inputs.length; i++) {   
            inputs[i].checked = true;   
        }   
		var l1 = document.getElementById("sub1");  
		var l2 = document.getElementById("sub2");  
		var l3 = document.getElementById("sub3");  
		var l4 = document.getElementById("sub4");  
		var l5 = document.getElementById("sub5");  

		var res=" ";   
  if (l1.checked == true){  
    var pl1 = document.getElementById("sub1").value;  
    res = pl1 + ",";   
  }   
  else if (l2.checked == true){  
    var pl2 = document.getElementById("sub2").value;  
    resres = res + pl2 + ",";   
  }  
  else if (l3.checked == true){  
    var pl3 = document.getElementById("sub3").value;  
    resres = res + pl3 + ",";   
  }  
  else if (l4.checked == true){  
    var pl4 = document.getElementById("sub4").value;  
    resres = res + pl4 + ",";   
  }  
  else if (l5.checked == true){  
    var pl5 = document.getElementById("sub5").value;  
    resres = res + pl5 + ",";   
  }  
	else {  
  return document.getElementById("result").innerHTML = "You have not selected anything";  
  }   
}