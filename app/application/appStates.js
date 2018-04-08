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

    .state('graph', {
        url: '/graph',
        component: 'graph',
        data: {
          pageName: 'Graph',
          browerTitle: 'Graph'
        }
    })

    .state('badges', {
        url: '/badges',
        component: 'badges',
        data: {
          pageName: 'Badges',
          browerTitle: 'My Badges'
        }
    })

});
