//Multiplication Table
for(let ctr = 1; ctr <= 9; ctr++){
  for(let point = 1; point <= ctr; point++){
	  document.write(ctr + "*" + point + "=" + (ctr*point) + " ");
  }
  document.write("<br>");
}

document.write("<br><br><br>");

//Odd Even Number
for(let x = 1; x <= 20; x++){
  if(x % 2 == 0){
	  document.write(x + " is an even number.<br>");
  }
  else{
	  document.write(x + " is an odd number.<br>");
  }
}