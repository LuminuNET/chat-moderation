<template>
	<lm-card class="lm-chatreport-card">
		<div class="lm-chatreport-card__content">
			<img
				class="info-img"
				:src="
					`https://crafatar.com/avatars/${uuidReported}?overlay=true&size=48`
				"
				:alt="`Skull of ${reported}`"
			/>
			<div class="info-group info-group--reported">
				<h4 class="info-group__title">{{ $t("monitoring.reportedPlayer") }}</h4>
				<p class="info-group__content">{{ reported }}</p>
			</div>
			<div class="info-group info-group--reporter">
				<h4 class="info-group__title">{{ $t("monitoring.reportedFrom") }}</h4>
				<p class="info-group__content">{{ reporter }}</p>
			</div>
			<div class="info-group info-group--last-message">
				<div>
					<h4 class="info-group__title">{{ $t("monitoring.lastMessage") }}</h4>
					<p class="info-group__content">{{ lastMessage }}</p>
				</div>
			</div>
			<div class="info-group info-group--status">
				<h4 class="info-group__title">{{ $t("monitoring.status") }}</h4>
				<p class="info-group__content">
					{{
					$t(
					"monitoring." +
					(isAvailable ? "available" : "inProgress")
					)
					}}
				</p>
			</div>
			<div
				class="info-btn action-btn"
				:class="isAvailable ? 'available' : 'unavailable'"
				@click="isAvailable ? takeOver() : ''"
			>
				<p class="action-btn__text">
					{{
					$t(
					"monitoring." +
					(isAvailable ? "takeOver" : "unavailable")
					)
					}}
				</p>
			</div>
		</div>
	</lm-card>
</template>

<style lang="scss" scoped>
@import "~@luminu/ui-kit/scss/_variables.scss";

.lm-chatreport-card {
	.lm-chatreport-card__content {
		display: grid;
		grid-template-areas: "img reported reporter lastMessage status btn";
		grid-template-columns: 64px 140px 140px 1fr 100px 100px;

		.info-img {
			grid-area: img;

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
				font-family: "Rubik";
			}

			.info-group__content {
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				max-width: 100%;
				font-family: "Rubik";
				font-size: 16px;
			}
		}

		.info-group--reported {
			grid-area: reported;
		}

		.info-group--reporter {
			grid-area: reporter;
		}

		.info-group--last-message {
			grid-area: lastMessage;
			position: relative;

			> div {
				position: absolute;
				overflow: hidden;
				max-width: 96%;
			}
		}

		.info-group--status {
			grid-area: status;
		}

		.info-btn {
			grid-area: btn;

			width: 100px;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 5px;
			cursor: pointer;
			color: white;
			font-weight: 600;
			transition: background-color 0.1s ease-in;

			&.available {
				background-color: $lmSuccess;
				box-shadow: 0px 2px rgba($color: $lmSuccessDarken, $alpha: 1);

				&:hover {
					background-color: $lmSuccessDarken;
				}
			}

			&.unavailable {
				background-color: $lmError;
				box-shadow: 0px 2px rgba($color: $lmErrorDarken, $alpha: 1);

				&:hover {
					background-color: $lmErrorDarken;
				}
			}
		}
	}
}
</style>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import { LmCard } from "@luminu/components";

export default Vue.extend({
	name: "LmChatreportCard",
	components: {
		LmCard
	},
	props: {
		reported: {
			type: String,
			required: true
		},
		reporter: {
			type: String,
			required: true
		},
		uuidReported: {
			type: String,
			required: true
		},
		lastMessage: {
			type: String,
			required: true
		},
		reportId: {
			type: String,
			required: true
		},
		chatlogId: {
			type: String,
			required: true
		},
		isAvailable: {
			type: Boolean,
			required: true
		}
	},
	methods: {
		takeOver(): void {
			this.$router.push({ path: "/" + this.chatlogId });
		}
	}
});
</script>
