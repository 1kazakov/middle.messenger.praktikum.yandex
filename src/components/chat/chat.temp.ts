const chatTmpl: string = `
<li class="chats-list__item chat">
  <div class="chat__avatar">
    <img src="{{ chatAvatar}}" />
  </div>
  <div class="chat__info">
    <div class="chat__content">
      <p>{{ chatName }}</p>
      <p>{{ chatLastMessage }}</p>
    </div>
    <div class="chat__support-info">
      <p class="chat__date">{{ chatDate }}</p>
      <p class="chat__counter-message">{{ counterMessage }}</p>
    </div>
  </div>
</li>
`;

export default chatTmpl;
