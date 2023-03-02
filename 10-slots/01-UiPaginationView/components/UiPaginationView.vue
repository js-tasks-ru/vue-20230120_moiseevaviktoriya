<template>
  <div class="pagination-container">
    <slot
      v-for="item in chunks[page - 1]"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
export default {
  name: 'UiPaginationView',

  props: {
    page: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },

    perPage: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },

    items: {
      type: Array,
      required: true,
    },
  },

  computed: {
    chunks() {
      const chunks = [];
      for (let i = 0; i < this.items.length; i += this.perPage) {
        chunks.push(this.items.slice(i, i + this.perPage));
      }
      return chunks;
    }
  }
};
</script>

<style></style>
