const routerModules = import.meta.glob('./views/**/index.vue')
import i18n from "@/locales";

const MODULE_CODE = 'media'

const getAsyncRoutesMap = () => {
    const modules = {}
    Object.keys(routerModules).forEach(item => {
        const code = item.replace('./views/', '').replace('/index.vue', '')
        const key = `${MODULE_CODE}/${code}`
        modules[key] = routerModules[item]
    })

    return modules
}

// 额外菜单
const getExtraRoutesMap = () => {
    return {
        // [`${MODULE_CODE}/Product`]: {
        //     children: [
        //         {
        //             code: 'Detail',
        //             url: '/detail:id',
        //             name: '详情信息',
        //             component: () => import('./views/Product/Detail/index.vue')
        //         }
        //     ]
        // },
    }
}

export default {
    getAsyncRoutesMap,
    getExtraRoutesMap
}
