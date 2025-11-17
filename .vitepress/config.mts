import { defineConfig } from 'vitepress'
import { SparqlPlugin } from 'vitepress-plugin-sparql'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "MOLOR LemmaBank",
    description: "A user interface for the MOLOR LemmaBank",
    base: '/molor-web/',
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
        footer: {
            message: "The MOLOR project was funded by the European Union as part of its Horizon Europe scientific research initiative under the Marie Skłodowska-Curie Actions (MSCA), grant agreement no. 101106220.",
            copyright: "<img class=\"mx-auto\" alt=\"logo\" height=\"70\" src=\"https://molor.eu/static/media/LogoCattnuovo.b4e4f774c1cdb41c839d.png\"><img class=\"mx-auto\" alt=\"logoEURO\" height=\"70\" src=\"https://molor.eu/static/media/EN_FundedbytheEU_RGB_POS.967396561dde9c059dbd.png\">",
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/max-ionov/molor-web/'}
        ]
    },
    vite: {
        plugins: [SparqlPlugin()]
    }
})
