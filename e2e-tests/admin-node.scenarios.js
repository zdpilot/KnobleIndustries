/**
 * Created by yeoman generator-makrina:angular-component-list 0.3.0 on 17/10/2016.
 */

describe('KnobleAdminApp: node', function() {

  it('should redirect `admin` to `admin#!/nodes', function() {
    browser.get('admin');
    expect(browser.getLocationAbsUrl()).toBe('/nodes');
  });

  describe('View: Node list', function() {
    beforeEach(function() {
      browser.get('admin#!/nodes');
    });

    it('should filter the node list as a user types into the search box', function() {
      var nodeList = element.all(by.repeater('node in $ctrl.nodes'));
      var query = element(by.model('$ctrl.query'));

      expect(nodeList.count()).toBe(2);
      query.sendKeys('test');
      expect(nodeList.count()).toBe(2);
      query.clear();
      query.sendKeys('S65');
      expect(nodeList.count()).toBe(1);
    });

    it('should retrieve specific titles', function() {
      var queryField = element(by.model('$ctrl.query'));
      var nodeTitleColumn = element
        .all(by.repeater('node in $ctrl.nodes')
        .column('node.title'));

      function getNames() {
        return nodeTitleColumn.map(function(elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('S65');
      expect(getNames()).toEqual([
        'S65'
      ]);
    });
  });

  describe('View: Node details', function() {
    beforeEach(function() {
      browser.get('admin#!/nodes/57823e46502f353179b8cbcb');
    });

    it('should display the node page', function() {
      expect(element(by.binding('$ctrl.node.title')).getText()).toBe('S65');
    });
  });
});
