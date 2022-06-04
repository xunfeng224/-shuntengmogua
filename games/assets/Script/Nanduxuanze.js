window.Global = {
    nandu: 0,
};
cc.Class({
	extends:cc.Component,
	properties:{
	ndxzt:2,
	},
	
	
	
	// onLoad: function () {
	// 	Global.nandu =1;
		
		
    // },
	
	
	
	
	start(){

	},
	changeScenenanduxuanze(){
		cc.director.loadScene("Chooselevel");
	},
	changeSceneEasy(){
		cc.director.loadScene("playing");
		Global.nandu =1;

	},
	changeSceneMedium(){
		cc.director.loadScene("playing");
		Global.nandu =2;

	},
	changeSceneDifficulty(){
		cc.director.loadScene("playing");
		Global.nandu =3;

	},
	cahngeSceneStart(){
		cc.director.loadScene("start");
	},
	

	extends: cc.Component,
 
    

	
});
// module.exports = { 
// 	node:null, 
// 	nadxzt:0,
// 	};