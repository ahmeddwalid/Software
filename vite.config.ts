import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/Software/',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
      // If you have a 'plugins' array (e.g., for React or Vue), it would go here too.
      // plugins: [react()], 
    };
});
