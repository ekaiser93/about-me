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

    .state('newclimb', {
        url: '/newclimb',
        component: 'newclimb',
        data: {
          pageName: 'Add a New Climb',
          browerTitle: 'Add a New Climb'
        }
    })

});
