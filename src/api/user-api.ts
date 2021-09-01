import HTTP from '../utils/fetch';

const userAPIInstance = new HTTP();

export default class UserAPI {
  public async updateUserData(data: {[key: string]: string}) {
    return userAPIInstance.put('/user/profile', data);
  }
  public async updateUserPassword(data: {[key: string]: string}) {
    return userAPIInstance.put('/user/password', data);
  }
}
