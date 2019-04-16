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
