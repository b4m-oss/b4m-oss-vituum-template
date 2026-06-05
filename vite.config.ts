import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'

export default {
    plugins: [
        vituum(),
        twig({
            root: './src',
        }),
    ],
    server: {
      allowedHosts: ['localhost', '3f6a-175-131-59-185.ngrok-free.app'],
    },
}
