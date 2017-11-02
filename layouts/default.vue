<template>
  <div>
    <the-heading />

    <section class="section">
        <div class="container">
          <nuxt />
        </div>
      </section>

  </div>
</template>

<script>
  import TheHeading from '@/components/TheHeading'
  export default {
    components: { TheHeading }
  }
</script>
