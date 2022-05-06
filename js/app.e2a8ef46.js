(function(){"use strict";var t={17:function(t,e,o){var n=o(963),i=o(252);const s={id:"app"},r={class:"wrapper wrapper_main"};function a(t,e,o,a,l,c){const d=(0,i.up)("nav-bar"),u=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(d),(0,i._)("div",r,[(0,i.Wm)(u,null,{default:(0,i.w5)((t=>{let{Component:e}=t;return[(0,i.Wm)(n.uT,{name:"scale",mode:"out-in"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)((0,i.LL)(e)))])),_:2},1024)]})),_:1})])])}var l=o(674),c=o.p+"img/gallery.8156117d.svg",d=o.p+"img/trash.d7870a48.svg",u=o.p+"img/edit.0c0f997d.svg",_=o.p+"img/check_list.e8d5bf09.svg",p=o.p+"img/letter.39d49ddf.svg",h=o.p+"img/bold.8cd1eb68.svg",m=o.p+"img/italic.1391b045.svg",g=o.p+"img/underline.497b58f8.svg",v=o.p+"img/strokeline.854495ce.svg",b=o.p+"img/table.21becd7b.svg";const w=t=>((0,i.dD)("data-v-43fd601a"),t=t(),(0,i.Cn)(),t),f={class:"nav"},N={class:"nav__body wrapper"},y={class:"nav__left-block nav__block left-block"},k={class:"nav__icon-group"},C=w((()=>(0,i._)("img",{src:l,alt:"",class:"nav__btn"},null,-1))),D=w((()=>(0,i._)("img",{src:c,alt:"",class:"nav__btn"},null,-1))),S={class:"nav__right-block nav__block"},T={class:"nav__icon-group nav__hide_1100"},O={class:"tooltip"},I={class:"tooltip__header"},Z={class:"tooltip__body"},x=w((()=>(0,i._)("ol",null,[(0,i._)("li",null,"Нумерованый список")],-1))),j=[x],E=w((()=>(0,i._)("ul",null,[(0,i._)("li",null,"Маркированый список")],-1))),L=[E],W={class:"tooltip"},M={class:"tooltip-table__header"},B={class:"tooltip-table__input"},H=w((()=>(0,i._)("label",null,"Количесво столбцов: ",-1))),P={class:"tooltip-table__input"},U=w((()=>(0,i._)("label",null,"Количесво строк: ",-1))),q=w((()=>(0,i._)("button",{class:"tooltip-table__btn"},"Создать таблицу",-1)));function Q(t,e,o,s,r,a){const l=(0,i.up)("router-link"),c=(0,i.up)("tooltip"),w=(0,i.up)("search-bar");return(0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("div",N,[(0,i._)("div",y,[(0,i._)("div",k,[(0,i.Wm)(l,{to:"/",class:"nav__hide_700"},{default:(0,i.w5)((()=>[C])),_:1}),(0,i.Wm)(l,{to:"/gallery"},{default:(0,i.w5)((()=>[D])),_:1})]),(0,i._)("img",{src:d,alt:"",class:"nav__btn",onClick:e[0]||(e[0]=function(){return a.removeNote&&a.removeNote(...arguments)})})]),(0,i._)("div",S,[(0,i._)("img",{src:u,alt:"",class:"nav__btn",onClick:e[1]||(e[1]=function(){return a.createNewNote&&a.createNewNote(...arguments)})}),(0,i._)("div",T,[(0,i._)("img",{src:_,alt:"",class:"nav__btn",onClick:e[2]||(e[2]=e=>t.emitter.emit("list"))}),(0,i._)("div",O,[(0,i._)("img",{src:p,onClick:e[3]||(e[3]=t=>r.showTextEdit=!r.showTextEdit),alt:"",class:"nav__btn btn-letter"}),(0,i.Wm)(c,{show:r.showTextEdit,"onUpdate:show":e[13]||(e[13]=t=>r.showTextEdit=t)},{default:(0,i.w5)((()=>[(0,i._)("div",I,[(0,i._)("img",{src:h,alt:"",class:"nav__btn",onClick:e[4]||(e[4]=e=>t.emitter.emit("bold"))}),(0,i._)("img",{src:m,alt:"",class:"nav__btn",onClick:e[5]||(e[5]=e=>t.emitter.emit("italic"))}),(0,i._)("img",{src:g,alt:"",class:"nav__btn",onClick:e[6]||(e[6]=e=>t.emitter.emit("underline"))}),(0,i._)("img",{src:v,alt:"",class:"nav__btn",onClick:e[7]||(e[7]=e=>t.emitter.emit("stroke"))})]),(0,i._)("div",Z,[(0,i._)("div",{class:"tooltip__option tooltip__option-header1",onClick:e[8]||(e[8]=e=>t.emitter.emit("header1"))},"Название"),(0,i._)("div",{class:"tooltip__option tooltip__option-header2",onClick:e[9]||(e[9]=e=>t.emitter.emit("header2"))},"Заголовок"),(0,i._)("div",{class:"tooltip__option",onClick:e[10]||(e[10]=e=>t.emitter.emit("p"))},"Основной текст"),(0,i._)("div",{class:"tooltip__option option-list",onClick:e[11]||(e[11]=e=>t.emitter.emit("numlist"))},j),(0,i._)("div",{class:"tooltip__option option-list",onClick:e[12]||(e[12]=e=>t.emitter.emit("marklist"))},L)])])),_:1},8,["show"])]),(0,i._)("div",W,[(0,i._)("img",{src:b,onClick:e[14]||(e[14]=t=>r.showTableEdit=!r.showTableEdit),alt:"",class:"nav__btn"}),(0,i.Wm)(c,{show:r.showTableEdit,"onUpdate:show":e[18]||(e[18]=t=>r.showTableEdit=t)},{default:(0,i.w5)((()=>[(0,i._)("div",M,[(0,i._)("form",{action:"",onSubmit:e[17]||(e[17]=(0,n.iM)((function(){return a.createTable&&a.createTable(...arguments)}),["prevent"])),class:"tooltip-table__form"},[(0,i._)("div",B,[H,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[15]||(e[15]=t=>r.col=t)},null,512),[[n.nr,r.col]])]),(0,i._)("div",P,[U,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[16]||(e[16]=t=>r.row=t)},null,512),[[n.nr,r.row]])]),q],32)])])),_:1},8,["show"])])]),(0,i.Wm)(w,{class:"nav__hide_700 searchbar"})])])])}var Y=o.p+"img/search.f842792f.svg";const z=t=>((0,i.dD)("data-v-582bb495"),t=t(),(0,i.Cn)(),t),F={class:"search-bar"},$=z((()=>(0,i._)("img",{src:Y,alt:"",class:"search-bar__img"},null,-1))),J=["value"];function A(t,e,o,n,s,r){return(0,i.wg)(),(0,i.iD)("div",F,[$,(0,i._)("input",{class:"search-bar__input",onInput:e[0]||(e[0]=function(){return r.search&&r.search(...arguments)}),value:t.searchQuery},null,40,J)])}var V=o(907),K={name:"SearchBar",methods:{search(t){this.setSearchQuery(t.target.value)},...(0,V.OI)({setSearchQuery:"setSearchQuery"})},computed:{...(0,V.rn)({searchQuery:t=>t.searchQuery})}},G=o(744);const R=(0,G.Z)(K,[["render",A],["__scopeId","data-v-582bb495"]]);var X=R;const tt={key:0,class:"tooltip__body"};function et(t,e,o,n,s,r){return(0,i.wg)(),(0,i.iD)(i.HY,null,[o.show?((0,i.wg)(),(0,i.iD)("div",tt,[(0,i.WI)(t.$slots,"default",{},void 0,!0)])):(0,i.kq)("",!0),o.show?((0,i.wg)(),(0,i.iD)("div",{key:1,class:"tooltip__overlay",onClick:e[0]||(e[0]=function(){return r.toggle&&r.toggle(...arguments)})})):(0,i.kq)("",!0)],64)}var ot={name:"tooltip",props:{show:{type:Boolean,required:!0}},methods:{toggle(){this.$emit("update:show",!1)}}};const nt=(0,G.Z)(ot,[["render",et],["__scopeId","data-v-0d36aa6e"]]);var it=nt,st={name:"NavBar",components:{SearchBar:X,tooltip:it},data(){return{menuSvg:o(674),showTextEdit:!1,showTableEdit:!1,row:3,col:3}},methods:{...(0,V.OI)({setCurrentNote:"setCurrentNote",setNotes:"setNotes",clearCurrentNote:"setCurrentNote"}),...(0,V.nv)({setLocalStorage:"setLocalStorage"}),removeNote(){this.setNotes([...this.notes].filter((t=>t.id!==this.currentNote.id))),this.setCurrentNote(this.notes[this.notes.length-1]),this.setLocalStorage()},createNewNote(){const t={id:(~~(1e8*Math.random())).toString(16),title:"Новая заметка",body:"Нет дополнительного текста",createDate:new Date,editDate:new Date,html:"",text:[""]};this.setCurrentNote(t),this.setNotes([...this.notes,t]),this.setLocalStorage()},createTable(){this.emitter.emit("table",[this.row,this.col])}},computed:{...(0,V.rn)({notes:t=>t.notes,currentNote:t=>t.currentNote})}};const rt=(0,G.Z)(st,[["render",Q],["__scopeId","data-v-43fd601a"]]);var at=rt,lt={components:{NavBar:at},methods:{...(0,V.nv)({getLocalStorage:"getLocalStorage"})},mounted(){this.getLocalStorage()}};const ct=(0,G.Z)(lt,[["render",a]]);var dt=ct,ut=o(205);(0,ut.z)("/notes/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var _t=o(119);const pt={key:0,class:"main"},ht={key:1,class:"message"};function mt(t,e,o,n,s,r){const a=(0,i.up)("sidebar"),l=(0,i.up)("note-preview");return t.notes.length>0?((0,i.wg)(),(0,i.iD)("div",pt,[(0,i.Wm)(a,{class:"sidebar"}),(0,i.Wm)(l,{class:"note-preview"})])):((0,i.wg)(),(0,i.iD)("div",ht," Создайте заметку.. "))}const gt={class:"sidebar left-block"};function vt(t,e,o,s,r,a){const l=(0,i.up)("side-bar-item");return(0,i.wg)(),(0,i.iD)("div",gt,[(0,i.Wm)(n.W3,{name:"note-list"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.searchedNotes,(e=>((0,i.wg)(),(0,i.j4)(l,{class:"sidebar__item note-list-item",key:e.id,note:e,onClick:o=>t.setCurrentNote(e)},null,8,["note","onClick"])))),128))])),_:1})])}var bt=o(577);const wt={class:"sidebar__hover-overlay"},ft={class:"sidebar__title"},Nt={class:"sidebar__footer"},yt={class:"sidebar__date"},kt={class:"sidebar__body"};function Ct(t,e,o,n,s,r){return(0,i.wg)(),(0,i.iD)("div",{class:(0,bt.C_)(["sidebar__item",{active:t.currentNote.id===o.note.id}])},[(0,i._)("div",wt,[(0,i._)("div",ft,(0,bt.zw)(r.optStr(o.note.title,17)),1),(0,i._)("div",Nt,[(0,i._)("div",yt,(0,bt.zw)(r.getDate(o.note.editDate)),1),(0,i._)("div",kt,(0,bt.zw)(r.optStr(o.note.body,26)),1)])])],2)}var Dt={name:"SideBarItem",props:{note:{type:Object,required:!0}},methods:{optStr:function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14;return t.length>e?t.slice(0,e).concat("..."):t},getDate(t){const e=new Date(t),o=new Date,n=[e.getDate(),e.getMonth(),e.getFullYear()],i=[o.getDate(),o.getMonth(),o.getFullYear()];return JSON.stringify(n)===JSON.stringify(i)?[e.getHours(),e.getMinutes()].map((t=>t<10?"0"+t:t)).join(":"):n.map((t=>t<10?"0"+t:t)).join(".")},...(0,V.OI)({setCurrentNote:"setCurrentNote"})},computed:{...(0,V.rn)({currentNote:t=>t.currentNote})}};const St=(0,G.Z)(Dt,[["render",Ct],["__scopeId","data-v-32749831"]]);var Tt=St,Ot={name:"Sidebar",components:{SideBarItem:Tt},methods:{...(0,V.OI)({setCurrentNote:"setCurrentNote"})},computed:{...(0,V.Se)({searchedNotes:"searchedNotes"})}};const It=(0,G.Z)(Ot,[["render",vt],["__scopeId","data-v-b6ca80b0"]]);var Zt=It;const xt=t=>((0,i.dD)("data-v-a3f66574"),t=t(),(0,i.Cn)(),t),jt={key:0,class:"note-preview"},Et={class:"note-preview__date"},Lt={class:"note-preview__footer"},Wt={class:"note-preview__nav"},Mt={class:"tooltip"},Bt={class:"tooltip__header"},Ht={class:"tooltip__body"},Pt=xt((()=>(0,i._)("ol",null,[(0,i._)("li",null,"Нумерованый список")],-1))),Ut=[Pt],qt=xt((()=>(0,i._)("ul",null,[(0,i._)("li",null,"Маркированый список")],-1))),Qt=[qt],Yt={class:"tooltip"},zt={class:"tooltip-table__header"},Ft={class:"tooltip-table__input"},$t=xt((()=>(0,i._)("label",null,"Количесво столбцов: ",-1))),Jt={class:"tooltip-table__input"},At=xt((()=>(0,i._)("label",null,"Количесво строк: ",-1))),Vt=xt((()=>(0,i._)("button",{class:"tooltip-table__btn"},"Создать таблицу",-1))),Kt={key:1,class:"note-preview_empty"},Gt=xt((()=>(0,i._)("p",null,"Выберите заметку",-1))),Rt=[Gt];function Xt(t,e,o,s,r,a){const l=(0,i.up)("editor"),c=(0,i.up)("popup");return(0,i.wg)(),(0,i.iD)("div",null,[0!==Object.keys(t.currentNote).length?((0,i.wg)(),(0,i.iD)("div",jt,[(0,i._)("div",Et,(0,bt.zw)(a.getDate),1),((0,i.wg)(),(0,i.j4)(l,{value:t.currentNote.html,onUpdate:a.saveChanges,key:t.currentNote.id,class:"note-preview__editor"},null,8,["value","onUpdate"])),(0,i._)("div",Lt,[(0,i._)("div",Wt,[(0,i._)("img",{src:_,alt:"",class:"note-preview__btn",onClick:e[0]||(e[0]=e=>t.emitter.emit("list"))}),(0,i._)("div",Mt,[(0,i._)("img",{src:p,onClick:e[1]||(e[1]=t=>r.showTextEdit=!r.showTextEdit),alt:"",class:"nav__btn btn-letter"}),(0,i.Wm)(c,{show:r.showTextEdit,"onUpdate:show":e[11]||(e[11]=t=>r.showTextEdit=t)},{default:(0,i.w5)((()=>[(0,i._)("div",Bt,[(0,i._)("img",{src:h,alt:"",class:"nav__btn",onClick:e[2]||(e[2]=e=>t.emitter.emit("bold"))}),(0,i._)("img",{src:m,alt:"",class:"nav__btn",onClick:e[3]||(e[3]=e=>t.emitter.emit("italic"))}),(0,i._)("img",{src:g,alt:"",class:"nav__btn",onClick:e[4]||(e[4]=e=>t.emitter.emit("underline"))}),(0,i._)("img",{src:v,alt:"",class:"nav__btn",onClick:e[5]||(e[5]=e=>t.emitter.emit("stroke"))})]),(0,i._)("div",Ht,[(0,i._)("div",{class:"tooltip__option tooltip__option-header1",onClick:e[6]||(e[6]=e=>t.emitter.emit("header1"))},"Название"),(0,i._)("div",{class:"tooltip__option tooltip__option-header2",onClick:e[7]||(e[7]=e=>t.emitter.emit("header2"))},"Заголовок"),(0,i._)("div",{class:"tooltip__option",onClick:e[8]||(e[8]=e=>t.emitter.emit("p"))},"Основной текст"),(0,i._)("div",{class:"tooltip__option option-list",onClick:e[9]||(e[9]=e=>t.emitter.emit("numlist"))},Ut),(0,i._)("div",{class:"tooltip__option option-list",onClick:e[10]||(e[10]=e=>t.emitter.emit("marklist"))},Qt)])])),_:1},8,["show"])]),(0,i._)("div",Yt,[(0,i._)("img",{src:b,onClick:e[12]||(e[12]=t=>r.showTableEdit=!r.showTableEdit),alt:"",class:"note-preview__btn"}),(0,i.Wm)(c,{show:r.showTableEdit,"onUpdate:show":e[16]||(e[16]=t=>r.showTableEdit=t)},{default:(0,i.w5)((()=>[(0,i._)("div",zt,[(0,i._)("form",{action:"",onSubmit:e[15]||(e[15]=(0,n.iM)((function(){return a.createTable&&a.createTable(...arguments)}),["prevent"])),class:"tooltip-table__form"},[(0,i._)("div",Ft,[$t,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[13]||(e[13]=t=>r.col=t)},null,512),[[n.nr,r.col]])]),(0,i._)("div",Jt,[At,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[14]||(e[14]=t=>r.row=t)},null,512),[[n.nr,r.row]])]),Vt],32)])])),_:1},8,["show"])])])])])):((0,i.wg)(),(0,i.iD)("div",Kt,Rt))])}function te(t,e,o,n,s,r){const a=(0,i.up)("editor-content");return(0,i.wg)(),(0,i.j4)(a,{editor:s.editor,class:"editor"},null,8,["editor"])}var ee=o(725),oe=o(481),ne=o(142),ie=o(82),se=o(457),re=o(746),ae=o(667),le=o(237),ce=o(769),de=o(961),ue=o(427),_e=o(160),pe=o(157),he=o(467),me=o(992),ge=o(253);const ve=oe.Z.extend({content:"heading block*"});var be={name:"Editor",components:{EditorContent:ee.kg},props:{value:{type:String,required:!0}},data(){return{editor:null}},mounted(){this.editor=new ee.ML({extensions:[ve,ne.Z.configure({document:!1}),ie.ZP.configure({HTMLAttributes:{class:"list__item"},itemTypeName:"listItem"}),se.n,Text,re.Z,ae.ZP.configure({nested:!0}),le.Z,ce.Z.configure({levels:[1,2,3]}),de.ZP,ue.Z,ge.Z,_e.ZP.configure({resizable:!0}),pe.Z,me.Z,he.Z],content:this.value,onUpdate:()=>{this.$emit("update",this.editor.getHTML(),this.editor.getText())}}),this.emitter.on("list",function(){this.editor.chain().focus().toggleTaskList().run()}.bind(this)),this.emitter.on("bold",function(){this.editor.chain().focus().toggleBold().run()}.bind(this)),this.emitter.on("italic",function(){this.editor.chain().focus().toggleItalic().run()}.bind(this)),this.emitter.on("stroke",function(){this.editor.chain().focus().toggleStrike().run()}.bind(this)),this.emitter.on("underline",function(){this.editor.chain().focus().toggleUnderline().run()}.bind(this)),this.emitter.on("header1",function(){this.editor.chain().focus().toggleHeading({level:1}).run()}.bind(this)),this.emitter.on("header2",function(){this.editor.chain().focus().toggleHeading({level:2}).run()}.bind(this)),this.emitter.on("p",function(){this.editor.chain().focus().setParagraph().run()}.bind(this)),this.emitter.on("numlist",function(){this.editor.chain().focus().toggleOrderedList().run()}.bind(this)),this.emitter.on("marklist",function(){this.editor.chain().focus().toggleBulletList().run()}.bind(this)),this.emitter.on("table",function(t){let[e,o]=t;console.log(e,o),this.editor.chain().focus().insertTable({rows:+e,cols:+o,withHeaderRow:!0}).run()}.bind(this))}};const we=(0,G.Z)(be,[["render",te]]);var fe=we;const Ne={key:0,class:"popup"},ye={class:"popup__body"};function ke(t,e,o,s,r,a){return(0,i.wg)(),(0,i.j4)(n.uT,null,{default:(0,i.w5)((()=>[o.show?((0,i.wg)(),(0,i.iD)("div",Ne,[(0,i._)("div",ye,[(0,i.WI)(t.$slots,"default",{},void 0,!0)]),(0,i._)("div",{class:"popup__overlay",onClick:e[0]||(e[0]=function(){return a.toggle&&a.toggle(...arguments)})})])):(0,i.kq)("",!0)])),_:3})}var Ce={name:"Popup",props:{show:{type:Boolean,required:!0}},methods:{toggle(){this.$emit("update:show",!1)}}};const De=(0,G.Z)(Ce,[["render",ke],["__scopeId","data-v-5f5462c3"]]);var Se=De,Te={name:"NotePreview",components:{Popup:Se,editor:fe,tooltip:it},data(){return{showTextEdit:!1,showTableEdit:!1,row:3,col:3}},methods:{...(0,V.OI)({setCurrentNote:"setCurrentNote",setNotes:"setNotes"}),...(0,V.nv)({setLocalStorage:"setLocalStorage"}),saveChanges(t,e){const o=e.split("\n").filter((t=>""!==t));this.setCurrentNote({html:t,title:o[0]?o[0]:"Новая заметка",body:o[1]?o[1]:"Нет дополнительного текста",text:0===o.length?[""]:o,editDate:new Date});let n=[...this.notes];n.forEach((e=>{e.id===this.currentNote.id&&(e.title=this.currentNote.title,e.body=this.currentNote.body,e.text=this.currentNote.text,e.html=t,e.editDate=new Date)})),this.setNotes(n),this.setLocalStorage()},createTable(){this.emitter.emit("table",[this.row,this.col])}},computed:{...(0,V.rn)({currentNote:t=>t.currentNote,notes:t=>t.notes}),getDate(){let t=new Date(this.currentNote.createDate),e=new Date(this.currentNote.editDate),o=null,n=!1;t.valueOf()<e.valueOf()?(o=new Date(e),n=!0):o=new Date(t);const i=[o.getDate(),o.getMonth(),o.getFullYear()].map((t=>t<10?"0"+t:t)).join("."),s=[o.getHours(),o.getMinutes()].map((t=>t<10?"0"+t:t)).join(":");return n?"Изменено: "+i+" в "+s:"Создано: "+i+" в "+s}}};const Oe=(0,G.Z)(Te,[["render",Xt],["__scopeId","data-v-a3f66574"]]);var Ie=Oe;const Ze={class:"sidebar left-block"};function xe(t,e,o,s,r,a){const l=(0,i.up)("side-bar-item");return(0,i.wg)(),(0,i.iD)("div",Ze,[(0,i.Wm)(n.W3,{name:"note-list"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.searchedNotes,(t=>((0,i.wg)(),(0,i.j4)(l,{class:"sidebar__item note-list-item",key:t.id,note:t,onClick:e=>a.openNote(t)},null,8,["note","onClick"])))),128))])),_:1})])}var je={name:"Sidebar",components:{SideBarItem:Tt},methods:{...(0,V.OI)({setCurrentNote:"setCurrentNote"}),openNote(t){this.setCurrentNote(t),this.$router.push("/note/"+t.id)}},computed:{...(0,V.Se)({searchedNotes:"searchedNotes"})}};const Ee=(0,G.Z)(je,[["render",xe],["__scopeId","data-v-10b37611"]]);var Le=Ee,We={name:"Main",components:{sidebar:Zt,notePreview:Ie,sidebarMobile:Le},methods:{...(0,V.OI)({setNotes:"setNotes",setCurrentNote:"setCurrentNote"})},computed:{...(0,V.rn)({notes:t=>t.notes,currentNote:t=>t.currentNote})},mounted(){}};const Me=(0,G.Z)(We,[["render",mt],["__scopeId","data-v-4be513ec"]]);var Be=Me;const He={key:0,class:"gallery"};function Pe(t,e,o,s,r,a){const l=(0,i.up)("search-bar"),c=(0,i.up)("gallery-item");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(l,{class:"gallery__searchbar"}),t.searchedNotes.length>0?((0,i.wg)(),(0,i.iD)("div",He,[(0,i.Wm)(n.W3,{name:"note-list"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.searchedNotes,(t=>((0,i.wg)(),(0,i.j4)(c,{key:t.id,note:t,class:"gallery__item note-list-item",onClick:e=>a.openNote(t)},null,8,["note","onClick"])))),128))])),_:1})])):(0,i.kq)("",!0)])}const Ue={class:"gallery__item"},qe=["innerHTML"],Qe={class:"gallery__footer"},Ye={class:"gallery__title"},ze={class:"gallery__date"};function Fe(t,e,o,n,s,r){return(0,i.wg)(),(0,i.iD)("div",Ue,[(0,i._)("div",{class:"gallery__html",innerHTML:o.note.html},null,8,qe),(0,i._)("div",Qe,[(0,i._)("div",Ye,(0,bt.zw)(o.note.title),1),(0,i._)("div",ze,(0,bt.zw)(r.getDate(o.note.editDate)),1)])])}var $e={name:"galleryItem",props:{note:{type:Object,required:!0}},methods:{getDate(t){const e=new Date(t),o=new Date,n=[e.getDate(),e.getMonth(),e.getFullYear()],i=[o.getDate(),o.getMonth(),o.getFullYear()];return JSON.stringify(n)===JSON.stringify(i)?[e.getHours(),e.getMinutes()].map((t=>t<10?"0"+t:t)).join(":"):n.map((t=>t<10?"0"+t:t)).join(".")}}};const Je=(0,G.Z)($e,[["render",Fe],["__scopeId","data-v-bf449484"]]);var Ae=Je,Ve={name:"Gallery",components:{GalleryItem:Ae,SearchBar:X},computed:{...(0,V.Se)({searchedNotes:"searchedNotes"})},methods:{openNote(t){this.setCurrentNote(t),this.$router.push("/note/"+t.id)},...(0,V.OI)({setCurrentNote:"setCurrentNote"})}};const Ke=(0,G.Z)(Ve,[["render",Pe]]);var Ge=Ke;function Re(t,e,o,n,s,r){const a=(0,i.up)("note-preview");return(0,i.wg)(),(0,i.j4)(a,{class:"note-preview"})}var Xe={components:{notePreview:Ie},name:"NotePage"};const to=(0,G.Z)(Xe,[["render",Re],["__scopeId","data-v-3cf987ac"]]);var eo=to;const oo=[{path:"/",component:Be},{path:"/gallery",component:Ge},{path:"/note/:id",component:eo},{path:"/notes",component:Le}],no=(0,_t.p7)({history:(0,_t.r5)(),routes:oo});var io=no,so=(0,V.MT)({state(){return{notes:[],currentNote:{},searchQuery:""}},getters:{searchedNotes(t,e){return e.sortedByDateNotes.filter((e=>{for(let o of e.text)if(o.toLowerCase().includes(t.searchQuery.toLowerCase()))return e}))},sortedByDateNotes(t,e){return[...t.notes].sort(((t,e)=>new Date(e.editDate).valueOf()-new Date(t.editDate).valueOf()))}},mutations:{setNotes(t,e){t.notes=e},setSearchQuery(t,e){t.searchQuery=e},setCurrentNote(t,e){Object.assign(t.currentNote,e)}},actions:{setLocalStorage(t){let{state:e}=t;localStorage.setItem("notes",JSON.stringify({notes:e.notes,currentNote:e.currentNote}))},getLocalStorage(t){let{state:e,commit:o}=t;const n=localStorage.getItem("notes");if(n){const{notes:t,currentNote:e}=JSON.parse(n);o("setNotes",t),o("setCurrentNote",e)}}},modules:{}}),ro=o(391);const ao=(0,ro.Z)(),lo=(0,n.ri)(dt);lo.config.globalProperties.emitter=ao,lo.use(io).use(so).mount("#app")},674:function(t,e,o){t.exports=o.p+"img/menu.1e4e1d55.svg"}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,s){if(!n){var r=1/0;for(d=0;d<t.length;d++){n=t[d][0],i=t[d][1],s=t[d][2];for(var a=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(a=!1,s<r&&(r=s));if(a){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[n,i,s]}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/notes/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,s,r=n[0],a=n[1],l=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(l)var d=l(o)}for(e&&e(n);c<r.length;c++)s=r[c],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(d)},n=self["webpackChunknotes"]=self["webpackChunknotes"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(17)}));n=o.O(n)})();
//# sourceMappingURL=app.e2a8ef46.js.map