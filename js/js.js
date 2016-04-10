
var oSchoolBtn;
var oNSchoolBtn;

var oSchoolPart;
var oWorkPart;

var allSchool = [['北京大学','清华大学','北京邮电大学','北京师范大学'],
				 ['深圳大学','大学AAA','大学BBB','大学CCC'],
				 ['西安交通大学','西安财经大学','南方翻译学院','西安某大学'],
				 ['湖南大学','中南大学','国防科技大学','湖南师范大学'],
				 ['重庆大学','西南大学','重庆师范大学','四川外国语学院','四川美术学院']];

window.onload = function(){
	oSchoolBtn = document.getElementById('schoolBtn');
	oNSchoolBtn = document.getElementById('nonSchoolBtn');

	oSchoolPart = document.getElementById('schoolPart');
	oWorkPart = document.getElementById('workPart');

	oSchoolBtn.onclick = schoolEvent;
	oNSchoolBtn.onclick = nonSEvent;

	cityEvent();
}



var schoolEvent = function(){

	oSchoolBtn.checked = true;
	oNSchoolBtn.checked = false;

	oSchoolPart.style.display = 'inline-block';
	oWorkPart.style.display = 'none';

}

var nonSEvent = function(){

	oSchoolBtn.checked = false;
	oNSchoolBtn.checked = true;

	oSchoolPart.style.display = 'none';
	oWorkPart.style.display = 'block';
}

var cityEvent = function(){
	var oCity = document.getElementById('cityItm');
	var aCityOptions = document.getElementById('cityItm').options;
	var aSclOptions = document.getElementById('schoolItm').options;

	oCity.onchange = function(){
		switch(this.value){
			case "北京":
			  traFn(0);
			  break;
			case '深圳':
			  traFn(1);
			  break;
			case '西安':
			  traFn(2);
			  break;
			case '长沙':
			  traFn(3);
			  break;
			case '重庆':
			  traFn(4);
			  break;
		}
	}
}


var traFn = function(index){
	var aSclOptions = document.getElementById('schoolItm').options;
	for(var i=0;i<aSclOptions.length;i++){
		aSclOptions[i].text = allSchool[index][i];
	}
}