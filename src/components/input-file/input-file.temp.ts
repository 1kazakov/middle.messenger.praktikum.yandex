const inputTemp: string = `
<div class="input-list__item">
  <label class="{{ labelClass }} label-input-file" for="{{ name }}">
    <span class="input-file__name-label">{{ fildTitle }}</span>
    <span class="{{ buttonClass }}">{{ buttonTitle }}</span>
  </label>
  <input name="{{ name }}" class="visually-hidden" type="file" id="{{ name }}" placeholder="{{ placeholder }}" value="{{ value }}"/>
<div>`;

export default inputTemp;