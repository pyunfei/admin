// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/home',    //  一级路由path
    meta: '主页',     //  导航名称
    icon: '',      //  所用icon
    role: [],    //  适用权限
    // 所用组件 
    component: () => import('../views/Home'),
    // children: [  //二级路由
    //   {
    //     path: '/one',  //二级路由path ，react将会渲染为/home/one
    //     meta: '嵌套1',
    //     icon: '',
    //     role: [],
    //     component: () => import('@/Pages/Home/one'),
    //     children: []
    //   },
    //   {
    //     path: '/two',
    //     meta: '嵌套2',
    //     icon: '',
    //     role: [],
    //     component: () => import('@/Pages/Home/two'),
    //     children: [],
    //   },
    // ],
  },
]
