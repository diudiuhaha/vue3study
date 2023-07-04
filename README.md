# vue3study
学习笔记




### 左侧菜单js
```js
[
      {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon: 'user',
        url: 'UserManage/UserManage',
      },
      {
        path: '/other',
        label: "其他",
        icon: "setting",
        children: [
          {
            path: '/page1',
            name: 'page1',
            label: '页面1',
            icon: 'setting',
            url: 'Other/page1',
          },
          {
            path: '/page2',
            name: 'page2',
            label: '页面2',
            icon: 'setting',
            url: 'Other/page2',
          }
        ]

      }
    ]

```