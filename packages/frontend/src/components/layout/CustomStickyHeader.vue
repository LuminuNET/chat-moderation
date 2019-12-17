<template>
	<lm-sticky-header :links="links">
		<li class="user-auth">
			<p>{{ $t("navigation.login") }}</p>
		</li>
	</lm-sticky-header>
</template>

<script lang="ts">
import Vue from "vue";
import { LmStickyHeader } from "@luminu/components";

export default Vue.extend({
	name: "LmCustomStickyHeader",
	components: {
		LmStickyHeader
	},
	data: () => ({
		links: [
			{
				name: "overview",
				to: "/",
				isExternal: false,
				hasChildren: false
			},
			{
				name: "home",
				to: "https://luminu.net/",
				isExternal: true,
				hasChildren: false
			},
			{
				name: "forum",
				to: "https://luminu.net/forums",
				isExternal: true,
				hasChildren: false
			}
		]
	})
});
</script>
