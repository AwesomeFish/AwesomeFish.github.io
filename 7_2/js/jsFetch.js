const app = Vue.createApp({	})
    app.component('app-fetchtest', {
		data: function(){
			return  {err:'',fetch:''} 
		},  
		template: `
		<div class="row" v-for="m in fetch">
            <div class="col-md-3">
                  <p>{{ m.code }}</p>
            </div>
            <div class="col-md-3">
                <p>{{ m.desc }}</p>
            </div>
			<div class="col-md-3">
                <p>{{ m.cp }}</p>
            </div>
			<div class="col-md-3">
                <p>{{ m.type }}</p>
			</div>
      	</div>
		<h2 v-if="err.length !=''">Error: {{err}}</h2>`,
		
		mounted() { 						//Called after the instance has been mounted
			var self = this;
			var url = '/7_2/data/units.json';

			fetch(url).then( response =>{   //javascript fetch api  
				return response.json( );	//turning the response into the usable data
			})
			.then( data =>{
				self.fetch=data;			//This is the data you wanted to get from url
			})
			.catch(error => {
				self.err=error
			});
		 
  		}
})
app.mount('#app')
