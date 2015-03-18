'use strict';

var should = require('should')
  , commonRoutes = require('../index');

describe('commonRoutes', function() {

  describe('#createRoutes', function() {
    it('should build crud routes if supporting functions exist', function () {
      // ARRANGE
      var obj = {};

      obj.create = function () {
      };
      obj.getById = function () {
      };
      obj.exists = function () {
      };
      obj.count = function () {
      };
      obj.update = function () {
      };
      obj.deleteById = function () {
      };

      // ACT
      var crudRoutes = new commonRoutes.createRoutes(obj, { crud: true });

      // ASSERT
      crudRoutes.should.be.ok;
      crudRoutes.should.be.an.array;
      crudRoutes.should.have.length(6);
    });

    it('should build parent child routes if supporting functions exist', function() {
      // ARRANGE
      var obj = {};

      obj.getParent = function() {};
      obj.getChildren = function() {};

      // ACT
      var pcRoutes = new commonRoutes.createRoutes(obj, { parentChild: true });

      // ASSERT
      pcRoutes.should.be.ok;
      pcRoutes.should.be.an.array;
      pcRoutes.should.have.length(2);
    });

  });

});