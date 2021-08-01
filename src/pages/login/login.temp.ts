export default `
<div class="container">
  <main class="page">
    <h1 class="page__title"> {{ namePage }} </h1>
    <form class="page__form">
      <ul class="page-__input-list input-list">
        <li class="input-list__item">
          {{ login }}
        </li>
        <li class="input-list__item">
          {{ password }}
        </li>
      </ul>
      {{ button }}
    <form>
    <a class="page__link" href="../signup/signup.html">{{ signUpText }}</a>
  </main>
</div>
`;
