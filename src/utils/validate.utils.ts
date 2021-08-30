export const validateForm = (form: any) => {
      const formInput = [...form].filter((item: any) => item.tagName === 'INPUT');
      formInput.forEach(input => checkTypeValidater(form, input))
      const formData = formInput.reduce((acc, item) => {
        acc[item.name] = item.value
        return acc;
      }, {});
      return formData;
    }

export const eventInputFocus = (event: any) => {
      event.target.parentNode.classList.remove('error');
    }

export const eventInputBlur = (event: any) => {
      checkTypeValidater(event.target.parentNode.parentNode, event.target)
    }

    const checkTypeValidater = (form: any, input: any) => {
      switch (input.name) {
        case 'login':
        case 'first_name':
        case 'second_name':
        case 'display_name':
        case 'title':
          return validateTextField(input);
          break;
        case 'email':
          return validateEmail(input);
          break;
        case 'phone':
          return validatePhone(input);
          break;
        case 'password':
        case 'oldPassword':
        case 'newPassword':
          return validatePassword(input);
          break;
        case 'passwordRepeat':
          return validateRepeatPassword(form, input);
          break;
        default:
          console.log('Неизвестное поле');
      }
    }

 const validateTextField = (input: any) => {
  if (!input.value) {
    input.parentNode.classList.add('error');
    throw new Error(`Поле не заполнено ${input.name}`);
  }
}

const validateEmail = (input: any) => {
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
const validatePhone = (input: any) => {
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

 const validatePassword = (input: any) => {
  if (!input.value) {
    input.parentNode.classList.add('error');
    throw new Error(`Поле не заполнено ${input.name}`);
  }
  if (!/\d+/.test(input.value) || !/[A-Za-z]+/.test(input.value)) {
    input.parentNode.classList.add('error');
    throw new Error('Пароль должен содержать буквы и цифры');
  }
}

 const validateRepeatPassword = (form: any, input: any) => {
  if (!input.value) {
    input.parentNode.classList.add('error');
    throw new Error(`Поле не заполнено ${input.name}`);
  }
  const [inputPassword] = [...form].filter((field: any) => field.name === 'password' || field.name === 'newPassword');
  if (!inputPassword.value) {
    input.parentNode.classList.add('error');
    throw new Error(`Поле не заполнено ${inputPassword.name}`);
  }
  if (input.value !== inputPassword.value) {
    input.parentNode.classList.add('error');
    throw new Error('Попробуйте еще раз повторить пароль');
  }
}
