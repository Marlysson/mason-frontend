<template>
	
	<ul class="errors-container">
		<label>Errors</label>
		<ErrorItemComponent v-for="error in errors" v-bind:error="error" />
	</ul>

</template>

<script>

import ErrorItemComponent from './ErrorItemComponent.vue';

export default{
	props : ['errors'],
	components: {
		ErrorItemComponent
	}
}

</script>

<style scoped>
	
.errors-container{
    margin:10px auto 0;
    width:830px;
}

</style>