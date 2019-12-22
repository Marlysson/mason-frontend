<template>
	
	<li class="error-item">{{error}}</li>		

</template>

<script>
	
export default{

	props: ['error'],
	name: 'ErrorItemComponent'
}

</script>

<style scoped>

	.error-item{
		list-style-type: none;
		border:2px solid white;
		color:white;
		padding:10px 0 10px 10px;
		text-align: left;
		width:815px;
		font-weight: bold;
		margin-bottom:10px;

	}

</style>