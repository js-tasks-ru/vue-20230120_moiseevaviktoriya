<template>
  <button @click="localCount++">{{ localCount }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    }
  },

  emits: ['update:count'],


  data() {
    return {
      localCount: 0,
    };
  },

  watch: {
    count: {
      immediate: true,
      handler(newValue) {
        if (this.localCount !== this.count) this.localCount = newValue;
      }
    },

    localCount: {
      handler() {
        if (this.localCount !== this.count) {
          this.$emit('update:count', this.localCount );
        }
      },
    },
  }
};
</script>
