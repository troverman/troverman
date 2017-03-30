angular.module('models.host', ['lodash', 'services', 'sails.io',])

.service('HostModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {

    this.getAll = function(limit, skip, sort) {
        var url = utils.prepareUrl('host');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getOne = function(id) {
        var url = utils.prepareUrl('host/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByTopic = function(id) {
        var url = utils.prepareUrl('host/topic/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByShow = function(id) {
        var url = utils.prepareUrl('host/show/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByUser = function(id) {
        var url = utils.prepareUrl('host/user/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    /*
    this.getSome = function(limit, skip, sort) {
        var url = utils.prepareUrl('host/filter/' + limit + '/' + skip);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getMine = function() {
        var url = utils.prepareUrl('host/me');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getCount = function() {
        var url = utils.prepareUrl('host/count');
        return $sailsSocket.get(url).then(success, error);
    };
    */

    this.create = function(newModel) {
        var url = utils.prepareUrl('host');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.update = function(newModel){
        var url = utils.prepareUrl('host/' + newModel.id);
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(id){
        var url = utils.prepareUrl('host/' + id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
}]);