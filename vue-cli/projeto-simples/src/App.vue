<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '#'">ADD</button>
  </div>
</template>

<script>
export default {

  data: function() {
    return {
      titulo: 'Olá mundo!'
    }
  }

}
</script>

<style>
  #app {
    background-color: #333;
    color: whitesmoke;
  }

</style>