export default `
<div class="container">
  <main class="page">
    <h1 class="page__title visually-hidden"> {{ namePage }} </h1>
    <section class="page__avatar avatar">
      <div class="avatar__image-wrapper">
        <img src="{{ avatar.image }}" class="avatar__image">
      </div>
    </section>
    <form class="page__form">
      <ul class="page__input-list input-list">
        {{ for userData }}
          <li class="input-list__item">
            <label class="input-list__item-label" for="{{ name }}">{{ fildName }}</label>
            <input name="{{ name }}" class="input-list__item-input" type="text" id="{{ name }}" placeholder="{{ fildName }}" value="{{ value }}"/>
          </li>
        {{ /for }}
      </ul>
      <button type="submit" class="input-list__button button button-primary">{{ buttonText}}</button>
    <form>
  </main>
</div>
`;
