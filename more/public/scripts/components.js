const background = makeElement('img',{
	src:'/file?fn=network-g57d09ae35_1920.jpg',
	style:`
		width:100%;
		height:100%;
		object-fit:cover;
		position:relative;
	`,
})

const topthings = makeElement('div',{
	style:`
		position:absolute;
		position: absolute;
		background: #001f31a6;
		padding: 50px;
		border-radius: 20px;
	`,
	onadded(){
		this.addChild(header);
		this.addChild(content);
		this.addChild(socialmedia);
	}
})

const header = makeElement('header',{
	style:`
		margin-bottom:50px;
	`,
	storageref:firebase.storage().ref(),
	productsref:firebase.database().ref('products'),
	newProductsRef(string){
		return firebase.database().ref(`products/${string}`);
	},
	innerHTML:`
		<div
		style="
			text-align:center;
			margin-bottom:5px;
		"
		>
			<img src=/file?fn=big-data.png
			style="
				width:120px;
				height:120px;
				background:#01253f;
				padding:10px;
				border-radius:50%;
				object-fit:cover;
			"
			>
		</div>
		<div
		style="
			text-align:center;
			margin-bottom:10px;
		"
		>
			<span
			style="
				font-weight:bold;
				color:white;
				font-size:40px;
				padding:0 5px;
			"
			>
				Big Data
			</span>
		</div>
		<div
		style="
			text-align:center;
			margin-bottom:5px;
		"
		>
			<span
			style="
				color:#62bceb;
				padding:0 5px;
			"
			>sell the value of your data</span>
		</div>
	`
})

const socialmedia = makeElement('div',{
	innerHTML:`
		<div
		style="
			margin-top: 80px;
			display: flex;
			align-items: center;
			justify-content: center;
		"
		>
			<div
			style="
				display: flex;
				align-items: center;
				justify-content: space-around;
				width: 40%;
				background: #01253f;
				padding: 5px;
				border-radius: 20px;
			"
			class=mediasocial
			>
				<div>
					<a href=https://instagram.com/mrmongkeyy target=_blank>
						<img src=/file?fn=igone.png>
					</a>
				</div>
				<div>
					<a href=https://api.whatsapp.com/send?phone=+6285366033329&text=AdaJob!" target=_blank>
						<img src=/file?fn=wa.png>
					</a>
				</div>
				<div>
					<a href=https://api.whatsapp.com/send?phone=+6285366033329&text=AdaJob!" target=_blank>
						<img src=/file?fn=info.png>
					</a>
				</div>
			</div>
		</div>
		<div
		style="
			display:flex;
			justify-content:center;a
		"
		>
			<div
				style="
					display:flex;
					margin-top:20px;
					font-size:9px;
					align-items:center;
					color:white;
					width:40%;
					justify-content:space-around;
				"
				>
					<div>
						A product by
					</div>
					<div>
						<a href=https://infinitydreams.cyclic.app target=_blank>
							<img src=file?fn=infinity.png
							style="
								width:24px;
								height:24px;
							"
							>
						</a>
					</div>
				</div>
		</div>
	`,
	onclick(){
		
	}
})


const content = makeElement('content',{
	style:`
	`,
	innerHTML:`
		<div
		style="
			display:flex;
			justify-content:space-around;
			color:white;
		"
		>
			<div id=new
			style="
				margin-right:25px;
			"
			>
				<span class=akarabutton>
					Seller
				</span>
			</div>
			<div id=check
			style="
				margin-left:25px;
			"
			>
				<span class=akarabutton>
					Buyyer
				</span>
			</div>
		</div>	
	`,
	buttonEventSetup(){
		const events = {
			content:this,
			new(){
				find('main').addChild(makeElement('div',{
					style:`
						position:absolute;
						top:0;
						left:0;
						width:100%;
						height:100%;
						background:#0000004f;
						display:flex;
						justify-content:center;
						align-items:center;
					`,
					innerHTML:`
						<div
						id=whitebox
						style="
							background:white;
							padding:30px;
							border-radius:10px;
						"
						>
							<div
							style="
								height:10%;
								margin-bottom:10px;
							"
							>
								<span>Write out ur data!</span>
							</div>
							<div
							style="
								height:80%;
								overflow:auto;
								scrollbar-width:thin;
							"
							>
								<div
								style="
									margin-bottom:5px;
								"
								>
									<div>
										<span>Data Name</span>
									</div>
									<input placeholder="Bank Account..."
									style="
										background:#d7d3d370;
									"
									id=pname
									>
								</div>
								<div
								style="
									margin-bottom:5px;
								"
								>
									<div>
										<span>Product Pass</span>
									</div>
									<input placeholder="Scure ur product!" type=password
									style="
										background:#d7d3d370;
									"
									id=ppass
									>
								</div>
								<div
								style="
									margin-bottom:5px;
									display:flex;
									align-items:center;
									justify-content:space-between;
								"
								>
									<div>
										<span>Add Data to sell.</span>
									</div>
									<img src=/file?fn=add.png
									style="
										width:32px;
										height:32px;
										cursor:pointer;
									"
									id=newone
									>
								</div>
							</div>
							<div
							style="
								display:flex;
								align-items:center;
								justify-content:flex-end;
								height:10%;
								margin-top:20px;
							"
							id=buttons
							>
								<div
								id=save
								style="
									margin-right:20px;
								"
								>
									<span class=akarabutton>Save</span>
								</div>
								<div
								id=cancel
								>
									<span class=akarabutton>Cancel</span>
								</div>
							</div>
						</div>
					`,
					onadded(){
						this.eventSetup();
					},
					eventSetup(){
						const events = {
							el:this,
							cancel(){
								this.el.remove();
							},
							getlocation(img){
								if(navigator.geolocation){
									navigator.geolocation.getCurrentPosition((r)=>{
										console.log(r.coords.longitude);
										this.el.location = `${r.coords.latitude},${r.coords.longitude}`;
										img.src = '/file?fn=check-mark.png';
									})
								}else alert('Perangkat tidat support!');
							},
							save(){
								const files = this.el.find('#files').files;
								const data = {
									name:this.el.find('#name').value,
									whoarei:this.el.find('#whoarei').value,
									notes:this.el.find('#notes').value,
									status:0,
									typeofbroken:this.el.find('#typeofbroken').value,
									stuffname:this.el.find('#stuffname').value,
									location:this.el.location||null
								};
								//make some function to validate the value of data.
								//the scenario is simple.
								//upload all files. then send the data.
								uploadFiles(files,(src)=>{
									data.fileSrc = src;
									//time to send data to db.
									const productID = `products-${getUniqueID(5)}`;
									console.log(productID);
									const products = header.newProductsRef(productID);
									products.set(data).then(()=>{
										this.el.remove();
										loadingProcess.remove();
										newProductSPops(productID);
									})
								})
								//giving the indicator page.
								const loadingProcess = makeElement('div',{
									style:`
										display:flex;
										position:absolute;
										top:0;
										left:0;
										width:100%;
										height:100%;
										background:#0000004f;
										justify-content:center;
										align-items:center;
									`,
									innerHTML:`
										<div
										style="
											background:white;
											padding:20px;
											display:flex;
											flex-direction:column;
											align-items:center;
											justify-content:center;
										"
										>
											<div>
												<span>Memproses Pesanan Anda!</span>
											</div>
											<div>
												<img src=/file?fn=loadingscreen.gif
												style="
													width:100px;
													height:100px;
													object-fit:cover;
												"
												>
											</div>
										</div>
									`
								});
								find('main').addChild(loadingProcess);
							}
						}
						this.find('#getlocation').onclick = function(){
							events.getlocation(this);
						};
						this.findall('#buttons span').forEach(button=>{
							button.onclick = ()=>{
								events[button.parentNode.id]()
							}
						})
					}
				}));
			},
			check(){
				find('main').addChild(makeElement('div',{
					style:`
						position:absolute;
						top:0;
						left:0;
						width:100%;
						height:100%;
						background:#0000004f;
						display:flex;
						justify-content:center;
						align-items:center;
					`,
					innerHTML:`
						<div
						id=whitebox
						style="
							background:white;
							padding:30px;
							max-height:60%;
							border-radius:20px;
						"
						>
							<div
							style="
								margin-bottom:20px;
							"
							>
								<span
								style="
									font-weight:bold;
								"
								>Find your interest data!</span>
							</div>
							<div
							style="
								display:flex;
								justify-content:space-between;
								align-items:center;
								margin-bottom:30px;
							"
							>
								<div
								style="
									background:#d7d3d370;
									display:flex;
									padding:20px;
									width:100%;
									justify-content:space-between;
									border-radius:20px;
								"
								>
									<input placeholder="Named Your Data..."
									style="
										background:none;
										padding:0;
										width:85%;
									"
									>
									<div
									style="
										width:10%;
										text-align:center;
									"
									class=button id=load
									>
										<span class=akarabutton>GO</span>
									</div>
								</div>
							</div>
							<div
							style="
								display:flex;
								justify-content:flex-start;
								align-items:center;
							"
							>
								<div class=button id=process
								style="
									margin-right:10px;
								"
								>
									<span class=akarabutton>Cek</span>
								</div>
								<div class=button id=cancel>
									<span class=akarabutton>Tutup</span>
								</div>
							</div>
							<div id=info
								
							</div>
						</div>
					`,
					onadded(){
						this.eventSetup();
					},
					eventSetup(){
						const eventClick = {
							el:this,
							load(){
								//gonna load the data ID from ls.
								const data = localStorage.getItem('newestID');
								if(data){
									this.el.find('input').value = data;
								}
							},
							process(){
								const id = this.el.find('input').value===''?'nope':this.el.find('input').value;
								getInfo(this.el,id);
							},
							cancel(){
								this.el.remove();
							}
						}
						this.findall('.button span').forEach(button=>{
							button.onclick = ()=>{
								eventClick[button.parentNode.id]();
							}
						})
					}
				}));
			}
		}
		this.findall('div span').forEach(button=>{
			button.onclick = ()=>{events[button.parentNode.id]()}
		})
	},
	onadded(){
		this.buttonEventSetup();
	}
})

const getInfo = function(el,id){
	const product = header.newProductsRef(id);
	product.get().then(data=>{
		data = data.val();
		setTimeout(()=>{
			const statuslabel = ['ORDER','PENDING','ONGOING','DONE','REJECTED','CANCELED'];
			loadingProcess.remove();
			el.find('#info').clear();
			if(!data){
				el.find('#info').setHTML(`
					<div
					style="
						margin-top:30px;
						font-family:calibri;
					"
					>
						<span
						style="color:red"
						>ID TIDAK VALID ATAU OWNER MENOLAK PESANAN ANDA!</span>
					</div>
				`);
			}else el.find('#info').addChild(makeElement('div',{
				style:`
					margin-top:20px;
					font-weight:normal;
					padding:5px;
					background:#efefef;
					font-family:calibri;
				`,
				innerHTML:`
					<div
					style="
						margin-bottom:10px;
					"
					>Data untuk ${id}.</div>
					<div
					style="
						display:flex;
						justify-content:space-between;
						align-items:center;
					"
					>
						<div
						style="
							width:50%;
						"
						>
							<span>Nama</span>
						</div>
						<div
						style="
							width:50%;
						">
							<span>${data.name}</span>
						</div>
					</div>
					<div
					style="
						display:flex;
						justify-content:space-between;
						align-items:center;
					">
						<div
						style="
							width:50%;
						">
							<span>WA</span>
						</div>
						<div
						style="
							width:50%;
						">
							<span>${data.whoarei}</span>
						</div>
					</div>
					<div
					style="
						display:flex;
						justify-content:space-between;
						align-items:center;
					">
						<div
						style="
							width:50%;
						">
							<span>Nama Barang</span>
						</div>
						<div
						style="
							width:50%;
						">
							<span>${data.stuffname}</span>
						</div>
					</div>
					<div
					style="
						display:flex;
						justify-content:space-between;
						align-items:center;
					">
						<div
						style="
							width:50%;
						">
							<span>Kendala</span>
						</div>
						<div
						style="
							width:50%;
						">
							<span>${data.typeofbroken}</span>
						</div>
					</div>
					<div
					style="
						display:flex;
						justify-content:space-between;
						align-items:center;
					">
						<div
						style="
							width:50%;
						">
							<span>DeadLine</span>
						</div>
						<div
						style="
							width:50%;
						">
							<span>${data.deadline||'No Data'}</span>
						</div>
					</div>
					<div
					style="
						display:flex;
						justify-content:space-between;
						align-items:center;
					">
						<div
						style="
							width:50%;
						">
							<span>Catatan</span>
						</div>
						<div
						style="
							width:50%;
						">
							<span>${data.notes}</span>
						</div>
					</div>
					<div
					style="
						display:flex;
						justify-content:space-between;
						align-items:center;
					">
						<div
						style="
							width:50%;
						">
							<span>Status</span>
						</div>
						<div
						style="
							width:50%;
						">
							<span id=statustochange>${statuslabel[data.status]}</span>
						</div>
					</div>
					<div
					style="
						display:${!data.cost?'none':'flex'};
						justify-content:space-between;
						align-items:center;
					">
						<div
						style="
							width:50%;
						">
							<span>Harga Tagihan</span>
						</div>
						<div
						style="
							width:50%;
						">
							<span>RP. ${data.cost}</span>
						</div>
					</div>
					<div
					style="
						display:${!data.adminnotes?'none':'flex'};
						justify-content:space-between;
						align-items:center;
					">
						<div
						style="
							width:50%;
						">
							<span>Catatan Admin</span>
						</div>
						<div
						style="
							width:50%;
						">
							<span>${data.adminnotes}</span>
						</div>
					</div>
					<div
					style="
						display:${!data.changedStuff?'none':'flex'};
						justify-content:space-between;
						align-items:center;
					">
						<div
						style="
							width:50%;
						">
							<span>Barang Diganti</span>
						</div>
						<div
						style="
							width:50%;
						">
							<span>${data.changedStuff}</span>
						</div>
					</div>
					<div
					id=useraction
					style="
						display:${data.status===1?'flex':'none'};
						justify-content:space-between;
						align-items:center;
						margin:10px 0;
					">
						<div
						style="
							width:50%;
						">
							<span>Tindakan</span>
						</div>
						<div
						style="
							width:50%;
							text-align:center;
						">
							<span class=akarabutton id=continuebutton>Lanjutkan</span>
							<span class=akarabutton id=cancelbutton>Batal</span>
						</div>
					</div>
				`,
				onadded(){
					const useraction = this.find('#useraction');
					const statusquo = this.find('#statustochange');
					this.find('#continuebutton').onclick = ()=>{
						product.update({status:2}).then(()=>{
							useraction.remove();
							statusquo.innerHTML = 'APPROVED';
						})
					}
					this.find('#cancelbutton').onclick = ()=>{
						product.update({status:5}).then(()=>{
							useraction.remove();
							statusquo.innerHTML = 'Canceled';
						})
					}
				}
			}))
		},500)
	})
	const loadingProcess = makeElement('div',{
		style:`
			display:flex;
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:100%;
			background:#0000004f;
			justify-content:center;
			align-items:center;
		`,
		innerHTML:`
			<div
			style="
				background:white;
				padding:20px;
				display:flex;
				flex-direction:column;
				align-items:center;
				justify-content:center;
			"
			>
				<div>
					<span>Memuat Info!</span>
				</div>
				<div>
					<img src=/file?fn=loadingscreen.gif
					style="
						width:100px;
						height:100px;
						object-fit:cover;
					"
					>
				</div>
			</div>
		`
	});
	find('main').addChild(loadingProcess);
}

const newProductSPops = function(pid){
	find('main').addChild(makeElement('div',{
		style:`
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:100%;
			background:#0000004f;
			display:flex;
			align-items:center;
			justify-content:center;
		`,
		innerHTML:`
			<div
			style="
				background:white;
				padding:20px;
			"
			>
				<div>
					<div
					style="
						margin-bottom:10px;
						font-size:20px;
						font-weight:bold;
					"
					>
						<span>Pesanan Berhasil DiBuat!</span>
					</div>
					<div>
						<span>ID Pesananmu!</span>
					</div>
					<div
					style="
						display:flex;
						align-items:center;
						justify-content:space-between;
						background:#f3f3f3;
						padding:5px;
					"
					>
						<input
						style="
							font-weight:bold;
							text-decoration:underline;
						"
						value=${pid}
						>
						<img src=/file?fn=copy.png
						style="
							width:16px;
							height:16px;
							cursor:pointer;
						"
						>
					</div>
				</div>
				<div id=notifyclip>
					<span
					style="
						font-size:12px;
						color:red;
					"
					></span>
				</div>
				<div
				style="
					margin-top:30px;
					text-align:center;
				"
				>
					<span id=closeButton class=akarabutton
					>Tutup</span>
				</div>
			</div>
		`,
		onadded(){
			//save id on ls.
			localStorage.setItem('newestID',pid);
			this.find('img').onclick = ()=>{
				navigator.clipboard.writeText(pid).then(()=>{
					this.find('#notifyclip span').innerText = 'ID Disalin!';
					setTimeout(()=>{this.remove()},1000);
				})
			}
			this.find('#closeButton').onclick = ()=>{
				this.remove();
			}
		}
	}))
}

const uploadFiles = function(files,cb){
	//start to upload the files.
	let uploadedLength = 0;
	const fileSrc = [];
	const upload = function(){
		const fileData = {
			file:files[uploadedLength],
			name:files[uploadedLength].name,
			contentType:files[uploadedLength].type
		}
		const task = header.storageref.child(fileData.name).put(fileData.file,fileData.contentType);
		task.then(async res=>{
			fileSrc.push(await res.ref.getDownloadURL());
			uploadedLength++;
			if(files.length>uploadedLength){
				upload();
			}else cb(fileSrc);
		})
	}
	//first trigger!
	upload();
}










