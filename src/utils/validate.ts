export default function (data: any, form = null) {
  if (Array.isArray(data)) {
    for (const input of data) {
      checkTypeValidater(data, input);
    }
  } else {
    checkTypeValidater(form, data)
  }
}

function checkTypeValidater (form, input) {
  switch (input.name) {
    case 'login':
    case 'first_name':
    case 'second_name':
    case 'display_name':
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

function validateTextField(input) {
  if (!input.value) {
    throw new Error(`Поле не заполнено ${input.name}`);
  }
}

function validateEmail(input) {
  if (!input.value) {
    throw new Error(`Поле не заполнено ${input.name}`);
  }
  const emaillRegExp = /^([\w_\-\.])+\@([\w_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!emaillRegExp.test(input.value)) {
    throw new Error('Проверьте правильность данных в поле email');
  }
}

function validatePhone(input) {
  if (!input.value) {
    throw new Error(`Поле не заполнено ${input.name}`);
  }
  const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  if (!phoneRegExp.test(input.value)) {
    throw new Error('Проверьте правильность данных в поле phone');
  }
}

function validatePassword(input) {
  if (!input.value) {
    throw new Error(`Поле не заполнено ${input.name}`);
  }
  if (!/\d+/.test(input.value) || !/[A-Za-z]+/.test(input.value)) {
    throw new Error('Пароль должен содержать буквы и цыфры');
  }
}

function validateRepeatPassword(form, input) {
  if (!input.value) {
    throw new Error(`Поле не заполнено ${input.name}`);
  }
  const [inputPassword] = form.filter(field => field.name === 'password' || field.name === 'newPassword');
  if (!inputPassword.value) {
    throw new Error(`Поле не заполнено ${inputPassword.name}`);
  }
  if (input.value !== inputPassword.value) {
    throw new Error('Попробуйте еще раз повторить пароль');
  }
}
