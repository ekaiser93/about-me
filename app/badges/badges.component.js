app.component('badges', {
  controller: function () {
    const ctrl = this;

    ctrl.$onInit = function() {
      console.log('badges box is working');
    };
  },
  templateUrl: 'badges/badges.html'
});
