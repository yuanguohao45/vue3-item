module.exports = {
	presets: ['@vue/cli-plugin-babel/preset'],
	// 懒加载依赖模块
	sourceType: 'unambiguous',
	env: {
		development: {
			plugins: ['dynamic-import-node'],
		},
	},
}
