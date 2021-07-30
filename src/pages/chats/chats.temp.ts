export default `
<main class="page">
  <div class="page__chats chats">
    <div class="chats__header">
      {{ inputSearch}}
      {{ buttonProfile }}
    </div>
    <ul class="chats__list chats-list">
      {{ for chats}}
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
            <div class="chat__support-info">
            </div>
          </div>
        </li>
      {{ /for }}
    </ul>
  </div>

  <div class="page__selected-chat selected-chat">
    <div class="selected-chat__header">
      <div class="selected-chat__chat-info">
        <div class="selected-chat__avatar">
          <img src="{{ selectedChatAvatar}}" />
        </div>
        <p class="selected-chat__name">
          {{ selectedChatName }}
        </p>
      </div>
      <div class="selected-chat__chat-options chat-options">
        <button class="chat-options__button button-round"><button>
        <div class="chat-options__popup">
          <ul class="chat-options__list options-list">
            {{ for optionList }}
              <li class="options-list__item option">
                <button class="option__button button-round">
                </button>
                <p class="option__text">
                  {{ option }}
                </p>
              </li>
            {{ /for }}
          </ul>
        </div>
      </div>
    </div>
    <ul class="selected-chat__list-messages list-messages">
      {{ for messsages }}
        <li class="list-messages__item message">
          <p class="message__text">
            {{ message }}
          </p>
          <p class="message__date">
            {{ messageDate }}
          </p>
        </li>
      {{ /for }}
    </ul>
    <div class="selected-chat__send-section send-section">
      <div class="send-section__message-actions message-actions">
        <button></button>
        <div class="message-actions__popap">
          <ul class="message-actions__list">
            {{ for actions }}
              <li class="message-actions__list-item">
                <p class="message-actions__list-item-text">
                  {{ actions }}
                </p>
              </li>
            {{ /for }}
          </ul>
        </div>
      </div>
    </div>
  </div>
</main>
`;
