<template>
  <div class="hello">
    ddd
  </div>
</template>

<script>
export default {
  name: 'Deposit',
  data () {
    return {}
  },
  created () {
    this.$axios.post('/confirm/lifeCycle')
      .then((res) => {
        if (res.code === 200) {
          console.log('xxx')
        }
      })
      .catch((err) => {
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
