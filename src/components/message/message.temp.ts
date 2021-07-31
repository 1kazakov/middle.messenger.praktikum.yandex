const chatTmpl: string = `
<li class="list-messages__item message {{ messageClass }}">
<p class="message__text">
  {{ message }}
</p>
<p class="message__date">
  {{ messageDate }}
</p>
</li>
`;

export default chatTmpl;
