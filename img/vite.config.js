import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Chemin racine du projet
  base: './', // Chemin de base pour la production
  build: {
    outDir: 'dist', // Dossier de sortie pour les fichiers construits
  },
});
