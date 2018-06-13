Page({
	data: {
		lists:[
			{id:1, title:'收费编号管理', type:'management'},
			{id:2, title:'收费编号密码', type:'password'},
			{id:3, title:'操作历史', type:'log'}
		]
	},
	toDetail (e) {
		let page = e.currentTarget.dataset.type;
		wx.navigateTo({
			url: `../${page}/${page}`
		})
	}
})