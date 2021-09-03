import HTTP from '../utils/fetch';

const authAPIInstance = new HTTP();

export default class SignUpAPI {
  public async request(data: {[key: string]: any}) {
    const userData: any = await authAPIInstance.post('/auth/signup', data);
    if (userData.status !== 200) {
      throw new Error (JSON.parse(userData.response).reason);
    }
    return userData.response;
  }
}
