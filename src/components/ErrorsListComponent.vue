<template>
	
	<ul class="errors-container">
		
		<label>Errors</label>

		<li class="error-item" 
			v-for="error in errors" 
			v-bind:error="error" 
			v-bind:key="error">
			{{error}}
		</li>		

	</ul>

</template>

<script>

export default{
	props : ['errors']
}

</script>

<style scoped>
	
.errors-container{
    margin:10px auto 0;
    width:830px;
}

.error-item{
	list-style-type: none;
	border:2px solid white;
	color:white;
	padding:10px 0 10px 10px;
	text-align: left;
	font-weight: bold;
	margin-bottom:10px;
}

</style>