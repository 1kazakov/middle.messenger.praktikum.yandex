import Router from './utils/router';
import { Page404, context as propsPage404 } from './pages/404/404';
import { Page500, context as propsPage500 } from './pages/500/500';
import { PageChats, context as propsPageChats } from './pages/chats/chats';
import { PageChangeAvatar, context as propsPageChangeAvatar } from './pages/change-avatar/change-avatar';
import { PageChangeUserData, context as propsPageChangeUserData } from './pages/change-user-data/change-user-data';
import { PageChangePassword, context as propsPageChangePassword } from './pages/change-password/change-password';
import { PageLogin, context as propsPageLogin } from './pages/login/login';
import { PageSignUp, context as propsSignUp } from './pages/signup/signup';
import { PageSettings, context as propsSettings } from './pages/settings/settings';


const router = new Router('.app');

router
  .use('/chats', PageChats, propsPageChats)
  .use('/404', Page404, propsPage404)
  .use('/500', Page500, propsPage500)
  .use('/change-avatar', PageChangeAvatar, propsPageChangeAvatar)
  .use('/change-password', PageChangePassword, propsPageChangePassword)
  .use('/change-user-data', PageChangeUserData, propsPageChangeUserData)
  .use('/login', PageLogin, propsPageLogin)
  .use('/', PageLogin, propsPageLogin)
  .use('/sign-up', PageSignUp, propsSignUp)
  .use('/settings', PageSettings, propsSettings)
  .start();
