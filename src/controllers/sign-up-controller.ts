import SignInAPI from '../api/sign-up-api';
import Router from '../utils/router';
import Store from '../utils/store';
import { validateForm } from '../utils/validate.utils';

const singUpApi = new SignInAPI();

export default class UserSignUpController {
  router: any
  store: any
  constructor() {
    const router = new Router();
    const store = new Store();
    this.router = () => router;
    this.store = () => store;
  }
  public signUp = async (event: any) => {
    event.preventDefault();
    try {
      // Запускаем крутилку  
      const data = validateForm(event.target);
      const payload = JSON.stringify({
        'first_name': data.first_name,
        'second_name': data.second_name,
        login: data.login,
        email: data.email,
        password: data.password,
        phone: data.phone
      });
      const reqData = singUpApi.request({ data: payload });
      this.store.setValue('user', reqData);

      this.router().go('/chats');

      // Останавливаем крутилку
    } catch (error) {
      console.log(error);
    }
  }
  getPayloadSignUp(data: any) {
    const payload = {
      login: data.login,
      'first_name': data.first_name,
      'second_name': data.second_name,
      email: data.email,
      password: data.password,
      phone: data.phone
    };
    return payload;
  }
} 
