angular.module('models.topic', ['lodash', 'services', 'sails.io',])

.service('TopicModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {

    this.getOne = function(id) {
        var url = utils.prepareUrl('topic/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getSome = function(limit, skip, sort){//, filter, filterType) {
        //may return count in the getsome query -->prob good call
        var url = utils.prepareUrl('topic');
        //if (filter == 'user'){}
        var query = {params:{limit: limit, skip: skip, sort: sort}};
        return $sailsSocket.get(url, query).then(success, error);
    };
    
    this.getAll = function(limit, skip, sort) {
        var url = utils.prepareUrl('topic');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByCategory = function(path) {
        var url = utils.prepareUrl('topic/category/' + path);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByUser = function(id) {
        var url = utils.prepareUrl('topic/user/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getCount = function() {
        var url = utils.prepareUrl('topic/count');
        return $sailsSocket.get(url).then(success, error);
    };
    
    this.create = function(newModel) {
        var url = utils.prepareUrl('topic');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.update = function(newModel){
        var url = utils.prepareUrl('topic/' + newModel.id);
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(id){
        var url = utils.prepareUrl('topic/' + id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
}]);