app.controller('MainController', ['$scope',function($scope){
    $scope.todo ={
        title: "Things i need to do",
        list: ["Clean my room", "go to the store", "Study for test"]
    }
    $scope.books = {
        title: "books i need",
        list: []
    }
    $scope.addItem = function (itemList, item){
        itemList.push(item);
    }
}])