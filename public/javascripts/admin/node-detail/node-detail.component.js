/**
 * Created by yeoman generator-makrina:angular-component-detail 0.3.0 on 17/10/2016.
 */

angular
  .module('nodeDetail')
  .component('nodeDetail', {
    templateUrl: 'javascripts/admin/node-detail/node-detail.template.html',
    controller: ['$routeParams', '$location', 'Node',
      function NodeDetailController($routeParams, $location, Node) {
        var self = this;

        var self.getNode = function () {
          self.node = Node.get({nodeId: self.nodeId}, function(data) {
          }, function(error) {
          $location.path("/nodes");
          new PNotify({
          title: 'Node not found',
          text: 'The node cannot be found.',
          type: 'error',
          styling: 'bootstrap3'
          });
          });
        };

        if ($routeParams.nodeId != 'add') {
          self.nodeId = $routeParams.nodeId;
          self.getNode();
        }

        self.submitNode = function() {
          self.node = Node.save(self.node, function () {
            if (!self.nodeId) $location.path("/nodes/" + self.node._id);
            new PNotify({
              title: 'Node saved',
              text: 'Node saved successfully.',
              type: 'success',
              styling: 'bootstrap3'
            });
            self.nodeEdit.$setPristine();
            self.getNode();
          }, function (error) {
            new PNotify({
              title: 'Node not saved',
              text: error.statusText,
              type: 'error',
              styling: 'bootstrap3'
            });
          });
        };

        self.deleteNode = function() {
          if (!confirm('Are you sure you want to delete this?')) return;
          Node.delete({nodeId: self.nodeId}, function() {
            $location.path("/nodes");
            new PNotify({
              title: 'Node deleted',
              text: 'Node deleted successfully.',
              type: 'success',
              styling: 'bootstrap3'
            });
          }, function(error) {
            var statusText = error.statusText;
            new PNotify({
              title: 'Node not deleted',
              text: error.statusText,
              type: 'error',
              styling: 'bootstrap3'
            });
          });
        };

        panelToolbox();
        select2();
      }
    ]
  });
