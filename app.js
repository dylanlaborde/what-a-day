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
			$("#restart").on("click", this.restart.bind(this));
		},
		check : function(){	
			var userdate = moment([this.jours+this.mois+this.an],"DD-MM-YYYY")
			var date = userdate.format("dddd");
			$("#main").hide()
			$("#overlay").show();
			$("#msgOverlay").append(date);
			$("#message").hide();
			$("#userInputDays").css("border-color","#47b8e0");
			$("#userInputYears").css("border-color","#47b8e0");
			this.condition();
			console.log(date);
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
			if (this.jours === undefined) {
				this.conditionDays();
			}
			if (this.an === undefined) {
				this.conditionYears();	
			};
			if (this.an === "") {
				this.conditionYears();	
			};
			if (this.jours === undefined && this.an === undefined) {
				console.log("haha");
				$("#userInputDays").css("border-color","#ff7473");
				$("#userInputYears").css("border-color","#ff7473");
				$("#message").show();
				$("#msg").html("");
				$("#msg").append("erreur aucune valeur n'a été renseigné");
				$("#main").show();
				$("#overlay").hide();
			};

		},
		remove : function(){
			$("#main").show();
			$("#msgOverlay").html("");			
			$("#overlay").hide();
			
		},
		
		msgError : function(){
			$("#msg").html("");
			$("#message").show();
			$("#msg").append("Le jours doit etre compris entre 1 et 31");

		},
		conditionDays : function(){
			$("#userInputDays").css("border-color","#ff7473");
			$("#main").show();
			$("#overlay").hide();
			$("#msgOverlay").html("");
			this.msgError();
			

		},
		conditionYears : function(){
			$("#userInputYears").css("border-color","#ff7473");
			console.log("years");
			$("#main").show();
			$("#overlay").hide();
			$("#msgOverlay").html("");
			$("#msg").html("");
			$("#message").show();
			$("#msg").append("Renseigner l'année !");
			
		},
		restart : function(){
			$("#main").show();
			$("#msgOverlay").html("");			
			$("#overlay").hide();
			$("#userInputDays").empty();
			this.ans = undefined;
			console.log(this.an);
			this.condition();

		},

	}
	app.init();
})();
