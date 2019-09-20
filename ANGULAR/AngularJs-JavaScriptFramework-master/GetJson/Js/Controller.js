app.controller("ShopController", ($scope, ShopFactory)=> {
    $scope.menu = ShopFactory.getMenu();
    $scope.getShoes = ()=> {
         $scope.sh = ShopFactory.shoes();
    }
});