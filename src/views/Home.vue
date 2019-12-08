<template>
	<div class="view home wrapper container">
		<div class="main active-chatreports">
			<h3 class="main__header active-chatreports__header">
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
		<lm-card class="sidebar">
			<h3 class="sidebar__header">Luminu</h3>
			<div class="sidebar__divider">
				<hr />
			</div>
			<div class="sidebar__stat wrapper">
				<p class="sidebar__stat__type">
					{{ $t('monitoring.reports') }}:
				</p>
				<p class="sidebar__stat__value">7</p>
			</div>
			<div class="sidebar__stat wrapper">
				<p class="sidebar__stat__type">
					{{ $t('monitoring.activeModerators') }}:
				</p>
				<p class="sidebar__stat__value">2</p>
			</div>
			<div class="sidebar__btn sidebar__btn--queue">
				<p class="sidebar__btn__content available">
					{{ $t('monitoring.enterQueue') }}
				</p>
			</div>
			<div class="sidebar__divider">
				<hr />
			</div>
			<p class="sidebar__input-label">
				{{ $t('monitoring.searchChatreport') }}
			</p>
			<input class="sidebar__input" type="text" placeholder="By Id.." />
			<div class="sidebar__btn sidebar__btn--search">
				<p class="sidebar__btn__content">
					{{ $t('monitoring.search') }}
				</p>
			</div>
		</lm-card>
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
			'This is my really long message that goes over the boundaries of this chat',
		reportId: '123456',
		chatlogId: '654321',
		isAvailable: true
	})
});
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.home {
	&.wrapper {
		.active-chatreports {
			.card {
				margin-bottom: 25px;
			}

			margin-bottom: 500px;
		}

		.sidebar {
			.sidebar__stat {
				&.wrapper {
					display: flex;
					justify-content: space-between;
					font-size: 18px;
				}
			}

			.sidebar__btn {
				display: flex;
				justify-content: center;
				margin-top: 10px;
				margin-bottom: 15px;

				&.sidebar__btn--queue {
					.sidebar__btn__content {
						&.available {
							background-color: $lmSuccess;
							box-shadow: 0px 2px
								rgba($color: $lmSuccessDarken, $alpha: 1);

							&:hover {
								background-color: $lmSuccessDarken;
							}
						}

						&.unavailable {
							background-color: $lmError;
							box-shadow: 0px 2px
								rgba($color: $lmErrorDarken, $alpha: 1);

							&:hover {
								background-color: $lmErrorDarken;
							}
						}
					}
				}

				.sidebar__btn__content {
					cursor: pointer;
					background-color: $lmColor2;
					padding: 4px 10px;
					border-radius: 5px;
					box-shadow: 0px 2px rgba($color: $lmColor3, $alpha: 1);
					color: white;
					font-size: 14px;
					transition: background-color 0.1s linear;

					&:hover {
						background-color: $lmColor3;
					}
				}
			}

			.sidebar__input-label {
				margin-top: 25px;
			}

			.sidebar__input {
				border: none;
				background: white;
				// box-shadow: 0px 0px 3px rgba($color: #000000, $alpha: 0.2);
				border: 1px solid rgba($color: #000000, $alpha: 0.3);
				width: 100%;
				height: 30px;
				text-indent: 10px;
				transition: box-shadow 0.175s ease-out;
				font-family: 'Rubik';
				font-size: 14px;
				margin-top: 5px;
				border-radius: 2px;

				&::placeholder {
					font-family: 'Rubik';
					font-size: 14px;
				}

				&:focus {
					outline: none;
					box-shadow: 0px 0px 0px 2px
						rgba($color: $lmColor2, $alpha: 0.4);
				}
			}
		}
	}
}
</style>
