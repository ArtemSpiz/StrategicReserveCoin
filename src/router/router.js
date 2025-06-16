import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Tokenomics from '@/pages/Tokenomics.vue'
import Roadmap from '@/pages/Roadmap.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/tokenomics', component: Tokenomics },
	{ path: '/roadmap', component: Roadmap },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
