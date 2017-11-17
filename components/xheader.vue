<template>
	<div>
		<header class="app-header" style="" _v-c8294afa="">
			<div class="_effect" _v-c8294afa="">
				<div class="_cover-top" _v-60c89da3="" _v-c8294afa="" style="overflow:visible">
					<div class="other" _v-60c89da3=""> <span class="iconfont icon-tips-jia" _v-60c89da3="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></span> <span class="iconfont icon-tips-add-friend" _v-60c89da3="" style="display: none;"></span>
						<ul class="tips-menu tips-close" _v-60c89da3="">
							<li _v-60c89da3=""> <span class="iconfont icon-tips-xiaoxi" _v-60c89da3=""></span>
								<div _v-60c89da3="">发起群聊</div>
							</li>
							<li _v-60c89da3=""> <span class="iconfont icon-tips-add-friend" _v-60c89da3=""></span>
								<div _v-60c89da3="">添加朋友</div>
							</li>
							<li _v-60c89da3=""> <span class="iconfont icon-tips-saoyisao" _v-60c89da3=""></span>
								<div _v-60c89da3="">扫一扫</div>
							</li>
							<li _v-60c89da3=""> <span class="iconfont icon-tips-fukuan" _v-60c89da3=""></span>
								<div _v-60c89da3="">收付款</div>
							</li>
						</ul>
						<div class="tips-masker" _v-60c89da3="" style="display: none;"></div>
					</div>
					<div class="center" _v-60c89da3=""> 微信 </div>
				</div>
			</div>
		</header>
		<footer class="app-footer _line-fine" style="" _v-c8294afa="">
			<div class="_effect" _v-c8294afa="" >
				<nav _v-26a78bfd="" _v-c8294afa="" >
					<a href="#/index"><dl _v-26a78bfd="" class="v-link-active" @click="addclass($event)"> <dt class="iconfont icon-wechat" _v-26a78bfd=""> <i _v-26a78bfd="" class="_news-count">12</i> </dt>
						<dd _v-26a78bfd="">微信</dd>
					</dl></a>
					<a href="#/concat" class="ttt"><dl _v-26a78bfd="" @click="addclass($event)"> <dt class="iconfont icon-contact" _v-26a78bfd="">  </dt>
						<dd _v-26a78bfd="" style="cursor: pointer;">通讯录</dd>
					</dl></a>
					<a href="#/find"><dl _v-26a78bfd="" @click="addclass($event)"> <dt class="iconfont icon-find" _v-26a78bfd=""> <i _v-26a78bfd="" class="_news-dot">99</i> </dt>
						<dd _v-26a78bfd="">发现</dd>
					</dl></a>
					<a href="#/me"><dl _v-26a78bfd="" @click="addclass($event)"> <dt class="iconfont icon-me" _v-26a78bfd="">  </dt>
						<dd _v-26a78bfd="">我</dd>
					</dl></a>
				</nav>
			</div>
		</footer>
	</div>
</template>
<script>
	import $ from "jquery";
	
	export default{
		methods:{
			addclass(e){
				$("dl").attr("class","");
				
				
				$(e).attr("class","v-link-active")
				
			}
		}
	}
	$(document).on("click","dl",function(){
		
		$(this).attr("class","v-link-active")
	})
</script>
<style scoped>
	/*._effect a{
		width: 80px;
	}*/
	._effect nav{
		display:flex ;
		justify-content: space-around;
	}
</style>