import DHome from './views/DHome.vue'
import DNew from './views/DNew.vue'
import DUpdate from './views/DUpdate.vue'

const dashboardRouter = {
    path: '/dashboard',
    name: 'Dashboard',
    component: DHome,
    children: [
        {
            path: 'new',
            component: DNew,
            name: 'New-Item'
        },
        {
            path: 'update',
            component: DUpdate,
            name: 'Update-Item'
        }
    ]
}

export default dashboardRouter