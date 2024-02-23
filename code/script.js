/*
1. Выбрать поле для игры.
2. Заполнить игровое поле карточками (Тегами li).
3. Сделать клик по карточкам.
4. Сделать переварачивание карточек.
	4.1 Размещаем картинки для кажой карточки
	4.2 Показываем картинки
5. Если выбрано 2 картинки проверяем на совпадение
	5.1 Если картинки совбадают удалить карточки
	5.2 Перевернуть все выбранные карточки
6. Если все карточки удалены- вывести окно с перезагрузкой игры.
7. При клике на кнопку "Перезагрузить" обновляем страничку
 */

// Создаем переменную для карточного поля и перезагрузки
// Задание мини урок 3
 var cardsField = document.querySelector("#cards") ;
//console.dir(cardsField) ;

var resetBlock = document.querySelector("#reset") ;

var resetBtn = document.querySelector("#reset-btn");
console.dir(resetBlock) ;

//Создаем карточки в игровом поле
// Задание мини урок 4
var countCards = 16 ;

//Переносим наши картинки в игру
var images = [
	1,2,3,4,
	5,6,7,8,
	1,2,3,4,
	5,6,7,8 
	] ;

var selected = [];

var pause = false;

var deletedCards = 0;

for(var i = 0; i < countCards; i = i + 1) {
	var li = document.createElement("li");
	li.id = i;
	cardsField.appendChild(li) ;
}
console.dir(cardsField);

//Прописываем условие чтоб цвет работал только на тег li
cardsField.onclick = function (event) {
	if (pause == false ) {
		var element = event.target;

		if(element.tagName == "LI" && element.className != "active") {
			selected.push(element);
			element.className = "active";
			//Задание к мини уроку 5
			var img = images[element.id];
		element.style.backgroundImage = "url(images/" + img + ".png)" ;
			if (selected.length == 2) {
					pause = true;
					if (images[selected[0].id] == images[selected[1].id]) {
					selected[0].style.visibility = "hidden";
					selected[1].style.visibility = "hidden";
					deletedCards = deletedCards + 2;
				}
				setTimeout(refreshCards, 600);			
			}
		}	
	}
}

function refreshCards() {
	for(var i=0; i < countCards; i = i + 1) {
		cardsField.children[i].className = "";
		cardsField.children[i].style.backgroundImage = 'url("images/back.png")';
		}
		if(deletedCards == countCards) {
		resetBlock.style.display = "block";
		}
		selected = [];
		pause = false;
}

resetBtn.onclick = function() {
	location.reload();
}