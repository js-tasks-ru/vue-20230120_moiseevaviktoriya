<template>
  <div class="calendar-view__cell" tabindex="0">
    <div class="calendar-view__cell-day">{{ date.getDate() }}</div>
    <div class="calendar-view__cell-content">
      <template v-if="meetups.length">
        <a
          v-for="meetup in meetups"
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
      date: {
        type: Date,
        required: true,
        default: new Date()
      },

      meetups: {
        type: Array,
        default: () => []
      }
    },
  };
</script>

<style scoped>

</style>
