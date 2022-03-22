import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListBook from '@/components/Book/ListBook'
import EditBook from '@/components/Book/EditBook'
import DeleteBook from '@/components/Book/DeleteBook'
import NewBook from '@/components/Book/NewBook'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/books',
      name: 'ListBook',
      component: ListBook
    },
    {
      path: '/books/:bookId/edit',
      name: 'EditBook',
      component: EditBook
    },
    {
      path: '/books/:bookId/delete',
      name: 'DeleteBook',
      component: DeleteBook
    },
    {
      path: '/books/new',
      name: 'NewBook',
      component: NewBook
    }

    // { path: '*', component: NotFoundComponent }
    // Activar luego de hacer que svr-redirect-all-404-to-index.html
    // https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
  ]
})

export const APIPath = 'http://127.0.0.1:8000/api/v1.0/books/'
