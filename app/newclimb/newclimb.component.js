app.component('newclimb', {
  controller: function () {
    const ctrl = this;

    ctrl.$onInit = function() {
      console.log('newclimb box is working');
    };
  },
  templateUrl: 'newclimb/newclimb.html'
});
