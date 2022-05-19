const button = document.querySelectorAll('button');

button.forEach((button) => {
    button.addEventListener("click", (event) => {
        userName = prompt("Ты кто?", '');

        if (userName === 'Саша') {

        pass = prompt('Твой вес', '');

        if (pass < '86') {
            alert( 'Ты похудел!' );
        } else if (pass > '87' ) {
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