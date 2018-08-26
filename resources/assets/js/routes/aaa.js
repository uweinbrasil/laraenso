const AAAIndex = () => import('../pages/aaa/Index.vue');

export default {
    name: 'aaa.index',
    path: '/aaa',
    component: AAAIndex,
    meta: {
        breadcrumb: 'aaa',
        title: 'AAA',
    },
};
