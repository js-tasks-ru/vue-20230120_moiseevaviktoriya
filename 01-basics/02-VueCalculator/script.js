import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const app = createApp({
  data() {
    return {
      values: [0, 0],
      activeOperator: 'sum',
      operators: [
        {
          value: 'sum',
          symbol: '➕'
        },
        {
          value: 'subtract',
          symbol: '➖'
        },
        {
          value: 'multiply',
          symbol: '✖'
        },
        {
          value: 'divide',
          symbol: '➗'
        }
      ]
    }
  },

  computed: {
    result() {
      switch (this.activeOperator) {
        case "sum": return this.values[0] + this.values[1];
        case "subtract": return this.values[0] - this.values[1];
        case "multiply": return this.values[0] * this.values[1];
        case "divide": return this.values[0] / this.values[1];
      }
    }
  }
});

app.mount('#app');
