console.log("hello world");

(function(){

	var app = {
		value : undefined,
		init : function(){
			app.watcher();
			app.mois();

		},

		watcher : function(){
			var that = this ;
			$("#btCheck").on("click",this.check.bind(this));
			$("#userInputDays").on("click", this.days.bind(this));
			$("#userInputYears").on("click", this.years.bind(this));
			$("#selectMois").on("click", this.mois.bind(this));
		},
		check : function(){
			console.log("lalal");
		},

		days: function(){

		},

		years : function(){

		},

		mois: function(){
			console.log($("#selectMois").val());

		},




	}




app.init();
})();