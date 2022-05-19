const button = document.querySelectorAll('button');

button.forEach((button) => {
    button.addEventListener("click", (event) => {
        userName = prompt("Ты кто?", '');

        if (userName === 'Саша') {
        meal = prompt ('Что ты сегодня ел?');
        if (meal === 'Пельмени') {
            alert('Я знала!');
        } else {
            alert('Опа! Неожиданно!');
        }
        weight = prompt('Твой вес', '');

        if (weight < '86') {
            alert( 'Ты похудел!' );
        } else if (weight > '87' ) {
            alert( 'Это все пельмени!' );
        } else {
            alert( 'Отличный вес!' );
        }

        } else if (userName === '' || userName === null) {
        alert( 'Позови Сашу!' );
        } else {
        alert( "Ты точно не Саша?" );
        }
    })
});
