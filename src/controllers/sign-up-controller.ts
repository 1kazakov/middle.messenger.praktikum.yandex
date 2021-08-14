// import LoginFormModel from '../types/login-form-model';
import SignInAPI from '../api/sign-up-api';
import Router from '../utils/router';
import Store from '../utils/store';
import { validateForm } from '../utils/validate.utils';

const singUpApi = new SignInAPI();
// const userLoginValidator = validateLoginFields(validateRules);

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
    // public async login(data: LoginFormModel) {
    event.preventDefault();
    try {
      // Запускаем крутилку  
      const data = validateForm(event.target);
      console.log('data', data)          

      // const validateData = userLoginValidator(data);

      // if (!validateData.isCorrect) {
      //     throw new Error(validateData);
      // }
        
      // const userID = singUpApi.request(prepareDataToRequest(data));
      // const payload = new FormData(event.target)
      const payload = JSON.stringify({
        'first_name': data.first_name,
        'second_name': data.second_name,
        login: data.login,
        email: data.email,
        password: data.password,
        phone: data.phone
      })
      console.log(payload)
      console.log('singUpApi', singUpApi);
      console.log('this', this);
      const reqData = singUpApi.request({ data: payload });
      console.log('reqData', reqData);
            
      this.store.setProp('loginData', reqData);

      this.router().go('/chats');

      // Останавливаем крутилку
    } catch (error) {
      // TO DO YOUR DEALS WITH ERROR
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
