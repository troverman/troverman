angular.module('models.show', ['lodash', 'services', 'sails.io',])

.service('ShowModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {

    this.getAll = function() {
        var url = utils.prepareUrl('show');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getOne = function(id) {
        var url = utils.prepareUrl('show/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getSome = function(limit, skip, sort){
        //may return count in the getsome query -->prob good call
        var url = utils.prepareUrl('show');
        var query = {params:{limit: limit, skip: skip, sort: sort, filter:filter}};
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.getByCategory = function(path) {
        var url = utils.prepareUrl('show/category/' + path);
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('show');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    /*
    this.update = function(newModel){
        var url = utils.prepareUrl('show/' + newModel.id);
        return $sailsSocket.post(url, newModel).then(success, error);
    };
    */

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
}]);