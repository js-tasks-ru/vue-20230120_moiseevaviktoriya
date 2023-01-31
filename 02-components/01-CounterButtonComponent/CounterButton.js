import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0
    }
  },

  emits: ['update:count'],

  methods: {
    emitValue() {
      let count = this.count;
      count++;
      this.$emit('update:count', count);
    }
  },

  // Компонент должен иметь входной параметр и порождать событие

  template: `<button type="button" @click="emitValue">{{ count }}</button>`,
});
