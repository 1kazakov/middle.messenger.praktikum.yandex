const chatTmpl: string = `
<div class="message {{ messageClass }}">
  <p class="message__text">
    {{ message }}
  </p>
  <p class="message__date">
    {{ messageDate }}
  </p>
</div>
`;

export default chatTmpl;
