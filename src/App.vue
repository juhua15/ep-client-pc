<template>
  <div>AP</div>
  <h1>{{username}}</h1>
</template>
<script>
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const username = store.state.username
    return {
      username
    }
  }
}
</script>
