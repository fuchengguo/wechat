import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"
import $ from "jquery"
//window.$ = $
Vue.use(Vuex)
Vue.use(VueRouter)
//引入组件
import index from "./components/index.vue"
import concat from "./components/addressbook.vue"
import find from "./components/find.vue"
import me from "./components/me.vue"
import xheader from "./components/xheader.vue"
import wechat from "./components/wechat.vue"
import dialog1 from "./components/dialog.vue"
import dialog2 from "./components/dialog2.vue"
import personaldata from "./components/personaldata.vue"
//var xheader = require("./components/xheader.vue")
let router = new VueRouter({
	routes:[{
		path:"/index",
		component:wechat
	},{
		path:"/dialog/:num",
		component:dialog1
	},{
		path:"/",
		redirect:"/index"
	},{
		path:"/concat",
		component:concat
	},{
		path:"/find",
		component:find
	},{
		path:"/me",
		component:me
	},{
		path: '/concat/:num',
		component: personaldata
	},{
		path: '/concat/:num/:alpha',
		component: dialog2
	}]
})
let store = new Vuex.Store({
	modules:{
		a:{
			state:{
				name:"猪猪侠",
				clear:false,
				count:""
			}	
		},
		b:{
			state:{
				name:"",
				src:"",
				href:""
			}
		}

	}
})


new Vue({
	el: "#app",
	store,
	router,
	data: {
		name: "qd",
		//txt

	},
	template: `
		<div style="height:100%">
			<xheader></xheader>
			<router-view></router-view>
		</div>
	`,
	components: {
		index,
		xheader
	}
})