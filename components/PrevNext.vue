<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'results', params: { slug: prev.slug } }"
      class="text-primary font-bold hover:underline"
    >
      {{ prev.slug }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'results', params: { slug: next.slug } }"
      class="font-bold hover:underline"
    >
      {{ next.slug }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>
