<template>
  <div id="app">
    <hello>
      <div slot="menu">
        我是侧边栏啦
      </div>
      <div class="content">
        <slideDel></slideDel>
      </div>
    </hello>
    <router-link class="btn" to="/picker">点击</router-link>
    <router-view/>
  </div>
</template>

<script>
  import hello from './components/HelloWorld.vue'
  import slideDel from './components/slideDel.vue'
  import picker from './components/picker'
  export default {
   name: 'App',
    components:{
      hello,
      slideDel
    }
  }
</script>
<style  >
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  font,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  center,
  u,
  b,
  i {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: normal;
    font-style: normal;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline
  }

  html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
  }

  input[type=search]::-webkit-search-cancel-button,
  input[type=search]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  html,
  body {
    -webkit-overflow-scrolling: touch;
    height: 100%;
    overflow-x: hidden;
  }

  body {
    line-height: 1;
    font-size: 0.14rem;
  }

  :focus {
    outline: 0
  }

  ol,
  ul {
    list-style: none
  }

  table {
    border-collapse: collapse;
    border-spacing: 0
  }

  img {
    border: 0;
    width: 100%;
    max-width: 100% !important;
    vertical-align: middle;
  }

  input,
  textarea {
    margin: 0;
    padding: 0
  }

  a {
    text-decoration: none;
  }

  a:hover,
  a:focus {
    outline: none;
  }

  q:before,
  q:after {
    content: "";
  }
</style>
<style lang="stylus" scoped>
  #app
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .btn
      position absolute
      left: 0
      top: 50%
      width: 200px
      height: 100px
      background-color: red
    .menu
      background-color: orangered
    .content
      height: 100%
      width: 100%
      background-color: #ccc
</style>
