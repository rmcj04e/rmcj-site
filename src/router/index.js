import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';
Vue.use(VueRouter);

const routes = [
    {
        path: '/links',
        name: 'links',
        component: () =>
        import(/* webpackChunkName: "links" */ "@/views/links.vue")
    },
    {
        path: '/about',
        name: 'aboutme',
        component: () =>
        import(/* webpackChunkName: "about" */ "@/views/about.vue")
    },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})
export default router;
