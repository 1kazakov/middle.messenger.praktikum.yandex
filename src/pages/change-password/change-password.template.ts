import './change-password.css';

export default `
<div class="container">
  <main class="page-change-password">
    <h1 class="page-change-password__title visually-hidden">
      {{ namePage }}
    </h1>
    <section class="page-change-password__avatar avatar">
      <div class="avatar__image-wrapper">
        <img src="{{ avatar }}" class="avatar__image" />
      </div>
    </section>
    <form class="page-change-password__form update-user-password">
      <ul class="page-change-password__input-list input-list">
        {% userData %}
          <li>
            {{ input }}
          </li>
        {% end %}
      </ul>
      {{ buttonSave }}
    </form>
  </main>
</div>
`;
