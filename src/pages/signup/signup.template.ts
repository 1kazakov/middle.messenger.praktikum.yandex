export default `
<div class="container">
  <main class="page">
    <h1 class="page__title"> {{ namePage }} </h1>
    <form class="page__form">
      <ul class="page-login__input-list input-list">
        {{ for userData }}
          <li class="input-list__item">
            {{ input }}
          </li>
        {{ /for }}
      </ul>
      {{ buttonSingUp }}
    <form>
    <a class="page__link" href="../login/login.html">{{ enterText }}</a>
  </main>
</div>
`;
