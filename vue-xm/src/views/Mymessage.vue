<template>
	<div class="messag">
		<div class="messages">消息</div>
		<div class="messagepp">
			<a href="">
				<img src="../assets/message.png" alt="">
			</a>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="scss">
	.messag{
		width: 100%;
		height: 100vh;
		background: #f6f6f6;
		.messages{
			width: 100%;
			height: 44px;
			text-align: center;
			line-height: 44px;
			position: fixed;
			top: 0;
			left: 0;
			background: #fff;
		}
		.messagepp{
			margin-top: 48px;
			text-align: center;
			background: #f6f6f6;
			padding-top: 85px;
		}
	}
</style>
