export default `
<div class="container">
  <main class="page">
    <h1 class="page__title"> {{ namePage }} </h1>
    <form class="page__form">
      <ul class="page-login__input-list input-list">
        {{ for form }}
          <li class="input-list__item">
            <label class="input-list__item-label" for="user-name">{{ fildName }}</label>
            <input name="{{ name }}" class="input-list__item-input" type="text" id="user-name" placeholder="{{ fildName }}"/>
          </li>
        {{ /for }}
      </ul>
      <button type="submit" class="input-list__button button button-primary">{{ buttonText }}</button>
    <form>
    <a class="page__link" href="../login/login.html">{{ enterText }}</a>
  </main>
</div>
`;
