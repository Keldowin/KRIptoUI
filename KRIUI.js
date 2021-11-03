//===============================\\
//Keldowin JS UI 1.0 |KRIpto UI©|\\
//===============================\\
function copytext(el) {
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
    alert("Код успешно скопирован!");
}
// Radio
$('.radioblock').find('.radio').each(function(){
	$(this).click(function(){
		// Заносим текст из нажатого дива в переменную
		var valueRadio = $(this).html();
		// Находим любой активный переключатель и убираем активность
		$(this).parent().find('.radio').removeClass('active');
		// Нажатому диву добавляем активность
		$(this).addClass('active');
		// Заносим значение объявленной переменной в атрибут скрытого инпута
		$(this).parent().find('input').val(valueRadio);
	});
});
// Checkbox
// Отслеживаем событие клика по диву с классом check
$('.checkboxes').find('.check').click(function(){
	// Пишем условие: если вложенный в див чекбокс отмечен
	if( $(this).find('input').is(':checked') ) {
		// то снимаем активность с дива
		$(this).removeClass('active');
		// и удаляем атрибут checked (делаем чекбокс не отмеченным)
		$(this).find('input').removeAttr('checked');

	// если же чекбокс не отмечен, то
	} else {
		// добавляем класс активности диву
		$(this).addClass('active');
		// добавляем атрибут checked чекбоксу
		$(this).find('input').attr('checked', true);
	}
});
// Select
$('.slct').click(function(){
	/* Заносим выпадающий список в переменную */
	var dropBlock = $(this).parent().find('.drop');

	/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown();

		/* Выделяем ссылку открывающую select */
		$(this).addClass('active');

		/* Работаем с событием клика по элементам выпадающего списка */
		$('.drop').find('li').click(function(){

			/* Заносим в переменную HTML код элемента
			списка по которому кликнули */
			var selectResult = $(this).html();

			/* Находим наш скрытый инпут и передаем в него
			значение из переменной selectResult */
			$(this).parent().parent().find('input').val(selectResult);

			/* Передаем значение переменной selectResult в ссылку которая
			открывает наш выпадающий список и удаляем активность */
			$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

			/* Скрываем выпадающий блок */
			dropBlock.slideUp();
		});

	/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
	} else {
		$(this).removeClass('active');
		dropBlock.slideUp();
	}

	/* Предотвращаем обычное поведение ссылки при клике */
	return false;
});
// = Load
// отслеживаем изменение инпута file
$('#file').change(function(){
	// Если файл прикрепили то заносим значение value в переменную
	var fileResult = $(this).val();
	// И дальше передаем значение в инпут который под загрузчиком
	$(this).parent().find('.fileLoad').find('input').val(fileResult);
});

/* Добавляем новый класс кнопке если инпут файл получил фокус */
$('#file').hover(function(){
	$(this).parent().find('button').addClass('button-hover');
}, function(){
	$(this).parent().find('button').removeClass('button-hover');
});
//Reset form
// Вешаем событие клика по кнопке сброса
$('.reset-form').click(function() {
	// Устанавливаем пустое значение в атрибут value для всех инпутов
	$('.customForm').find('input').val('');

	// Убираем атрибут checked и класс активности у чекбоксов
	$('.customForm').find('input:checked').removeAttr('checked');
	$('.customForm').find('.check').removeClass('active');

	// Убираем класс активности у радио переключателей
	$('.customForm').find('.radio').removeClass('active');

	// Устанавливаем пустое значение в атрибут value для всех textarea
	$('.customForm').find('textarea').val('');

	// И для открывалки селекта возвращаем начальное значение
	$('.customForm').find('.slct').html('Выберите Ваше лучшее качество:');
	return false
});