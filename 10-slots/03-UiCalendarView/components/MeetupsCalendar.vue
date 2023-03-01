<template>
  <UiCalendarView v-slot="{ item }">
    <UiCalendarEvent
      v-for="meetup in getMeetupsByDate(item.date)"
      tag="a"
      :href="`/meetups/${meetup.id}`">
        {{ meetup.title }}
    </UiCalendarEvent>
  </UiCalendarView>
</template>

<script>
import UiCalendarView from './UiCalendarView.vue';
import UiCalendarEvent from './UiCalendarEvent.vue';

export default {
  name: 'MeetupsCalendar',

  components: {
    UiCalendarEvent,
    UiCalendarView,
  },

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  methods: {
    getMeetupsByDate(date) {
      return this.meetups.filter(meetup => {
        const meetupDate = new Date(meetup.date);
        return meetupDate.getMonth() === date.getMonth()
          && meetupDate.getFullYear() === date.getFullYear()
          && meetupDate.getDate() === date.getDate();
      });
    }
  }
};
</script>

<style scoped></style>
