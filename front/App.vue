<template>
  <div>
    <router-view></router-view>
    <button @click="aaa"></button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['profile'])
  },
  mounted() {
    const data = {
      username: 'xcy',
      phone: '123123'
    }

    this.saveProfile(data)
  },
  methods: {
    ...mapActions(['saveProfile']),
    aaa() {
      console.log(this)
    }
  }
}
</script>