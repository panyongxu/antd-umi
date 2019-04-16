import { routes } from './router.config'

export default {
	plugins: [
		[
			'umi-plugin-react',
			{
				antd: true,
				dva: {
					hmr: true
				}
			}
		]
	],
	routes: routes
}
