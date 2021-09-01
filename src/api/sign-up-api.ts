import HTTP from '../utils/fetch';

const authAPIInstance = new HTTP();

export default class SignUpAPI {
  public async request(data: {[key: string]: any}) {
    return await authAPIInstance.post('/auth/signup', data);
  }
}
