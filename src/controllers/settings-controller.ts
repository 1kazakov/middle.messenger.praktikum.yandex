// import LoginFormModel from '../types/login-form-model';
// import LoginAPI from '../api/login-api';
import Router from '../utils/router';
import Store from '../utils/store';
// import { validateForm } from '../utils/validate.utils';

// const loginApi = new LoginAPI();
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
  public goChangeSettings = (event: any) => {
    event.preventDefault();
    this.router().go('/change-user-data')
  }
  public goChangePassword = (event: any) => {
    event.preventDefault();
    this.router().go('/change-password')
  }
} 