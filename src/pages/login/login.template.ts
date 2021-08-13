export default `
<div class="container">
  <main class="page-login">
    <h1 class="page-login__title"> {{ namePage }} </h1>
    <form class="page-login__form" id="login-form">
      <ul class="page-login-__input-list input-list">
        {% userData %}
          <li class="input-list__item-wrapper">
            {{ input }}
          </li>
        {% end %}
      </ul>
        {{ button }}
    </form>
    <a class="page-login__link" href="/sign-up">{{ signUpText }}</a>
  </main>
</div>
`;