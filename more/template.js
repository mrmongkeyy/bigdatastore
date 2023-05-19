module.exports = {
	app(config){
		return `
			<!doctype html>
			<html>
				<head>
					<title>BIGDATA: Real place for your data!</title>
					<meta name=viewport content=width=device-width,initial-scale=1>
					<style>
						@font-face{
							font-family:'goodone';
							src:url('/file?fn=Azonix.otf');
						}
						.akarabutton{
							padding:10px;
							background:#215475;
							font-size:20px;
							cursor:pointer;
							color:white;
							border-radius:20px;
						}
						main{
							-webkit-tap-highlight-color:transparent;
							user-select:none;
						}
						content{
							width:100%;
						}
						.bigfont{
							font-size:18px;
						}
						.smallfont{
							font-size:12px;
						}
						.normal-size:{
							font-size:13px;
						}
						.responsiveWidth{
							width:50%;
						}
						.footerSetting{
							justify-content:space-around;
							width:50%;
						}
						.footerItems{
							margin:0 5px;
						}
						.mediasocial div img{
							width:32px;
							height:32px;
							cursor:pointer;
						}
						#finder{
							width:50%;
						}
						header{
							width:100%;
							justify-content:space-between;
						}
						input{
							outline:none;
							background:white;
							border:none;
							padding:5px;
						}
						.photocard{
							width:50%;
						}
						.galerycard{
							max-width:50%;
						}
						button{
							background:white;
							border:none;
							padding:5px;
							cursor:pointer;
						}
						video{
							outline:none;
						}
						audio{
							outline:none;
						}
						#contentContainer{
							display:inline-block;
						}
						#lastOne{
							margin-bottom:10px;
						}
						.selectedCategory{
							font-weight:bold;
						}
						#bar-video{
							width:50%;
						}
						#category{
							justify-content:space-around;
						}
						#readerBox{
							width:50%;
						}
						#anouncebox{
							width:auto;
						}
						#contentBox{
							width:200px;
						}
						#contentBox div img{
							width:200px;
						}
						#titletohide{
							display:inline-block;
						}
						#choosebucket .choosed{
							background:rgb(1, 109, 115);
						}
						#choosebucket div{
							background:#04192f;
						}
						#whitebox{
							width:30%;
						}
						@media screen and (max-width:1032px){
							#content{
								width:100%;
							}
							.responsiveWidth{
								width:100%;
							}
							.akarabutton{
								font-size:14px;
							}
							.footerSetting{
								justify-content:space-around;
								width:100%;
							}
							.footerItems{
								margin:0;
							}
							#profilePage{
								position:absolute;
								top:0;
								left:0;	
							}
							#finder{
								width:100%;
								justify-content:space-around;
							}
							header{
								justify-content:space-around;
							}
							.photocard{
								width:100%;
							}
							.galerycard{
								max-width:95%;
							}
							#bar-video{
								width:100%;
							}
							#category{
								justify-content:space-between;
							}
							#readerBox{
								width:100%;
							}
							#anouncebox{
								width:100%;
							}
							#contentBox{
								width:100%;
							}
							#contentBox div img{
								width:100%;
							}
							#titletohide{
								display:none;
							}
							#whitebox{
								width:100%;
							}
						}
					</style>
					<link rel=icon href=file?fn=big-data.png>
				</head>
				<body></body>
				<script src=https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js></script>
				<script src=https://www.gstatic.com/firebasejs/8.10.1/firebase-storage.js></script>
				<script src=https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js></script>
				<script src=/scripts?fn=init.firebase></script>
				<script src=/scripts?fn=infinity></script>
				<script src=/scripts?fn=components></script>
				<script src=/scripts?fn=flex></script>
			</html>
		`;
	},
	admin(){
		return `
			<!doctype html>
			<html>
				<head>
					<title>AkaraService: Percayakan Pada Kami!</title>
					<meta name=viewport content=width=device-width,initial-scale=1>
					<link rel=icon href=file?fn=ico.png>
				</head>
				<body></body>
				<script>
					const input = prompt('Give me a password?');
					location.href = input;
				</script>
			</html>
		`;
	},
	akaraservicesfrominfinitydreamsstudios(){
		return `
			<!doctype html>
			<html>
				<head>
					<title>AkaraService: Percayakan Pada Kami!</title>
					<meta name=viewport content=width=device-width,initial-scale=1>
					<style>
						@font-face{
							font-family:'goodone';
							src:url('/file?fn=Azonix.otf');
						}
						.akarabutton{
							padding:10px;
							background:#001092;
							font-size:20px;
							cursor:pointer;
							color:white;
						}
						main{
							-webkit-tap-highlight-color:transparent;
							user-select:none;
						}
						content{
							width:60%;
							height:70%;
						}
						#leftSide{
							width:10%;
							background:#ececec;
							display:flex;
							justify-content:flex-start;
							align-items:center;
							padding:10px;
							flex-direction:column;
						}
						#rightSide{
							width:50%;
							background:#ececec;
							padding:20px;
							height:auto;
							overflow:auto
						}
						#centerSide{
							width:40%;
							background:white;
							padding:20px;
							overflow:auto;
							height:auto;
						}
						.bigfont{
							font-size:18px;
						}
						.smallfont{
							font-size:12px;
						}
						.normal-size:{
							font-size:13px;
						}
						.responsiveWidth{
							width:50%;
						}
						.footerSetting{
							justify-content:space-around;
							width:50%;
						}
						.footerItems{
							margin:0 5px;
						}
						#finder{
							width:50%;
						}
						header{
							width:100%;
							justify-content:space-between;
						}
						input{
							outline:none;
							background:white;
							border:none;
							padding:5px;
						}
						.photocard{
							width:50%;
						}
						.galerycard{
							max-width:50%;
						}
						button{
							background:white;
							border:none;
							padding:5px;
							cursor:pointer;
						}
						video{
							outline:none;
						}
						audio{
							outline:none;
						}
						#contentContainer{
							display:inline-block;
						}
						#lastOne{
							margin-bottom:10px;
						}
						.selectedCategory{
							font-weight:bold;
						}
						#bar-video{
							width:50%;
						}
						#category{
							justify-content:space-around;
						}
						#readerBox{
							width:50%;
						}
						#anouncebox{
							width:auto;
						}
						#contentBox{
							width:200px;
						}
						#contentBox div img{
							width:200px;
						}
						#titletohide{
							display:inline-block;
						}
						#choosebucket .choosed{
							background:rgb(1, 109, 115);
						}
						#choosebucket div{
							background:#04192f;
						}
						@media screen and (max-width:1032px){
							content{
								width:100%;
								height:100%;
							}
							content #body{
								flex-direction:column;
							}
							#leftSide{
								width:auto;
								align-items:normal;
								flex-direction:row;
							}
							#centerSide{
								width:auto;
								height:40%;
							}
							#rightSide{
								width:auto;
								height:40%;
							}
							#ghtSide{
								width:auto;
							}
							.responsiveWidth{
								width:100%;
							}
							.footerSetting{
								justify-content:space-around;
								width:100%;
							}
							.footerItems{
								margin:0;
							}
							#profilePage{
								position:absolute;
								top:0;
								left:0;	
							}
							#finder{
								width:100%;
								justify-content:space-around;
							}
							header{
								justify-content:space-around;
							}
							.photocard{
								width:100%;
							}
							.galerycard{
								max-width:95%;
							}
							#bar-video{
								width:100%;
							}
							#category{
								justify-content:space-between;
							}
							#readerBox{
								width:100%;
							}
							#anouncebox{
								width:100%;
							}
							#contentBox{
								width:100%;
							}
							#contentBox div img{
								width:100%;
							}
							#titletohide{
								display:none;
							}
						}
					</style>
					<link rel=icon href=file?fn=ico.png>
				</head>
				<body></body>
				<script src=https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js></script>
				<script src=https://www.gstatic.com/firebasejs/8.10.1/firebase-storage.js></script>
				<script src=https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js></script>
				<script src=/scripts?fn=init.firebase></script>
				<script src=/scripts?fn=infinity></script>
				<script src=/scripts?fn=components.admin></script>
				<script src=/scripts?fn=flex.admin></script>
			</html>
		`;
	}
}