export default [
  {
    name: 'Home',
    path: '/',
    component: require('pages/Home')
  },
  {
    path: '*',
    redirect: '/'
  }
]