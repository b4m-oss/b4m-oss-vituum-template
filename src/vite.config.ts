import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'

export default {
    plugins: [
        vituum(),
        twig()
    ],
    build: {
        rollupOptions: {
            input: ['index.twig.html']
        }
    }
}