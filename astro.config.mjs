// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGiscus from 'starlight-giscus';

export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
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
				})
			]
		}),
	],
});
