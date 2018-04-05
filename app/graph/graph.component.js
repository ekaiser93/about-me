app.component('graph', {
  controller: function () {
    const ctrl = this;

    ctrl.$onInit = function() {
      console.log('graph box is working');
    };
  },
  templateUrl: 'graph/graph.html'
});
