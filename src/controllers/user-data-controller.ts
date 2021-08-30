import UserApi from '../api/user-api';
import Router from '../utils/router';
import Store from '../utils/store';
import { validateForm } from '../utils/validate.utils';

const singUpApi = new UserApi();

export default class UserSignUpController {
  router: any
  store: any
  constructor() {
    const router = new Router();
    const store = new Store();
    this.router = () => router;
    this.store = () => store;
  }
  public updateUserData = async (event: any) => {
    event.preventDefault();
    try {
      // Запускаем крутилку  
      const data = validateForm(event.target);
      const payload = JSON.stringify({
        'first_name': data.first_name,
        'second_name': data.second_name,
        "display_name": data.display_name,
        login: data.login,
        email: data.email,
        phone: data.phone
      })
      const userData: any = await singUpApi.updateUserData({ data: payload });
            
      if (userData.status === 200) {
        this.store().setValue('user', JSON.parse(userData.response));
      }

      this.router().go('/settings');

      // Останавливаем крутилку
    } catch (error) {
      console.log(error)
    }
  }
  public updateUserPassword = async (event: any) => {
    event.preventDefault();
    try {
      // Запускаем крутилку  
      const data = validateForm(event.target);
      const payload = JSON.stringify({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      })
      await singUpApi.updateUserPassword({ data: payload });

      this.router().go('/settings');

      // Останавливаем крутилку
    } catch (error) {
      console.log(error)
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
    }
    return payload;
  }
} 
