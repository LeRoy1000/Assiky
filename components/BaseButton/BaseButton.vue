<template>
  <template v-if="href">
    <NuxtLink :to="href" :class="btnClasses" @click="onClick" :style="style" :disabled="disabled">
      {{ label }}
      <slot name="icon"></slot>
    </NuxtLink>
  </template>
  <template v-else>
    <button type="button" :class="btnClasses" @click="onClick" :style="style" :disabled="disabled">
      {{ label }}
      <slot name="icon"></slot>
    </button>
  </template>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    validator(value) {
      return ['primary', 'secondary', 'tertiary'].includes(value);
    },
  },
  size: {
    type: String,
    default: 'medium',
    validator(value) {
      return ['normal', 'medium', 'small'].includes(value);
    },
  },
  background: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
    default: '',
  },
  iconPosition: {
    type: String,
    default: 'right',
    validator(value) {
      return ['left', 'right'].includes(value);
    },
  },
  disabled: {
    type: Boolean,
    required: false,
  },
});
const emit = defineEmits(['click']);

const btnClasses = computed(() => {
  const classes = ['btn'];
  if (props.variant) {
    classes.push(`btn--${props.variant.toLowerCase()}`);
  }

  if (props.size) {
    classes.push(`btn--${props.size.toLowerCase()}`);
  }
  if (props.icon) {
    classes.push('icon');

    if (props.iconPosition) {
      props.iconPosition === 'right' ? classes.push('flex-row') : classes.push('flex-row-reverse');
    }
  }

  return classes;
});

const style = computed(() => ({
  background: props.background,
}));

const onClick = function () {
  emit('click');
};
</script>

<style src="./BaseButton.css" scoped></style>
