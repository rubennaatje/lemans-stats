<template>
  <div>
    <nav class="pa3 pa4-ns">
      <a
        class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns"
        href="#"
        title="Home"
        >Le Mans Stats</a
      >
      <div class="tc pb3">
        <nuxt-link class="link dim gray f6 f5-ns dib mr3" to="/" title="Home">
          Home
        </nuxt-link>
        <nuxt-link
          to="/blogs"
          class="link dim gray f6 f5-ns dib mr3"
          title="Blog"
        >
          Blog
        </nuxt-link>
        <nuxt-link
          to="/all"
          class="link dim gray f6 f5-ns dib mr3"
          title="All Results"
        >
          All results
        </nuxt-link>
        <nuxt-link
          to="/years"
          class="link dim gray f6 f5-ns dib mr3"
          title="Races"
        >
          Races
        </nuxt-link>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
