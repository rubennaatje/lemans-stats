<template>
  <article class="athelas">
    <pre>
      {{ article }}
    </pre>
    <div
      class="vh-100 dt w-100 tc bg-dark-gray white cover"
      style="
        background: url(http://mrmrs.github.io/photos/u/009.jpg) no-repeat
          center;
      "
    >
      <div class="dtc v-mid">
        <header class="white-70">
          <h2 class="f6 fw1 ttu tracked mb2 lh-title">Issue Six</h2>
          <h3 class="f6 fw1 lh-title">Summer MMXVI</h3>
        </header>
        <h1 class="f1 f-headline-l fw1 i white-60">The Chronicles</h1>
        <blockquote class="ph0 mh0 measure f4 lh-copy center">
          <p class="fw1 white-70">
            It's the space you put between the notes that make the music.
          </p>
          <cite class="f6 ttu tracked fs-normal">Massimo Vignelli</cite>
        </blockquote>
      </div>
    </div>
    <div class="center measure-wide f5 pv5 lh-copy ph2">
      <h1 class="f1 lh-title">The repercussion of ugliness is endless</h1>
      <nuxt-content :document="article" />
    </div>
  </article>
</template>

<script>
export default {
  props: ['article'],
}
</script>

<style lang="less" scoped>
.f1 {
  background-color: red;
}
::v-deep .nuxt-content h1 {
  &:extend(.f1);
  &:extend(.lh-title);
}
</style>
