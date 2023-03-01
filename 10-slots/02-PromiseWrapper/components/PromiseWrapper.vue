<template>
  <slot :name="status" :error="error" :result="result"/>
</template>

<script>
export default {
  name: 'PromiseWrapper',

  props: {
    promise: {
      type: Promise,
      required: true,
    },
  },

  data() {
    return {
      status: null,
      error: null,
      result: null
    }
  },

  watch: {
    promise: function() {
      this.setData();
    }
  },

  methods: {
    async setData() {
      try {
        this.status = 'pending';
        const response = await this.promise;
        this.status = 'fulfilled';
        this.result = response;
      } catch (error) {
        this.status = 'rejected';
        this.error = error;
      }
    }
  },

  mounted() {
    this.setData();
  }
};
</script>
