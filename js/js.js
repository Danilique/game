
var end=false;
var timezero=60; var record=0;
var names=0;
var svgNS = "http://www.w3.org/2000/svg"; 
window.intervalID = setInterval(timer, 1000);

$(document).ready(
	function(){

	var ids=[];
	ids=['0','1'];
	var i=2;
	do
	{
		ids.push(i.toString());
		i++;
	}while(i<5000)
//alert(ids[5]);

		$("#start").bind('click',function()
	{
		document.getElementById('second').innerHTML = timezero;
		end=false;
		$("#mySVG").empty();

	for (var i = 0; i < Math.random() * 4; i++) {
    var rect = document.createElementNS(svgNS, 'rect');
    rect.setAttributeNS(null, 'x', (Math.random()*150)-20);
    rect.setAttributeNS(null, 'y', (Math.random()*150)-20);
    rect.setAttributeNS(null, 'height', 5+Math.random() * 30);
    rect.setAttributeNS(null, 'width', 5+Math.random() * 30);
    rect.setAttributeNS(null, 'stroke', 'black');
    rect.setAttributeNS(null, 'fill', '#'+ Math.round(0xffffff * Math.random()).toString(16));
    //rect.setAttributeNS(null, 'id', ids[names]); 
    names++;
    //rect.setAttributeNS(null, 'class', 'rectClass');
    document.getElementById('mySVG').appendChild(rect);
}
	})	

$("#stop").bind('click',function()
	{
		document.getElementById('second').innerHTML = timezero;
		$("#mySVG").empty();
		record=0;
		document.getElementById('record').innerHTML = record;
	})

$('#ok, #close').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#myModal_1')
            .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
// Находим нужную таблицу
    var tbody = document.getElementById('TBODY');

    // Создаем строку таблицы и добавляем ее
    var row = document.createElement("TR");
    tbody.appendChild(row);

    // Создаем ячейки в вышесозданной строке
    // и добавляем тх
    var td1 = document.createElement("TD");
    var td2 = document.createElement("TD");

    row.appendChild(td1);
    row.appendChild(td2);

    // Наполняем ячейки
    td1.innerHTML = $("#fillme").val();
    td2.innerHTML = record;
    record=0;
    document.getElementById('record').innerHTML = record;
                }
            );

    });

$("#mySVG").click(function(){
	record--;
	document.getElementById('record').innerHTML = record;
})
})


	function timer(){
		var second = document.getElementById('second').innerHTML;
		
		if( second > 0 ) second--;
		else
		{
			 end = true;
$('#myModal_1') 
                    .css('display', 'block')
                     // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1, top: '20%', overflow:'scroll'}, 20);
//модальное окно

		}

		if(end){
			clearInterval(intervalID);

		}else{
			document.getElementById('second').innerHTML = second;
		}
	}

window.onload = function() {
    document.body.onclick = function(event) {
         t=event.target||event.srcElement; 
         if(t.tagName=="rect")
         	{
         		record+=2;
         		document.getElementById('record').innerHTML = record;
         		document.getElementById('mySVG').removeChild(t);
         		
         			for (var i = 0; i < Math.random() * 4; i++) 
{
    if(names/20==0)
    {
    var rect = document.createElementNS(svgNS, 'rect');
    rect.setAttributeNS(null, 'x', (Math.random()*150)-20);
    rect.setAttributeNS(null, 'y', (Math.random()*150)-20);
    rect.setAttributeNS(null, 'height', 5+Math.random() * 30);
    rect.setAttributeNS(null, 'width', 5+Math.random() * 30);
    rect.setAttributeNS(null, 'stroke', 'black');
    rect.setAttributeNS(null, 'fill', '#'+ Math.round(0xffffff * Math.random()).toString(16));
    //rect.setAttributeNS(null, 'class', 'rectClass');
    //rect.setAttributeNS(null, 'id', ids[names]); 
    names++;
    document.getElementById('mySVG').appendChild(rect);
}
else
{
var circle = document.createElementNS(svgNS, 'circle');
    circle.setAttributeNS(null, 'cx', (Math.random()*150)-20);
    circle.setAttributeNS(null, 'cy', (Math.random()*150)-20);
    circle.setAttributeNS(null, 'r', 5+Math.random() * 30);
    circle.setAttributeNS(null, 'stroke', 'black');
    circle.setAttributeNS(null, 'fill', '#'+ Math.round(0xffffff * Math.random()).toString(16));
    document.getElementById('mySVG').appendChild(circle);
}
     
}


         	}
if(t.tagName=="circle")
{

	record+=1;
         		document.getElementById('record').innerHTML = record;
         		document.getElementById('mySVG').removeChild(t);
         		for (var i = 0; i < Math.random() * 10; i++) {
    var rect = document.createElementNS(svgNS, 'rect');
    rect.setAttributeNS(null, 'x', (Math.random()*150)-20);
    rect.setAttributeNS(null, 'y', (Math.random()*150)-20);
    rect.setAttributeNS(null, 'height', 5+Math.random() * 30);
    rect.setAttributeNS(null, 'width', 5+Math.random() * 30);
    rect.setAttributeNS(null, 'stroke', 'black');
    rect.setAttributeNS(null, 'fill', '#'+ Math.round(0xffffff * Math.random()).toString(16));
    //rect.setAttributeNS(null, 'id', ids[names]); 
    names++;
    //rect.setAttributeNS(null, 'class', 'rectClass');
    document.getElementById('mySVG').appendChild(rect);
}
}
         	
    }
}