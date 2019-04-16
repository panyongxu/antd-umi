module.exports = {
	routes: [
		{
			path: '/login',
			component: './login.tsx'
		},
		{
			path: '/',
			component: '../layouts',
			routes: [
        { path: '/', component: './index.tsx' },
				{ path: '/index', component: './index.tsx' },
				{ path: '/login/detail', component: './login/detail' },
				{
					path: '/about',
					component: './about/_layout.tsx',
					routes: [
						{ path: '/about', component: './about' },
						{
							path: '/about/detail',
							component: './about/detail.tsx'
						}
					]
				}
			]
		}
	]
}
