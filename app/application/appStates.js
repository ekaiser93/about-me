app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        component: 'home',
        data: {
          pageName: 'Home',
          browerTitle: 'Home'
        }
    })

    .state('about', {
        url: '/about',
        component: 'about',
        data: {
          pageName: 'About',
          browerTitle: 'About'
        }
    })

});
