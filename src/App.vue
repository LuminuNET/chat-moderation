<template>
	<div id="app">
		<lm-header :image="require('@/assets/style-logo.png')" />
		<lm-sticky-header />
		<router-view />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import LmHeader from '@/components/layout/Header.vue';
import LmStickyHeader from '@/components/layout/StickyHeader.vue';

export default Vue.extend({
	components: {
		LmHeader,
		LmStickyHeader
	}
});
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

// GLOBALS
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	overflow-y: scroll;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	background-color: $background;
}

.container {
	max-width: $defaultMaxWidth;
	margin: 0 auto;
}

@media screen and (max-width: $breakpoint) {
	.container {
		max-width: 95%;
	}
}
</style>
