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
			console.log(this.jours)
			$("#message").hide();

			   this.remove();
			
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
	var userdate = moment([this.jours+this.mois+this.an],"DD-MM-YYYY")
			var date = userdate.format("dddd");
			
		 	 $("#main").hide()
		 	 $("#overlay").show();
			$("#msgOverlay").append(date);
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
			if (this.jours === undefined && this.an === undefined) {
				console.log("haha");
				$("#message").show();
				$("#msg").append("erreur aucune valeur n'a été renseigné");
				$("#main").show();
				$("#overlay").hide();
			}
			
			
		},
		remove: function(){
			 $("#main").show();
			$("#msgOverlay").html("");			
			 $("#overlay").hide();
			console.log("lala");

		},
		msgError : function(){
			$("#message").show();
			$("#msg").append("Le jours doit etre compris entre 1 et 31");

		},
		conditionDays : function(){

		},
		conditionYears : function(){

		},

	}
app.init();
})();
		