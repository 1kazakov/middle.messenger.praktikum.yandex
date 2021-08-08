export default `
<div class="container">
  <main class="page">
    <h1 class="page__title"> {{ namePage }} </h1>
    <form class="page__form">
      <ul class="page-__input-list input-list">
        {% userData %}
          <li class="input-list__item-wrapper">
            {{ input }}
          </li>
        {% end %}
      </ul>
        {{ button }}
    </form>
    <a class="page__link" href="../signup/signup.html">{{ signUpText }}</a>
  </main>
</div>
`;