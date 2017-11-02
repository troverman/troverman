angular.module('models.user', ['lodash', 'services', 'sails.io',])

.service('UserModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {

    this.getAll = function() {
        var url = utils.prepareUrl('user');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getCount = function() {
        var url = utils.prepareUrl('user/count');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getOne = function(id) {
        var url = utils.prepareUrl('user/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByUsername = function(model) {
        var url = utils.prepareUrl('user/username/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

    /*
    this.getSome = function(limit, skip, sort) {
        var url = utils.prepareUrl('user/filter/' + limit + '/' + skip);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getMine = function() {
        var url = utils.prepareUrl('user/me');
        return $sailsSocket.get(url).then(success, error);
    };
    */

    this.create = function(newModel) {
        var url = utils.prepareUrl('user');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.update = function(newModel){
        var url = utils.prepareUrl('user/' + newModel.id);
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    /*
    this.removePassport = function(model) {
        var url = '/auth/providers/' + model;
        return $sailsSocket.delete(url).then(success, error);
    };
    */

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
}]);