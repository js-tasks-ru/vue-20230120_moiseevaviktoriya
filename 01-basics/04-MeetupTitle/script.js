import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

const app = createApp({
  data() {
    return {
      checkedId: null,
      title: ''
    };
  },

  watch: {
    checkedId(newCheckedId, oldCheckedId) {
      if (newCheckedId !== oldCheckedId) {
        fetchMeetupById(newCheckedId).then(result => this.title = result.title);
      }
    }
  }
});

app.mount('#app');

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
