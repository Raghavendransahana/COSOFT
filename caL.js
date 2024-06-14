const input = document.querySelector('.result');

const dontRepeat = operator => {
    const symbols = /[\/*\-+.]/;
    if (!input.value || !input.value[input.value.length - 1].match(symbols)) {
        input.value += operator;
    }
};

const clearInput = () => {
    input.value = '';
};

const appendValue = value => {
    input.value += value;
};

const appendComma = () => {
    if (!input.value.includes('.')) {
        input.value += '.';
    }
};

const calculateResult = () => {
    try {
        const sanitizedInput = input.value.replace(/:/g, '/');
        input.value = eval(sanitizedInput);
    } catch (e) {
        input.value = 'Error';
    }
};
