exports.createRoutes = function(obj, options) {
  var routes = [];

  if(!options) {
    return routes;
  }

  if(options.parentChild) {
    if(obj.getParent) {
      routes.push({ path: '/:id([0-9]*)/parent', verb: 'get', fn: obj.getParent });
    }

    if(obj.getChildren) {
      routes.push({ path: '/:id([0-9]*)/children', verb: 'get', fn: obj.getChildren });
    }
  }

  if(options.crud) {
    // Create
    if (obj.create) {
      routes.push({path: '/', verb: 'post', fn: obj.create});
    }

    // Read
    if (obj.getAll) {
      routes.push({path: '/', verb: 'get', fn: obj.getAll});
    }

    if (obj.exists) {
      routes.push({path: '/:id([0-9]*)/exists', verb: 'get', fn: obj.getById});
    }

    if (obj.getById) {
      routes.push({path: '/:id([0-9]*)', verb: 'get', fn: obj.getById});
    }

    if (obj.count) {
      routes.push({path: '/count', verb: 'get', fn: obj.count});
    }

    // Update
    if (obj.update) {
      routes.push({path: '/', verb: 'put', fn: obj.update});
    }

    // Delete
    if (obj.deleteById) {
      routes.push({path: '/:id([0-9]*)', verb: 'delete', fn: obj.deleteById});
    }
  }

  return routes;
};