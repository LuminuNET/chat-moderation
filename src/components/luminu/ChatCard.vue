<template>
	<lm-card :highlight="isHighlighted" class="lm-chat-card">
		<div class="lm-chat-card__content">
			<img
				class="info-img"
				:src="
					`https://crafatar.com/avatars/${uuid}?overlay=true&size=48`
				"
				:alt="`Skull of ${name}`"
			/>
			<div class="info-group info-group--name">
				<h4 class="info-group__title">{{ $t('chatlog.player') }}</h4>
				<p class="info-group__content">{{ name }}</p>
			</div>
			<div class="info-group info-group--message">
				<div>
					<h4 class="info-group__title">
						{{ $t('chatlog.message') }}
					</h4>
					<p class="info-group__content">{{ message }}</p>
				</div>
			</div>
			<div class="info-group info-group--timestamp">
				<div>
					<h4 class="info-group__title">{{ $t('chatlog.time') }}</h4>
					<p class="info-group__content">
						{{ formattedTimestamp() }}
					</p>
				</div>
			</div>
		</div>
	</lm-card>
</template>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

.lm-chat-card {
	.lm-chat-card__content {
		display: grid;
		grid-template-areas: 'img name message timestamp';
		grid-template-columns: 64px 140px 1fr 100px;

		.info-img {
			grid-area: img;

			display: block;
			margin: auto 0;

			border-radius: 3px;
			box-shadow: 1px 1px rgba($color: #000000, $alpha: 0.5);

			width: 48px;
			height: 48px;
		}

		.info-group {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;

			.info-group__title {
				font-weight: 400;
				color: rgba($color: #000000, $alpha: 0.5);
				font-size: 14px;
				font-family: 'Rubik';
			}

			.info-group__content {
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				max-width: 100%;
				font-family: 'Rubik';
				font-size: 16px;
			}
		}

		.info-group--name {
			grid-area: name;
		}

		.info-group--message {
			grid-area: message;
			position: relative;

			> div {
				position: relative;
				max-width: 96%;

				.info-group__content {
					text-overflow: clip;
					white-space: initial;
					overflow: initial;
					word-break: break-word;
					max-width: 100%;
					font-family: 'Rubik';
					font-size: 16px;
				}
			}
		}

		.info-group--timestamp {
			grid-area: timestamp;
		}
	}
}
</style>

<script lang="ts">
import Vue from 'vue';
import LmCard from '@/components/base/Card.vue';

export default Vue.extend({
	name: 'LmChatCard',
	components: {
		LmCard
	},
	props: {
		name: {
			type: String,
			required: true
		},
		uuid: {
			type: String,
			required: true
		},
		message: {
			type: String,
			required: true
		},
		timestamp: {
			required: true
		},
		isHighlighted: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		formattedTimestamp(): String {
			// @ts-ignore
			const hours: number = this.timestamp.getHours();
			// @ts-ignore
			const minutes: number = this.timestamp.getMinutes();
			// @ts-ignore
			const seconds: number = this.timestamp.getSeconds();
			return hours + ':' + minutes + ':' + seconds;
		}
	}
});
</script>
