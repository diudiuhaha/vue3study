import { createRouter,createWebHashHistory } from "vue-router"; //按需引入
//声明
const routes = [{
    path: '/',
    component: () => import('../views/Main.vue'), //组件
    children:[ //接收处理父组件的数据
        {
            path: "/",
            name: "home",
            component: () => import('../views/home/Home.vue')
        }
    ]
}
]

// 调用引入的方法
const router = createRouter({
    history: createWebHashHistory(),
    routes
  });

//导出路由
export default router