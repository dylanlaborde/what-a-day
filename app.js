console.log("hello world");

(function(){

	var app = {

		init : function(){
			app.watcher();
		},

		watcher : function(){
			var that = this ;
			$("#check").on("click",this.test.bind(this));
			$("#userInputDays").on("click", this.test.bind(this));
			$("#userInputYears").on("click", this.test.bind(this));



		},
		test: function(){
			console.log("lalal");
		},



	}




app.init();
})();