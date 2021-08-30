export default class Validater {
    constructor() {}

    eventSubmit = (event: any) => {
      event.preventDefault();
      const formInput = [...event.target].filter((item: any) => item.tagName === 'INPUT');
      formInput.forEach(input => this.checkTypeValidater(event.target, input))
      const formData = formInput.reduce((acc, item) => {
        acc[item.name] = item.value
        return acc;
      }, {});
      console.log(formData)
    }

    eventFocus = (event: any) => {
      event.target.parentNode.classList.remove('error');
    }

    eventBlur = (event: any) => {
      this.checkTypeValidater(event.target.parentNode.parentNode, event.target)
    }

    run(action: string) {
      const form: any | null = document.querySelector('form');
      if (form !== null) {
        form[action]('submit', this.eventSubmit);
      }
      const formInput = [...form].filter((item: any) => item.tagName === 'INPUT');
      formInput.forEach(input => input[action]('focus', this.eventFocus))
      formInput.forEach(input => input[action]('blur', this.eventBlur))
    }

    checkTypeValidater (form: any, input: any) {
      switch (input.name) {
        case 'login':
        case 'first_name':
        case 'second_name':
        case 'display_name':
          return this.validateTextField(input);
          break;
        case 'email':
          return this.validateEmail(input);
          break;
        case 'phone':
          return this.validatePhone(input);
          break;
        case 'password':
        case 'oldPassword':
        case 'newPassword':
          return this.validatePassword(input);
          break;
        case 'passwordRepeat':
          return this.validateRepeatPassword(form, input);
          break;
        default:
          console.log('Неизвестное поле');
      }
    }

 validateTextField(input: any) {
  if (!input.value) {
    input.parentNode.classList.add('error');
    throw new Error(`Поле не заполнено ${input.name}`);
  }
}

validateEmail(input: any) {
  if (!input.value) {
    input.parentNode.classList.add('error');
    throw new Error(`Поле не заполнено ${input.name}`);
  }
  const emaillRegExp = /^([\w_\-\.])+\@([\w_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!emaillRegExp.test(input.value)) {
    input.parentNode.classList.add('error');
    throw new Error('Проверьте правильность данных в поле email');
  }
}
validatePhone(input: any) {
  if (!input.value) {
    input.parentNode.classList.add('error');
    throw new Error(`Поле не заполнено ${input.name}`);
  }
  const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  if (!phoneRegExp.test(input.value)) {
    input.parentNode.classList.add('error');
    throw new Error('Проверьте правильность данных в поле phone');
  }
}

 validatePassword(input: any) {
  if (!input.value) {
    input.parentNode.classList.add('error');
    throw new Error(`Поле не заполнено ${input.name}`);
  }
  if (!/\d+/.test(input.value) || !/[A-Za-z]+/.test(input.value)) {
    input.parentNode.classList.add('error');
    throw new Error('Пароль должен содержать буквы и цифры');
  }
}

 validateRepeatPassword(form: any, input: any) {
  if (!input.value) {
    input.parentNode.classList.add('error');
    throw new Error(`Поле не заполнено ${input.name}`);
  }
  const [inputPassword] = form.filter((field: any) => field.name === 'password' || field.name === 'newPassword');
  if (!inputPassword.value) {
    input.parentNode.classList.add('error');
    throw new Error(`Поле не заполнено ${inputPassword.name}`);
  }
  if (input.value !== inputPassword.value) {
    input.parentNode.classList.add('error');
    throw new Error('Попробуйте еще раз повторить пароль');
  }
}
}
