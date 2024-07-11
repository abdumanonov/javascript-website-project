const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('input', function() {
            // Проверка на наличие латинских символов
            if (/^[a-zA-Z]+$/.test(this.value)) {
                this.value = ''; // Очистить поле или другие действия по необходимости
            }
        });
    });
}

export default checkTextInputs;