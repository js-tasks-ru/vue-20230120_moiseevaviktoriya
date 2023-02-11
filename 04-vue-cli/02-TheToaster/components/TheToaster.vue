<template>
  <div class="toasts" v-if="toasts.length">
    <ui-toast
      v-for="toast in toasts"
      :key="toast.id"
      :id="toast.id"
      :type="toast.type"
      @deleteToast="deleteToast(toast.id)">
      <ui-icon class="toast__icon" :icon="toast.icon" />
      <span>{{ toast.message }}</span>
    </ui-toast>
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';
import UiToast from './UiToast.vue';

export default {
  name: 'TheToaster',

  components: { UiIcon, UiToast },

  data() {
    return {
      toasts: [],
      lastId: 0
    }
  },

  methods: {
    success(message) {
      this.addToast(message)
    },

    error(message) {
      this.addToast(message, 'error', 'alert-circle')
    },

    addToast(message, type = 'success', icon = 'check-circle'){
      const newToast = {
        message: message,
        type: type,
        icon: icon,
        id: this.lastId++
      };

      this.toasts.push(newToast);
    },

    deleteToast(id) {
      const deletedToastIndex = this.toasts.findIndex(toast => toast.id === id);
      this.toasts.splice(deletedToastIndex, 1);
    }
  }
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast__icon {
  margin-right: 12px;
}
</style>
