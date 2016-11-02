console.log("hello world");
(function(){
	var app = {
		jours :undefined,
		an : undefined,
		userdate : undefined,	
		date: undefined,
		add : undefined,
		init : function(){
			app.watcher();
			this.month();
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
			this.days();
			this.month();
			this.years();
			var userdate = moment([this.jours+this.mois+this.an],"DD-MM-YYYY")
			var date = userdate.format("dddd");
			$("#main").hide()
			$("#overlay").show();
			$("#msgOverlay").html(date);
			$("#message").hide();
			$("#userInputDays").css("border-color","#47b8e0");
			$("#userInputYears").css("border-color","#47b8e0");
			this.condition();

		},
		days: function(){
			this.jours = $("#userInputDays").val();
			if (this.jours <10) {
				this.conditionInf();
			};
			
		},
		years : function(){
			this.an = $("#userInputYears").val();

		},
		month: function(){
			this.mois =$("#selectMois").val();

		},
		condition: function(){

			userdate = moment([this.jours+this.mois+this.an],"DD-MM-YYYY")
			date = userdate.format("dddd");
			console.log(date);
			if (this.jours === undefined || this.jours === "") {
				console.log("empty");
				this.conditionDays();
			};
			if (this.an === undefined) {
				this.conditionYears();		
			};
			if (this.an === "") {
				this.conditionYears();	
			};
			if (this.jours === undefined && this.an === undefined) {
				$("#userInputDays").css("border-color","#ff7473");
				$("#userInputYears").css("border-color","#ff7473");
				$("#message").show();
				$("#msg").html("");
				$("#msg").html("erreur aucune valeur n'a été renseigné");
				$("#main").show();
				$("#overlay").hide();
			};
			if (date === "Invalid date") {
				$("#userInputDays").css("border-color","#ff7473");
				$("#message").show();
				$("#msg").html("");
				$("#msg").html("Entrer une date valide");
				$("#main").show();
				$("#overlay").hide();
				date = $("#userInputDays").val();
			}
			if (this.jours === "" && this.an === "") {
				$("#userInputDays").css("border-color","#ff7473");
				$("#userInputYears").css("border-color","#ff7473");
				$("#message").show();
				$("#msg").html("");
				$("#msg").html("erreur aucune valeur n'a été renseigné");
				$("#main").show();
				$("#overlay").hide();
			};

		},
		conditionInf : function(){
			
			if (this.jours === "") {
				console.log("empty");
			}else {
				$("#userInputDays").val(this.jours -0)
				this.jours = 0 +  $("#userInputDays").val();
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
			$("#msg").html("Le jours doit etre compris entre 1 et 31");
		},
		conditionDays : function(){
			$("#userInputDays").css("border-color","#ff7473");
			$("#main").show();
			$("#overlay").hide();
			$("#msgOverlay").html("");
		},
		conditionYears : function(){
			$("#userInputYears").css("border-color","#ff7473");
			$("#main").show();
			$("#overlay").hide();
			$("#msgOverlay").html("");
			$("#msg").html("");
			$("#message").show();
			$("#msg").html("Renseigner l'année !");
			
		},
		restart : function(){
			$("#main").show();
			$("#msgOverlay").html("");			
			$("#overlay").hide();
			$("#userInputDays").empty();
			
			this.condition();
		},
	}
	app.init();
})();