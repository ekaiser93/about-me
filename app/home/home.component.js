app.component('home', {
  controller: function () {
    const ctrl = this;

    ctrl.$onInit = function() {
      console.log('I am also working');
    };
  },
  templateUrl: 'home/home.html'
});
