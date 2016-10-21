console.log("hello world");

(function(){

	var app = {
		value : undefined,
		init : function(){
			app.watcher();
			
		},
		watcher : function(){
			var that = this ;
			$("#btCheck").on("click",this.check.bind(this));
			$("#userInputDays").on("change", this.days.bind(this));
			$("#userInputYears").on("change", this.years.bind(this));
			$("#selectMois").on("change", this.mois.bind(this));
		},
		check : function(){
		// console.log(moment("this.jours, this.mois, this.an" ,"DD-MM-YYYY").format("dddd"));
		console.log(this.jours,this.mois,this.an);
		
		},
		

		days: function(){
			this.jours = $("#userInputDays").val();
			
		},

		years : function(){
			this.an = $("#userInputYears").val();

		},

		mois: function(){
			this.mois =$("#selectMois").val();

		},


	}

// moment("2016/11/12", "YYYY-MM-DD").format("dddd");


app.init();
})();
		// console.log(moment("this.an this.jours", "YYYY-DD").format("llll"));