app.component('newclimb', {
  controller: function () {
    const ctrl = this;

    ctrl.$onInit = function() {
      ctrl.allclimbs = [
        {completed: true, grade: 'v2'},
        {completed: false, grade: 'v9'}
        ];
    };
  },
  templateUrl: 'newclimb/newclimb.html'
});
