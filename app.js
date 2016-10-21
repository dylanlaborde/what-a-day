console.log("hello world");

(function(){

	var app = {
		jours :undefined,
		an : undefined,
		date: undefined,
		
		init : function(){
			app.watcher();
			this.month();
			console.log(this.jours);
			this.remove();
			this.condition();
			console.log(this.jours)

			  // this.remove();
			// this.condition();
		},
		watcher : function(){
			var that = this ;
			$("#btCheck").on("click",this.check.bind(this));
			$("#userInputDays").on("change", this.days.bind(this));
			$("#userInputYears").on("change", this.years.bind(this));
			$("#selectMois").on("change", this.month.bind(this));
			$("#restart").on("click", this.remove.bind(this));
		},
		check : function(){
			// this.condition();
			
			var userdate = moment([this.jours+this.mois+this.an],"DD-MM-YYYY")
			var date = userdate.format("dddd");
			console.log(userdate);

		 // console.log(moment(this.jours+this.mois+this.an,"DD-MM-YYYY").format("dddd"));
		 // console.log(this.jours,this.mois,this.an);
		 	$("#main").hide()
		 	$("#overlay").show();
			$("#overlay").append(date);
			console.log(this.mois);
			console.log(date);
			this.error();
			this.condition();
		},
		

		days: function(){
			this.jours = $("#userInputDays").val();
			
		},

		years : function(){
			this.an = $("#userInputYears").val();

		},

		month: function(){
			this.mois =$("#selectMois").val();

		},
		condition: function(){
			if (this.jours === undefined ) {
				console.log("ahhhhyaa");
			}
			
				
			
		},

		remove: function(){
			$("#main").show();
			console.log("lala");
			$("#overlay").hide();
		},

		error : function(){


		}


	}

// moment("2016/11/12", "YYYY-MM-DD").format("dddd");


app.init();
})();
		// console.log(moment("this.an this.jours", "YYYY-DD").format("llll"));