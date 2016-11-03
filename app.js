(function(){
	var app = {
		jours : undefined,
		an : undefined,
		mois : undefined,
		value : undefined,
		max : undefined,
		mtMax : undefined,
		time : undefined,
		init : function(){
			$("#message").hide();
			this.watcher();
			this.remove();
		},
		watcher : function(){
			var that = this ;
			$("#btCheck").on("click",this.check.bind(this));
			$("#userInputDays").on("change",this.days.bind(this));
			$("#userInputYears").on("change",this.years.bind(this));
			$("#selectMois").on("change", this.month.bind(this));
			$("#restart").on("click", this.restart.bind(this));
		},
		check : function(){
			this.days();
			this.month();
			this.years();
			this.mtMax = +(this.mois)+(1);
			this.max = moment([this.an,this.mtMax], "YYYY-MM").daysInMonth();
			this.time = moment().date(parseInt(this.jours,10)).month(parseInt(this.mois,10)).year(parseInt(this.an,10)).format("dddd");
			$("#main").hide()
			$("#overlay").show();
			$("#msgOverlay").html(this.time);
			$("#message").hide();
			$("#userInputDays").css("border-color","#47b8e0");
			$("#userInputYears").css("border-color","#47b8e0");
			this.conditionDate();
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
			if (this.time === "undefined") {	
				this.conditionTime();
				
			};
			if (parseInt(this.an,10) < 0 ) {
				$("#userInputYears").css("border-color","#ff7473");
				$("#message").show();
				$("#msg").html("");
				$("#msg").html("Erreur l'année doit etre superieur a 0");
				$("#main").show();
				$("#overlay").hide();
			};
			if (this.jours === "undefined" || this.jours === "") {
				this.conditionDays();
			};
			if (this.an === undefined) {
				this.conditionYears();		
			};
			if (this.an === "") {
				this.conditionYears();	
			};
			if (this.jours === "" && this.an === "") {
				this.time = undefined;
				$("#userInputDays").css("border-color","#ff7473");
				$("#userInputYears").css("border-color","#ff7473");
				$("#message").show();
				$("#msg").html("");
				$("#msg").html("erreur aucune valeur n'a été renseigné");
				$("#main").show();
				$("#overlay").hide();
			};
			
		},
		conditionDays : function(){
			$("#userInputDays").css("border-color","#ff7473");
			$("#main").show();
			$("#overlay").hide();
			$("#msgOverlay").html("");
			$("#msg").html("");
			$("#message").show();
			$("#msg").html("Renseigner le jours !");
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
		conditionDate : function(){
			if (this.jours > this.max || moment().date(parseInt(this.jours,10)).format("D") === "NaN" ||this.jours < 1) {

				$("#userInputDays").css("border-color","#ff7473");
				$("#main").show();
				$("#overlay").hide();
				$("#message").show();
				$("#msg").html("");
				$("#msg").html("le jours doit etre compris entre 1 et"+ " " +this.max);	
			};
		},
		conditionTime : function (){
			if (moment().date(this.an).format("D") === "NaN") {
				$("#userInputYears").css("border-color","#ff7473");
			};
			if (moment().date(this.jours).format("D") === "NaN") {
				$("#userInputDays").css("border-color","#ff7473");
			};
			
			$("#msg").html("");
			$("#msg").html("erreur la date est invalide");
			$("#message").show();
			$("#main").show();
			$("#overlay").hide();
		},

		remove : function(){
			$("#main").show();
			$("#msgOverlay").html("");			
			$("#overlay").hide();	
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