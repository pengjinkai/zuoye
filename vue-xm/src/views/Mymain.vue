<template>
	<div>
		<!-- header   头部 -->
		<div class="header">
			<a href="#">厦门</a>
			<input type="text">
		</div>
		<!-- 轮播图 -->
			<myswiper :swiperArr="swiperArr" type="MAIN"></myswiper>
		<!-- 图标栏 -->	
			<div class="icon">
				<ul>
					<li v-for="(item,index) in icon" :key="index">
						<img :src="require('../assets/icon/'+(index+1)+'.png')" />
						<span>{{item.CategoryName}}</span>
					</li>
				</ul>
			</div>
		<!-- 精选 -->
		<div class="box">
			<h2>为你精选</h2>
			<ul>
				<li v-for="(item,index) in Box" :key="index">
					<router-link :to="'/ess/'+item.pro_id">
					<div><img :src="item.pro_img[0].url" :alt="item.pro_name"/></div>
					<div class="Boxtitle">{{item.pro_name}}</div>
					<div class="Boxtext">{{item.pro_Joiner}}人已参加</div>
					</router-link>
				</li>
			</ul>
		</div>
		<!-- 推荐 -->
		<div class="top5Con">
			<h2>本周最受欢迎TOP5</h2>
			<ul class="top5list">
				<li v-for="(item,index) in top5Arr">
					<router-link :to="'/myitem/'+item.pro_id">
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
	import myswiper from '../components/MySwiper';
	export default {
		name:'Mymain',
		data:function(){
			return {
				top5Arr:[],
				swiperArr:[],
				Box:[],
				icon:[]
			}
		},
		//挂载的函数
		mounted:function(){
			//获取数据
			let params = new URLSearchParams();
			axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((res)=>{
				console.log(res);
				this.top5Arr = res.data.data.CourseTop5;
				this.swiperArr=res.data.data.top_ad.list;
				this.Box=res.data.data.CourseforYou;
				this.icon=res.data.data.iconList;
			});
		
		},
		components:{
			myswiper
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
			h2{margin-top:10px; padding-left:10px; margin-bottom:10px;}
			width:100%;
			border-bottom:#f5f5f5 solid 10px;
			ul{
				width: 100%;
				display: flex; 
				flex-wrap: wrap; 
				flex-direction: row; 
				justify-content: space-around;
				li{
					width: 40%;
					height:160px;
					.jingxuantitle{font-weight: bold;}
					.jingxuantext{color:#ccc;font-size:12px;}
					div{
						img{
							width: 100%; 
							height:110px; 
							border-radius: 5px;
							}
					}
				}
			}
		}
	//推荐
	.top5Con{
		width: 95%; height:400px; background: #004b9e; border-radius: 10px; margin: auto;
		margin-top:20px;margin-bottom: 50px;
	}
	.top5Con h2{color:#fff; padding:20px;}
	.top5list{background: #fff; margin:10px; height:300px;border-radius: 10px;}
	.top5list li a{display: flex; flex-direction: row; flex-wrap: nowrap; height:60px;
	 padding:6px ; border-bottom:1px solid #ddd; }
	.top5list li a .top5_img{width:30%;}
	.top5list li a .top5_img img{width: 80%; height: 50px;}			
	.top5list li a .top5_text{width: 70%;}
	//图标
	.icon{
			border-bottom:#f5f5f5 solid 10px;
			
			ul{
				display: flex; flex-wrap: wrap; flex-direction: row; justify-content: space-around;
				margin-bottom:20px;
	 			li{
					width: 40px; height:40px; margin:16px; text-align:center;
					img{width: 100%; height:100%}
					span{font-size:12px;}
				}
			}
		}
</style>
