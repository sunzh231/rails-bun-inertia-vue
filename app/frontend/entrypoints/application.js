import '~/assets/styles/index.scss'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
  progress: {
    color: '#29d',
  },
  title: (title) => (title ? `${title} - 荷尖蜻蜓` : '荷尖蜻蜓'),
  resolve: name => {
    const pages = import.meta.glob('../pages/**/*.vue', { eager: true })
    return pages[`../pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })
    app.use(plugin).mount(el)
  },
})
