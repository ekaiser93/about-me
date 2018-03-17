app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('Home', {
        url: '/',
        component: 'Home',
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
