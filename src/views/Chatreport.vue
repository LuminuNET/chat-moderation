<template>
	<div class="view chatreport wrapper container">
		<div class="main chatlog">
			<h3 class="main__header active-chatreports__header">
				{{ $t('chatlog.chatlog') }} #{{ $route.params.id }}
			</h3>
			<lm-chat-card
				v-for="i in 8"
				:key="i"
				class="card"
				:name="name"
				:uuid="uuid"
				:message="message"
				:timestamp="timestamp"
				:isHighlighted="i % 2 === 0"
			/>
		</div>
		<lm-card class="sidebar">
			<h3 class="sidebar__header">Luminu</h3>
			<div class="sidebar__divider">
				<hr />
			</div>
			<div class="sidebar__stat wrapper">
				<p class="sidebar__stat__type">{{ $t('chatlog.reported') }}:</p>
				<p class="sidebar__stat__value">Keimeno</p>
			</div>
			<div class="sidebar__stat wrapper">
				<p class="sidebar__stat__type">{{ $t('chatlog.reporter') }}:</p>
				<p class="sidebar__stat__value">Noaaah</p>
			</div>
			<div class="sidebar__divider">
				<hr />
			</div>
			<div class="sidebar__stat wrapper">
				<p class="sidebar__stat__type">{{ $t('chatlog.time') }}:</p>
				<p class="sidebar__stat__value">0000/00/00 23:23</p>
			</div>
			<div class="sidebar__stat wrapper">
				<p class="sidebar__stat__type">{{ $t('chatlog.server') }}:</p>
				<p class="sidebar__stat__value">lm_2404</p>
			</div>
			<div class="sidebar__stat wrapper">
				<p class="sidebar__stat__type">{{ $t('chatlog.uniqueId') }}:</p>
				<p class="sidebar__stat__value">7dh72k</p>
			</div>
			<div class="sidebar__divider">
				<hr />
			</div>
			<h3 class="sidebar__header">Moderation</h3>
			<div class="sidebar__divider">
				<hr />
			</div>

			<!-- Mute Dropdown -->
			<div class="sidebar__stat wrapper">
				<p class="sidebar__stat__type sidebar__dropdown__type">
					{{ $t('chatlog.ban') }}:
				</p>
				<div
					class="sidebar__stat__value sidebar__dropdown error"
					:class="{ active: isActive }"
					@click="isActive = !isActive"
					@focusout="isActive = false"
					tabindex="0"
				>
					<p class="sidebar__dropdown__title">
						{{ activeReason }}
						<font-awesome-icon icon="caret-down" />
					</p>
					<div class="sidebar__dropdown__content">
						<ul>
							<li
								v-for="(value, key, index) in otherReasons"
								:key="index"
								@click="updateActiveReason(key)"
							>
								{{ key }}
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="sidebar__stat wrapper">
				<p class="sidebar__stat__type sidebar__btn vanish">
					{{ $t('chatlog.deny') }}
				</p>
				<p class="sidebar__stat__value sidebar__btn success">
					{{ $t('chatlog.accept') }}
				</p>
			</div>
		</lm-card>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import LmChatCard from '@/components/luminu/ChatCard.vue';
import LmCard from '@/components/base/Card.vue';

export default Vue.extend({
	name: 'home',
	components: {
		LmChatCard,
		LmCard
	},
	data: () => ({
		name: 'Keimeno',
		uuid: '6ee9150c-b99c-4d7f-9980-eb05c0c603e1',
		message:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis nemo velit ea doloribus.',
		timestamp: new Date(1549152000),
		isHighlighted: true,
		isActive: false,
		activeReason: 'Provokation',
		otherReasons: {
			Volksverhetzung: '',
			Werbung: '',
			Spamming: '',
			Beleidigung: ''
		}
	}),
	methods: {
		updateActiveReason(reason: string): void {
			const oldReason: string = this.activeReason;
			this.activeReason = reason;
			// @ts-ignore
			delete this.otherReasons[reason];
			// @ts-ignore
			this.otherReasons[oldReason] = '';
		}
	}
});
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.chatreport {
	&.wrapper {
		.chatlog {
			.card {
				margin-bottom: 25px;
			}
		}

		.sidebar {
			height: 300px;

			.sidebar__stat {
				&.wrapper {
					display: flex;
					justify-content: space-between;
					font-size: 18px;
				}
			}

			.sidebar__dropdown__type {
				margin-bottom: 5px;
			}

			.sidebar__dropdown,
			.sidebar__dropdown__title,
			.sidebar__btn {
				border-radius: 5px;
				font-size: 14px;
				color: white;
				cursor: pointer;
			}

			.sidebar__dropdown {
				position: absolute;
				right: 10px;
				background: $lmError;
				box-shadow: 0px 2px rgba($color: $lmErrorDarken, $alpha: 1);
				border-radius: 5px;

				.sidebar__dropdown__title {
					border-bottom-left-radius: 0px;
					border-bottom-right-radius: 0px;
					padding: 2px 8px;

					&:hover {
						background-color: $lmErrorDarken;
					}
				}

				&:focus {
					outline: none;
				}

				.sidebar__dropdown__content {
					display: none;

					ul {
						li {
							padding: 0px 8px;

							&:hover {
								background-color: $lmErrorDarken;
							}
						}
					}
				}

				&.active {
					.sidebar__dropdown__content {
						display: unset;
					}
				}
			}

			.sidebar__btn {
				background-color: $lmColor3;
				box-shadow: 0px 2px rgba($color: $lmColor2, $alpha: 1);
				padding: 2px 8px;
				transition: background-color 0.1s linear;

				&:hover {
					background-color: $lmColor2;
				}

				&.success {
					background-color: $lmSuccess;
					box-shadow: 0px 2px
						rgba($color: $lmSuccessDarken, $alpha: 1);

					&:hover {
						background-color: $lmSuccessDarken;
					}
				}

				&.error {
					background-color: $lmError;
					box-shadow: 0px 2px rgba($color: $lmErrorDarken, $alpha: 1);

					&:hover {
						background-color: $lmErrorDarken;
					}
				}

				&.vanish {
					background-color: $lmVanish;
					box-shadow: 0px 2px rgba($color: #555555, $alpha: 1);

					&:hover {
						background-color: #555555;
					}
				}

				&.no-shadow {
					box-shadow: none !important;
				}
			}
		}
	}
}
</style>
