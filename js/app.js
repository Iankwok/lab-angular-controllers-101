angular.module('myFirstApp', [])
  .controller('ExhibitController', ExhibitController)
  .controller('GeneralInfoController', GeneralInfoController)
  .controller('DonorController', DonorController)

function ExhibitController($scope){
  $scope.ExhibitName = 'WDI-HK9';
  $scope.Author = 'Ian Kwok';
}

function GeneralInfoController($scope){
  $scope.hours = {
    Friday: 'Friday 10:00am - 9:00pm',
    Monday: 'Monday 10:00am - 5:30pm',
    Saturday: 'Saturday 10:00am - 9:00pm',
    Sunday: 'Sunday 10:00am - 5:30pm',
    Tuesday: 'Tuesday 10:00am - 9:00pm',
    Wednesday: 'Wednesday 10:00am - 9:00pm',
    Thurday: '1Thurday 10:00am - 9:00pm'
  };
}

function DonorController($scope){
  $scope.contactLink = 'ga@ga.com';
  $scope.amount = ['$50','$100','$150','$200'];
};


