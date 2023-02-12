import { defineComponent } from './vendor/vue.esm-browser.js';
import CounterButton from './CounterButton.js';

export default defineComponent({
  name: 'App',

  components: {
    CounterButton,
  },

  data() {
    return {
      count: undefined,
    };
  },

  template: `
    <div class="sample container">
      <p>count = {{ count }}</p>
      <p v-for="i in 3">
        <CounterButton 
        v-model:count="count" />
      </p>
    </div>
  `,
});
