function MenuChange1(){
	let k=-1;
	for(i=0; i<21; i++) {
	k+=1;
	let z = document.getElementsByClassName("text1_menu")[k];
	z.innerHTML = "SOUPE RATUATRO STARINI .... 20.52 USD";
			}
}
function MenuChange2(){
	let k=-1;
	for(i=0; i<21; i++) {
	k+=1;
	let z = document.getElementsByClassName("text1_menu")[k];
	z.innerHTML = "PIZZA QUATRO STAGIONI  ....   55,68 USD";
			}
}
function MenuChange3(){
	let k=-1;
	for(i=0; i<21; i++) {
	k+=1;
	let z = document.getElementsByClassName("text1_menu")[k];
	z.innerHTML = "PASTA LERPACHI DALERE .... 18.79 USD";
			}
}
function MenuChange4(){
	let k=-1;
	for(i=0; i<21; i++) {
	k+=1;
	let z = document.getElementsByClassName("text1_menu")[k];
	z.innerHTML = "DESERT CHOKO WYTUER .... 13.46 USD";
			}
}
function MenuChange5(){
	let k=-1;
	for(i=0; i<21; i++) {
	k+=1;
	let z = document.getElementsByClassName("text1_menu")[k];
	z.innerHTML = "WINE PUETO DE LIR .... 42.99 USD";
			}
}
function MenuChange6(){
	let k=-1;
	for(i=0; i<21; i++) {
	k+=1;
	let z = document.getElementsByClassName("text1_menu")[k];
	z.innerHTML = "BEER RUSTERO .... 22.35 USD";
			}
}
function MenuChange7(){
	let k=-1;
	for(i=0; i<21; i++) {
	k+=1;
	let z = document.getElementsByClassName("text1_menu")[k];
	z.innerHTML = "DRINKS VIVENT PER .... 17.56 USD";
			}
}

/*var updownElem = document.getElementById('team');

var pageYLabel = 0;

updownElem.onclick = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;

  switch (this.className) {
    case 'topmenuch':
      pageYLabel = pageY;

      window.scrollTo(0, 1400);
      this.className = 'topmenuch';
  }
}
var updownElem = document.getElementById('home');

var pageYLabel = 0;

updownElem.onclick = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;

  switch (this.className) {
    case 'topmenuch':
      pageYLabel = pageY;

      window.scrollTo(0, 0);
      this.className = 'topmenuch';
  }
}
var updownElem = document.getElementById('about');

var pageYLabel = 0;

updownElem.onclick = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;

  switch (this.className) {
    case 'topmenuch':
      pageYLabel = pageY;

      window.scrollTo(0, 700);
      this.className = 'topmenuch';
  }
}
var updownElem = document.getElementById('btn_down');

var pageYLabel = 0;

updownElem.onclick = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;

  switch (this.className) {
    case 'btn btn-outline-light':
      pageYLabel = pageY;

      window.scrollTo(0, 700);
      this.className = 'btn btn-outline-light';
  }
}

var updownElem = document.getElementById('booking');

var pageYLabel = 0;

updownElem.onclick = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;

  switch (this.className) {
    case 'topmenuch':
      pageYLabel = pageY;

      window.scrollTo(0, 2000);
      this.className = 'topmenuch';
  }
}
var updownElem = document.getElementById('book_table');

var pageYLabel = 0;

updownElem.onclick = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;

  switch (this.className) {
    case 'btn btn-warning':
      pageYLabel = pageY;

      window.scrollTo(0, 2000);
      this.className = 'btn btn-warning';
  }
}
var updownElem = document.getElementById('menu');

var pageYLabel = 0;

updownElem.onclick = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;

  switch (this.className) {
    case 'topmenuch':
      pageYLabel = pageY;

      window.scrollTo(0, 3500);
      this.className = 'topmenuch';
  }
}
var updownElem = document.getElementById('galerie');

var pageYLabel = 0;

updownElem.onclick = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;

  switch (this.className) {
    case 'topmenuch':
      pageYLabel = pageY;

      window.scrollTo(0, 4800);
      this.className = 'topmenuch';
  }
}
var updownElem = document.getElementById('events');

var pageYLabel = 0;

updownElem.onclick = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;

  switch (this.className) {
    case 'topmenuch':
      pageYLabel = pageY;

      window.scrollTo(0, 4350);
      this.className = 'topmenuch';
  }
}
var updownElem = document.getElementById('contact');

var pageYLabel = 0;

updownElem.onclick = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;

  switch (this.className) {
    case 'topmenuch':
      pageYLabel = pageY;

      window.scrollTo(0, 5450);
      this.className = 'topmenuch';
  }
}*/




var lastResFind=""; // последний удачный результат
var copy_page=""; // копия страницы в ихсодном виде
function TrimStr(s) {
     s = s.replace( /^\s+/g, '');
  return s.replace( /\s+$/g, '');
}
function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода
  var obj = window.document.getElementById(inputId);
  var textToFind;
 
  if (obj) {
    textToFind = TrimStr(obj.value);//обрезаем пробелы
  } else {
    alert("Введенная фраза не найдена");
    return;
  }
  if (textToFind == "") {
    alert("Вы ничего не ввели");
    return;
  }
 
  if(document.body.innerHTML.indexOf(textToFind)=="-1")
  alert("Ничего не найдено, проверьте правильность ввода!");
 
  if(copy_page.length>0)
        document.body.innerHTML=copy_page;
  else copy_page=document.body.innerHTML;

 
  document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");//стираем предыдущие якори для скрола
  document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:red'>"+textToFind+"</a>"); //Заменяем найденный текст ссылками с якорем;
  window.location = '#'+textToFind;//перемещаем скрол к последнему найденному совпадению
 }

