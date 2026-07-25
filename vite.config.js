import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const isAgency = process.env.VITE_SITE === 'agency'

const meta = isAgency
  ? {
      title: 'MAPBRAIN | Studio produit & IA',
      description:
        'MAPBRAIN construit des produits digitaux et automatise les opérations : stratégie, design, développement web et SaaS, IA.'
    }
  : {
      title: 'MapBrain Academy | Formations IA certifiées Qualiopi',
      description:
        "MapBrain Academy forme vos équipes à l'IA : six parcours certifiés Qualiopi, du collaborateur au comité de direction, finançables OPCO."
    }

// Police d'affichage propre à chaque site : l'Academy charge Bricolage
// Grotesque (titres ronds, esprit brochure) à la place d'Instrument Sans.
const fontsHref = isAgency
  ? 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Instrument+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap'
  : 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Manrope:wght@400;500;600;700;800&display=swap'

// Injecte le titre, la description, le favicon et les polices statiques
// propres à chaque site (les crawlers voient ceux-ci, sans JS).
function siteMetaPlugin() {
  return {
    name: 'site-meta',
    transformIndexHtml(html) {
      return html
        .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
        .replace(
          /(<meta\s+name="description"\s+content=")[^"]*(")/,
          `$1${meta.description}$2`
        )
        .replace(
          /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
          `$1${meta.title}$2`
        )
        .replace(
          /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
          `$1${meta.description}$2`
        )
        .replace(
          /(<link\s+rel="stylesheet"\s+href=")https:\/\/fonts\.googleapis\.com[^"]*(")/,
          `$1${fontsHref}$2`
        )
        .replace(
          /(<link rel="icon"[^>]*href=")[^"]*(")/,
          isAgency ? '$1/favicon.svg$2' : '$1/favicon-academy.svg$2'
        )
    }
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteMetaPlugin()],
})
