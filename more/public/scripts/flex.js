document.body.onload = function(){
	document.body.style.margin = '0';
	const main = makeElement('main',{
		style:`
			display:flex;
			width:100%;
			height:100%;
			background:#04192f;
			position:absolute;
			flex-direction:column;
			font-family:goodone;
			align-items:center;
			justify-content:center;
			font-weiaght:normal;
		`,
		onadded(){
			this.addChild(background);
			this.addChild(topthings);
		}
	})
	document.body.addChild(main);
}
