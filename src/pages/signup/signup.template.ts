import './signup.css';

export default `
<div class="container">
  <main class="page-sing-up">
    <h1 class="page-sing-up__title"> {{ namePage }} </h1>
    <form class="page-sing-up__form sing-up-form">
      <ul class="page-sing-up-login__input-list input-list">
        {% userData %}
          <li>
            {{ input }}
          </li>
        {% end %}
      </ul>
      {{ buttonSingUp }}
    </form>
    <a class="page-sing-up__link" href="/login">{{ enterText }}</a>
  </main>
</div>
`;
