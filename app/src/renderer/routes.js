export default [
	{
		path: '/',
		name: 'edit-view',
		component: require('components/EditView')
	},
	{
		path: '*',
		redirect: '/'
	}
]
