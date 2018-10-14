
app.controller('MainCtrl', ['$scope', '$sce', '$http', function ($scope, $sce, $http) {
    $scope.Flightjson = [];
    $scope.receipedetails;
    $http.get('json/data.json').then(function (response) {
        $scope.Flightjson = response.data;
    });
    $scope.videoUrlArray = [];

    $scope.videoSource = $sce.trustAsResourceUrl("//www.youtube.com/embed/AWjBNSshF3s");
    $scope.receipedetails = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    $scope.ingredients = {
        "salt": "1 spoon",
        "rice": "2 spoon",
        "sugar": "3 spoon",
        "salt": "1 spoon",
        "turmeric": "6 spoon",
        "milk": "1 cup"
    };
    $scope.desription = "7 Breakfast Recipes - Part 1 | Indian Breakfast Recipes | Healthy and Quick Breakfast Recipess";
    $scope.Flightjson.forEach(element => {
        $scope.videoUrlArray.push(element)
    });

    $scope.receipedetails = "details"
    $scope.changeVideo = function (data) {
        $scope.videoSource = $sce.trustAsResourceUrl(data.url);
        $scope.receipedetails = data.description;
        $scope.ingredients = data.ingredients;
        $scope.desription = data.receipe;

    }
}]);
