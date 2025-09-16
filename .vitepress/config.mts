import { defineConfig } from 'vitepress'
import { SparqlPlugin } from 'vitepress-plugin-sparql'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "MOLOR LemmaBank",
    description: "A user interface for the MOLOR LemmaBank",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Queries', link: '/queries'}
        ],

        sidebar: [
            {
                text: 'Queries',
                items: [
                    {text: 'Lemma variants', link: '/queries/lemma-variants'},
                    {text: 'Goidinflex forms', link: '/queries/goidinflex-forms'},
                    {text: 'Goidinflex forms for lemma variants', link: '/queries/lemma-variants-forms'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/max-ionov/vitepress-plugin-sparql/'}
        ]
    },
    vite: {
        plugins: [SparqlPlugin()]
    }
})
