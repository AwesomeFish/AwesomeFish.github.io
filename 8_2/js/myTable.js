 const app = Vue.createApp({	})
	app.component('app-lookup', // indicating the component tag
    {
      components: {
              paginate: VuejsPaginateNext,
      },
      // defining data to be used in the component
      data: function() {
        return {
          currentPage: 1,
          students: []
        }
        },
            mounted() {
            var self = this;
			$.getJSON('/8_2/data/units.json', function(data) {
				self.students = data;
    			})
			.fail(function() { alert('getJSON request failed! '); })
        },  
		template: `
        <table class="table table-striped">
			<caption>Unit Table</caption>
			<thead>
				<tr>
					<th id="codeheader" scope="col">Code</th>
					<th id="descheader" scope="col">Description</th>
                    <th id="cpheader" scope="col">Credit Points</th>
					<th id="typeheader" scope="col">Type</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="students in getItems ">
					<th :id="students.code" scope="row">{{ students.code }}</th>
					<td :headers="students.code" scope="row">{{ students.desc }}</td>
                    <td :headers="students.code" scope="row">{{ students.cp }}</td>
					<td :headers="students.code" scope="row">{{ students.type }}</td>
				</tr>
			</tbody>
		</table>

        <!-- Vue Paginate template -->
		<paginate 
			:page-count="5"    
			:page-range="5" 
			:margin-pages="1"
			:click-handler="clickCallback" 
			:prev-text=" 'Prev Page' " 		
			:next-text="'Next Page'" 
			:container-class="'pagination'" 
			:active-class="'currentPage'"
			>
		</paginate>
		`,
        computed: {
            getItems: function() {
                let current = this.currentPage * 5; 
                let start = current - 5;
                return this.students.slice(start, current);
            }
        },
        methods: {
            //sets the clicked page
            clickCallback: function(pageNum) {
                this.currentPage = Number(pageNum);
            }
        }
	})
	
	app.mount('#app')
