<template>
	<div id="app">
		<lm-header :image="require('@/assets/style-logo.png')" />
		<lm-custom-sticky-header />
		<router-view />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import LmHeader from "@/components/layout/Header.vue";
import LmCustomStickyHeader from "@/components/layout/CustomStickyHeader.vue";

export default Vue.extend({
	components: {
		LmHeader,
		LmCustomStickyHeader
	}
});
</script>

<style lang="scss">
@import "~@keimeno/scss/_globals.scss";

.view {
	&.wrapper {
		display: flex;

		.main {
			width: 100%;

			.main__header {
				font-size: 16px;
				font-family: "Segoe UI";
				font-weight: 600;
				margin-bottom: 10px;
			}
		}

		.sidebar {
			width: 350px;
			margin-left: 25px;
			height: 270px;
			position: sticky;
			top: 100px;

			p {
				font-family: "Rubik";
				font-size: 18px;
			}

			.sidebar__header {
				color: $lmColor3;
				text-transform: uppercase;
				margin-top: -5px;
				font-size: 18px;
			}

			.sidebar__divider {
				margin-top: 10px;
				margin-bottom: 20px;

				hr {
					position: absolute;
					width: 100%;
					margin-left: -10px;
					border: none;
					border-top: 1px solid rgba($color: #000000, $alpha: 0.3);
				}
			}
		}
	}
}
</style>
