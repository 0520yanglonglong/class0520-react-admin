const menus = [
    {
        icon: 'home',
        title: 'menus.home',
        key: '/'
    },
    {
        icon: 'appstore',
        title: 'menus.products',
        key: '/products',
        children: [
            {
                icon: 'home',
                title: 'menus.category',
                key: '/product'
            },
            {
                icon: 'home',
                title: 'menus.product',
                key: '/category'
            }
        ]
    },
    {
        icon: 'user',
        title: 'menus.user',
        key: '/user'
    },
    {
        icon: 'user',
        title: 'menus.role',
        key: '/role'
    },
    {
        icon: 'appstore',
        title: 'menus.charts',
        key: '/charts',
        children: [
            {
                icon: 'home',
                title: 'menus.chart',
                key: '/charts/bar'
            },
            {
                icon: 'home',
                title: 'menus.line',
                key: '/charts/line'
            },
            {
                icon: 'home',
                title: 'menus.pie',
                key: '/charts/pie'
            }
        ]
    },
];

export default  menus;