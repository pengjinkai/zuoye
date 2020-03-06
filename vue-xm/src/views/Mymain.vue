<template>
	<div>
		<!-- header   头部 -->
		<div class="header">
			<a href="#">厦门</a>
			<input type="text">
		</div>
		<!-- 轮播图 -->
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item,index) in Swiper">
						<img :src="item.adlist_img"/>
					</div>
				</div>
						<div class="swiper-button-prev"></div>
						<div class="swiper-button-next"></div>
						<div class="swiper-pagination"></div>
			</div>
			
			
		<!-- 精选 -->
		<div class="box">
			<h2>为你精选</h2>
			<ul class="boxlist">
				<li v-for="(item,index) in Box">
					<router-link :to="'/item/'+item.attach_id">
					<img :src="item.pro_img[0].url"/>
					<div>{{item.pro_name}}</div>
					<div>{{item.pro_Joiner}}人已参加</div>
					</router-link>
				</li>
			</ul>
		</div>
		<!-- 推荐 -->
		<div class="top5Con">
			<h2>本周最受欢迎TOP5</h2>
			<ul class="top5list">
				<li v-for="(item,index) in top5Arr">
					<router-link :to="'/item/'+item.pro_id">
						<div class="top5_img"><img :src="item.pro_img[0].url" /></div>
						<div class="top5_text">
							<div>{{item.pro_name}}</div>
							<div>{{item.pro_Joiner}}人已参加</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>	
</template>

<script>
	//引入iconfont
	//引入 axios
	import axios from 'axios';
	//导入swiper
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
	export default {
		name:'Mymain',
		data:function(){
			return {
				top5Arr:[],
				Swiper:[],
				Box:[]
			}
		},
		//挂载的函数
		mounted:function(){
			//获取数据
			let params = new URLSearchParams();
			axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((res)=>{
				console.log(res);
				this.top5Arr = res.data.data.CourseTop5;
				this.Swiper=res.data.data.top_ad.list;
				this.Box=res.data.data.CourseforYou;
			});
			new Swiper ('.swiper-container', {
			    loop: true,
			   	autoplay: 2000,
			   	speed: 1000,
			   	observer: true,
			   	observeParents: true,
			   	pagination : '.swiper-pagination',
			   	prevButton:'.swiper-button-prev',
			    nextButton:'.swiper-button-next',
			  })        
		}
		
	}
</script>

<!--lang="scss" 以下使用的是 scss语法
scoped="scoped" 该样式只在本页面起作用
-->
<style scoped="scoped" lang="scss">
	
	//搜索框
	.header{
		position: fixed;
		top: 0;
		width: 100%;
		height: 25px;
		background:#004b9e;
		border-top: 1px solid #ccc;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-around;
		padding: 0;
		margin: 0;
	}
	.header a{
		width: 15%;
		height: 25px;
		background:#004b9e;
		color: #FFFFFF;
		font-size: 20px;
		text-align: center;
	}
	.header input{
		width: 75%;
		height: 20px;
		margin-right: 40px;
		margin-top: 2px;
		border: 1px solid ;
		border-radius: 8%;
	}
	//轮播图
	.swiper-container {
		margin-top: 26px;
	    width: 100%;
	    height: 200px;
	}  
	.swiper-container img{
		height:200px; 
		width: 100%; 
		}
	//精选
	.box{
		width: 100%;
		height: 480px;
		padding: 16px;
	}
	.box h2{
		width: 80%;
		height: 30px;
		font-size: 22px;
		color: #001425;
	}
	.box li a{
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
	}
	.box .boxlist img{
		width:180px;
		height:120px;
	}
	//推荐
	.top5Con{
		width: 95%; height:400px; background: #004b9e; border-radius: 10px; margin: auto;
		margin-top:20px;margin-bottom: 70px;
	}
	.top5Con h2{color:#fff; padding:20px;}
	.top5list{background: #fff; margin:10px; height:300px;border-radius: 10px;}
	.top5list li a{display: flex; flex-direction: row; flex-wrap: nowrap; height:60px;
	 padding:6px ; border-bottom:1px solid #ddd; }
	.top5list li a .top5_img{width:30%;}
	.top5list li a .top5_img img{width: 80%; height: 50px;}			
	.top5list li a .top5_text{width: 70%;}
	
</style>
