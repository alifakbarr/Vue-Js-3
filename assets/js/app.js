var app = new Vue({
	el:'#app',
	data:{
		show:true,
		// show:'ready',
		message:'Hello World',
		message2:'Wrong',
		int1:2,
		int2:2,
		result:null,
		kilometers:0,
		meters:0,
		message3:'',
		textarea:'',
		radiobutton:'',
		checkbox:[],
		select:'',
		select2:[],
		imgFile:'img/1.jpg',
		link:'http:google.com',
		fontku: 'color :red; font-size:30px;',
		message4:'',


	},
	computed:{
		sum:function () {
			return this.int1 + this.int2;
		}
	},
	methods:{
		sumProcess:function (int3) {
			return this.result = this.int1 + this.int2 + int3;
		},
		alertInfo:function () {
			alert('ale ale');
		}
		spaceKey:function () {
			this.message4='space key';
		}
	},
	watch:{
		kilometers:function (val) {
			this.kilometers = val;
			this.meters = val * 1000;
		},
		meters:function (val) {
			this.meters = val;
			this.kilometers = val /1000;
		}

	}

})