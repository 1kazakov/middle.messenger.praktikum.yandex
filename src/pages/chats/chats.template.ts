import './chats.css';
import '../../components/button/button.css';
import '../../components/chat/chat.css';
import '../../components/message/message.css';

export default `
<main class="page">
  <div class="page__chats chats">
    <div class="chats__header">
      <div class="chats__header-brow">
        <div>{{ inputSearch }}</div>
        <div>{{ buttonProfile }}</div>
      </div>
      <div class="chats__header-footer">
        <form class="chats__form-new-chat create-new-chat">
          <div>{{ inputTitleNewChat }}</div>
          <div>{{ buttonNewChat }}</div>
        </form>
      </div>
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
    {: selectedChat :}
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
        <li class="list-messages__item">{{ message }}</li>
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
      <form class="send-section__input-message input-message send-message">
        <div>{{ inputMessage }}</div>
        <div>{{ buttonSendMessage }}</div>
      </form>
    </div>
    {: end :}
  </div>
</main>
`;
