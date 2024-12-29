let selected;

function CategorySelected(event){//event - событие которое передаётся в функцию при нажатии на элемент

	const selectedCategory = event.target.id//ищем элемент по id

	const elements = document.getElementsByClassName('content')//ищем все элементы


	for(let el of elements){//для каждого элемента внутри elements



		el.classList.remove('active');//не отображается ни один из div

		if (el.classList.toString().indexOf(selectedCategory)!== -1) {//если classList(content category_1)(переводим в строку) там 
			//будет одна из категорий где indexOf не равен -1
			//indexOf - это штука которая ищет строку в тексте и возращает положение, если нет то -1

			selected = el//запоминаем элемент


		}
	}
	if(selected){//если элемент нашли то добавляем active
		selected.classList.add('active')
	}
}