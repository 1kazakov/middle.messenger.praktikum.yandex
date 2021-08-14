export default `
<div class="container">
  <main class="page-settings">
    <h1 class="page-settings__title visually-hidden"> {{ namePage }} </h1>
    <section class="page-settings__avatar avatar">
      <div class="avatar__image-wrapper">
        <img src="{{ avatar }}" class="avatar__image">
      </div>
      {{ buttonChangeAvatar }}
    </section>
    <ul class="page-settings__data-list data-list">
      {% userData %}
        <li>
          {{ setting }}
        </li>
      {% end %}
    </ul>
    <section class="page-settings__list-change">
      <a href="/change-user-data" class="page-settings__link button--text button--success change-user-data">{{ buttonChangeData }}</a>
      <a href="/change-password" class="page-settings__link button--text button--success change-user-password">{{ buttonChangePassword }}</a>
      {{ buttonExit }}
    </section>
  </main>
</div>
`;
