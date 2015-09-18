var url = 'http://10.10.2.253:5000/';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.clinicData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/create.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.init = function(){
    console.log("something!!!");
  }

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.create = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doCreate = function() {
    console.log('Doing login', $scope.clinicData);
    $http.post(url+'createClinic', $scope.clinicData).success(function(data) {
      if(data) {
        if("error" in data){
          alert(data.error);
        }
        deferred.resolve(data);
      } else {
          deferred.reject(data);
      }
    }).error(function(error) {
        deferred.reject(error);
    });

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.search = function(form){
    $http.post(url+'searchClinic', form).success(function(data) {
      if(data) {
        if("error" in data){
          alert(data.error);
        }
        else{
          var card = document.getElementById("card");
          card.style.display = "block";
          var header = document.getElementById("cardheader");
          var address1 = document.getElementById("address1");
          var address2 = document.getElementById("address2");
          var estate = document.getElementById("estate");
          var telephone = document.getElementById("telephone");
          var footer = document.getElementById("cardfooter");
          header.innerHTML = data.name
          footer.innerHTML = data.id
          address1.innerHTML = data.address_1
          address2.innerHTML = data.address_2
          estate.innerHTML = data.estate
          telephone.innerHTML = data.telephone
        }
        
        deferred.resolve(data);
      } else {
          deferred.reject(data);
      }
    }).error(function(error) {
        deferred.reject(error);
    });
  }

  $scope.update = function(form){
    console.log(form);
    $http.post(url+'updateClinic', form).success(function(data) {
      if(data) {
        if("error" in data){
          alert(data.error);
        }
        else{
          var p = document.getElementById('name');
          p.innerHTML = data.name + " " + "updated!";
        }
        
        deferred.resolve(data);
      } else {
          deferred.reject(data);
      }
    }).error(function(error) {
        deferred.reject(error);
    });
  }

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('DeleteCtrl', function($scope, $stateParams, $http){
  $scope.init = function(){
    console.log("delete init!");
  }

  $scope.deleteClinic = function(form){
    console.log('delete clinic!');
    console.log(form.name);
    $http.post(url+'deleteClinic', form).success(function(data) {
      if(data) {
        if("error" in data){
          alert(data.error);
        }
        else{
          var p = document.getElementById('info');
          var success = document.getElementById('success');
          p.innerHTML = data.id
          success.innerHTML = data.name + " " + "deleted!"
        }
        
        deferred.resolve(data);
      } else {
          deferred.reject(data);
      }
    }).error(function(error) {
        deferred.reject(error);
    });
  }
});
