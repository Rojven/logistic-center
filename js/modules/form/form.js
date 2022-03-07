import FormValidation from './formValidation';
import postData from '../../services/request';

export default class Form extends FormValidation {
    constructor(form, inputs, checkbox, selects, messageBlock, btnSend, checkNameInput, checkAddressInputs, checkNumberInput, initMask) {
        super(checkNameInput, checkAddressInputs, checkNumberInput, initMask)
        this.form = document.querySelector(form);
        this.inputs = document.querySelectorAll(inputs);
        this.checkbox = document.querySelector(checkbox);
        this.selects = document.querySelectorAll(selects);
        this.messageBlock = document.querySelector(messageBlock);
        this.btnSend = document.querySelector(btnSend);
        this.message = {
            loading: 'Отправка...',
            success: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время',
            failure: 'Что-то пошло не так, пожалуйста, свяжитесь с нами напрямую'
        };
        this.path = 'assets/mailer/sendmail.php';
        this.isFormValid = false;
    }

    clearInputs(inputs) {
        inputs.forEach(input => {
            input.value = '';
        });
    }

    typingCheck(input) {
        input.style.border = '';
        input.style.borderRadius = '';
        this.isFormValid = true;

        if(input.value === '' || input.value === null) {
            input.style.border = '1px solid #f0879c';
            input.style.borderRadius = '10px';
            this.isFormValid = false;
        }
    }

    inputCheck(inputs) {
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this.typingCheck(input);
            })
        })
    }

    onCheckboxClick() {
        this.btnSend.setAttribute('disabled', 'disabled');
        this.checkbox.addEventListener('click', () => {
            if(!this.checkbox.checked) {
                this.btnSend.setAttribute('disabled', 'disabled');
            } else {
                this.btnSend.removeAttribute('disabled', 'disabled');
            }
        })
    }

    init() {
        
        this.checkNameInput();
        this.checkAddressInputs();
        this.checkNumberInput();
        this.initMask();
        this.onCheckboxClick();

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            this.typingCheck(this.inputs[0]);
            this.typingCheck(this.inputs[1]);
            this.typingCheck(this.inputs[2]);
            this.typingCheck(this.inputs[3]);
            this.typingCheck(this.inputs[4]);
            this.typingCheck(this.selects[0]);
            this.typingCheck(this.selects[1]);
            
            this.inputCheck(this.inputs);
            this.inputCheck(this.selects);
          

            if(this.isFormValid) {
                this.messageBlock.classList.add('form__message_active');
                this.messageBlock.textContent = this.message.loading;
    
                const formData = new FormData(this.form);
    
                postData(this.path, formData)
                .then(() => {
                     this.messageBlock.textContent = this.message.success;
                })
                .catch(() => {
                    this.messageBlock.textContent = this.message.failure;
                })
                .finally(() => {
                    this.clearInputs(this.inputs);
                    this.clearInputs(this.selects);
                    this.checkbox.checked = false;
                    setTimeout(() => {
                        this.messageBlock.classList.remove('form__message_active');
                        
                        this.btnSend.setAttribute('disabled', 'disabled');
                    }, 6000);
                });
            }
            
        });      
    }
}
