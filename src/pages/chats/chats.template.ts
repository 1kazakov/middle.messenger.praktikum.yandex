export default `
<main class="page">
  <div class="page__chats chats">
    <div class="chats__header">
      <div>{{ inputSearch }}</div>
      <div>{{ buttonProfile }}</div>
    </div>
    <div class="chat__list-wrapper">
      <ul class="chats__list chats-list">
        {% chats %}
          <li>{{ chat }}</li>
        {% end %}
      </ul>
    </div>
  </div>

  <div class="page__selected-chat selected-chat">
    <div class="selected-chat__header">
      <div class="selected-chat__chat-info">
        <div class="selected-chat__avatar">
          <img src="{{ selectedChatAvatar }}" />
        </div>
        <p class="selected-chat__name">
          {{ selectedChatName }}
        </p>
      </div>
      <div class="selected-chat__chat-options chat-options">
        <button class="chat-options__button button-round button-round--options">
          <span class="dots"></span>
        </button>
        <div class="chat-options__popup">
          <ul class="chat-options__list options-list">
            {% optionList %}
              <li>{{ option }}</li>
            {% end %}
          </ul>
        </div>
      </div>
    </div>
    <ul class="selected-chat__list-messages list-messages">
      {% messages %}
        <li>{{ message }}</li>
      {% end %}
    </ul>
    <div class="selected-chat__send-section send-section">
      <div class="send-section__message-actions message-actions">
      <div>{{ buttonSendMessage }}</div>
        <div class="message-actions__popup">
          <ul class="message-actions__list">
            {% messagesActions %}
              <li>{{ messageAction }}</li>
            {% end %}
          </ul>
        </div>
      </div>
      <div class="send-section__input-message input-message">
        <div>{{ inputMessage }}</div>
        <div>{{ buttonSendMessage }}</div>
      </div>
    </div>
  </div>
</main>
`;
