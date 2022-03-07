export default class FormValidation {
    constructor() {
        this.nameInput = document.querySelector('[name="name"]');
        this.addressInputs = document.querySelectorAll('.address');
        this.numberInput = document.querySelector('[name="workers"]');
    }

    checkNameInput() {
        this.nameInput.addEventListener('keypress', function(e) {
            if (e.key.match(/[^a-z а-яё]/ig)) {
                e.preventDefault();
            }
        });    
    }

    checkAddressInputs() {
        this.addressInputs.forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key.match(/[^a-z а-яё 0-9 , .]/ig)) {
                    e.preventDefault();
                }
            });
        });       
    }

    checkNumberInput() {
        this.numberInput.addEventListener('keypress', function(e) {
            if (e.key.match(/[^0-9]/ig)) {
                e.preventDefault();
            }
        });  
    }

    initMask() {
        let setCursorPosition = (pos, elem) => {
            elem.focus();
            
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();
    
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
    
        function createMask(event) {
            const message = document.querySelectorAll('.form__input')[1];
            let matrix = '+7 (___) ___-____',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');
    
            if (def.length >= val.length) {
                val = def;
            }
    
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });
    
            if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
            } else {
                setCursorPosition(this.value.length, this);
            }
        }

        let inputs = document.querySelectorAll('[name="phone"]');
        
        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    }
}