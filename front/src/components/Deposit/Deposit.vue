<template>
  <div class="hello">
   From Back: {{data.msg}}
  </div>
</template>

<script>
export default {
  name: 'Deposit',
  data () {
    return {
      data: {}
    }
  },
  created () {
    this.$axios.get('/wx/configData')
      .then((res) => {
        this.data = res.data
      })
      .catch(() => {
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
