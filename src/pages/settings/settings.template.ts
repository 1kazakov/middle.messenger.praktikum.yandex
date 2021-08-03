export default `
<div class="container">
  <main class="page">
    <h1 class="page__title visually-hidden"> {{ namePage }} </h1>
    <section class="page__avatar avatar">
      <div class="avatar__image-wrapper">
        <img src="{{ avatar }}" class="avatar__image">
      </div>
      {{ buttonChangeAvatar }}
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
      {{ buttonChangeData }}
      {{ buttonChangePassword }}
      {{ buttonExit }}
    </section>
  </main>
</div>
`;
