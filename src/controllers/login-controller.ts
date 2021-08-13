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

            // const validateData = userLoginValidator(data);

            // if (!validateData.isCorrect) {
            //     throw new Error(validateData);
            // }
        
            // const userID = loginApi.request(prepareDataToRequest(data));
            const payload = JSON.stringify({
              login: data.login,
              password: data.password
            })
            const reqData = await loginApi.logining({ data: payload });
            const userData = await loginApi.getUserData();
            console.log('userData', userData);
            console.log('reqData', reqData);
            
            // this.store.setProp('loginData', reqData);

            this.router().go('/settings');

            // Останавливаем крутилку
        } catch (error) {
                // TO DO YOUR DEALS WITH ERROR
    }
  }
} 