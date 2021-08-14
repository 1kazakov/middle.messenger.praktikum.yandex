// import LoginFormModel from '../types/login-form-model';
import LoginAPI from '../api/login-api';
import Router from '../utils/router';
import Store from '../utils/store';
import { validateForm } from '../utils/validate.utils';

const loginApi = new LoginAPI();
// const userLoginValidator = validateLoginFields(validateRules);

export default class UserLoginController {
  router: any
  store: any
  constructor() {
    const router = new Router();
    const store = new Store();
    this.router = () => router;
    this.store = () => store;
  }
  public login = async (event: any) => {
    // public async login(data: LoginFormModel) {
    event.preventDefault();
    try {
      const data = validateForm(event.target);
      // Запускаем крутилку            
      const payload = JSON.stringify({
        login: data.login,
        password: data.password
      })
      const reqData: any = await loginApi.logining({ data: payload });
      if (reqData.status !== 200) {
        throw new Error (JSON.parse(reqData.response).reason)
      }
      const userData: any = await loginApi.getUserData();
      if (userData.status === 200) {
        this.store().setValue('user', JSON.parse(userData.response));
        this.router().go('/chats');
      }
        // Останавливаем крутилку
    } catch (error) {
      console.log(error)
        // TO DO YOUR DEALS WITH ERROR
    }
  }
  public logout = async () => {
    await loginApi.logout();
    this.router().go('/login')
  }
} 