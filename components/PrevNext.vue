<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="prev.slug"
      class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"
    >
      <svg
        class="w1"
        data-icon="chevronLeft"
        viewBox="0 0 32 32"
        style="fill: currentcolor"
      >
        <title>chevronLeft icon</title>
        <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
      </svg>
      <span class="pl1"> {{ prev.slug }}</span>
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="next.slug"
      class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"
    >
      <span class="pr1">{{ next.slug }}</span>
      <svg
        class="w1"
        data-icon="chevronRight"
        viewBox="0 0 32 32"
        style="fill: currentcolor"
      >
        <title>chevronRight icon</title>
        <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
      </svg>
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
