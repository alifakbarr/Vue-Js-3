Vue.component('greeting',{
	template:`<div>
		<b>hello World</b> <br>
		<i>Illusi</i>
	</div>`
}),

Vue.component('button-counter',{
	data: function () {
		return{
			count:0
		}
	},
	template: '<button @click="count++">klik {{ count }}</button>'
}),

Vue.component('blog-post',{
	props:['post'],
	template:`
			<div>
				<h3>{{ post.title}}</h3>
				<div v-html="post.content"></div>
			</div>`
})

var app2 = new Vue({
	el:'#app2',
	data:{
		message:'',
		content:'',
		vehicles:['car','plane','bike'],
		vehicles2:[
		{type:'car',brand:'Toyota',color:'metallic'},
		{type:'motorcycle',brand:'Honda',color:'blue'},
		{type:'bike',brand:'BMX',color:'red'},
		],
		object:{
			firstName:'Alif',
			lastName:'Akbar',
			age:20
		},
		posts:[
			{id:1,title:'kau kik',content:'<b>hahaha</b>'},
			{id:2,title:'kau jaja',content:'<b>jajaha</b>'}
			],
		isi:'',
		keterangan:'',

	},
	methods:{
		spaceKey:function () {
			this.message ='space key';
		},
		addVehicle:function () {
			this.vehicles.push(this.content);
			this.content='';
			// push untuk menambah data
		},
		removeVehicle:function (index) {
			this.vehicles.splice(index,1);
			// splice untuk menghapus data
			// 1 yang dihapus berjumlah 1
		}
	},
	watch:{
		isi:function () {
			this.keterangan = 'sedang mengetik....'
		}
	}
})