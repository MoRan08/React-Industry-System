import Mock from 'mockjs';

var data =[
    {
        name:'基础管理',
        key:'/app/basics',
        id:"1",
        is_show:1,
        icon:'desktop',
        son_menu:[
            {name:'菜单管理',key:'/app/basics/menu',id:"1_1",is_show:1},
            {name:'字典管理',key:'/app/basics/dictionaries',id:"1_2",is_show:1},
            {name:'组织管理',key:'/app/basics/organizatio',id:"1_2",is_show:1},
            {name:'日志管理',key:'/app/basics/log',id:"1_2",is_show:1},
            {name:'权限管理',key:'/app/basics/permission',id:"1_2",is_show:1},
            {name:'用户管理',key:'/app/basics/user',id:1,is_show:1}
        ]
    },{
        name:'会员管理',
        key:'/app/vipUser',
        id:"2",
        is_show:1,
        icon:'contacts',
        son_menu:[
            {name:'会员信息',key:'/app/vipUser/info',id:"2_1",is_show:1},
        ]
    },{
        name:'服务项目',
        key:'/app/seveices',
        id:"3",
        is_show:1,
        icon:'hdd',
        son_menu:[
            {name:'服务分类',key:'/app/seveices/type',id:"3_1",is_show:1},
            {name:'服务管理',key:'/app/seveices/manage',id:"3_2",is_show:1},
            
        ]
    },{
        name:'商品库存',
        key:'/app/shopNum',
        id:"4",
        is_show:1,
        icon:'shopping-cart',
        son_menu:[
            {name:'商品分类',key:'/app/shopNum/type',id:"4_1",is_show:1},
            {name:'商品列表',key:'/app/shopNum/manage',id:"4_2",is_show:1},
            
        ]
    }
   
];
 Mock.mock('http://text.com/menu','post',function(userID){
        
        return data;
   
});