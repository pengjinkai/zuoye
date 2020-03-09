<template>
	<div>
		<div class="fintitle">发现</div>
		<div class="findnav">
			<router-link to='/myfind/matt'>推荐</router-link>
			<router-link to='/myfind/mreco'>关注</router-link>
			<router-link to='/myfind/mcity'>同城</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
</script>

<style lang="scss" >
	.fintitle {
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #ccc;
		text-align: center;
	}

	.findnav {
		height: 36px;
		line-height: 36px;
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: space-around;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: darkblue;
				border-bottom: 2px solid darkblue;
			}
		}
	}
</style>
