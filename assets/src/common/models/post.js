angular.module('models.post', ['lodash', 'services', 'sails.io',])

.service('PostModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {

    this.getAll = function(limit, skip, sort) {
        var url = utils.prepareUrl('post');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getOne = function(id) {
        var url = utils.prepareUrl('post/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getSome = function(limit, skip, sort, filter){
        //may return count in the getsome query -->prob good call;
        //show filter here..
        var url = utils.prepareUrl('post');
        var query = {params:{limit: limit, skip: skip, sort: sort, filter:filter}};
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.getByShow = function(id) {
        var url = utils.prepareUrl('post/show/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByUser = function(id) {
        var url = utils.prepareUrl('post/user/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('post');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.update = function(newModel){
        var url = utils.prepareUrl('post/' + newModel.id);
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
}]);