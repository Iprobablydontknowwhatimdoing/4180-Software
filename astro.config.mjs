// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGiscus from 'starlight-giscus';
import starlightThemeFlexoki from 'starlight-theme-flexoki'

export default defineConfig({
	integrations: [
		starlight({
			title: '4180 Software',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			plugins: [
				starlightGiscus({
					repo: 'Iprobablydontknowwhatimdoing/4180-Software',
					repoId: 'R_kgDORvCEAQ',
					category: 'On Pages',
					categoryId: 'DIC_kwDORvCEAc4C5I8M',
					mapping: 'title',
					reactions: true,
					inputPosition: 'top',
				}),
				starlightThemeFlexoki(),
			]
		}),
	],
});
