<template>
	<nav>
		<div class="container">
			<ul>
				<li v-for="(link, index) in links" :key="index">
					<div class="li-container wrapper">
						<div class="short-link">
							<a :href="link.to">{{ link.name }}</a>
						</div>
						<div class="dropdown-activator">
							<svg
								aria-hidden="true"
								focusable="false"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 320 512"
								width="10px"
								height="15px"
							>
								<path
									fill="white"
									d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
								></path>
							</svg>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'LmStickyHeader',
	data: () => ({
		links: [
			{
				name: 'Home',
				to: '/'
			},
			{
				name: 'Forums',
				to: '/forums'
			},
			{
				name: 'Members',
				to: '/members'
			}
		]
	})
});
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

nav {
	position: sticky;
	top: 0;
	max-height: 71px;
	height: 71px;
	background-color: $lmColor2;
	box-shadow: 0px 5px $lmColor3;

	ul {
		display: inline-flex;

		li {
			list-style: none;
			margin: 15px 0px;

			.li-container {
				&.wrapper,
				.short-link,
				.dropdown-activator {
					transition: background 0.25s ease-out;
					background: transparent;
				}

				&.wrapper {
					display: flex;
					margin-right: 20px;
					cursor: pointer;
					// padding: 10px 0px;

					&:hover,
					.short-link:hover,
					.dropdown-activator:hover {
						background: rgba(252, 252, 252, 0.06);
					}

					.short-link {
						font-size: 15px;
						font-weight: 700;
						text-transform: uppercase;
						letter-spacing: 0.25px;
						padding: 10px 10px;

						a {
							text-decoration: none;
							color: white;
						}
					}

					.dropdown-activator {
						padding: 10px 6px;
						opacity: 0.6;
						transition: all 0.25s ease-out;

						&:hover {
							opacity: 1;
						}
					}
				}
			}
		}
	}
}
</style>
