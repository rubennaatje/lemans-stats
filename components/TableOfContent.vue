<template>
  <section class="tableofcontent">
    <h3>Table of Content</h3>
    <div id="toc">
      <ul>
        <li
          v-for="link of toc"
          :key="link.id"
          :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
        >
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  // eslint-disable-line
  props: ['toc'],
}
</script>

<style scoped>
.toc2 {
  margin-left: 10px;
  font-weight: normal;
}
.toc3 {
  margin-left: 20px;
  font-weight: lighter;
}

.toc,
ul {
  list-style-type: none;
}
.toc,
a {
  color: black;
  text-decoration: none;
}
</style>
