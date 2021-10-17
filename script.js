var distance = form.distance;
var gasPrice = form.gasPrice;
var consumption = form.consumption;
var price = form.price;
var button = form.button;
var inputEntry = document.querySelectorAll('.input__entry');

for (var i = 0; i < inputEntry.length; i++) {
    inputEntry[i].addEventListener('keyup', function () {
        if (distance.value.length != 0 && gasPrice.value.length != 0 && consumption.value.length != 0) {
            button.removeAttribute('disabled');
        }
    })
}

button.addEventListener('click', function (event) {
    event.preventDefault();
    for (var i = 0; i < inputEntry.length; i++) {
        if (inputEntry[i].value === '') {
            return alert('Есть незаполненные поля');
        }
    }
    price.value = distance.value / 100 * consumption.value * gasPrice.value;
})

for (var i = 0; i < inputEntry.length; i++) {
    inputEntry[i].addEventListener('keypress', function (event) {
        if ((event.keyCode < 48) || (event.keyCode > 57)) {
            alert('Введите число');
            event.returnValue = false;
        }
    })
}