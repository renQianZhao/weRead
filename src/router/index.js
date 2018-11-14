import Vue from 'vue'
import Router from 'vue-router'
import loginPage from '@/components/login/loginPage'
import mainPage from '@/components/main/mainPage'
import foundPage from '@/components/found/foundPage'
import booksPage from '@/components/books/booksPage'
import mindsPage from '@/components/minds/mindsPage'
import userPage from '@/components/user/userPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: loginPage
        },
        {
            path: '/main',
            name: 'main',
            component: mainPage,
            children: [
                {
                    path: '/',
                    name: 'found',
                    component: foundPage
                },
                {
                    path: '/books',
                    name: 'books',
                    component: booksPage
                },
                {
                    path: '/minds',
                    name: 'minds',
                    component: mindsPage
                },
                {
                    path: '/user',
                    name: 'user',
                    component: userPage
                }
            ]
        }
    ]
})
