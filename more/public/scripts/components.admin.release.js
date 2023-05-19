const background=makeElement("img",{src:"/file?fn=background-5964794_1920.jpg",style:"\n\t\twidth:100%;\n\t\theight:100%;\n\t\tobject-fit:cover;\n\t\tposition:relative;\n\t"}),content=makeElement("content",{storageref:firebase.storage().ref(),productsref:firebase.database().ref("products"),newProductsRef:t=>firebase.database().ref(`products/${t}`),style:"\n\t\tposition:absolute;\n\t\tdisplay:flex;\n\t\tflex-direction:column;\n\t",innerHTML:'\n\t\t<div>\n\t\t\t<div\n\t\t\tstyle="\n\t\t\t\tbackground:white;\n\t\t\t\tpadding:20px;\n\t\t\t\tdisplay:flex;\n\t\t\t\talign-items:center;\n\t\t\t\tfont-weight:bold;\n\t\t\t"\n\t\t\t>\t\n\t\t\t\t<img src=file?fn=goodicon.png\n\t\t\t\tstyle="\n\t\t\t\t\twidth:32px;\n\t\t\t\t\theight:32px;\n\t\t\t\t\tmargin-right:10px;\n\t\t\t\t\tobject-fit:cover;\n\t\t\t\t">\n\t\t\t\t<span>AKARA ADMIN</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=body\n\t\tstyle="\n\t\t\tdisplay:flex;\n\t\t\theight:100%;\n\t\t\twidth:100%;\n\t\t"\n\t\t></div>\n\t',onadded(){const t=this.find("#body");t.addChild(leftSide),t.addChild(centerSide),t.addChild(rightSide)}}),leftSide=makeElement("div",{id:"leftSide",innerHTML:'\n\t\t<div class=button id=order\n\t\tstyle="\n\t\t\tpadding:10px;\n\t\t\tbackground:white;\n\t\t\tdisplay:flex;\n\t\t\talign-items:center;\n\t\t\tjustify-content:center;\n\t\t\tmargin-bottom:10px;\n\t\t\tflex-direction:column;\n\t\t\twidth:80%;\n\t\t\tcursor:pointer;\n\t\t"\n\t\t>\n\t\t\t<img src=/file?fn=giftbox.png\n\t\t\tstyle="\n\t\t\t\twidth:24px;\n\t\t\t\theight:24px;\n\t\t\t\tmargin-bottom:5px;\n\t\t\t"\n\t\t\t>\n\t\t\t<div>ORDER</div>\n\t\t</div>\n\t\t<div class=button id=pending\n\t\tstyle="\n\t\t\tpadding:10px;\n\t\t\tbackground:white;\n\t\t\tdisplay:flex;\n\t\t\talign-items:center;\n\t\t\tjustify-content:center;\n\t\t\tmargin-bottom:10px;\n\t\t\tflex-direction:column;\n\t\t\twidth:80%;\n\t\t\tcursor:pointer;\n\t\t"\n\t\t>\n\t\t\t<img src=/file?fn=pending.png\n\t\t\tstyle="\n\t\t\t\twidth:24px;\n\t\t\t\theight:24px;\n\t\t\t\tmargin-bottom:5px;\n\t\t\t"\n\t\t\t>\n\t\t\t<div>PENDING</div>\n\t\t</div>\n\t\t<div class=button id=job\n\t\tstyle="\n\t\t\tpadding:10px;\n\t\t\tbackground:white;\n\t\t\tdisplay:flex;\n\t\t\talign-items:center;\n\t\t\tjustify-content:center;\n\t\t\tmargin-bottom:10px;\n\t\t\tflex-direction:column;\n\t\t\twidth:80%;\n\t\t\tcursor:pointer;\n\t\t"\n\t\t>\n\t\t\t<img src=/file?fn=job-offer.png\n\t\t\tstyle="\n\t\t\t\twidth:24px;\n\t\t\t\theight:24px;\n\t\t\t\tmargin-bottom:5px;\n\t\t\t"\n\t\t\t>\n\t\t\t<div>JOB</div>\n\t\t</div>\n\t\t<div class=button id=done\n\t\tstyle="\n\t\t\tpadding:10px;\n\t\t\tbackground:white;\n\t\t\tdisplay:flex;\n\t\t\talign-items:center;\n\t\t\tjustify-content:center;\n\t\t\tmargin-bottom:10px;\n\t\t\tflex-direction:column;\n\t\t\twidth:80%;\n\t\t\tcursor:pointer;\n\t\t"\n\t\t>\n\t\t\t<img src=/file?fn=received.png\n\t\t\tstyle="\n\t\t\t\twidth:24px;\n\t\t\t\theight:24px;\n\t\t\t"\n\t\t\t>\n\t\t\tDONE\n\t\t</div>\n\t',onadded(){const t={order(){loadData(0)},pending(){loadData(1)},job(){loadData(2)},done(){loadData(3)}};this.findall(".button").forEach(n=>{n.onclick=(()=>{rightSide.clear(),t[n.id]()})})}}),centerSide=makeElement("div",{id:"centerSide",onadded(){loadData()}}),rightSide=makeElement("div",{id:"rightSide",innerHTML:'\n\t\t<div id=loading\n\t\tstyle="\n\t\t\theight:100%;\n\t\t\tdisplay:flex;\n\t\t\talign-items:center;\n\t\t\tjustify-content:center;\n\t\t\tflex-direction:column;\n\t\t"\n\t\t>\n\t\t\tBelum Ada Data!\n\t\t</div>\n\t',onadded(){}}),datanull=function(){centerSide.find("#loading").setHTML("\n\t\tBelum Ada Data!\n\t")},processData=function(t,n=0){centerSide.find("#loading").remove(),centerSide.addChild(makeElement("div",{innerHTML:`${["ORDER","PENDING","JOB","DONE"][n]}`,style:"\n\t\t\tmargin-bottom:10px;\n\t\t\tposition:sticky;\n\t\t\ttop:0;\n\t\t\tbackground:white;\n\t\t"}));let e=0;const i=[];Object.keys(t).forEach(n=>{i.push(Object.assign(t[n],{key:n}))}),3===n&&i.sort(function(t,n){const e=t.deadline.split("/"),i=n.deadline.split("/");return new Date(`${e[1]+" "+e[0]}`).getTime()-new Date(`${i[1]+" "+i[0]}`).getTime()}),i.forEach(t=>{t.status===n&&(e++,centerSide.addChild(makeElement("div",{data:t,style:"\n\t\t\t\t\tdisplay:flex;\n\t\t\t\t\tjustify-content:center;\n\t\t\t\t\tpadding:5px;\n\t\t\t\t\tflex-direction:column;\n\t\t\t\t\tbackground:#ececec;\n\t\t\t\t\tcursor:pointer;\n\t\t\t\t\tmargin-bottom:6px;\n\t\t\t\t",innerHTML:`\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\tfont-size:12px;\n\t\t\t\t\t\t"\n\t\t\t\t\t\t>Deadline: ${t.deadline||"NO DATA"}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>Nama: ${t.name}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>Catatan: ${t.notes.slice(0,20)}...</span>\n\t\t\t\t\t</div>\n\t\t\t\t`,onclick(){content.clickedDiv=this,this.processPreview()},processPreview(){rightSide.clear(),rightSide.addChild(makeElement("div",{style:"\n\t\t\t\t\t\t\tbackground:white;\n\t\t\t\t\t\t\tpadding:10px;\n\t\t\t\t\t\t\tfont-size:14px;\n\t\t\t\t\t\t",deadlinefrom:this.data.deadline,innerHTML:`\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<span>Nama</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t\ttext-align:right;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<span>${this.data.name}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<span>Deadline</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t\ttext-align:right;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<span id=deadline>${this.data.deadline||"NO DATA"}</span>\n\t\t\t\t\t\t\t\t\t<span class=akarabutton\n\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\tpadding:5px;\n\t\t\t\t\t\t\t\t\t\tmargin-left:5px;\n\t\t\t\t\t\t\t\t\t\tfont-size:14px;\n\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\tid=changedeadline\n\t\t\t\t\t\t\t\t\t>Ubah</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<span>Nama Barang</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t\ttext-align:right;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<span>${this.data.stuffname}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<span>Kendala</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t\ttext-align:right;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<span>${this.data.typeofbroken}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<span>Catatan</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t\ttext-align:right;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<span>${this.data.notes}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<span>WA</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t\ttext-align:right;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<span>${this.data.whoarei}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<span>Foto Barang (${this.data.fileSrc.length})</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\t\tjustify-content:flex-start;\n\t\t\t\t\t\t\t\t\tscrollbar-width:thin;\n\t\t\t\t\t\t\t\t\toverflow:auto;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\tid=files\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tdisplay:${this.data.location?"flex":"none"};\n\t\t\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<span>Lokasi</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t\ttext-align:right;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<a href=https://www.google.com/maps/place/${this.data.location} target="_blank">\n\t\t\t\t\t\t\t\t\t\t<img src=file?fn=google-maps.png\n\t\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\t\twidth:24px;\n\t\t\t\t\t\t\t\t\t\t\theight:24px;\n\t\t\t\t\t\t\t\t\t\t\tcursor:pointer;\n\t\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<span>Harga Tagihan</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\t\t\ttext-align:right;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<input type=number id=cost placeholder="Example: 30.000"\n\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\tpading:10px;\n\t\t\t\t\t\t\t\t\t\tbackground:#ececec;\n\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\tvalue=${this.data.cost||"-"}\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t\t\t\talign-items:flex-start;\n\t\t\t\t\t\t\t\tflex-direction:column;\n\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<span>Catatan Admin</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:100%;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<textarea type=number id=adminnotes placeholder="Tulis detail pekerjaanmu disini"\n\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\tpading:10px;\n\t\t\t\t\t\t\t\t\t\tbackground:#ececec;\n\t\t\t\t\t\t\t\t\t\tborder:none;\n\t\t\t\t\t\t\t\t\t\twidth:100%;\n\t\t\t\t\t\t\t\t\t\toutline:none;\n\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\t>${this.data.adminnotes||""}</textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t\t\t\talign-items:flex-start;\n\t\t\t\t\t\t\t\tflex-direction:column;\n\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t\t\t\t">\n\t\t\t\t\t\t\t\t\t<span>Barang Diganti</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:100%;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<textarea type=number id=changedStuff placeholder="Tulis detail barang disini"\n\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\tpading:10px;\n\t\t\t\t\t\t\t\t\t\tbackground:#ececec;\n\t\t\t\t\t\t\t\t\t\tborder:none;\n\t\t\t\t\t\t\t\t\t\twidth:100%;\n\t\t\t\t\t\t\t\t\t\toutline:none;\n\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\t>${this.data.changedStuff||""}</textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tmargin-top:20px;\n\t\t\t\t\t\t\t\tpadding:10px;\n\t\t\t\t\t\t\t\tdisplay:${2==n?"flex":"none"};\n\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\ttext-align:center;\n\t\t\t\t\t\t\t\t\tmargin-right:5px;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\tid=savebutton\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<span class=akarabutton\n\t\t\t\t\t\t\t\t\t>Simpan</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\ttext-align:center;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\tid=finishbutton\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<span class=akarabutton\n\t\t\t\t\t\t\t\t\t>Selesai</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tmargin-top:20px;\n\t\t\t\t\t\t\t\tpadding:10px;\n\t\t\t\t\t\t\t\tdisplay:${3===n?"block":"none"};\n\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\ttext-align:center;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\tid=deletebutton\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<span class=akarabutton\n\t\t\t\t\t\t\t\t\t>Hapus</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tmargin-top:20px;\n\t\t\t\t\t\t\t\tpadding:10px;\n\t\t\t\t\t\t\t\tdisplay:${1===n?"block":"none"};\n\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\ttext-align:center;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\tid=cancel\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<span class=akarabutton\n\t\t\t\t\t\t\t\t\t>Batalkan</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tmargin-top:20px;\n\t\t\t\t\t\t\t\tpadding:10px;\n\t\t\t\t\t\t\t\tdisplay:${0===n?"flex":"none"};\n\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\ttext-align:center;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\tid=request\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<span class=akarabutton\n\t\t\t\t\t\t\t\t\t>Ajukan</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\ttext-align:center;\n\t\t\t\t\t\t\t\t\tmargin-left:5px;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\tid=reject\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<span class=akarabutton\n\t\t\t\t\t\t\t\t\t>Tolak</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t`,onadded(){this.find("#deadline").date=this.deadlinefrom}})),this.displayFiles(),rightSide.find("#changedeadline").onclick=(()=>{find("main").addChild(makeElement("div",{style:"\n\t\t\t\t\t\t\t\tposition:absolute;\n\t\t\t\t\t\t\t\ttop:0;\n\t\t\t\t\t\t\t\tleft:0;\n\t\t\t\t\t\t\t\twidth:100%;\n\t\t\t\t\t\t\t\theight:100%;\n\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t\tjustify-content:center;\n\t\t\t\t\t\t\t\tbackground:#00000091;\n\t\t\t\t\t\t\t",innerHTML:'\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\tbackground:white;\n\t\t\t\t\t\t\t\t\tpadding:30px;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<span style="font-weight:bold">Tanggal</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=date id=date>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t\t\t\tstyle="font-weight:bold"\n\t\t\t\t\t\t\t\t\t\t\t>Waktu</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<input type=time id=time>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\tmargin-top:20px;\n\t\t\t\t\t\t\t\t\t\ttext-align:center;\n\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t<span class=akarabutton id=savebutton>Simpan</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t',onadded(){this.find("#savebutton").onclick=(()=>{const t=this.find("#time").value+"/"+this.find("#date").value;rightSide.find("#deadline").update({innerHTML:t,date:t}),this.remove()})}}))}),rightSide.find("#request").onclick=(()=>{content.newProductsRef(this.data.key).update({cost:rightSide.find("#cost").value||0,status:1,deadline:rightSide.find("#deadline").date,adminnotes:rightSide.find("#adminnotes").value||"-",changedStuff:rightSide.find("#changedStuff").value||"-"}).then(()=>{content.clickedDiv.remove(),rightSide.setHTML('\n\t\t\t\t\t\t\t\t<div id=loading\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\theight:100%;\n\t\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t\t\tjustify-content:center;\n\t\t\t\t\t\t\t\t\tflex-direction:column;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tBerhasil Menyimpan Perubahan!\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t'),loadData(n)})}),rightSide.find("#cancel").onclick=(()=>{content.newProductsRef(this.data.key).update({status:4}).then(()=>{content.clickedDiv.remove(),rightSide.setHTML('\n\t\t\t\t\t\t\t\t<div id=loading\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\theight:100%;\n\t\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t\t\tjustify-content:center;\n\t\t\t\t\t\t\t\t\tflex-direction:column;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tBerhasil Menyimpan Perubahan!\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t'),loadData(n)})}),rightSide.find("#reject").onclick=(()=>{content.newProductsRef(this.data.key).remove().then(()=>{content.clickedDiv.remove(),rightSide.setHTML('\n\t\t\t\t\t\t\t\t<div id=loading\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\theight:100%;\n\t\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t\t\tjustify-content:center;\n\t\t\t\t\t\t\t\t\tflex-direction:column;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tBerhasil Menyimpan Perubahan!\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t'),loadData(n)})}),rightSide.find("#finishbutton").onclick=(()=>{const t=rightSide.find("#cost").value||0;content.newProductsRef(this.data.key).update({cost:t,status:3}).then(()=>{content.clickedDiv.remove(),rightSide.setHTML('\n\t\t\t\t\t\t\t\t<div id=loading\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\theight:100%;\n\t\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t\t\tjustify-content:center;\n\t\t\t\t\t\t\t\t\tflex-direction:column;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tBerhasil Menyimpan Perubahan!\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t'),loadData(n)})}),rightSide.find("#savebutton").onclick=(()=>{content.newProductsRef(this.data.key).update({cost:rightSide.find("#cost").value||0,deadline:rightSide.find("#deadline").date,adminnotes:rightSide.find("#adminnotes").value||"-",changedStuff:rightSide.find("#changedStuff").value||"-"}).then(()=>{content.clickedDiv.remove(),rightSide.setHTML('\n\t\t\t\t\t\t\t\t<div id=loading\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\theight:100%;\n\t\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t\t\tjustify-content:center;\n\t\t\t\t\t\t\t\t\tflex-direction:column;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tBerhasil Menyimpan Perubahan!\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t'),loadData(n)})}),rightSide.find("#deletebutton").onclick=(()=>{content.newProductsRef(this.data.key).remove().then(()=>{content.clickedDiv.remove(),rightSide.setHTML('\n\t\t\t\t\t\t\t\t<div id=loading\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\theight:100%;\n\t\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t\t\tjustify-content:center;\n\t\t\t\t\t\t\t\t\tflex-direction:column;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tBerhasil Menyimpan Perubahan!\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t'),loadData(2)})})},displayFiles(){this.data.fileSrc.forEach(t=>{rightSide.find("#files").addChild(makeElement("img",{src:"/file?fn=download.png",style:"\n\t\t\t\t\t\t\t\twidth:24px;\n\t\t\t\t\t\t\t\theight:24px;\n\t\t\t\t\t\t\t\tmargin-right:5px;\n\t\t\t\t\t\t\t\tcursor:pointer;\n\t\t\t\t\t\t\t\tmargin-bottom:5px;\n\t\t\t\t\t\t\t",onclick(){this.src="/file?fn=check-mark.png",window.open(t)}}))})}})))}),0===e&&centerSide.addChild(makeElement("div",{innerHTML:"Tidak Ada Data!",style:"\n\t\t\t\tmargin-bottom:10px;\n\t\t\t\tposition:sticky;\n\t\t\t\ttop:0;\n\t\t\t\tbackground:white;\n\t\t\t"}))},loadData=function(t=0){centerSide.clear(),centerSide.addChild(makeElement("div",{id:"loading",style:"\n\t\t\theight:100%;\n\t\t\tdisplay:flex;\n\t\t\talign-items:center;\n\t\t\tjustify-content:center;\n\t\t\tflex-direction:column;\n\t\t",innerHTML:'\n\t\t\t<div>\n\t\t\t\t<span>Memuat Info!</span>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<img src=/file?fn=loadingscreen.gif\n\t\t\t\tstyle="\n\t\t\t\t\twidth:100px;\n\t\t\t\t\theight:100px;\n\t\t\t\t\tobject-fit:cover;\n\t\t\t\t"\n\t\t\t\t>\n\t\t\t</div>\n\t\t'})),content.productsref.get().then(n=>{(n=n.val())?processData(n,t):centerSide.find("#loading").setHTML("\n\t\tBelum Ada Data!\n\t")})};