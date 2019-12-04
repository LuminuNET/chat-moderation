<template>
	<div class="lm-card">
		<div class="lm-card__content">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'LmCard'
});
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

.lm-card {
	position: relative;
	border-radius: 4px;
	width: 100%;
	background-color: white;
	box-shadow: 0px 1px 2px rgba($color: #000000, $alpha: 0.1);
	border-top: 5px solid $lmColor3;
	overflow: hidden;

	.lm-card__content {
		/* 
			TODO: Add possibility for fluid class
		*/
		padding: 10px;
	}
}
</style>
