(self.webpackChunk=self.webpackChunk||[]).push([[992],{1748:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var i=o(3645),a=o.n(i)()((function(e){return e[1]}));a.push([e.id,".p-toast.p-toast-topright{top:70px;z-index:1000}",""]);const n=a},7994:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var i=o(3645),a=o.n(i)()((function(e){return e[1]}));a.push([e.id,"pre[data-v-2009871f]{background:#f0f0f0;border-left:10px solid #7fbcec;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;overflow:auto;padding:1em;text-align:left;white-space:pre}i[data-v-2009871f]{background-color:#fcf2a7;font-family:monaco,Consolas,Lucida Console,monospace;font-size:14px;font-style:normal;font-weight:700;padding:2px}",""]);const n=a},1140:(e,t,o)=>{"use strict";o.d(t,{Z:()=>ve});var i=o(5166),a={class:"layout-logo"},n={class:"layout-main"};var l={class:"layout-topbar p-shadow-5"},r=(0,i.createVNode)("span",{class:"pi pi-bars"},null,-1),c={class:"layout-topbar-icons"},s={class:"layout-topbar-search"},p=(0,i.createVNode)("span",{class:"layout-topbar-search-icon pi pi-search"},null,-1),u=(0,i.createStaticVNode)('<button class="p-link"><span class="layout-topbar-item-text">Events</span><span class="layout-topbar-icon pi pi-calendar"></span><span class="layout-topbar-badge">5</span></button><button class="p-link"><span class="layout-topbar-item-text">Settings</span><span class="layout-topbar-icon pi pi-cog"></span></button><button class="p-link"><span class="layout-topbar-item-text">User</span><span class="layout-topbar-icon pi pi-user"></span></button>',3);const d={methods:{onMenuToggle:function(e){this.$emit("menu-toggle",e)}},render:function(e,t,o,a,n,d){var m=(0,i.resolveComponent)("InputText");return(0,i.openBlock)(),(0,i.createBlock)("div",l,[(0,i.createVNode)("button",{class:"p-link layout-menu-button",onClick:t[1]||(t[1]=function(){return d.onMenuToggle&&d.onMenuToggle.apply(d,arguments)})},[r]),(0,i.createVNode)("div",c,[(0,i.createVNode)("span",s,[(0,i.createVNode)(m,{type:"text",placeholder:"Search"}),p]),u])])}},m=d;var f=(0,i.withScopeId)("data-v-5aec6afc");(0,i.pushScopeId)("data-v-5aec6afc");var b={class:"layout-profile"},h=(0,i.createVNode)("div",null,[(0,i.createVNode)("img",{src:"assets/layout/images/profile.png",alt:""})],-1),v=(0,i.createVNode)("span",{class:"username"},"Claire Williams",-1),y=(0,i.createVNode)("i",{class:"pi pi-fw pi-cog"},null,-1),g=(0,i.createVNode)("li",null,[(0,i.createVNode)("button",{class:"p-link"},[(0,i.createVNode)("i",{class:"pi pi-fw pi-user"}),(0,i.createVNode)("span",null,"Account")])],-1),k=(0,i.createVNode)("li",null,[(0,i.createVNode)("button",{class:"p-link"},[(0,i.createVNode)("i",{class:"pi pi-fw pi-inbox"}),(0,i.createVNode)("span",null,"Notifications"),(0,i.createVNode)("span",{class:"menuitem-badge"},"2")])],-1),V=(0,i.createVNode)("li",null,[(0,i.createVNode)("button",{class:"p-link"},[(0,i.createVNode)("i",{class:"pi pi-fw pi-power-off"}),(0,i.createVNode)("span",null,"Logout")])],-1);(0,i.popScopeId)();var w=f((function(e,t,o,a,n,l){return(0,i.openBlock)(),(0,i.createBlock)("div",b,[h,(0,i.createVNode)("button",{class:"p-link layout-profile-link",onClick:t[1]||(t[1]=function(){return l.onClick&&l.onClick.apply(l,arguments)})},[v,y]),(0,i.createVNode)(i.Transition,{name:"layout-submenu-wrapper"},{default:f((function(){return[(0,i.withDirectives)((0,i.createVNode)("ul",null,[g,k,V],512),[[i.vShow,n.expanded]])]})),_:1})])}));const C={data:function(){return{expanded:!1}},methods:{onClick:function(e){this.expanded=!this.expanded,e.preventDefault()}}};C.render=w,C.__scopeId="data-v-5aec6afc";const N=C;var M={class:"layout-menu-container"};var S={key:0},x={key:0,class:"arrow"},B={key:0,class:"pi pi-fw pi-angle-down menuitem-toggle-icon"},T={key:1,class:"menuitem-badge"},I={key:0,class:"pi pi-fw pi-angle-down menuitem-toggle-icon"},A={key:1,class:"menuitem-badge"};const L={name:"appsubmenu",props:{items:Array,root:{type:Boolean,default:!1}},data:function(){return{activeIndex:null,currentRoute:null}},methods:{onMenuItemClick:function(e,t,o){t.disabled?e.preventDefault():(t.to||t.url||e.preventDefault(),this.currentRoute=t.to,t.command&&t.command({originalEvent:e,item:t}),this.activeIndex=o===this.activeIndex?null:o,this.$emit("menuitem-click",{originalEvent:e,item:t}))},visible:function(e){return"function"==typeof e.visible?e.visible():!1!==e.visible},getClasses:function(e){var t=this.currentRoute==e.to;return[e.class,"p-ripple",{"router-link-active":t,"router-link-exact-active":t,"p-disabled":e.disabled}]}},render:function(e,t,o,a,n,l){var r=(0,i.resolveComponent)("inertia-link"),c=(0,i.resolveComponent)("appsubmenu"),s=(0,i.resolveDirective)("ripple");return o.items?((0,i.openBlock)(),(0,i.createBlock)("ul",S,[((0,i.openBlock)(!0),(0,i.createBlock)(i.Fragment,null,(0,i.renderList)(o.items,(function(a,p){return(0,i.openBlock)(),(0,i.createBlock)(i.Fragment,null,[l.visible(a)&&!a.separator?((0,i.openBlock)(),(0,i.createBlock)("li",{key:p,class:[{"active-menuitem":n.activeIndex===p&&!a.to&&!a.disabled}],role:"none"},[a.items&&!0===o.root?((0,i.openBlock)(),(0,i.createBlock)("div",x)):(0,i.createCommentVNode)("",!0),e.route().has(a.to)?((0,i.openBlock)(),(0,i.createBlock)(r,{key:1,href:e.route(a.to),class:l.getClasses(a),onClick:function(e){return l.onMenuItemClick(e,a,p)},"aria-current":e.route().current(a.to)?"page":"",target:a.target,exact:""},{default:(0,i.withCtx)((function(){return[(0,i.createVNode)("i",{class:a.icon},null,2),(0,i.createVNode)("span",null,(0,i.toDisplayString)(a.label),1),a.items?((0,i.openBlock)(),(0,i.createBlock)("i",B)):(0,i.createCommentVNode)("",!0),a.badge?((0,i.openBlock)(),(0,i.createBlock)("span",T,(0,i.toDisplayString)(a.badge),1)):(0,i.createCommentVNode)("",!0)]})),_:2},1032,["href","class","onClick","aria-current","target"])):(0,i.createCommentVNode)("",!0),a.to?(0,i.createCommentVNode)("",!0):(0,i.withDirectives)(((0,i.openBlock)(),(0,i.createBlock)("a",{key:2,href:a.url||"#",style:a.style,class:[a.class,"p-ripple",{"p-disabled":a.disabled}],onClick:function(e){return l.onMenuItemClick(e,a,p)},target:a.target,role:"menuitem"},[(0,i.createVNode)("i",{class:a.icon},null,2),(0,i.createVNode)("span",null,(0,i.toDisplayString)(a.label),1),a.items?((0,i.openBlock)(),(0,i.createBlock)("i",I)):(0,i.createCommentVNode)("",!0),a.badge?((0,i.openBlock)(),(0,i.createBlock)("span",A,(0,i.toDisplayString)(a.badge),1)):(0,i.createCommentVNode)("",!0)],14,["href","onClick","target"])),[[s]]),(0,i.createVNode)(i.Transition,{name:"layout-submenu-wrapper"},{default:(0,i.withCtx)((function(){return[(0,i.withDirectives)((0,i.createVNode)(c,{items:l.visible(a)&&a.items,onMenuitemClick:t[1]||(t[1]=function(t){return e.$emit("menuitem-click",t)})},null,8,["items"]),[[i.vShow,n.activeIndex===p]])]})),_:2},1024)],2)):(0,i.createCommentVNode)("",!0),l.visible(a)&&a.separator?((0,i.openBlock)(),(0,i.createBlock)("li",{class:"p-menu-separator",style:a.style,key:"separator"+p,role:"separator"},null,4)):(0,i.createCommentVNode)("",!0)],64)})),256))])):(0,i.createCommentVNode)("",!0)}},$={props:{model:Array},methods:{onMenuItemClick:function(e){this.$emit("menuitem-click",e)}},components:{AppSubmenu:L},render:function(e,t,o,a,n,l){var r=(0,i.resolveComponent)("AppSubmenu");return(0,i.openBlock)(),(0,i.createBlock)("div",M,[(0,i.createVNode)(r,{items:o.model,class:"layout-menu",root:!0,onMenuitemClick:l.onMenuItemClick},null,8,["items","onMenuitemClick"])])}},D=$;var _=(0,i.createVNode)("i",{class:"pi pi-cog"},null,-1),F=(0,i.createVNode)("i",{class:"pi pi-times"},null,-1),P={class:"layout-config-content"},U=(0,i.createVNode)("h5",{style:{"margin-top":"0"}},"Input Style",-1),E={class:"p-formgroup-inline"},q={class:"p-field-radiobutton"},O=(0,i.createVNode)("label",{for:"input_outlined"},"Outlined",-1),R={class:"p-field-radiobutton"},G=(0,i.createVNode)("label",{for:"input_filled"},"Filled",-1),j=(0,i.createVNode)("h5",null,"Ripple Effect",-1),H=(0,i.createVNode)("h5",null,"Menu Type",-1),Z={class:"p-formgroup-inline"},z={class:"p-field-radiobutton"},W=(0,i.createVNode)("label",{for:"static"},"Static",-1),K={class:"p-field-radiobutton"},J=(0,i.createVNode)("label",{for:"overlay"},"Overlay",-1),Q=(0,i.createVNode)("h5",null,"Menu Color",-1),X={class:"p-formgroup-inline"},Y={class:"p-field-radiobutton"},ee=(0,i.createVNode)("label",{for:"dark"},"Dark",-1),te={class:"p-field-radiobutton"},oe=(0,i.createVNode)("label",{for:"light"},"Light",-1);const ie={props:{layoutMode:{type:String,default:null},layoutColorMode:{type:String,default:null}},data:function(){return{active:!1,d_layoutMode:this.layoutMode,d_layoutColorMode:this.layoutColorMode}},watch:{$route:function(){this.active&&(this.active=!1,this.unbindOutsideClickListener())},layoutMode:function(e){this.d_layoutMode=e},layoutColorMode:function(e){this.d_layoutColorMode=e}},outsideClickListener:null,methods:{toggleConfigurator:function(e){this.active=!this.active,e.preventDefault(),this.active?this.bindOutsideClickListener():this.unbindOutsideClickListener()},hideConfigurator:function(e){this.active=!1,this.unbindOutsideClickListener(),e.preventDefault()},changeInputStyle:function(e){this.$appState.inputStyle=e},changeRipple:function(e){this.$primevue.config.ripple=e},changeLayout:function(e,t){this.$emit("layout-change",t),e.preventDefault()},changeLayoutColor:function(e,t){this.$emit("layout-color-change",t),e.preventDefault()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.active&&e.isOutsideClicked(t)&&(e.active=!1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(e){return!(this.$el.isSameNode(e.target)||this.$el.contains(e.target))}},computed:{containerClass:function(){return["layout-config",{"layout-config-active":this.active}]},rippleActive:function(){return this.$primevue.config.ripple},inputStyle:function(){return this.$appState.inputStyle}},render:function(e,t,o,a,n,l){var r=(0,i.resolveComponent)("RadioButton"),c=(0,i.resolveComponent)("InputSwitch");return(0,i.openBlock)(),(0,i.createBlock)("div",{id:"layout-config",class:l.containerClass},[(0,i.createVNode)("a",{href:"#",class:"layout-config-button",id:"layout-config-button",onClick:t[1]||(t[1]=function(){return l.toggleConfigurator&&l.toggleConfigurator.apply(l,arguments)})},[_]),(0,i.createVNode)("a",{href:"#",class:"layout-config-close",onClick:t[2]||(t[2]=function(){return l.hideConfigurator&&l.hideConfigurator.apply(l,arguments)})},[F]),(0,i.createVNode)("div",P,[U,(0,i.createVNode)("div",E,[(0,i.createVNode)("div",q,[(0,i.createVNode)(r,{id:"input_outlined",name:"inputstyle",value:"outlined",modelValue:l.inputStyle,"onUpdate:modelValue":l.changeInputStyle},null,8,["modelValue","onUpdate:modelValue"]),O]),(0,i.createVNode)("div",R,[(0,i.createVNode)(r,{id:"input_filled",name:"inputstyle",value:"filled",modelValue:l.inputStyle,"onUpdate:modelValue":l.changeInputStyle},null,8,["modelValue","onUpdate:modelValue"]),G])]),j,(0,i.createVNode)(c,{modelValue:l.rippleActive,"onUpdate:modelValue":l.changeRipple},null,8,["modelValue","onUpdate:modelValue"]),H,(0,i.createVNode)("div",Z,[(0,i.createVNode)("div",z,[(0,i.createVNode)(r,{id:"static",name:"layoutMode",value:"static",modelValue:n.d_layoutMode,"onUpdate:modelValue":t[3]||(t[3]=function(e){return n.d_layoutMode=e}),onChange:t[4]||(t[4]=function(e){return l.changeLayout(e,"static")})},null,8,["modelValue"]),W]),(0,i.createVNode)("div",K,[(0,i.createVNode)(r,{id:"overlay",name:"layoutMode",value:"overlay",modelValue:n.d_layoutMode,"onUpdate:modelValue":t[5]||(t[5]=function(e){return n.d_layoutMode=e}),onChange:t[6]||(t[6]=function(e){return l.changeLayout(e,"overlay")})},null,8,["modelValue"]),J])]),Q,(0,i.createVNode)("div",X,[(0,i.createVNode)("div",Y,[(0,i.createVNode)(r,{id:"dark",name:"layoutColorMode",value:"dark",modelValue:n.d_layoutColorMode,"onUpdate:modelValue":t[7]||(t[7]=function(e){return n.d_layoutColorMode=e}),onChange:t[8]||(t[8]=function(e){return l.changeLayoutColor(e,"dark")})},null,8,["modelValue"]),ee]),(0,i.createVNode)("div",te,[(0,i.createVNode)(r,{id:"light",name:"layoutColorMode",value:"light",modelValue:n.d_layoutColorMode,"onUpdate:modelValue":t[9]||(t[9]=function(e){return n.d_layoutColorMode=e}),onChange:t[10]||(t[10]=function(e){return l.changeLayoutColor(e,"light")})},null,8,["modelValue"]),oe])])])],2)}},ae=ie;var ne=(0,i.withScopeId)("data-v-4aa944ce");(0,i.pushScopeId)("data-v-4aa944ce");var le={class:"layout-footer"},re=(0,i.createVNode)("span",{class:"footer-text",style:{"margin-right":"5px"}},"PrimeVue",-1),ce=(0,i.createVNode)("img",{src:"assets/layout/images/logo.svg",alt:"sigma",width:"80"},null,-1),se=(0,i.createVNode)("span",{class:"footer-text",style:{"margin-left":"5px"}},"Theme and Layout",-1);(0,i.popScopeId)();var pe=ne((function(e,t,o,a,n,l){return(0,i.openBlock)(),(0,i.createBlock)("div",le,[re,ce,se])}));const ue={name:"AppFooter"};ue.render=pe,ue.__scopeId="data-v-4aa944ce";const de={data:function(){return{layoutMode:"static",layoutColorMode:"dark",staticMenuInactive:!1,overlayMenuActive:!1,mobileMenuActive:!1,menu:[{label:"Dashboard",icon:"pi pi-fw pi-home",to:"dashboard"},{label:"UI Kit",icon:"pi pi-fw pi-sitemap",items:[{label:"Form Layout",icon:"pi pi-fw pi-id-card",to:"formlayout"},{label:"Input",icon:"pi pi-fw pi-check-square",to:"input"},{label:"Float Label",icon:"pi pi-fw pi-bookmark",to:"floatlabel"},{label:"Invalid State",icon:"pi pi-fw pi-exclamation-circle",to:"invalidstate"},{label:"Button",icon:"pi pi-fw pi-mobile",to:"button"},{label:"Table",icon:"pi pi-fw pi-table",to:"table"},{label:"List",icon:"pi pi-fw pi-list",to:"list"},{label:"Tree",icon:"pi pi-fw pi-share-alt",to:"tree"},{label:"Panel",icon:"pi pi-fw pi-tablet",to:"panel"},{label:"Overlay",icon:"pi pi-fw pi-clone",to:"overlay"},{label:"Menu",icon:"pi pi-fw pi-bars",to:"menu"},{label:"Message",icon:"pi pi-fw pi-comment",to:"messages"},{label:"File",icon:"pi pi-fw pi-file",to:"file"},{label:"Chart",icon:"pi pi-fw pi-chart-bar",to:"chart"},{label:"Misc",icon:"pi pi-fw pi-circle-off",to:"misc"}]},{label:"Utilities",icon:"pi pi-fw pi-globe",items:[{label:"Display",icon:"pi pi-fw pi-desktop",to:"display"},{label:"Elevation",icon:"pi pi-fw pi-external-link",to:"elevation"},{label:"Flexbox",icon:"pi pi-fw pi-directions",to:"flexbox"},{label:"Icons",icon:"pi pi-fw pi-search",to:"icons"},{label:"Grid System",icon:"pi pi-fw pi-th-large",to:"grid"},{label:"Spacing",icon:"pi pi-fw pi-arrow-right",to:"spacing"},{label:"Typography",icon:"pi pi-fw pi-align-center",to:"typography"},{label:"Text",icon:"pi pi-fw pi-pencil",to:"text"}]},{label:"Pages",icon:"pi pi-fw pi-clone",items:[{label:"Crud",icon:"pi pi-fw pi-user-edit",to:"crud"},{label:"Calendar",icon:"pi pi-fw pi-calendar-plus",to:"calendar"},{label:"Timeline",icon:"pi pi-fw pi-calendar",to:"timeline"},{label:"Empty Page",icon:"pi pi-fw pi-circle-off",to:"empty"}]},{label:"Menu Hierarchy",icon:"pi pi-fw pi-search",items:[{label:"Submenu 1",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 1.1",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 1.1.1",icon:"pi pi-fw pi-bookmark"},{label:"Submenu 1.1.2",icon:"pi pi-fw pi-bookmark"},{label:"Submenu 1.1.3",icon:"pi pi-fw pi-bookmark"}]},{label:"Submenu 1.2",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 1.2.1",icon:"pi pi-fw pi-bookmark"},{label:"Submenu 1.2.2",icon:"pi pi-fw pi-bookmark"}]}]},{label:"Submenu 2",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 2.1",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 2.1.1",icon:"pi pi-fw pi-bookmark"},{label:"Submenu 2.1.2",icon:"pi pi-fw pi-bookmark"},{label:"Submenu 2.1.3",icon:"pi pi-fw pi-bookmark"}]},{label:"Submenu 2.2",icon:"pi pi-fw pi-bookmark",items:[{label:"Submenu 2.2.1",icon:"pi pi-fw pi-bookmark"},{label:"Submenu 2.2.2",icon:"pi pi-fw pi-bookmark"}]}]}]},{label:"Documentation",icon:"pi pi-fw pi-question",to:"documentation"},{label:"View Source",icon:"pi pi-fw pi-search",command:function(){window.location="https://github.com/primefaces/sigma-vue"}}]}},watch:{$route:function(){this.menuActive=!1,this.$toast.removeAllGroups()}},methods:{onWrapperClick:function(){this.menuClick||(this.overlayMenuActive=!1,this.mobileMenuActive=!1),this.menuClick=!1},onMenuToggle:function(){this.menuClick=!0,this.isDesktop()?"overlay"===this.layoutMode?(!0===this.mobileMenuActive&&(this.overlayMenuActive=!0),this.overlayMenuActive=!this.overlayMenuActive,this.mobileMenuActive=!1):"static"===this.layoutMode&&(this.staticMenuInactive=!this.staticMenuInactive):this.mobileMenuActive=!this.mobileMenuActive,event.preventDefault()},onSidebarClick:function(){this.menuClick=!0},onMenuItemClick:function(e){e.item&&!e.item.items&&(this.overlayMenuActive=!1,this.mobileMenuActive=!1)},onLayoutChange:function(e){this.layoutMode=e},onLayoutColorChange:function(e){this.layoutColorMode=e},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},isDesktop:function(){return window.innerWidth>1024},isSidebarVisible:function(){return!this.isDesktop()||("static"===this.layoutMode?!this.staticMenuInactive:"overlay"!==this.layoutMode||this.overlayMenuActive)}},computed:{containerClass:function(){return["layout-wrapper",{"layout-overlay":"overlay"===this.layoutMode,"layout-static":"static"===this.layoutMode,"layout-static-sidebar-inactive":this.staticMenuInactive&&"static"===this.layoutMode,"layout-overlay-sidebar-active":this.overlayMenuActive&&"overlay"===this.layoutMode,"layout-mobile-sidebar-active":this.mobileMenuActive,"p-input-filled":"filled"===this.$appState.inputStyle,"p-ripple-disabled":!1===this.$primevue.config.ripple}]},sidebarClass:function(){return["layout-sidebar",{"layout-sidebar-dark":"dark"===this.layoutColorMode,"layout-sidebar-light":"light"===this.layoutColorMode}]},logo:function(){return"dark"===this.layoutColorMode?"assets/layout/images/logo-white.svg":"assets/layout/images/logo.svg"}},beforeUpdate:function(){this.mobileMenuActive?this.addClass(document.body,"body-overflow-hidden"):this.removeClass(document.body,"body-overflow-hidden")},components:{AppTopBar:m,AppProfile:N,AppMenu:D,AppConfig:ae,AppFooter:ue}};var me=o(3379),fe=o.n(me),be=o(1748),he={insert:"head",singleton:!1};fe()(be.Z,he);be.Z.locals;de.render=function(e,t,o,l,r,c){var s=(0,i.resolveComponent)("AppTopBar"),p=(0,i.resolveComponent)("inertia-link"),u=(0,i.resolveComponent)("AppProfile"),d=(0,i.resolveComponent)("AppMenu"),m=(0,i.resolveComponent)("AppConfig"),f=(0,i.resolveComponent)("AppFooter");return(0,i.openBlock)(),(0,i.createBlock)("div",{class:c.containerClass,onClick:t[2]||(t[2]=function(){return c.onWrapperClick&&c.onWrapperClick.apply(c,arguments)})},[(0,i.createVNode)(s,{onMenuToggle:c.onMenuToggle},null,8,["onMenuToggle"]),(0,i.createVNode)(i.Transition,{name:"layout-sidebar"},{default:(0,i.withCtx)((function(){return[(0,i.withDirectives)((0,i.createVNode)("div",{class:c.sidebarClass,onClick:t[1]||(t[1]=function(){return c.onSidebarClick&&c.onSidebarClick.apply(c,arguments)})},[(0,i.createVNode)("div",a,[(0,i.createVNode)(p,{href:"/"},{default:(0,i.withCtx)((function(){return[(0,i.createVNode)("img",{alt:"Logo",src:c.logo},null,8,["src"])]})),_:1})]),(0,i.createVNode)(u),(0,i.createVNode)(d,{model:r.menu,onMenuitemClick:c.onMenuItemClick},null,8,["model","onMenuitemClick"])],2),[[i.vShow,c.isSidebarVisible()]])]})),_:1}),(0,i.createVNode)("div",n,[(0,i.renderSlot)(e.$slots,"default")]),(0,i.createVNode)(m,{layoutMode:r.layoutMode,layoutColorMode:r.layoutColorMode,onLayoutChange:c.onLayoutChange,onLayoutColorChange:c.onLayoutColorChange},null,8,["layoutMode","layoutColorMode","onLayoutChange","onLayoutColorChange"]),(0,i.createVNode)(f)],2)};const ve=de},2992:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>oe});var i=o(5166),a=(0,i.withScopeId)("data-v-2009871f");(0,i.pushScopeId)("data-v-2009871f");var n={class:"p-grid"},l={class:"p-col-12"},r={class:"card docs"},c=(0,i.createStaticVNode)('<h4 data-v-2009871f>Current Version</h4><p data-v-2009871f>Vue 3.0.6 and PrimeVue 3.x</p><h4 data-v-2009871f>Getting Started</h4><p data-v-2009871f> Sigma is an application template for Vue based on the <a href="https://cli.vuejs.org/" data-v-2009871f>Vue CLI</a> that provides out-of-the-box standard tooling for Vue projects. To get started, clone the <a href="https://github.com/primefaces/sigma-vue" data-v-2009871f>repository</a> from GitHub and install the dependencies with npm or yarn. </p><pre data-v-2009871f>npm install\n</pre> or <pre data-v-2009871f>yarn\n</pre><p data-v-2009871f> Next step is running the application using the serve script and navigate to <b data-v-2009871f>http://localhost:8080/</b> to view the application. That is it, you may now start with the development of your application using the Sigma template. </p><pre data-v-2009871f>npm run serve\n</pre><h4 data-v-2009871f>Vue CLI Scripts</h4><p data-v-2009871f>Following commands are derived from create-app-app.</p><pre data-v-2009871f>&quot;npm run serve&quot;: Starts the development server\n&quot;npm run build&quot;: Builds the application for deployment.\n&quot;npm run lint&quot;: Executes the lint checks.\n&quot;npm run test:unit&quot;: Runs the tests.\n</pre><h4 data-v-2009871f>Structure</h4><p data-v-2009871f> Sigma consists of 2 main parts; the application layout and the resources. <i data-v-2009871f>App.vue</i> inside src folder is the main component containing the template for the base layout whereas required resources such as SASS structure for the layout are placed inside the <b data-v-2009871f>src/assets/layout</b> folder. </p><h4 data-v-2009871f>Templates</h4><p data-v-2009871f> Main layout is the template of the <i data-v-2009871f>App.vue</i>, it is divided into a couple of child components such as topbar, profile, menu and footer. Here is template of the <i data-v-2009871f>App.vue</i> component that implements the logic such as menu state, layout modes and so on. </p>',16),s=(0,i.createTextVNode)(""),p=(0,i.createVNode)("code",null,[(0,i.createVNode)("template",null,[(0,i.createTextVNode)('\n<template>\n    <div :class="containerClass" @click="onWrapperClick">\n        <AppTopBar @menu-toggle="onMenuToggle" />\n\n        <transition name="layout-sidebar">\n            <div :class="sidebarClass" @click="onSidebarClick" v-show="isSidebarVisible()">\n                <div class="layout-logo">\n                    <inertia-link :href=route("/")>\n                        <img alt="Logo" :src="logo" />\n                    </inertia-link>\n                </div>\n\n                <AppProfile />\n                <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />\n            </div>\n        </transition>\n\n        <div class="layout-main">\n            <slot />\n        </div>\n\n        <AppConfig :layoutMode="layoutMode" :layoutColorMode="layoutColorMode" @layout-change="onLayoutChange" @layout-color-change="onLayoutColorChange"/>\n\n        <AppFooter />\n    </div>\n</template>\n')]),(0,i.createTextVNode)("\n")],-1),u=(0,i.createVNode)("h4",null,"Menu",-1),d=(0,i.createVNode)("p",null,[(0,i.createTextVNode)(" Menu is a separate component defined in "),(0,i.createVNode)("i",null,"AppMenu.vue"),(0,i.createTextVNode)(" file based on PrimeNG MenuModel API. In order to define the menuitems, navigate to data section of "),(0,i.createVNode)("i",null,"App.vue"),(0,i.createTextVNode)(" file and define your own model as a nested structure using the menu property. Here is the menu component from the demo application. Notice that menu object is bound to the model property of AppMenu component as shown above. ")],-1),m=(0,i.createTextVNode)(""),f=(0,i.createVNode)("code",null,"\ndata() {\n    return {\n        menu : [\n            {label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'},\n            {\n                label: 'UI KIT', icon: 'pi pi-fw pi-sitemap',\n                items: [\n                    {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout'},\n                    {label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input'},\n                    {label: \"Float Label\", icon: \"pi pi-fw pi-bookmark\", to: \"/floatlabel\"},\n                    {label: \"Invalid State\", icon: \"pi pi-fw pi-exclamation-circle\", to: \"invalidstate\"},\n                    {label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button'},\n                    {label: 'Table', icon: 'pi pi-fw pi-table', to: '/table'},\n                    {label: 'List', icon: 'pi pi-fw pi-list', to: '/list'},\n                    {label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree'},\n                    {label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel'},\n                    {label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay'},\n                    {label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu'},\n                    {label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages'},\n                    {label: 'File', icon: 'pi pi-fw pi-file', to: '/file'},\n                    {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart'},\n                    {label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc'},\n                ]\n            },\n            {\n                label: \"Utilities\", icon:'pi pi-fw pi-globe',\n                items: [\n                    {label: 'Display', icon:'pi pi-fw pi-desktop', to:'/display'},\n                    {label: 'Elevation', icon:'pi pi-fw pi-external-link', to:'/elevation'},\n                    {label: 'Flexbox', icon:'pi pi-fw pi-directions', to:'/flexbox'},\n                    {label: 'Icons', icon:'pi pi-fw pi-search', to:'/icons'},\n                    {label: 'Grid System', icon:'pi pi-fw pi-th-large', to:'/grid'},\n                    {label: 'Spacing', icon:'pi pi-fw pi-arrow-right', to:'/spacing'},\n                    {label: 'Typography', icon:'pi pi-fw pi-align-center', to:'/typography'},\n                    {label: 'Text', icon:'pi pi-fw pi-pencil', to:'/text'},\n                ]\n            },\n            {\n                label: 'Pages', icon: 'pi pi-fw pi-clone',\n                items: [\n                    {label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: '/crud'},\n                    {label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', to: '/calendar'},\n                    {label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/timeline'},\n                    {label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty'}\n                ]\n            },\n            {\n                label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',\n                items: [\n                    {\n                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',\n                        items: [\n                            {\n                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',\n                                items: [\n                                    {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},\n                                ]\n                            },\n                            {\n                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',\n                                items: [\n                                    {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark'}\n                                ]\n                            },\n                        ]\n                    },\n                    {\n                        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',\n                        items: [\n                            {\n                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',\n                                items: [\n                                    {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark'},\n                                ]\n                            },\n                            {\n                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',\n                                items: [\n                                    {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark'}\n                                ]\n                            }\n                        ]\n                    }\n                ]\n            },\n            {label: 'Documentation', icon: 'pi pi-fw pi-question', command: () => {window.location = \"#/documentation\"}},\n            {label: 'View Source', icon: 'pi pi-fw pi-search', command: () => {window.location = \"https://github.com/primefaces/sigma\"}}\n        ]\n    }\n}\n\n",-1),b=(0,i.createVNode)("h4",null,"Dependencies",-1),h=(0,i.createVNode)("p",null," Dependencies of Sigma are listed below and needs to be added to package.json. Sigma has no direct dependency, even PrimeVue components are an optional dependency.. ",-1),v=(0,i.createTextVNode)(""),y=(0,i.createVNode)("code",null,'\n{\n    "primevue": "3.3.4",              //optional: PrimeVue components\n    "primeicons": "4.1.0",            //optional: Icons\n    "primeflex": "2.0.0",             //optional: Grid system\n}\n\n',-1),g=(0,i.createVNode)("h4",null,"Integration with an Existing CLI Project",-1),k=(0,i.createVNode)("p",null,"To setup Sigma in an existing project, follow the steps below;",-1),V=(0,i.createVNode)("ul",null,[(0,i.createVNode)("li",null,[(0,i.createTextVNode)(" Copy the "),(0,i.createVNode)("i",null,"public/assets"),(0,i.createTextVNode)(" folder to your projects folder with the same name ")]),(0,i.createVNode)("li",null,[(0,i.createTextVNode)(" Copy all "),(0,i.createVNode)("i",null,"src/App*.vue"),(0,i.createTextVNode)(" files to the src folder of your application. ")])],-1),w=(0,i.createVNode)("p",null,"Install PrimeVue",-1),C=(0,i.createVNode)("code",null,"\nnpm install primevue@latest --save\nnpm install\tprimeicons@latest --save\nnpm install primeflex@latest --save\n\n",-1),N=(0,i.createVNode)("h4",null,"Saga Theme",-1),M=(0,i.createVNode)("p",null," Sigma uses the free Saga-Blue which is a free theme distributed within PrimeVue, however it can be used with any PrimeVue theme as well. ",-1),S=(0,i.createVNode)("h4",null,"SASS Variables",-1),x=(0,i.createVNode)("p",null,[(0,i.createTextVNode)(" In case you'd like to customize the layout variables, open "),(0,i.createVNode)("i",null,"_variables.scss"),(0,i.createTextVNode)(" file under src/layout folder. Saving the changes will be reflected instantly at your browser. ")],-1),B=(0,i.createVNode)("h3",null,"src/assets/_variables.scss",-1),T=(0,i.createTextVNode)(""),I=(0,i.createVNode)("code",null,"\n/* General */\n$fontSize:14px;\n$bodyBgColor:#edf0f5;\n$textColor:#333333;\n$textSecondaryColor:#707070;\n$borderRadius:3px;\n$dividerColor:#e3e3e3;\n$transitionDuration:.2s;\n$maskBgColor:#424242;\n$focusShadowColor:#8dcdff;\n\n\n/* Menu */\n$menuitemBadgeBgColor:#007be5;\n$menuitemBadgeColor:#ffffff;\n$submenuFontSize:13px;\n\n/* Menu Dark*/\n$menuDarkBgColorFirst:#4d505b;\n$menuDarkBgColorLast:#3b3e47;\n$menuitemDarkColor:#ffffff;\n$menuitemDarkHoverColor:#0388e5;\n$menuitemDarkActiveColor:#0388e5;\n$menuitemDarkActiveBgColor:#2e3035;\n$menuitemDarkBorderColor:rgba(52, 56, 65, 0.6);\n\n/* Menu Light*/\n$menuBgColorFirst:#f3f4f9;\n$menuBgColorLast:#d7dbe8;\n$menuitemColor:#232428;\n$menuitemHoverColor:#0388e5;\n$menuitemActiveColor:#0388e5;\n$menuitemActiveBgColor:#ffffff;\n$menuitemBorderColor:rgba(207, 211, 224, 0.6);\n\n/* Topbar */\n$topbarLeftBgColor:#0388E5;\n$topbarRightBgColor:#07BDF4;\n$topbarItemBadgeBgColor:#ef6262;\n$topbarItemBadgeColor:#ffffff;\n$topbarItemColor:#ffffff;\n$topbarItemHoverColor:#77c7ff;\n$topbarSearchInputBorderBottomColor:#ffffff;\n$topbarSearchInputColor:#ffffff;\n\n/* Footer */\n$footerBgColor:#ffffff;\n\n",-1),A=(0,i.createVNode)("h4",null,"Menu Modes",-1),L=(0,i.createVNode)("p",null,[(0,i.createTextVNode)(" Menu has 2 modes, "),(0,i.createVNode)("i",null,"static"),(0,i.createTextVNode)(" and "),(0,i.createVNode)("i",null,"overlay"),(0,i.createTextVNode)(". Main layout container element in App.vue is used to define which mode to use by adding specific classes. List below indicates the style classes for each mode. ")],-1),$=(0,i.createVNode)("ul",null,[(0,i.createVNode)("li",null,'Static: "layout-wrapper layout-static"'),(0,i.createVNode)("li",null,'Overlay: "layout-wrapper layout-overlay"')],-1),D=(0,i.createVNode)("p",null," For example to create an overlay menu, the div element should be in following form; ",-1),_=(0,i.createTextVNode)(""),F=(0,i.createVNode)("code",null,[(0,i.createVNode)("template",null,[(0,i.createTextVNode)('<div class="layout-wrapper layout-static">')]),(0,i.createTextVNode)("\n")],-1),P=(0,i.createVNode)("p",null," It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample application has an example implementation of such use case with a computed property. Refer to App.vue for an example. ",-1),U=(0,i.createVNode)("h4",null,"Menu Color Scheme",-1),E=(0,i.createVNode)("p",null,[(0,i.createTextVNode)(' There are two alternatives as the menu colors schemes; "light" and "dark". A color scheme is applied using the '),(0,i.createVNode)("i",null,"layout-sidebar-light"),(0,i.createTextVNode)(" or "),(0,i.createVNode)("i",null,"layout-sidebar-dark"),(0,i.createTextVNode)(" to the sidebar element. ")],-1),q=(0,i.createVNode)("b",null,"Dark Menu",-1),O=(0,i.createTextVNode)(""),R=(0,i.createVNode)("code",null,[(0,i.createVNode)("template",null,[(0,i.createTextVNode)('<div class="layout-sidebar layout-sidebar-dark">')]),(0,i.createTextVNode)("\n")],-1),G=(0,i.createVNode)("b",null,"Light Menu",-1),j=(0,i.createTextVNode)(""),H=(0,i.createVNode)("code",null,[(0,i.createVNode)("template",null,[(0,i.createTextVNode)('<div class="layout-sidebar layout-sidebar-light">')]),(0,i.createTextVNode)("\n")],-1),Z=(0,i.createVNode)("h4",null,"Grid CSS",-1),z=(0,i.createVNode)("p",null,[(0,i.createTextVNode)(" Sigma uses PrimeFlex CSS Grid throughout the samples. Although any grid library can be used, we recommend using PrimeFlex as your layout framework as it is well tested and supported by PrimeVue. PrimeFlex is available at "),(0,i.createVNode)("a",{href:"https://www.npmjs.com/package/primeflex"},"NPM"),(0,i.createTextVNode)(". ")],-1),W=(0,i.createVNode)("h4",null,"Customizing Styles",-1),K=(0,i.createVNode)("p",null,[(0,i.createTextVNode)(" It is suggested to write your customizations in "),(0,i.createVNode)("i",null,"_overrides.scss"),(0,i.createTextVNode)(" file instead of adding them to the scss files under sass folder to avoid maintenance issues after an update. ")],-1);(0,i.popScopeId)();var J=a((function(e,t,o,a,J,Q){var X=(0,i.resolveComponent)("inertia-head"),Y=(0,i.resolveDirective)("code");return(0,i.openBlock)(),(0,i.createBlock)(i.Fragment,null,[(0,i.createVNode)(X,{title:"Documentation"}),(0,i.createVNode)("div",n,[(0,i.createVNode)("div",l,[(0,i.createVNode)("div",r,[c,(0,i.withDirectives)((0,i.createVNode)("pre",null,[s,p],512),[[Y]]),u,d,(0,i.withDirectives)((0,i.createVNode)("pre",null,[m,f],512),[[Y,void 0,void 0,{script:!0}]]),b,h,(0,i.withDirectives)((0,i.createVNode)("pre",null,[v,y],512),[[Y,void 0,void 0,{script:!0}]]),g,k,V,w,(0,i.withDirectives)((0,i.createVNode)("pre",null,[C],512),[[Y]]),N,M,S,x,B,(0,i.withDirectives)((0,i.createVNode)("pre",null,[T,I],512),[[Y,void 0,void 0,{css:!0}]]),A,L,$,D,(0,i.withDirectives)((0,i.createVNode)("pre",null,[_,F],512),[[Y]]),P,U,E,q,(0,i.withDirectives)((0,i.createVNode)("pre",null,[O,R],512),[[Y]]),G,(0,i.withDirectives)((0,i.createVNode)("pre",null,[j,H],512),[[Y]]),Z,z,W,K])])])],64)}));const Q={layout:o(1140).Z};var X=o(3379),Y=o.n(X),ee=o(7994),te={insert:"head",singleton:!1};Y()(ee.Z,te);ee.Z.locals;Q.render=J,Q.__scopeId="data-v-2009871f";const oe=Q}}]);