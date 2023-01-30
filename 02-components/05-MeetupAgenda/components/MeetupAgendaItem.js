import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  agendaItemDefaultTitles,
  agendaItemIcons,

  props: {
    agendaItem: {
      type: Object,
      required: true,
      default: () => {}
    }
  },

  computed: {
    iconURL() {
      return `/assets/icons/icon-${this.$options.agendaItemIcons[this.agendaItem.type]}.svg`;
    }
  },


  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="iconURL" class="icon" :alt="$options.agendaItemIcons[agendaItem.type]" />
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">
            <template v-if="agendaItem.title">{{ agendaItem.title }}</template>
            <template v-else>{{ $options.agendaItemDefaultTitles[agendaItem.type] }}</template>
        </h3>
        <p v-if="agendaItem.type === 'talk'" class="agenda-item__talk">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
