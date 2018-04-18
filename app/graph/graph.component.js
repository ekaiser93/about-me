app.component('graph', {
  controller: function () {
    const ctrl = this;

    ctrl.$onInit = function() {
        ctrl.myChartObject = {};

        ctrl.myChartObject.type = "BarChart";

        ctrl.onions = [
            {v: "Onions"},
            {v: 3},
        ];

        ctrl.myChartObject.data = {"cols": [
            {id: "t", label: "Topping", type: "string"},
            {id: "s", label: "Slices", type: "number"}
        ], "rows": [
            {c: [
                {v: "Mushrooms"},
                {v: 3},
            ]},
            {c: ctrl.onions},
            {c: [
                {v: "Olives"},
                {v: 31}
            ]},
            {c: [
                {v: "Zucchini"},
                {v: 1},
            ]},
            {c: [
                {v: "Pepperoni"},
                {v: 2},
            ]}
        ]};

        ctrl.myChartObject.options = {
            'title': 'How Much Pizza I Ate Last Night'
        };
    };
  },
  templateUrl: 'graph/graph.html'
});
