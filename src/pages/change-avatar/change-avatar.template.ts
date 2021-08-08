export default `
<div class="container">
  <main class="page">
    <h1 class="page__title visually-hidden">
      {{ namePage }}
    </h1>
    <section class="page__avatar avatar">
      <div class="avatar__image-wrapper">
        <img src="{{ avatar.image }}" class="avatar__image" />
      </div>
    </section>
    <form class="page__form">
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
