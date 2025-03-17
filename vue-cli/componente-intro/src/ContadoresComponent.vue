<template>
  <div class="contadores">
    <app-contador v-for="c in 5" :key="c"/>
  </div>
</template>

<script>
import ContadorComponent from './ContadorComponent.vue';
export default {
    components: { 'app-contador':  ContadorComponent }
}
</script>

<style>

</style>