<template>
    <div>
      <Header>
      </Header>
        <router-view></router-view>
      <Footer>
      </Footer>
    </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {

  components: {
    Header,
    Footer,
  },
  async mounted(){

    this.$store.commit('TypeNav/getList');
  }
}

</script>

<style>
</style>
