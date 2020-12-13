<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Ueditor></Ueditor>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Ueditor from '@/components/Ueditor.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
	Ueditor,
  }
}
</script>
