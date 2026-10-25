import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Base path for GitHub Pages.
 * 1. VITE_BASE_PATH, when set (shell or .env)
 * 2. Otherwise the repository name from GITHUB_REPOSITORY (Actions)
 * 3. Otherwise "/" while developing, and /zrm-coaching-prototype/ for a production build
 */
function normalizeBase(value) {
  if (!value || value === '/') return '/'
  const withLeading = value.startsWith('/') ? value : `/${value}`
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`
}

function resolveBase(command, env) {
  const explicit = env.VITE_BASE_PATH || process.env.VITE_BASE_PATH
  if (explicit) return normalizeBase(explicit)

  const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
  if (repository) return normalizeBase(repository)

  if (command === 'serve') return '/'
  return '/zrm-coaching-prototype/'
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss()],
    base: resolveBase(command, env),
  }
})
