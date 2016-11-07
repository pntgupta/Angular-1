(function(){
	var app=angular.module("store",['ngCookies']);

	app.controller("storeCtrl",['$cookies',function($cookies){
		var self=this;
		$.get("/products.json",function(data){
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
		{debugger;
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