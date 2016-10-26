/**
 * Created by yeoman generator-makrina:angular-component-detail 0.3.0 on 17/10/2016.
 */

describe('nodeDetail', function() {
  beforeEach(module('nodeDetail'));

  describe('NodeDetailController', function() {
    var $httpBackend, ctrl, node;

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      node = {};
      $httpBackend
        .expectGET('api/nodes?nodeId=2')
        .respond(node);
      ctrl = $componentController('nodeDetail', {$routeParams: {nodeId: '2'}});
    }));

    it('should fetch a `node` model detail', function() {
      jasmine.addCustomEqualityTester(angular.equals);
      expect(ctrl.node).toEqual({});
      $httpBackend.flush();
      expect(ctrl.node).toEqual(node);
    });
  });
});
