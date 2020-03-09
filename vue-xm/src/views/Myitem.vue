<template>
	<div><!--轮播-->
		<myswiper :swiperArr="swiperArr" type="ITEM"></myswiper>
		<h3>{{topitem.pro_name}}</h3>
		<div class="up">{{topitem.pro_timestr}}</div>
		<div class="elss"><span>有效期：{{topitem.pro_active_date_text}}</span>&emsp;场地：{{topitem.pro_placestr}}</div>
		<div class="out"><span>{{topitem.pro_price}}</span><span>.0</span>元&emsp;<span>原价：{{topitem.pro_market_price}}</span></div>
	</div></div>
	</div>
</template>

<script>
	  import axios from 'axios'; 
		//引入swiper
		import myswiper from '../components/MySwiper';
		//引入swiper的css
		import 'swiper/dist/css/swiper.css';
		export default{
			name:"myitem",
			data:function(){
				return {
					topitem:{},
					swiperArr:[]
				}
			},
			mounted:function(){
				let params = new URLSearchParams();
				//接口定义了一些实用的方法来处理 URL 的查询字符串
				params.append('pro_id',this.$route.params.itemid);
				params.append('fid','');
				axios.post("https://www.jvhv.com/siteindex.php/Lesson/Detail.html",params).then((res)=>{
					this.topitem = res.data.data;
					console.log(this.topitem);
					this.swiperArr = res.data.data.pro_imglist;
					console.log(this.swiperArr);
				})			
			},
			components:{
						myswiper:myswiper
					}
		}
</script>

<style lang="scss">
	.swiper-container{
			border-bottom:#f5f5f5 solid 10px;
			height:170px;
			.swiper-wrapper{
				.swiper-slide{
					img{width: 100%; height:170px;}
				}
			}
		}
		h3{font-size: 26px; font-weight: normal; margin-top:10px; padding-left:10px;}
		.up{
			font-size: 16px;
			margin-left: 20px;
		}
		.elss{
			font-size: 16px;
			margin-left: 20px;
			span:nth-of-type(1){
				border-right:1px solid #ccc;
				padding-right:5px ;
			}
		}
		.out{
			margin-left: 20px;
			span:nth-of-type(1){
				font-size: 24px;
				color:red;
			}
			span:nth-of-type(2){
				color:red;
			}
			span:nth-of-type(3){
				font-size: 16px;
			}
		}
</style>
