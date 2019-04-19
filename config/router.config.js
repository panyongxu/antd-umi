module.exports = {
	routes: [
		{
			path: '/login',
			component: './login'
		},
		{
			path: '/',
			component: '../layouts',
			routes: [
				{ path: '/', component: './index' },
				{ path: '/index', component: './index' },
				{ path: '/hooks', component: './hooks' },
				{ path: '/chatroom', component: './chatRoom' },
				{ path: '/login/detail', component: './login/detail'},
				{
					path: '/about',
					component: './about/_layout',
					routes: [
						{ path: '/about', component: './about' },
						{
							path: '/about/detail',
							component: './about/detail'
						}
					]
				}
			]
		}
	]
}
