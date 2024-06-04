module.exports = {
	webpack: {
	  configure: (webpackConfig) => {
		const imageRule = webpackConfig.module.rules.find((rule) =>
		  rule.test && rule.test.toString().includes('png|jpe?g|gif|svg')
		);
  
		if (imageRule) {
		  imageRule.use = [
			{
			  loader: 'url-loader',
			  options: {
				limit: 90000000000000,
				name: '[name].[hash].[ext]',
				outputPath: 'static/media/',
				esModule: false,
			  },
			},
			{
			  loader: 'file-loader',
			  options: {
				name: '[name].[hash].[ext]',
				outputPath: 'static/media/',
				esModule: false,
			  },
			},
		  ];
		}

		webpackConfig.module.rules.forEach((rule) => {
			if (rule.oneOf instanceof Array) {
			  rule.oneOf[rule.oneOf.length - 1].exclude = [
				/^$/, 
				/\.(js|mjs|jsx|cjs|ts|tsx)$/,
				/\.html$/,
				/\.json$/
			  ];
			}
		  });
  
		return webpackConfig;
	  },
	},
  };