angular.module('goyang2014.controllers', [])

.controller('BlinkController', function ($scope, $timeout) {
  var running = true, i = 0;
  var work = function () {
    $scope.data = ++i;
    if (running) {
      $timeout(work, 100);
    }
  };
  $scope.$on('$destroy', function () {
    running = false;
  });
  work();
})

.controller('ElementsController', function ($scope) {
  $scope.elements = [
    {
      id: 1,
      name: '수소',
      symbol: 'H'
    },
    {
      id: 2,
      name: '헬륨',
      symbol: 'He'
    },
    {
      id: 3,
      name: '리튬',
      symbol: 'Li'
    },
    {
      id: 4,
      name: '베릴륨',
      symbol: 'Be'
    },
    {
      id: 5,
      name: '붕소',
      symbol: 'B'
    },
    {
      id: 6,
      name: '탄소',
      symbol: 'C'
    }
  ];
})

.controller('MusiciansController', function ($scope) {
  $scope.musicians = [
    {
      name: 'S. Rachmaninoff',
      genre: '낭만주의',
      image: 'http://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Sergei_Rachmaninoff_LOC_33968_Cropped.jpg/433px-Sergei_Rachmaninoff_LOC_33968_Cropped.jpg',
      birth: 1873,
      death: 1943
    },
    {
      name: 'Frederic Rzewski',
      genre: '현대 음악',
      image: 'http://berkshirereview.net/wp-content/uploads/2010/03/Frederic_Rzewski.jpg',
      birth: 1938,
      death: null
    }
  ];
})

.controller('InfoController', function ($scope) {
  $scope.authors = [
    {
      name: '홍길동',
      address: '고양시 일산동구'
    },
    {
      name: '김길동',
      address: '고양시 일산서구'
    },
    {
      name: '박길동',
      address: '고양시 덕양구'
    }
  ];
})
