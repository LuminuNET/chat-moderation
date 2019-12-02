<template>
	<header>
		<div class="container">
			<div class="branding wrapper">
				<img
					src="@/assets/style-logo.png"
					alt="Luminu"
					class="branding__logo"
				/>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'LmHeader'
});
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

header {
	background-color: $lmColor1;

	.branding {
		display: flex;
		justify-content: center;
		// align-items: center;
		// height: 335px;

		.branding__logo {
			margin-top: 30px;
			margin-bottom: 50px;

			width: 575px;
			height: 255px;
		}
	}
}
</style>
