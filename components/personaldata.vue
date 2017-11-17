<template>
	<div>
	<header style="position: relative;top: 0;z-index: 10;">
		<a href="#/concat">返回</a>
		<span>详细资料</span>
		<span></span>
	</header>
	<div id="main">
		<div id="maintop">
			<div id="imgposition">
				<img :src="src" alt="" />
			</div>
			<div id="maininfomaintion">

				<p>{{name}}</p>
				<p>微信号: <span>{{name}}</span></p>
				<p>昵称: <span>{{name}}</span></p>
			</div>
		</div>
		<div id="setting">
			设置备注和标签
		</div>
		<div id="moremain">
			<div class="moremain1">
				<p>个人相册</p>
				<div>
					<img :src="src" alt="" />
					<img :src="src" alt="" />
				</div>
			</div>
			<div class="moremain2">
				更多
			</div>

		</div>
		<a :href="href"><button id="sendinfo" style="cursor: pointer;">发消息</button></a>
		<button id="videochat">视频聊天</button>
	</div>
	</div>
</template>

<script>
	import Vuex from "vuex"
	export default {
		data() {
			return {
				name: "",
				src: "",
				href:""
			}
		},
		mounted: function() {
			this.name = this.$store.state.b.name;
			this.src = this.$store.state.b.src;
			this.href = this.$store.state.b.href
		}
	}
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	body {
		background-color: #d9d9d9;
		margin:0;
		padding:0
	}
	
	a {
		color: #fff;
		text-decoration: none;
	}
	
	header {
		background-color: #000000;
		height: 50px;
		color: #fff;
		line-height: 50px;
		text-align: center;
		padding: 0 10px;
		display: flex;
		justify-content: space-between
	}
	
	#maintop {
		padding: 10px 10px;
		background-color: #fff;
		overflow: hidden;
		margin-top: 20px
	}
	
	#imgposition {
		float: left;
		width: 50px;
		height: 50px;
		border-radius: 5px;
		overflow: hidden;
	}
	
	#maininfomaintion {
		float: left;
		margin-left: 5px
	}
	
	#maininfomaintion p {
		color: #888;
		font-size: 12px
	}
	
	#maininfomaintion p:nth-of-type(1) {
		font-size: 18px;
		color: #4f4f4f;
	}
	
	#imgposition img {
		width: 55px;
		height: 55px;
	}
	
	#setting {
		background-color: #fff;
		padding: 10px;
		margin-top: 20px
	}
	
	#moremain {
		background-color: #fff;
		margin-top: 20px;
		padding: 0 10px;
		overflow: hidden;
	}
	
	.moremain1 {
		overflow: hidden;
		padding: 5px 0;
	}
	
	.moremain1 p {
		float: left;
		/*width:80px;*/
		height: 40px;
		line-height: 40px;
	}
	
	.moremain1 img {
		float: left;
		width: 40px;
		height: 40px;
		margin-left: 5px;
	}
	
	.moremain2 {
		border-top: 1px solid #d9d9d9;
		line-height: 30px;
	}
	
	button {
		margin-left: 3%;
		width: 100%;
		text-align: center;
		margin-top: 15px;
		border-radius: 5px;
		border: 0;
		outline: 0;
		height: 40px;
		line-height: 40px;
		background-color: #fff;
		width: 94%;
		font-size: 18px;
	}
	
	#sendinfo {
		background-color: #04BE02;
		color: #fff;
	}
</style>