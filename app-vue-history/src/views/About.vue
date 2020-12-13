<template>
	<div class="about">
		<h1>This is app-vue-history about page</h1>
		<Ueditor></Ueditor>
	</div>
</template>
<script>
	import Ueditor from '../components/Ueditor'

	export default {
		components: { Ueditor },
		mounted () {
			window.a = 1
			console.log(window.a, 'app-vue-history')
		}
	}
</script>
<style>
	/* 测试全局css污染 */
	h1 {
		color: red;
	}
</style>