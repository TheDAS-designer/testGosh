(function(e){function t(t){for(var a,i,o=t[0],s=t[1],p=t[2],c=0,d=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(d.length)d.shift()();return u.push.apply(u,p||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r={app:0},u=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-03b931e4":"127a090d","chunk-2e5093c6":"b10cf12c","chunk-49e4e1d4":"c40c0af5","chunk-4bf74bb3":"d0649cea","chunk-638277e2":"a720a373"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-03b931e4":1,"chunk-2e5093c6":1,"chunk-49e4e1d4":1,"chunk-4bf74bb3":1,"chunk-638277e2":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-03b931e4":"0b925d8c","chunk-2e5093c6":"b33bee71","chunk-49e4e1d4":"b59e9712","chunk-4bf74bb3":"c2a11983","chunk-638277e2":"4bdfa441"}[e]+".css",r=s.p+a,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var p=u[o],c=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(c===a||c===r))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){p=d[o],c=p.getAttribute("data-href");if(c===a||c===r)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete i[e],l.parentNode.removeChild(l),n(u)},l.href=r;var y=document.getElementsByTagName("head")[0];y.appendChild(l)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=u);var p,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var d=new Error;p=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}r[e]=void 0}};var l=setTimeout((function(){p({type:"timeout",target:c})}),12e4);c.onerror=c.onload=p,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],c=p.push.bind(p);p.push=t,p=p.slice();for(var d=0;d<p.length;d++)t(p[d]);var l=c;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1bbf":function(e,t,n){},3524:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("25f0");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],u=(n("5c0b"),n("2877")),o={},s=Object(u["a"])(o,i,r,!1,null,null,null),p=s.exports,c=(n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app",on:{click:e.leave}},[a("div",{ref:"header",staticClass:"header",class:{"is-fixed":e.isFixed}},[a("div",[e.showLogo?a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"logo",attrs:{src:n("fef8")}})]):a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.back()}}},[a("img",{staticClass:"back",attrs:{src:n("6547a")}})])],1),a("div",[a("div",{staticClass:"flex"},[a("div",{staticClass:"menu-container",on:{click:function(t){return t.stopPropagation(),e.reverse.apply(null,arguments)}}},[a("a-icon",{staticClass:"header-icon",attrs:{type:"menu"}}),a("ul",{staticClass:"header-menu animated"},[a("li",{on:{click:function(t){return e.jump(e.docs_url)}}},[e._v("Docs")]),a("li",{on:{click:function(t){return e.jump(e.dework_url)}}},[e._v("Dework")]),a("li",{on:{click:function(t){return e.jump(e.uniswap_url)}}},[e._v("Uniswap")])])],1)])])]),a("div",{staticClass:"content"},[a("router-view")],1),e.showLogo?a("div",{staticClass:"footer"},[a("s-footer")],1):e._e()])},l=[],y=n("fd2d"),m={name:"Layout",components:{SFooter:y["a"]},data:function(){return{active:!1,isFixed:!1,docs_url:"https://simplegosh.gitbook.io/gosh-docs/",dework_url:"https://app.dework.xyz/gosh-realm",uniswap_url:"https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xdc732972811d25de61808b3d6e0d2ac44a7f036f&chain=kovan"}},computed:{showLogo:function(){return"/"===this.$route.path}},mounted:function(){var e=this;window.addEventListener("scroll",(function(){var t=document.documentElement.scrollTop||document.body.scrollTop,n=e.$refs.header.getBoundingClientRect();e.isFixed=t>=n.height}))},methods:{reverse:function(){this.active=!this.active},jump:function(e){window.open(e,"_blank")},leave:function(){this.active=!1},back:function(){this.$route&&"/vest"==this.$route.path?this.$router.push({name:"Bond"}):this.$router.go(-1)}}},f=m,b=(n("cd7a"),Object(u["a"])(f,d,l,!1,null,"25caf1c7",null)),h=b.exports;a["a"].use(c["a"]);var v=c["a"].prototype.push;c["a"].prototype.push=function(e){return v.call(this,e).catch((function(e){return e}))};var w=[{path:"/",name:"Layout",component:h,children:[{name:"Index",path:"",component:function(){return n.e("chunk-03b931e4").then(n.bind(null,"d504"))}},{name:"Bond",path:"bond",component:function(){return n.e("chunk-638277e2").then(n.bind(null,"baf7"))},meta:{index:"Index"}},{name:"MyBond",path:"mybond",component:function(){return n.e("chunk-49e4e1d4").then(n.bind(null,"ee45"))},meta:{index:"Bond"}},{name:"BondDetail",path:"bonddetail",component:function(){return n.e("chunk-4bf74bb3").then(n.bind(null,"c5b0"))},meta:{index:"Bond"}},{name:"Vest",path:"vest",component:function(){return n.e("chunk-2e5093c6").then(n.bind(null,"fcf9"))},meta:{index:"BondDetail"}}]}],T=new c["a"]({mode:"hash",base:"",routes:w}),g=T,x=n("1da1"),k=(n("159b"),n("96cf"),n("2f62")),_=n("901e"),C=n.n(_),A=n("60fe");a["a"].use(k["a"]);var M=A["e"],P=new k["a"].Store({state:{isConnected:!1,web3:!1,contracts:!1,account:!1,bondContracts:!1,chainId:1,bondsInfo:!1,currentBond:!1,bondPrice:!1},mutations:{setConnect:function(e,t){e.isConnected=t},setWeb3:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.web3){n.next=2;break}return n.abrupt("return");case 2:e.web3=t,t.currentProvider.on("accountsChanged",function(){var n=Object(x["a"])(regeneratorRuntime.mark((function n(a){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return 0===a.length&&(e.isConnected=!1),e.web3=t,n.next=4,e.web3.eth.requestAccounts();case 4:e.account=n.sent[0];case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),t.currentProvider.on("chainChanged",function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(n){var a,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=C()(n).toNumber(),console.log("network id:",a),a===M){t.next=19;break}if(t.t0=e.web3.eth,!t.t0){t.next=10;break}return t.next=7,e.web3.eth.net.getId();case 7:t.t1=t.sent,t.t2=A["e"],t.t0=t.t1!==t.t2;case 10:if(!t.t0){t.next=15;break}if(t.t3=window.ethereum,!t.t3){t.next=15;break}return t.next=15,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x"+A["e"].toString(16)}]}).then((function(){console.log("Network changed")})).catch(function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x"+A["e"].toString(16),chainName:A["b"][A["e"]],nativeCurrency:{name:"CHAIN[SUPPORT_CHAIN] ETH",symbol:"ETH",decimals:18},rpcUrls:["https://".concat(A["b"][A["e"]],".infura.io/v3/")],blockExplorerUrls:["https://".concat(A["b"][A["e"]],".etherscan.io/")]}]}).then((function(){console.log("Network added")})).catch((function(e){}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 15:e.isConnected=!1,g.push("/bond"),t.next=33;break;case 19:return console.log("state.contracts",e.contracts),i={},r={},A["a"].forEach((function(t){i[t.tokenAddress.toString()]=new e.web3.eth.Contract(t.tokenABI,t.tokenAddress),i[t.bondAddress.toString()]=new e.web3.eth.Contract(t.bondABI,t.bondAddress),i[t.outputAddress.toString()]=new e.web3.eth.Contract(t.tokenABI,t.outputAddress),r[t.bondAddress.toString()]={contract:new e.web3.eth.Contract(t.bondABI,t.bondAddress),tokenAddress:t.tokenAddress,tokenName:t.tokenName,outputName:t.outputName,outputAddress:t.outputAddress}})),console.log("bondContracts",r),e.contracts=i,e.bondContracts=r,t.next=28,e.web3.eth.requestAccounts();case 28:return e.account=t.sent[0],t.next=31,e.web3.eth.getChainId();case 31:e.chainId=t.sent,e.web3.currentProvider.selectedAddress&&(e.isConnected=!0);case 33:return t.abrupt("return","123");case 34:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 5:case"end":return n.stop()}}),n)})))()},setContracts:function(e,t){e.contracts&&(e.contracts=t)},setAccount:function(e,t){e.account||(e.account=t)},setBondContracts:function(e,t){e.bondContracts=t},setBondsInfo:function(e,t){e.bondsInfo=t},setCurrentBond:function(e,t){e.currentBond=t},setBondPrice:function(e,t){e.bondPrice=t}},actions:{},modules:{}});n("f284"),n("ac1f"),n("00b4");function B(e){e=e||{};var t,n,a,i=e.basePc||1920,r=e.baseMobile||750,u=e.maxPc||3840,o=e.minPc||1e3,s=e.maxMobile||750,p=e.minMobile||320,c=e.pcScale||1,d=e.mobileScale||1,l=e.mobileClass||"adapter-mobile",y=e.pcClass||"adapter-pc";function m(){t=window.innerWidth,f()?(document.documentElement.classList.add(l),document.documentElement.classList.remove(y),n=r,a=d,window.innerWidth>s?t=s:window.innerWidth<p&&(t=p)):(document.documentElement.classList.add(y),document.documentElement.classList.remove(l),n=i,a=c,window.innerWidth>u?t=u:window.innerWidth<o&&(t=o)),document.documentElement.style.fontSize=t/n*100*a+"px"}function f(){return/(iphone|ipad|android|ipod|winodws phone|symbianos)/i.test(window.navigator.userAgent)}window.addEventListener("resize",m),m()}n("3524");var E=n("f933"),O=n("0c63"),S=n("ed3b"),j=n("b558"),I=n("f64c"),N=(n("202f"),n("a5d8"),n("323e")),L=n.n(N),R=["/","/bond"];g.beforeEach((function(e,t,n){L.a.start(),R.indexOf(e.path)>-1||P.state.isConnected?n():(L.a.done(),n(t.path))})),g.afterEach((function(e,t){L.a.done()}));var D=n("b4c9"),F=n.n(D);a["a"].use(E["a"]),a["a"].use(O["a"]),a["a"].use(S["a"]),a["a"].use(F.a),a["a"].use(j["a"]),a["a"].prototype.$message=I["a"],C.a.config({EXPONENTIAL_AT:30}),C.a.prototype.toHexString=function(){return"0x"+this.toString(16)},B({maxPc:8e3,minPc:960}),a["a"].config.productionTip=!1,new a["a"]({router:g,store:P,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"60fe":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"f",(function(){return u})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return p})),n.d(t,"e",(function(){return c}));var a=n("e94d"),i=n("bf15"),r=[{chainId:1,tokenAddress:"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",tokenABI:a,bondAddress:"0x9A0d939a4961CeC29f255C97862D1596A07Eeeb2",bondABI:i,tokenName:"ethereum",outputName:"gosh-realm",outputAddress:"0xdc732972811d25de61808b3d6e0d2ac44a7f036f"}],u={},o="0xdc732972811d25de61808b3d6e0d2ac44a7f036f",s="gosh-realm",p={1:"mainnet",42:"kovan"},c=1},6291:function(e,t,n){"use strict";n("a45b")},"6547a":function(e,t,n){e.exports=n.p+"img/back.59b114a3.svg"},"9c0c":function(e,t,n){},a45b:function(e,t,n){},bf15:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_customTreasury","type":"address"},{"internalType":"address","name":"_principalToken","type":"address"},{"internalType":"address","name":"_olympusTreasury","type":"address"},{"internalType":"address","name":"_subsidyRouter","type":"address"},{"internalType":"address","name":"_initialOwner","type":"address"},{"internalType":"address","name":"_olympusDAO","type":"address"},{"internalType":"uint256[]","name":"_tierCeilings","type":"uint256[]"},{"internalType":"uint256[]","name":"_fees","type":"uint256[]"},{"internalType":"bool","name":"_feeInPayout","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"deposit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"payout","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"expires","type":"uint256"}],"name":"BondCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"internalPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"debtRatio","type":"uint256"}],"name":"BondPriceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"payout","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"remaining","type":"uint256"}],"name":"BondRedeemed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"initialBCV","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBCV","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"adjustment","type":"uint256"},{"indexed":false,"internalType":"bool","name":"addition","type":"bool"}],"name":"ControlVariableAdjustment","type":"event"},{"inputs":[],"name":"adjustment","outputs":[{"internalType":"bool","name":"add","type":"bool"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"buffer","type":"uint256"},{"internalType":"uint256","name":"lastBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bondInfo","outputs":[{"internalType":"uint256","name":"payout","type":"uint256"},{"internalType":"uint256","name":"vesting","type":"uint256"},{"internalType":"uint256","name":"lastBlock","type":"uint256"},{"internalType":"uint256","name":"truePricePaid","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bondPrice","outputs":[{"internalType":"uint256","name":"price_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_olympusTreasury","type":"address"}],"name":"changeOlympusTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentOlympusFee","outputs":[{"internalType":"uint256","name":"currentFee_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"debtDecay","outputs":[{"internalType":"uint256","name":"decay_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"debtRatio","outputs":[{"internalType":"uint256","name":"debtRatio_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_maxPrice","type":"uint256"},{"internalType":"address","name":"_depositor","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_controlVariable","type":"uint256"},{"internalType":"uint256","name":"_vestingTerm","type":"uint256"},{"internalType":"uint256","name":"_minimumPrice","type":"uint256"},{"internalType":"uint256","name":"_maxPayout","type":"uint256"},{"internalType":"uint256","name":"_maxDebt","type":"uint256"},{"internalType":"uint256","name":"_initialDebt","type":"uint256"}],"name":"initializeBond","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastDecay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paySubsidy","outputs":[{"internalType":"uint256","name":"payoutSinceLastSubsidy_","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"payoutFor","outputs":[{"internalType":"uint256","name":"_payout","type":"uint256"},{"internalType":"uint256","name":"_fee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_depositor","type":"address"}],"name":"pendingPayoutFor","outputs":[{"internalType":"uint256","name":"pendingPayout_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_depositor","type":"address"}],"name":"percentVestedFor","outputs":[{"internalType":"uint256","name":"percentVested_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"policy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_depositor","type":"address"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_addition","type":"bool"},{"internalType":"uint256","name":"_increment","type":"uint256"},{"internalType":"uint256","name":"_target","type":"uint256"},{"internalType":"uint256","name":"_buffer","type":"uint256"}],"name":"setAdjustment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum CustomGOSHBond.PARAMETER","name":"_parameter","type":"uint8"},{"internalType":"uint256","name":"_input","type":"uint256"}],"name":"setBondTerms","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"terms","outputs":[{"internalType":"uint256","name":"controlVariable","type":"uint256"},{"internalType":"uint256","name":"vestingTerm","type":"uint256"},{"internalType":"uint256","name":"minimumPrice","type":"uint256"},{"internalType":"uint256","name":"maxPayout","type":"uint256"},{"internalType":"uint256","name":"maxDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPayoutGiven","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPrincipalBonded","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferManagment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"trueBondPrice","outputs":[{"internalType":"uint256","name":"price_","type":"uint256"}],"stateMutability":"view","type":"function"}]')},cd7a:function(e,t,n){"use strict";n("1bbf")},e94d:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},f284:function(e,t,n){},fd2d:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("a",{attrs:{href:"https://discord.gg/P8EvFAe9yr",target:"_blank"}},[n("svg",{staticClass:"svg-w",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40.89 31.17"}},[n("path",{staticClass:"cls-svg",attrs:{d:"M141.1,75a33.27,33.27,0,0,0-8.32-2.58.11.11,0,0,0-.13.06,23.23,23.23,0,0,0-1,2.13,31.18,31.18,0,0,0-9.35,0,22.13,22.13,0,0,0-1.05-2.13.12.12,0,0,0-.13-.06A33.35,33.35,0,0,0,112.75,75a.1.1,0,0,0,0,0,34.49,34.49,0,0,0-6,23.28.14.14,0,0,0,0,.1,34.22,34.22,0,0,0,10.21,5.16.15.15,0,0,0,.14,0,23.67,23.67,0,0,0,2.09-3.4.13.13,0,0,0-.07-.18,21.69,21.69,0,0,1-3.19-1.52.13.13,0,0,1,0-.22c.21-.16.43-.32.63-.49a.13.13,0,0,1,.13,0,24.17,24.17,0,0,0,20.56,0,.13.13,0,0,1,.13,0c.2.17.42.33.64.49a.14.14,0,0,1,0,.22,20.29,20.29,0,0,1-3.19,1.52.14.14,0,0,0-.07.18,28.67,28.67,0,0,0,2.09,3.4.15.15,0,0,0,.14,0,34.08,34.08,0,0,0,10.23-5.16.14.14,0,0,0,0-.1,34.22,34.22,0,0,0-6-23.27s0,0-.06,0M120.15,93.67a4.15,4.15,0,0,1,0-8.24,4.15,4.15,0,0,1,0,8.24m13.59,0a4.15,4.15,0,1,1,3.68-4.12,3.93,3.93,0,0,1-3.68,4.12",transform:"translate(-106.49 -72.41)"}})])]),n("a",{attrs:{href:"https://twitter.com/GOSHRealm",target:"_blank"}},[n("svg",{staticClass:"svg-w",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 38.35 31.17"}},[n("path",{staticClass:"cls-svg",attrs:{d:"M152.81,76.1a15.52,15.52,0,0,1-4.52,1.24A7.81,7.81,0,0,0,151.75,73a15.71,15.71,0,0,1-5,1.91,7.87,7.87,0,0,0-13.62,5.38,7.64,7.64,0,0,0,.21,1.8,22.35,22.35,0,0,1-16.22-8.22,7.79,7.79,0,0,0-1.07,4,7.87,7.87,0,0,0,3.5,6.55,7.79,7.79,0,0,1-3.56-1v.1a7.86,7.86,0,0,0,6.31,7.71,7.84,7.84,0,0,1-2.07.28,8,8,0,0,1-1.48-.14,7.88,7.88,0,0,0,7.35,5.46,15.79,15.79,0,0,1-9.77,3.37,16.51,16.51,0,0,1-1.88-.11,22.29,22.29,0,0,0,12.06,3.54c14.47,0,22.39-12,22.39-22.39,0-.35,0-.68,0-1A16,16,0,0,0,152.81,76.1Z",transform:"translate(-114.46 -72.41)"}})])])])},i=[],r={name:"SFooter"},u=r,o=(n("6291"),n("2877")),s=Object(o["a"])(u,a,i,!1,null,"cbdb4cf4",null);t["a"]=s.exports},fef8:function(e,t,n){e.exports=n.p+"img/logo.db27a524.svg"}});