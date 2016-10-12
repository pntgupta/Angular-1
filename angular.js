(function(){
	var app=angular.module("store",['ngCookies']);

	app.controller("storeCtrl",['$http','$cookies',function($http,$cookies){
		var self=this;
		$http.get('products.json').success(function(data){
				self.products=data.products;

				if($cookies.getObject('store_reviews') == undefined)
					$cookies.putObject('store_reviews',data.reviews);

				self.reviews=$cookies.getObject('store_reviews');
			});
	}]);

	app.controller("tabController",function(){
		this.tab=1;
		this.selectTab = function(tab)
		{
			this.tab=tab;
		}
		this.isTab = function(tab)
		{
			return this.tab==tab;
		}
	});

	app.controller("submitController",['$http','$cookies',function($http,$cookies){
		this.review={};
		var self=this;	
		this.save = function(reviews){			
			reviews.push(this.review);
			$cookies.putObject('store_reviews',reviews);
			this.review={};	
		};

	}]);
})();