const background=makeElement("img",{src:"/file?fn=background-5964794_1920.jpg",style:"\n\t\twidth:100%;\n\t\theight:100%;\n\t\tobject-fit:cover;\n\t\tposition:relative;\n\t"}),topthings=makeElement("div",{style:"\n\t\tposition:absolute;\n\t",onadded(){this.addChild(header),this.addChild(content),this.addChild(socialmedia)}}),header=makeElement("header",{style:"\n\t\tmargin-bottom:50px;\n\t",storageref:firebase.storage().ref(),productsref:firebase.database().ref("products"),newProductsRef:t=>firebase.database().ref(`products/${t}`),innerHTML:'\n\t\t<div\n\t\tstyle="\n\t\t\ttext-align:center;\n\t\t\tmargin-bottom:5px;\n\t\t"\n\t\t>\n\t\t\t<img src=/file?fn=goodicon.png\n\t\t\tstyle="\n\t\t\t\twidth:120px;\n\t\t\t\theight:120px;\n\t\t\t\tbackground:#ff89b93d;\n\t\t\t\tpadding:10px;\n\t\t\t\tborder-radius:50%;\n\t\t\t\tobject-fit:cover;\n\t\t\t"\n\t\t\t>\n\t\t</div>\n\t\t<div\n\t\tstyle="\n\t\t\ttext-align:center;\n\t\t\tmargin-bottom:10px;\n\t\t"\n\t\t>\n\t\t\t<span\n\t\t\tstyle="\n\t\t\t\tfont-weight:bold;\n\t\t\t\tcolor:white;\n\t\t\t\tfont-size:40px;\n\t\t\t\tpadding:0 5px;\n\t\t\t"\n\t\t\t>\n\t\t\t\tAKARA\n\t\t\t</span>\n\t\t</div>\n\t\t<div\n\t\tstyle="\n\t\t\ttext-align:center;\n\t\t\tmargin-bottom:5px;\n\t\t"\n\t\t>\n\t\t\t<span\n\t\t\tstyle="\n\t\t\t\tcolor:white;\n\t\t\t\tpadding:0 5px;\n\t\t\t"\n\t\t\t>Selalu melayani dengan sepenuh hati!</span>\n\t\t</div>\n\t'}),socialmedia=makeElement("div",{innerHTML:'\n\t\t<div\n\t\tstyle="\n\t\t\tmargin-top: 80px;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t"\n\t\t>\n\t\t\t<div\n\t\t\tstyle="\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\twidth: 30%;\n\t\t\t\tbackground: #000b5b;\n\t\t\t\tpadding: 5px;\n\t\t\t\tborder-radius: 20px;\n\t\t\t"\n\t\t\tclass=mediasocial\n\t\t\t>\n\t\t\t\t<div>\n\t\t\t\t\t<a href=https://instagram.com/mrmongkeyy target=_blank>\n\t\t\t\t\t\t<img src=/file?fn=igone.png>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<a href=https://api.whatsapp.com/send?phone=+6285366033329&text=AdaJob!" target=_blank>\n\t\t\t\t\t\t<img src=/file?fn=wa.png>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<a href=\'https://www.google.com/maps/place/-3.875086, 102.334505\' target="_blank">\n\t\t\t\t\t\t<img src=/file?fn=google-maps.png>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div\n\t\tstyle="\n\t\t\tdisplay:flex;\n\t\t\tjustify-content:center;a\n\t\t"\n\t\t>\n\t\t\t<div\n\t\t\t\tstyle="\n\t\t\t\t\tdisplay:flex;\n\t\t\t\t\tmargin-top:20px;\n\t\t\t\t\tfont-size:9px;\n\t\t\t\t\talign-items:center;\n\t\t\t\t\tcolor:white;\n\t\t\t\t\twidth:30%;\n\t\t\t\t\tjustify-content:space-around;\n\t\t\t\t"\n\t\t\t\t>\n\t\t\t\t\t<div>\n\t\t\t\t\t\tA product by\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<a href=https://infinitydreams.cyclic.app target=_blank>\n\t\t\t\t\t\t\t<img src=file?fn=infinity.png\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\twidth:24px;\n\t\t\t\t\t\t\t\theight:24px;\n\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t</div>\n\t',onclick(){}}),content=makeElement("content",{style:"\n\t",innerHTML:'\n\t\t<div\n\t\tstyle="\n\t\t\tdisplay:flex;\n\t\t\tjustify-content:space-around;\n\t\t\tcolor:white;\n\t\t"\n\t\t>\n\t\t\t<div id=new\n\t\t\tstyle="\n\t\t\t\tmargin-right:25px;\n\t\t\t"\n\t\t\t>\n\t\t\t\t<span class=akarabutton>\n\t\t\t\t\tBuat Pesanan\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div id=check\n\t\t\tstyle="\n\t\t\t\tmargin-left:25px;\n\t\t\t"\n\t\t\t>\n\t\t\t\t<span class=akarabutton>\n\t\t\t\t\tCek Pesanan\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\t\n\t',buttonEventSetup(){const t={content:this,new(){find("main").addChild(makeElement("div",{style:"\n\t\t\t\t\t\tposition:absolute;\n\t\t\t\t\t\ttop:0;\n\t\t\t\t\t\tleft:0;\n\t\t\t\t\t\twidth:100%;\n\t\t\t\t\t\theight:100%;\n\t\t\t\t\t\tbackground:#0000004f;\n\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\tjustify-content:center;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t",innerHTML:'\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tid=whitebox\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\tbackground:white;\n\t\t\t\t\t\t\tpadding:30px;\n\t\t\t\t\t\t\tborder-radius:10px;\n\t\t\t\t\t\t"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\theight:10%;\n\t\t\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<span>Buat Pesanan</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\theight:80%;\n\t\t\t\t\t\t\t\toverflow:auto;\n\t\t\t\t\t\t\t\tscrollbar-width:thin;\n\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\tmargin-bottom:5px;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<span>Nama</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input placeholder=Gema...\n\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\tbackground:#d7d3d370;\n\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\tid=name\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\tmargin-bottom:5px;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<span>WA</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input placeholder="No Whatsapp anda..." type=number\n\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\tbackground:#d7d3d370;\n\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\tid=whoarei\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\tmargin-bottom:5px;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<span>Nama Barang</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input placeholder="Tuliskan Nama Barang"\n\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\tbackground:#d7d3d370;\n\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\tid=stuffname\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\tmargin-bottom:5px;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<span>Kendala</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input placeholder="Paparkan Jenis Kerusakan"\n\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\tbackground:#d7d3d370;\n\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\tid=typeofbroken\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\tmargin-bottom:5px;\n\t\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\t\tflex-direction:column;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<span>Catatan</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<textarea placeholder="Pesan Dari Anda..."\n\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\tbackground:#d7d3d370;\n\t\t\t\t\t\t\t\t\t\tborder:none;\n\t\t\t\t\t\t\t\t\t\twidth:95%;\n\t\t\t\t\t\t\t\t\t\toutline:none;\n\t\t\t\t\t\t\t\t\t\tmax-width:92%;\n\t\t\t\t\t\t\t\t\t\tpadding:10px;\n\t\t\t\t\t\t\t\t\t\tmax-height:200px;\n\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\tid=notes\n\t\t\t\t\t\t\t\t\t></textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\tmargin-bottom:5px;\n\t\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\t\tflex-direction:column;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<span>Foto Barang (WAJIB)</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input type=file multiple\n\t\t\t\t\t\t\t\t\tid=files>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\tmargin-bottom:20px;\n\t\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<span>Lokasi Anda (opsional)</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<img src=file?fn=google-maps.png\n\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\twidth:24px;\n\t\t\t\t\t\t\t\t\t\theight:24px;\n\t\t\t\t\t\t\t\t\t\tmargin-left:10px;\n\t\t\t\t\t\t\t\t\t\tpadding:5px;\n\t\t\t\t\t\t\t\t\t\tborder-radius:50%;\n\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\tid=getlocation\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t\tjustify-content:flex-end;\n\t\t\t\t\t\t\t\theight:10%;\n\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\tid=buttons\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tid=save\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\tmargin-right:20px;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<span class=akarabutton>Pesan</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tid=cancel\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<span class=akarabutton>Batal</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t',onadded(){this.eventSetup()},eventSetup(){const t={el:this,cancel(){this.el.remove()},getlocation(t){navigator.geolocation?navigator.geolocation.getCurrentPosition(n=>{this.el.location=`${n.coords.latitude},${n.coords.longitude}`,t.src="/file?fn=check-mark.png"}):alert("Perangkat tidat support!")},save(){const t=this.el.find("#files").files,n={name:this.el.find("#name").value,whoarei:this.el.find("#whoarei").value,notes:this.el.find("#notes").value,status:0,typeofbroken:this.el.find("#typeofbroken").value,stuffname:this.el.find("#stuffname").value,location:this.el.location||null};uploadFiles(t,t=>{n.fileSrc=t;const i=`products-${getUniqueID(5)}`;header.newProductsRef(i).set(n).then(()=>{this.el.remove(),e.remove(),newProductSPops(i)})});const e=makeElement("div",{style:"\n\t\t\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\t\t\tposition:absolute;\n\t\t\t\t\t\t\t\t\t\ttop:0;\n\t\t\t\t\t\t\t\t\t\tleft:0;\n\t\t\t\t\t\t\t\t\t\twidth:100%;\n\t\t\t\t\t\t\t\t\t\theight:100%;\n\t\t\t\t\t\t\t\t\t\tbackground:#0000004f;\n\t\t\t\t\t\t\t\t\t\tjustify-content:center;\n\t\t\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t\t\t",innerHTML:'\n\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\t\tbackground:white;\n\t\t\t\t\t\t\t\t\t\t\tpadding:20px;\n\t\t\t\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\t\t\t\tflex-direction:column;\n\t\t\t\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t\t\t\t\tjustify-content:center;\n\t\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Memproses Pesanan Anda!</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=/file?fn=loadingscreen.gif\n\t\t\t\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\t\t\t\twidth:100px;\n\t\t\t\t\t\t\t\t\t\t\t\t\theight:100px;\n\t\t\t\t\t\t\t\t\t\t\t\t\tobject-fit:cover;\n\t\t\t\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t'});find("main").addChild(e)}};this.find("#getlocation").onclick=function(){t.getlocation(this)},this.findall("#buttons span").forEach(n=>{n.onclick=(()=>{t[n.parentNode.id]()})})}}))},check(){find("main").addChild(makeElement("div",{style:"\n\t\t\t\t\t\tposition:absolute;\n\t\t\t\t\t\ttop:0;\n\t\t\t\t\t\tleft:0;\n\t\t\t\t\t\twidth:100%;\n\t\t\t\t\t\theight:100%;\n\t\t\t\t\t\tbackground:#0000004f;\n\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\tjustify-content:center;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t",innerHTML:'\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tid=whitebox\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\tbackground:white;\n\t\t\t\t\t\t\tpadding:30px;\n\t\t\t\t\t\t\tmax-height:60%;\n\t\t\t\t\t\t"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tmargin-bottom:20px;\n\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\tfont-weight:bold;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>Masukan ID Pesanan Anda!</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t\tmargin-bottom:30px;\n\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:80%;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<input placeholder="Id Pesanan"\n\t\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\t\tbackground:#d7d3d370;\n\t\t\t\t\t\t\t\t\t\tpadding-top:10px;\n\t\t\t\t\t\t\t\t\t\tpadding-bottom:10px;\n\t\t\t\t\t\t\t\t\t\twidth:98%;\n\t\t\t\t\t\t\t\t\t\tborder-radius:15px;\n\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\twidth:15%;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\tclass=button id=load\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<span class=akarabutton>Load</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\t\t\tjustify-content:flex-start;\n\t\t\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<div class=button id=process\n\t\t\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\t\t\tmargin-right:10px;\n\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<span class=akarabutton>Cek</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=button id=cancel>\n\t\t\t\t\t\t\t\t\t<span class=akarabutton>Tutup</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=info\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t',onadded(){this.eventSetup()},eventSetup(){const t={el:this,load(){const t=localStorage.getItem("newestID");t&&(this.el.find("input").value=t)},process(){const t=""===this.el.find("input").value?"nope":this.el.find("input").value;getInfo(this.el,t)},cancel(){this.el.remove()}};this.findall(".button span").forEach(n=>{n.onclick=(()=>{t[n.parentNode.id]()})})}}))}};this.findall("div span").forEach(n=>{n.onclick=(()=>{t[n.parentNode.id]()})})},onadded(){this.buttonEventSetup()}}),getInfo=function(t,n){const e=header.newProductsRef(n);e.get().then(a=>{a=a.val(),setTimeout(()=>{i.remove(),t.find("#info").clear(),a?t.find("#info").addChild(makeElement("div",{style:"\n\t\t\t\t\tmargin-top:20px;\n\t\t\t\t\tfont-weight:normal;\n\t\t\t\t\tpadding:5px;\n\t\t\t\t\tbackground:#efefef;\n\t\t\t\t\tfont-family:calibri;\n\t\t\t\t",innerHTML:`\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t"\n\t\t\t\t\t>Data untuk ${n}.</div>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t"\n\t\t\t\t\t>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<span>Nama</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>${a.name}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>WA</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>${a.whoarei}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>Nama Barang</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>${a.stuffname}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>Kendala</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>${a.typeofbroken}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>DeadLine</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>${a.deadline||"No Data"}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>Catatan</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>${a.notes}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>Status</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span id=statustochange>${["ORDER","PENDING","ONGOING","DONE","REJECTED","CANCELED"][a.status]}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tdisplay:${a.cost?"flex":"none"};\n\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>Harga Tagihan</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>RP. ${a.cost}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tdisplay:${a.adminnotes?"flex":"none"};\n\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>Catatan Admin</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>${a.adminnotes}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tdisplay:${a.changedStuff?"flex":"none"};\n\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>Barang Diganti</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>${a.changedStuff}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\tid=useraction\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tdisplay:${1===a.status?"flex":"none"};\n\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\tmargin:10px 0;\n\t\t\t\t\t">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span>Tindakan</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:50%;\n\t\t\t\t\t\t\ttext-align:center;\n\t\t\t\t\t\t">\n\t\t\t\t\t\t\t<span class=akarabutton id=continuebutton>Lanjutkan</span>\n\t\t\t\t\t\t\t<span class=akarabutton id=cancelbutton>Batal</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t`,onadded(){const t=this.find("#useraction"),n=this.find("#statustochange");this.find("#continuebutton").onclick=(()=>{e.update({status:2}).then(()=>{t.remove(),n.innerHTML="APPROVED"})}),this.find("#cancelbutton").onclick=(()=>{e.update({status:5}).then(()=>{t.remove(),n.innerHTML="Canceled"})})}})):t.find("#info").setHTML('\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tmargin-top:30px;\n\t\t\t\t\t\tfont-family:calibri;\n\t\t\t\t\t"\n\t\t\t\t\t>\n\t\t\t\t\t\t<span\n\t\t\t\t\t\tstyle="color:red"\n\t\t\t\t\t\t>ID TIDAK VALID ATAU OWNER MENOLAK PESANAN ANDA!</span>\n\t\t\t\t\t</div>\n\t\t\t\t')},500)});const i=makeElement("div",{style:"\n\t\t\tdisplay:flex;\n\t\t\tposition:absolute;\n\t\t\ttop:0;\n\t\t\tleft:0;\n\t\t\twidth:100%;\n\t\t\theight:100%;\n\t\t\tbackground:#0000004f;\n\t\t\tjustify-content:center;\n\t\t\talign-items:center;\n\t\t",innerHTML:'\n\t\t\t<div\n\t\t\tstyle="\n\t\t\t\tbackground:white;\n\t\t\t\tpadding:20px;\n\t\t\t\tdisplay:flex;\n\t\t\t\tflex-direction:column;\n\t\t\t\talign-items:center;\n\t\t\t\tjustify-content:center;\n\t\t\t"\n\t\t\t>\n\t\t\t\t<div>\n\t\t\t\t\t<span>Memuat Info!</span>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<img src=/file?fn=loadingscreen.gif\n\t\t\t\t\tstyle="\n\t\t\t\t\t\twidth:100px;\n\t\t\t\t\t\theight:100px;\n\t\t\t\t\t\tobject-fit:cover;\n\t\t\t\t\t"\n\t\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'});find("main").addChild(i)},newProductSPops=function(t){find("main").addChild(makeElement("div",{style:"\n\t\t\tposition:absolute;\n\t\t\ttop:0;\n\t\t\tleft:0;\n\t\t\twidth:100%;\n\t\t\theight:100%;\n\t\t\tbackground:#0000004f;\n\t\t\tdisplay:flex;\n\t\t\talign-items:center;\n\t\t\tjustify-content:center;\n\t\t",innerHTML:`\n\t\t\t<div\n\t\t\tstyle="\n\t\t\t\tbackground:white;\n\t\t\t\tpadding:20px;\n\t\t\t"\n\t\t\t>\n\t\t\t\t<div>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tmargin-bottom:10px;\n\t\t\t\t\t\tfont-size:20px;\n\t\t\t\t\t\tfont-weight:bold;\n\t\t\t\t\t"\n\t\t\t\t\t>\n\t\t\t\t\t\t<span>Pesanan Berhasil DiBuat!</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>ID Pesananmu!</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t\talign-items:center;\n\t\t\t\t\t\tjustify-content:space-between;\n\t\t\t\t\t\tbackground:#f3f3f3;\n\t\t\t\t\t\tpadding:5px;\n\t\t\t\t\t"\n\t\t\t\t\t>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\tfont-weight:bold;\n\t\t\t\t\t\t\ttext-decoration:underline;\n\t\t\t\t\t\t"\n\t\t\t\t\t\tvalue=${t}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<img src=/file?fn=copy.png\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\twidth:16px;\n\t\t\t\t\t\t\theight:16px;\n\t\t\t\t\t\t\tcursor:pointer;\n\t\t\t\t\t\t"\n\t\t\t\t\t\t>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div id=notifyclip>\n\t\t\t\t\t<span\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tfont-size:12px;\n\t\t\t\t\t\tcolor:red;\n\t\t\t\t\t"\n\t\t\t\t\t></span>\n\t\t\t\t</div>\n\t\t\t\t<div\n\t\t\t\tstyle="\n\t\t\t\t\tmargin-top:30px;\n\t\t\t\t\ttext-align:center;\n\t\t\t\t"\n\t\t\t\t>\n\t\t\t\t\t<span id=closeButton class=akarabutton\n\t\t\t\t\t>Tutup</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`,onadded(){localStorage.setItem("newestID",t),this.find("img").onclick=(()=>{navigator.clipboard.writeText(t).then(()=>{this.find("#notifyclip span").innerText="ID Disalin!",setTimeout(()=>{this.remove()},1e3)})}),this.find("#closeButton").onclick=(()=>{this.remove()})}}))},uploadFiles=function(t,n){let e=0;const i=[],a=function(){const d={file:t[e],name:t[e].name,contentType:t[e].type};header.storageref.child(d.name).put(d.file,d.contentType).then(async d=>{i.push(await d.ref.getDownloadURL()),e++,t.length>e?a():n(i)})};a()};