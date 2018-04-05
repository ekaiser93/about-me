app.component('navbar', {
  controller: function () {
    const ctrl = this;

    ctrl.$onInit = function() {
      console.log('navbar is working');
    };
  },
  templateUrl: 'components/navbar/navbar.html'
});
