<template>
	<div>
		<!-- 登陆状态 -->
		<div class="state">
			<div class="stateimg"><img src="../assets/iconfont/state.png"></div>
			<div class="statet">未登录</div>
			<div class="statex">加入加减号0天</div>
			<a class="sz">设置</a>
		</div>
		<!-- 资料 -->
		<div class="datum">
			<div>
				<img src="../assets/iconfont/state1.png">
				<span>用户等级</span>
			</div>
			<div class="datums">
				<img src="../assets/iconfont/state2.png">
				<span>我的收藏</span>
			</div>
			<div>
				<span>个人资料修改</span>
				<img src="../assets/iconfont/state3.png">
			</div>
		</div>
		<!-- 服务 -->
		<div class="service">
			<h2>我的服务</h2>
			<ul>
				<li>
					<img src="../assets/iconfont/1.png">
					<span>消费明细</span>
				</li>
				<li>
					<img src="../assets/iconfont/2.png">
					<span>我的课程</span>
				</li>
				<li>
					<img src="../assets/iconfont/3.png">
					<span>我的团课</span>
				</li>
				<li>
					<img src="../assets/iconfont/4.png">
					<span>卡包</span>
				</li>
				<li>
					<img src="../assets/iconfont/5.png">
					<span>优惠卷</span>
				</li>
				<li>
					<img src="../assets/iconfont/6.png">
					<span>联系客服</span>
				</li>
				<li>
					<img src="../assets/iconfont/7.png">
					<span>私教注册</span>
				</li>
				<li>
					<img src="../assets/iconfont/8.png">
					<span>场馆入驻</span>
				</li>
				<li>
					<img src="../assets/iconfont/9.png">
					<span>关于我们</span>
				</li>
				<li>
					<img src="../assets/iconfont/10.png">
					<span>app下载</span>
				</li>

			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped="scoped">
	.state {
		padding-top: 20px;
		width: 100%;
		height: 200px;
		background: #005bac;
		display: flex;

		.statet {
			font-size: 24px;
			color: #fff;
			margin-left: 5px;
			margin-top: 77px;
		}

		.statex {
			color: #fff;
			position: absolute;
			top: 136px;
			left: 84px;
		}

		.stateimg {
			margin-top: 77px;
			border: 1px solid black;
			border-radius: 50%;
			width: 60px;
			height: 60px;
			overflow: hidden;
			margin-left: 15px;
		}
	}

	.sz {
		position: absolute;
		right: 20px;
		top: 95px;
		font-size: 16px;
		color: #fff;
	}

	//资料栏 
	.datum {
		width: 88%;
		height: 50px;
		display: flex;
		align-items: center;
		border: 1px solid black;
		border-radius: 27px;
		padding: 5px;
		position: absolute;
		top: 190px;
		left: 15px;
		background: #fff;

		div {
			img {
				padding-top: 5px;
			}
		}

		.datums {
			margin: 0 26px;
		}
	}

	// 服务
	.service {
		margin-top: 50px;

		h2 {

			margin: 21px;
			padding-bottom: 20px;
			border-bottom: 1px solid #ccc;

		}
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;

		li {
			width: 40px;
			height: 40px;
			margin: 28px;
			text-align: center;

			img {
				width: 100%;
				height: 100%;
			}

			span {
				font-size: 10px;
			}
		}
	}
</style>
