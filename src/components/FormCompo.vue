<script lang="ts">
export default {
  name: 'FormCompo',
  mounted() {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://app.mailjet.com/pas-nc-embedded-v1.js'
    document.body.appendChild(script)
  },
}
</script>

<template>
  <div>
    <iframe
      data-w-type="embedded"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://1sy3v.mjt.lu/wgt/1sy3v/0u0n/form?c=c8324ada"
      width="100%"
      style="height: 0"
    ></iframe>
  </div>
</template>

<style scoped>
iframe {
  width: 100%;
  border: none;
  background-color: var(--white);
}

iframe body form {
  padding: 0;
}
</style>
