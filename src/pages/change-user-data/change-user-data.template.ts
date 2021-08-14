export default `
<div class="container">
  <main class="page-change-data">
    <h1 class="page-change-data__title visually-hidden"> {{ namePage }} </h1>
    <section class="page-change-data__avatar avatar">
      <div class="avatar__image-wrapper">
        <img src="{{ avatar }}" class="avatar__image">
      </div>
    </section>
    <form class="page-change-data__form update-user-data">
      <ul class="page-change-data__input-list input-list">
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
