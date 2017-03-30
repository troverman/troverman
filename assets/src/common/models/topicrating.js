angular.module('models.topicRating', ['lodash', 'services', 'sails.io',])

.service('TopicRatingModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var url = utils.prepareUrl('topicrating');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getOne = function(id) {
        var url = utils.prepareUrl('topicrating/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByTopic = function(id) {
        var url = utils.prepareUrl('topicrating/topic/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByUser = function(id) {
        var url = utils.prepareUrl('topicrating/user/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('topicrating');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.update = function(newModel) {
        var url = utils.prepareUrl('topicrating/'+newModel.id);
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('topicrating/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };
    
    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
}]);