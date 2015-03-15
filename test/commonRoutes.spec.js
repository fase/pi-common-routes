'use strict';

var should = require('should')
  , commonRoutes = require('../index');

describe('commonRoutes', function() {

  describe('#createCrudRoutes', function() {
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
      var crudRoutes = new commonRoutes.createCrudRoutes(obj);

      // ASSERT
      crudRoutes.should.be.ok;
      crudRoutes.should.be.an.array;
      crudRoutes.should.have.length(6);
    });
  });

  describe('#createParentChildRoutes', function() {
    it('should build parent child routes if supporting functions exist', function() {
      // ARRANGE
      var obj = {};

      obj.getParent = function() {};
      obj.getChildren = function() {};

      // ACT
      var pcRoutes = new commonRoutes.createParentChildRoutes(obj);

      // ASSERT
      pcRoutes.should.be.ok;
      pcRoutes.should.be.an.array;
      pcRoutes.should.have.length(2);
    });
  });

});