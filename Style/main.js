var itemMenu = new Array (
new Array ("../image/alphabet/А.png","а.htm","../image/alphabet/А2.png"), 
new Array ("../image/alphabet/Б.png","б.htm","../image/alphabet/Б2.png"), 
new Array ("../image/alphabet/В.png","в.htm","../image/alphabet/В2.png"), 
new Array ("../image/alphabet/Г.png","г.htm","../image/alphabet/Г2.png"), 
new Array ("../image/alphabet/Д.png","д.htm","../image/alphabet/Д2.png"), 
new Array ("../image/alphabet/Ж.png","ж.htm","../image/alphabet/Ж2.png"), 
new Array ("../image/alphabet/З.png","з.htm","../image/alphabet/З2.png"),
new Array ("../image/alphabet/И.png","и.htm","../image/alphabet/И2.png"), 
new Array ("../image/alphabet/К.png","к.htm","../image/alphabet/К2.png"), 
new Array ("../image/alphabet/Л.png","л.htm","../image/alphabet/Л2.png"),
new Array ("../image/alphabet/М.png","м.htm","../image/alphabet/М2.png"),
new Array ("../image/alphabet/Н.png","н.htm","../image/alphabet/Н2.png"), 
new Array ("../image/alphabet/О.png","о.htm","../image/alphabet/О2.png"),
new Array ("../image/alphabet/П.png","п.htm","../image/alphabet/П2.png"),
new Array ("../image/alphabet/Р.png","р.htm","../image/alphabet/Р2.png"),
new Array ("../image/alphabet/С.png","с.htm","../image/alphabet/С2.png"),
new Array ("../image/alphabet/Т.png","т.htm","../image/alphabet/Т2.png"),
new Array ("../image/alphabet/У.png","у.htm","../image/alphabet/У2.png"),
new Array ("../image/alphabet/Ф.png","ф.htm","../image/alphabet/Ф2.png"),
new Array ("../image/alphabet/Х.png","х.htm","../image/alphabet/Х2.png"),
new Array ("../image/alphabet/Ц.png","ц.htm","../image/alphabet/Ц2.png"),
new Array ("../image/alphabet/Ч.png","ч.htm","../image/alphabet/Ч2.png"),
new Array ("../image/alphabet/Ш.png","ш.htm","../image/alphabet/Ш2.png"),
new Array ("../image/alphabet/Ю.png","ю.htm","../image/alphabet/Ю2.png"),
new Array ("../image/alphabet/Я.png","я.htm","../image/alphabet/Я2.png")
);

function putMenu(par) 
{
var str=" ";
if (par=='gen'){
str="<p></p>";
for (var i=0; i<itemMenu.length; i++)
{ 
str+='<a href="'+ itemMenu[i][1]+'">';
str+=' <img class="bukvy" src="'+itemMenu[i][0]+'" lowsrc="'+itemMenu[i][2]+'" width=14% onMouseOver="javascript:var f=this.src;this.src=this.lowsrc;this.lowsrc=f" onMouseOut="javascript:var f=this.src;this.src=this.lowsrc;this.lowsrc=f"></a>';
}

document.write(str);}
else{
for (var i=0; i<itemMenu.length; i++)
{ 
str+='<a href="'+ itemMenu[i][1]+'">';
str+=' <img class="bukvy" src="'+itemMenu[i][0]+'" lowsrc="'+itemMenu[i][2]+'" width=7% onMouseOver="javascript:var f=this.src;this.src=this.lowsrc;this.lowsrc=f" onMouseOut="javascript:var f=this.src;this.src=this.lowsrc;this.lowsrc=f"></a>';
}

document.write(str);
}
}

function Word(mas)
{
var str='<P>'
for (var I=1;I<=mas.length; I++)
{str=str+mas[I-1];
if (I%3 == 0)
{document.write(str);
str='<p>';
}
} 
document.write(str);
}