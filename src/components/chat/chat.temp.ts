const chatTmpl: string = `
<div class="chats-list__item chat choose-chat" data-chat-id="{{ chatId }}">
  <div class="chat__avatar">
    <img src="{{ chatAvatar }}" />
  </div>
  <div class="chat__info">
    <div class="chat__header">
      <p class="chat__name">{{ chatName }}</p>
      <p class="chat__date">{{ chatDate }}</p>
    </div>
    <div class="chat__message-info">
      <p class="chat__last-message">{{ chatLastMessage }}</p>
      <p class="chat__counter-message">{{ counterMessage }}</p>
    </div>
  </div>
</div>
`;

export default chatTmpl;
