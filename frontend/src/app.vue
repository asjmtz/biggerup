<template>
	<div>
	  	<h1>Hello App!</h1>
	  	<p>
	    	<!-- use v-link directive for navigation. -->
	    	<a v-link="/foo/34234">Go to Foo</a>
	    	<a v-link="/bar">Go to Bar</a>
	  	</p>
	  	<!-- use router-view element as route outlet -->
	  	<router-view></router-view>
	</div>
</template>

<script>
	
	module.exports = {
		
	}
</script>