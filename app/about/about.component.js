app.component('about', {
  controller: function () {
    const ctrl = this;

    ctrl.$onInit = function() {
      console.log('I am also working');
    };
  },
  templateUrl: 'about/about.html'
});
