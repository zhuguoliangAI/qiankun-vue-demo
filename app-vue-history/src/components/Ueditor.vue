<template>
	<div>
		<h1>ueditor</h1>
		<script id="editor" type="text/plain" style="width:1024px;height:500px;"></script>
	</div>
</template>

<script>
	export default {
		name: 'Ueditor',
		data() {
			return {
				editor: null,
			}
		},
		mounted() {
			this.editor = window.UE.getEditor('editor');
		}
	}
</script>

<style scoped>

</style>