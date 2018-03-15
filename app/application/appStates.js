myApp.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    component: 'home',
    data: {
      pageName: 'Home',
      browerTitle: 'Home'
    }
  })
});
