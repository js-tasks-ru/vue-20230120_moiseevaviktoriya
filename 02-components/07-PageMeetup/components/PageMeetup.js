import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';
import MeetupView from '../../06-MeetupView/components/MeetupView';

export default defineComponent({
  name: 'PageMeetup',
  fetchMeetupById,

  components: {
    UiAlert,
    UiContainer,
    MeetupView
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
      default: 1
    }
  },

  data() {
    return {
      isLoading: true,
      meetup: null,
      error: null
    }
  },

  watch: {
    meetupId(newId, oldId) {
      if (newId !== oldId) {
        this.loadData(newId);
      }
    }
  },

  methods: {
    loadData(id) {
      this.isLoading = true;
      this.error = null;
      this.$options.fetchMeetupById(id)
        .then(result => {
          this.meetup = result;
        })
        .catch((e) => {
          this.error = e.message;
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  },

  mounted() {
    this.loadData(this.meetupId);
  },

  template: `
    <div class="page-meetup">
      <MeetupView v-if="meetup && !isLoading && !error" :meetup="meetup"/>

      <UiContainer>
        <UiAlert v-if="isLoading">Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer>
        <UiAlert v-if="error && !isLoading">{{ error }}</UiAlert>
      </UiContainer>
    </div>`,
});
