<template>
  <div class="calendar-view__cell" tabindex="0">
    <div class="calendar-view__cell-day">{{ calendarItem.date.getDate() }}</div>
    <div class="calendar-view__cell-content">
      <template v-if="calendarItem.meetups.length">
        <a
          v-for="meetup in calendarItem.meetups"
          :href="`/meetups/${meetup.id}`"
          class="calendar-event">
          {{ meetup.title }}
        </a>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MeetupsCalendarCell',

    props: {
      calendarItem: {
        type: Object,
        required: true,
        default: () => {}
      }
    },
  };
</script>

<style scoped>

</style>
