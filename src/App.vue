<template>
  <div>AP</div>
  <h1>{{$store.state.user.profile}}</h1>
  <button @click="a">嗲我</button>
</template>
<script>
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    console.log(store)
    function a () {
      store.commit('user/setUser', {
        id: '123',
        avatar: 'aa',
        nickname: 'sss',
        account: 'ss',
        mobile: 'ddd',
        token: '1sfahrds'
      })
    }
    return {
      a
    }
  }
}
</script>
