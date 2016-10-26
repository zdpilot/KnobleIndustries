/**
 * Created by yeoman generator-makrina:angular-component-list 0.3.0 on 17/10/2016.
 */

angular
  .module('nodeList')
  .component('nodeList', {
    templateUrl: 'javascripts/admin/node-list/node-list.template.html',
    controller: ['Node',
      function NodeListController(Node) {
        this.nodes = Node.query();
        panelToolbox();
      }
    ]
  });
