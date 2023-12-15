<template>
  <Story title="Typography" :layout="{ type: 'grid', width: 600 }">
    <h1 class="text-black font-bold">Typography</h1>
    <Variant :title="item.title" v-for="(item, i) in typo" :key="i">
      <Typography
        :tag="item.tag"
        :label="item.label"
        :subLabel="item.subLabel"
        :fontFamily="item.fontFamily"
        :fontSize="item.fontSize"
        :fontWeight="item.fontWeight"
        :lineHeight="item.lineHeight"
      ></Typography>
    </Variant>
  </Story>
</template>

<script setup>
import Typography from './Typography.vue';

const typo = [
  {
    title: 'h1',
    tag: 'h1',
    label: 'Headline 1',
    subLabel: 'Bold, 64/76',
    fontFamily: 'Raleway',
    fontSize: 4,
    fontWeight: 700,
    lineHeight: 4.75,
  },
  {
    title: 'h2',
    tag: 'h2',
    label: 'Headline 2',
    subLabel: 'Semi Bold, 36/44',
    fontFamily: 'Raleway',
    fontSize: 2.75,
    fontWeight: 600,
    lineHeight: 2.75,
  },
  {
    title: 'h3',
    tag: 'h3',
    label: 'Headline 3',
    subLabel: 'Bold, 28/36',
    fontFamily: 'Raleway',
    fontSize: 1.75,
    fontWeight: 700,
    lineHeight: 2.25,
  },
  {
    title: 'h4',
    tag: 'h4',
    label: 'Headline 4',
    subLabel: 'Semi Bold, 20/28',
    fontFamily: 'Raleway',
    fontSize: 1.25,
    fontWeight: 600,
    lineHeight: 1.75,
  },
  {
    title: 'Body 1 | Regular',
    tag: 'p',
    label: 'Body 1',
    subLabel: 'Regular, 18/28',
    fontFamily: 'Open Sans',
    fontSize: 1.25,
    fontWeight: 400,
    lineHeight: 1.75,
  },
  {
    title: 'Body 2 | Regular',
    tag: 'p',
    label: 'Body 2',
    subLabel: 'Regular, 16/24',
    fontFamily: 'Open Sans',
    fontSize: 1,
    fontWeight: 400,
    lineHeight: 1.5,
  },
  {
    title: 'Body 3 | Regular',
    tag: 'p',
    label: 'Body 3',
    subLabel: 'Regular, 14/20',
    fontFamily: 'Open Sans',
    fontSize: 0.875,
    fontWeight: 400,
    lineHeight: 1.25,
  },
  {
    title: 'Body 4 | Regular',
    tag: 'p',
    label: 'Body 4',
    subLabel: 'Regular, 12/16',
    fontFamily: 'Open Sans',
    fontSize: 0.75,
    fontWeight: 400,
    lineHeight: 1,
  },
  {
    title: 'Body 1 | Medium',
    tag: 'p',
    label: 'Body 1',
    subLabel: 'Medium, 18/28',
    fontFamily: 'Open Sans',
    fontSize: 1.125,
    fontWeight: 600,
    lineHeight: 1.75,
  },
  {
    title: 'Body 2 | Medium',
    tag: 'p',
    label: 'Body 2',
    subLabel: 'Medium, 16/24',
    fontFamily: 'Open Sans',
    fontSize: 1,
    fontWeight: 600,
    lineHeight: 1.5,
  },
  {
    title: 'Body 3 | Medium',
    tag: 'p',
    label: 'Body 3',
    subLabel: 'Medium, 14/20',
    fontFamily: 'Open Sans',
    fontSize: 0.875,
    fontWeight: 600,
    lineHeight: 1.25,
  },
  {
    title: 'Body 4 | Medium',
    tag: 'p',
    label: 'Body 4',
    subLabel: 'Medium, 1/16',
    fontFamily: 'Open Sans',
    fontSize: 0.75,
    fontWeight: 600,
    lineHeight: 1,
  },
];
</script>
