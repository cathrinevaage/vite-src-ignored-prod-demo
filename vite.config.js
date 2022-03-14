import { resolve } from 'path'

export default {
  root: 'src',
  build: {
    rollupOptions: {
      input: { main: 'main.js' },
    },

    outDir: resolve(__dirname, 'dist'),
  },
}
