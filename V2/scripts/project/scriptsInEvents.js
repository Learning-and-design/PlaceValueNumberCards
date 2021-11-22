class AppInterface  {

	static showToast(msg){
		let jsonToast = {};
			jsonToast.toast = msg;
        console.log('showToast', jsonToast);
		   if (window && window.ReactNativeWebView) {
		   
			window.ReactNativeWebView.postMessage(jsonToast);
		}
		
	}
	static sendToApp(data){		
		let json_str = JSON.stringify(data);
		console.log("Send data to Webview", json_str);
		if (window && window.ReactNativeWebView) {
			window.ReactNativeWebView.postMessage(json_str);
		}
		

	}
}


const scriptsInEvents = {

		async Es_common_Event134_Act2(runtime, localVars)
		{
			localStorage.setItem("pvq-data", JSON.stringify(runtime.getInstanceByUid(runtime.globalVars.JSON_UID).getJsonDataCopy()));
			console.log(runtime.getInstanceByUid(runtime.globalVars.JSON_UID).getJsonDataCopy())
		},

		async Es_common_Event135_Act4(runtime, localVars)
		{
			AppInterface.sendToApp(runtime.getInstanceByUid(runtime.globalVars.JSON2_UID).getJsonDataCopy());
		},

		async Es_common_Event137_Act1(runtime, localVars)
		{
			
			const nextLevel = runtime.globalVars.CurrentLevel+1;
			
			
				if(eval("runtime.globalVars.L"+nextLevel+"_Tutorial_Done")){
				runtime.goToLayout("Level"+nextLevel);
				}
			else{
			runtime.goToLayout("Level"+nextLevel+"-Tutorial");
			}
			
		},

		async Es_common_Event246_Act48(runtime, localVars)
		{
			localStorage.setItem(runtime.globalVars.LOCAL_GAME_KEY, JSON.stringify(runtime.getInstanceByUid(runtime.globalVars.JSON_UID).getJsonDataCopy()));
			if(AppInterface!="undefined")
			AppInterface.sendToApp(runtime.getInstanceByUid(runtime.globalVars.JSON_UID).getJsonDataCopy());
			else console.log("AppInterface is not defined");
			
		},

		async Egame_Event1_Act3(runtime, localVars)
		{
			var currentdate = new Date(); 
			var datetime = currentdate.getDate() + "/"
			                + (currentdate.getMonth()+1)  + "/" 
			                + currentdate.getFullYear() + "@"  
			                + currentdate.getHours() + ":"  
			                + currentdate.getMinutes() + ":" 
			                + currentdate.getSeconds();			
			runtime.globalVars.StartDateTime = datetime;
		},

		async Egame_Event4_Act1(runtime, localVars)
		{
			// runtime.goToLayout("Level1-Tutorial");
			const nextLevel = runtime.globalVars.GameLevel;
			console.log("nextlevel", nextLevel);
				if(nextLevel == 0){
				runtime.goToLayout("Level"+nextLevel+"-Start");
				}else if(eval("runtime.globalVars.L"+nextLevel+"_Tutorial_Done")){
				runtime.goToLayout("Level"+nextLevel);
				}
			else{
			runtime.goToLayout("Level"+nextLevel+"-Tutorial");
			}
			
		},

		async ["Es_level0-Start_Event1_Act5"](runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			
			let colors = [["rgb(251, 194, 172)","rgb(158, 164, 250)"], "rgb(94, 94, 94)", "rgb(219, 230, 232)", "rgb(181, 228, 228)", "rgb(200, 250, 250)"  ]
			if(level == 0){
			document.body.style.backgroundColor = colors[level][runtime.globalVars.Step];
			}
			else
			document.body.style.backgroundColor = colors[level];
		},

		async ["Es_level0-End_Event1_Act5"](runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			
			let colors = [["rgb(251, 194, 172)","rgb(158, 164, 250)"], "rgb(94, 94, 94)", "rgb(219, 230, 232)", "rgb(181, 228, 228)", "rgb(200, 250, 250)"  ]
			if(level == 0){
			document.body.style.backgroundColor = colors[level][runtime.globalVars.Step];
			}
			else
			document.body.style.backgroundColor = colors[level];
		},

		async ["Es_level1-Tutorial_Event1_Act3"](runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			
			let colors = [["rgb(251, 194, 172)","rgb(158, 164, 250)"], "rgb(94, 94, 94)", "rgb(219, 230, 232)", "rgb(181, 228, 228)", "rgb(200, 250, 250)"  ]
			if(level == 0){
			document.body.style.backgroundColor = colors[level][runtime.globalVars.Step];
			}
			else
			document.body.style.backgroundColor = colors[level];
		},

		async Es_level1_Event4_Act4(runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			
			let colors = [["rgb(251, 194, 172)","rgb(158, 164, 250)"], "rgb(94, 94, 94)", "rgb(219, 230, 232)", "rgb(181, 228, 228)", "rgb(200, 250, 250)"  ]
			if(level == 0){
			document.body.style.backgroundColor = colors[level][runtime.globalVars.Step];
			}
			else
			document.body.style.backgroundColor = colors[level];
		},

		async Es_level1_Event62_Act4(runtime, localVars)
		{
			let data = JSON.parse(localStorage.getItem(runtime.globalVars.LOCAL_GAME_KEY));
			console.log("data>>>>>>>>>>>>>>>>>>>>", data)
			if(data ==null) return;
			runtime.globalVars.RewardPoints = data.totalRewards;
			runtime.getInstanceByUid(runtime.globalVars.JSON_UID).setJsonDataCopy(data);
			runtime.globalVars.isMusic = data.isMusic
			
		},

		async ["Es_level2-Tutorial_Event1_Act3"](runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			
			let colors = [["rgb(251, 194, 172)","rgb(158, 164, 250)"], "rgb(94, 94, 94)", "rgb(219, 230, 232)", "rgb(181, 228, 228)", "rgb(200, 250, 250)"  ]
			if(level == 0){
			document.body.style.backgroundColor = colors[level][runtime.globalVars.Step];
			}
			else
			document.body.style.backgroundColor = colors[level];
		},

		async Es_level2_Event4_Act3(runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			
			let colors = [["rgb(251, 194, 172)","rgb(158, 164, 250)"], "rgb(94, 94, 94)", "rgb(219, 230, 232)", "rgb(181, 228, 228)", "rgb(200, 250, 250)"  ]
			if(level == 0){
			document.body.style.backgroundColor = colors[level][runtime.globalVars.Step];
			}
			else
			document.body.style.backgroundColor = colors[level];
		},

		async Es_level2_Event88_Act4(runtime, localVars)
		{
			let data = JSON.parse(localStorage.getItem(runtime.globalVars.LOCAL_GAME_KEY));
			runtime.globalVars.RewardPoints = data.totalRewards;
			runtime.getInstanceByUid(runtime.globalVars.JSON_UID).setJsonDataCopy(data);
			runtime.globalVars.isMusic = data.isMusic;
			
		},

		async ["Es_level3-Tutorial_Event1_Act3"](runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			
			let colors = [["rgb(251, 194, 172)","rgb(158, 164, 250)"], "rgb(94, 94, 94)", "rgb(219, 230, 232)", "rgb(181, 228, 228)", "rgb(200, 250, 250)"  ]
			if(level == 0){
			document.body.style.backgroundColor = colors[level][runtime.globalVars.Step];
			}
			else
			document.body.style.backgroundColor = colors[level];
		},

		async Es_level3_Event4_Act3(runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			
			let colors = [["rgb(251, 194, 172)","rgb(158, 164, 250)"], "rgb(94, 94, 94)", "rgb(219, 230, 232)", "rgb(181, 228, 228)", "rgb(200, 250, 250)"  ]
			if(level == 0){
			document.body.style.backgroundColor = colors[level][runtime.globalVars.Step];
			}
			else
			document.body.style.backgroundColor = colors[level];
		},

		async Es_level3_Event72_Act4(runtime, localVars)
		{
			let data = JSON.parse(localStorage.getItem(runtime.globalVars.LOCAL_GAME_KEY));
			runtime.globalVars.RewardPoints = data.totalRewards;
			runtime.getInstanceByUid(runtime.globalVars.JSON_UID).setJsonDataCopy(data);
			runtime.globalVars.isMusic = data.isMusic;
			
		},

		async Es_level4_Event4_Act3(runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			
			let colors = [["rgb(251, 194, 172)","rgb(158, 164, 250)"], "rgb(94, 94, 94)", "rgb(219, 230, 232)", "rgb(181, 228, 228)", "rgb(200, 250, 250)"  ]
			if(level == 0){
			document.body.style.backgroundColor = colors[level][runtime.globalVars.Step];
			}
			else
			document.body.style.backgroundColor = colors[level];
		},

		async Es_level4_Event113_Act4(runtime, localVars)
		{
			let data = JSON.parse(localStorage.getItem(runtime.globalVars.LOCAL_GAME_KEY));
			runtime.globalVars.RewardPoints = data.totalRewards;
			runtime.getInstanceByUid(runtime.globalVars.JSON_UID).setJsonDataCopy(data);
			runtime.globalVars.isMusic = data.isMusic;
			
		},

		async ["Es_level4-Tutorial_Event1_Act3"](runtime, localVars)
		{
			let level = runtime.globalVars.CurrentLevel;
			
			let colors = [["rgb(251, 194, 172)","rgb(158, 164, 250)"], "rgb(94, 94, 94)", "rgb(219, 230, 232)", "rgb(181, 228, 228)", "rgb(200, 250, 250)"  ]
			if(level == 0){
			document.body.style.backgroundColor = colors[level][runtime.globalVars.Step];
			}
			else
			document.body.style.backgroundColor = colors[level];
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

