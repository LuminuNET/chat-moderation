<template>
	<div class="home wrapper container">
		<div class="active-chatreports">
			<h3 class="active-chatreports__header">
				{{ $t('monitoring.activeChatreports') }}
			</h3>
			<lm-chatreport-card
				v-for="i in 8"
				:key="i"
				class="card"
				:reported="reported"
				:reporter="reporter"
				:uuidReported="uuidReported"
				:lastMessage="lastMessage"
				:reportId="reportId"
				:chatlogId="chatlogId"
				:isAvailable="i < 6 ? true : false"
			/>
		</div>
		<lm-card class="sidebar"></lm-card>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import LmChatreportCard from '@/components/luminu/ChatreportCard.vue';
import LmCard from '@/components/base/Card.vue';

export default Vue.extend({
	name: 'home',
	components: {
		LmChatreportCard,
		LmCard
	},
	data: () => ({
		reported: 'Keimeno',
		reporter: 'XXXXXXXXXXXXXXXX',
		uuidReported: '6ee9150c-b99c-4d7f-9980-eb05c0c603e1',
		lastMessage:
			'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
		reportId: '123456',
		chatlogId: '654321',
		isAvailable: true
	})
});
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.home {
	margin-top: 30px;

	&.wrapper {
		display: flex;

		.active-chatreports {
			width: 100%;

			.active-chatreports__header {
				font-size: 16px;
				font-family: 'Segoe UI';
				font-weight: 600;
				margin-bottom: 10px;
			}

			.card {
				margin-bottom: 25px;
			}

			margin-bottom: 500px;
		}

		.sidebar {
			width: 350px;
			margin-left: 25px;
			height: 400px;
		}
	}
}
</style>
