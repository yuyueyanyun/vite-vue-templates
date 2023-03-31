
import 'normalize.css'

// for dark mode
import Layout from './components/layout.vue'
import VPDemo from './components/vp-demo.vue'
export { default as NotFound } from './components/404.vue'

import type { Component } from 'vue'

export default Layout
export const globals: [string, Component][] = [
    ['Demo', VPDemo],
]