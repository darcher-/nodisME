export default {
	cleanDistDir: true,
	compress: process.env.NODE_ENV === 'production',
	//! devIndicators: { buildActivityPosition: 'bottom-right' },
	distDir: 'dist',
	//! env: { ENABLE_DEBUGGER: false },
	experimental: {
		// TODO: mdxRs: true,
		webVitalsAttribution: ['CLS', 'FID', 'LCP'],
	},
	// TODO: i18n: { defaultLocale: 'en-US', locales: ['en-US'] },
	images: {
		domains: ['http://localhost:3000'],
		// TODO: complete image optimizing setup
		// deviceSizes: [640, 800, 1024, 1240, 1920, 2048, 3840],
		// formats: ['image/webp'],
		// imageSizes: [18, 24, 64, 128, 256, 384, 512, 640],
		// minimumCacheTTL: 60,
	},
	optimizeFonts: true,
	output: 'standalone',
	pageExtensions: ['js', 'jsx'], // TODO: 'md' | 'mdx'
	productionBrowserSourceMaps: true,
	poweredByHeader: false,
	reactStrictMode: true,
	skipTrailingSlashRedirect: true,
	trailingSlash: false,
}
