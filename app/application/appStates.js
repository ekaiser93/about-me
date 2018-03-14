angular.module('myApp')
.config(function($StateProvider) {
  $StateProvider.state('home', {
    url: '/',
    component: 'home',
    data: {
      pageName: 'Home',
      browerTitle: 'Home'
    }
  })
});
