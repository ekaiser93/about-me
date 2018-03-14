appModule.component('home', {
  controller: function () {
    const ctrl = this;

    ctrl.$onInit = function() {
      console.log('I am working');
    };
  },
  templateUrl: 'home/home.html'
});
