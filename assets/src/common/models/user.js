angular.module('models.user', ['lodash', 'services', 'sails.io',])
.service('UserModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {
    this.get = function() {
        var url = utils.prepareUrl('user');
        return $sailsSocket.get(url).then(success, error);
    };
    this.create = function(newModel) {
        var url = utils.prepareUrl('user');
        return $sailsSocket.post(url, newModel).then(success, error);
    };
    this.update = function(newModel){
        var url = utils.prepareUrl('user/' + newModel.id);
        return $sailsSocket.post(url, newModel).then(success, error);
    };
    var success = function(response) {return response.data;};
    var error = function(error) {console.log(error);};
}]);