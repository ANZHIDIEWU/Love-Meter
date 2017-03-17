var regex = /^[a-zA-Z]+$/

function submit(){

	var name1 = document.getElementById('name1').value;
	var name2 = document.getElementById('name2').value;

	if(name1==""){
		alert("Your name can not be empty!");
	}
	else if(name2 ==""){
		alert("Your partner's name can not be empty!");
	}
	else if(!regex.test(name1)||!regex.test(name2)){
		alert("No special characters or space is permitted");
	}
	else{	

	var upperName1= name1.toUpperCase();
	var upperName2 = name2.toUpperCase();

	/*alert(upperName1+upperName2);*/

	var magicNum = new Array();

	magicNum = magic(upperName1,upperName2);

	//alert("two magic number: "+ magicNum[0]+" and "+ magicNum[1]);

	var D_value = Math.abs(magicNum[0]-magicNum[1]);

	var love = "";
	var date = new Date();

	//alert(D_value);

	if(D_value == 0){
		//alert("You and your partner's compatibility is perfect!");
		love = "perfect";
	}
	else if(D_value < 3){
		//alert("You and your partner's compatibility is high!");
		love = "high";
	}
	else if(D_value>=3 && D_value<=6){
		//alert("You and your partner's compatibility is medium!");
		love = "medium";
	}
	else{
		//alert("You and your partner's compatibility is low!");
		love = "low";
	}


	document.getElementById('tableDiv').style.display = "block";
	

	//alert("haha");
	var newTr = document.getElementById('table').insertRow(1);
	var newTd0 = newTr.insertCell();
	var newTd1 = newTr.insertCell();
	var newTd2 = newTr.insertCell();
	var newTd3 = newTr.insertCell();
	newTd0.innerHTML = document.getElementById('name1').value;
	newTd1.innerHTML = document.getElementById('name2').value;
	newTd2.innerHTML = love;
	newTd3.innerHTML = date.toLocaleString();
	//alert("lala");

	//alert(table.rows.length);
	if(table.rows.length > 3){
		table.deleteRow(3);
	}

	document.getElementById('name1').value="";
	document.getElementById('name2').value="";

  }

}

function magic(name1,name2){

	//alert("hello");

	var array1 = new Array();
	var array2 = new Array();
	var sum1 = 0;
	var sum2 = 0;

	for(i=0;i<name1.length;i++){

		array1[i] = name1.charCodeAt(i);
		//alert(array1[i]);
		
		array1[i]= Math.pow(array1[i],i+1);
		//alert("new " + array1[i]);
	
		array1[i] = digital_root(array1[i]);
		//alert("digital_root:"+ array1[i] );

	}


	for(i=0;i<name1.length;i++){

		sum1 = sum1 + array1[i];
		//alert("sum is:"+ sum);
	}

	if(sum1 >= 10){
		sum1 = digital_root(sum1);
		//alert("1 Your name magic number is :" + sum1);
		}
	/*else{
			
		alert("2 Your name magic number is :" + sum1);
	}*/

	for(j=0;j<name2.length;j++){

		array2[j] = name2.charCodeAt(j);
		//alert(array2[j]);
		
		array2[j]= Math.pow(array2[j],j+1);
		//alert("new " + array2[j]);
	
		array2[j] = digital_root(array2[j]);
		//alert("digital_root:"+ array2[j] );

	}

	for(j=0;j<name2.length;j++){

		sum2 = sum2 + array2[j];
		//alert("sum is:"+ sum);
	}

	if(sum2 >= 10){
		sum2 = digital_root(sum2);
		//alert("1 Your name magic number is :" + sum2);
		}
	/*else{
		alert("2 Your name magic number is :" + sum2);
		}*/

	var sum = new Array();
	sum[0] = sum1;
	sum[1] = sum2;

	return sum;

}


function digital_root(num){

	while(num >= 10){
		var num = num.toString().split('').reduce(function(s,v){return Number(s)+Number(v)});
	}
	return num;
}

