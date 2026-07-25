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

// Injecte le titre et la description statiques propres à chaque site
// (React les met ensuite à jour côté client, mais les crawlers voient ceux-ci).
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
    }
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteMetaPlugin()],
})
