<script setup>
import GuideItem from './AppGuideItem.vue'
</script>

<script>
export default {
  data() {
    return {
      resources: [
        {
          url: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/',
          title: 'Guia de início rápido do Bootstrap'
        },
        {
          url: 'https://getbootstrap.com/docs/5.3/getting-started/webpack/',
          title: 'Guia do Bootstrap Webpack'
        },
        {
          url: 'https://getbootstrap.com/docs/5.3/getting-started/parcel/',
          title: 'Guia do Bootstrap Parcel'
        },
        {
          url: 'https://getbootstrap.com/docs/5.3/getting-started/vite/',
          title: 'Guia do Bootstrap Vite'
        },
        {
          url: 'https://getbootstrap.com/docs/5.3/getting-started/contribute/',
          title: 'Contribuindo para o Bootstrap'
        },
      ]
    }
  }
}
</script>

<template>
  <h2>Guias</h2>
  <p>Leia instruções e documentação mais detalhadas sobre como usar ou contribuir para o Bootstrap.</p>
  <ul class="ps-0 list-style-none">
    <!-- TODO consertar mais tarde -->
    <!-- eslint-disable-next-line vue/valid-v-for -->
    <GuideItem v-for="item in resources" :href="item.url" :text="item.title" />
  </ul>
</template>
