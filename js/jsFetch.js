const app = Vue.createApp({	})
    app.component('app-fetchtest', {
		data: function(){
			return  {err:'',fetch:''} 
		},  
		template: `	<div>
		<ul><li v-for="m in fetch">{{m}}</li></ul>
			<p>Error: {{err}}</p>
		</div>`,
		
		mounted() { 						//Called after the instance has been mounted
			var self = this;
			var url = '/data/units.json';

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
