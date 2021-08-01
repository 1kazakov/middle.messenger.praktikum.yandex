export default `
<div class="container">
  <main class="page">
    <h1 class="page__title visually-hidden"> {{ namePage }} </h1>
    <section class="page__avatar avatar">
      <div class="avatar__image-wrapper">
        <img src="{{ avatar.image }}" class="avatar__image">
      </div>
      <a class="avatar__change-link button--text button--success" href="../login/login.html">{{ avatar.buttonChangeAvatar }}</a>
    </section>
    <ul class="page__data-list data-list">
      {{ for userData }}
        <li class="data-list__item item">
          <p class="item__label">{{ fildName }}</p>
          <p class="item__value">{{ value }}</p>
        </li>
      {{ /for }}
    </ul>
    <section class="page__list-change">
      <a class="page__link button--text button--success" href="../login/login.html">{{ buttonChangeData }}</a>
      <a class="page__link button--text button--success" href="../login/login.html">{{ buttonChangePassword }}</a>
      <a class="page__link button--text button--error" href="../login/login.html">{{ exitText }}</a>
    </section>
  </main>
</div>
`;
