/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // IMPORTANT : permet d'activer le mode sombre via la classe .dark
  theme: {
    extend: {
      colors: {
        'gozem-green': 'var(--gozem-green)',
        'header': 'var(--color-bg-header)',
        'topbar': 'var(--color-bg-topbar)',
        'nav-text': 'var(--color-text-nav)',
        'border-custom': 'var(--color-border)',
      },
    },
  },
}