import * as VueRouter from 'vue-router'

import dashboardRouter from "./modules/dashboard/routes.dashboard.ts";

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: { name: 'Dashboard' },
        children: [
            dashboardRouter
        ]
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

export default router;