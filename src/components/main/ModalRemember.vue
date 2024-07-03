<template>
  <div v-if="visible" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <!-- <form method="dialog"> -->
        <!-- if there is a button in form, it will close the modal -->
        <button @click="confirm" class="btn">confirm</button>
        <button @click="close" class="btn">Close</button>
        <!-- </form> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue";
import { bool } from "vue-types";

defineProps({
  visible: bool()
});

const emits = defineEmits(["confirm", "close"]);

const close = () => {
  emits("close");
};

const confirm = () => {
  emits("confirm");
};
</script>
