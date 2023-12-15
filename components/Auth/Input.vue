<template>
  <div class="relative inputContainer">
    <template v-if="['text', 'email'].includes(type)">
      <img
        src="~/assets/icon/IconUser.svg"
        alt=""
        class="absolute top-1/2 -translate-y-1/2 left-2 w-5"
      />
    </template>
    <template v-else-if="type === 'password'">
      <img
        src="~/assets/icon/IconLock.svg"
        alt=""
        class="absolute top-1/2 -translate-y-1/2 left-2 w-5"
      />
    </template>

    <input
      :type="type"
      :name="name"
      :id="id"
      class="border border-grey-blue py-2 pl-10 pr-2 rounded-lg w-full text-grey-blue placeholder:text-grey-blue"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
    default: 'text',
    validator(value) {
      return ['text', 'email', 'password', 'tel'].includes(value);
    },
  },
  name: {
    type: String,
    required: false,
  },
  id: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
});
</script>

<style scoped>
.inputContainer::before {
  content: '|';
  color: #abbed1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.85rem;
}
</style>
