import './change-avatar.css';

export default `
<div class="container">
  <main class="page-change-avatar">
    <h1 class="page-change-avatar__title visually-hidden">
      {{ namePage }}
    </h1>
    <section class="page-change-avatar__avatar avatar">
      <div class="avatar__image-wrapper">
        <img src="{{ avatar.image }}" class="avatar__image" />
      </div>
    </section>
    <form class="page-change-avatar__form">
      <ul class="page__input-list input-list">
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
