webpackJsonp([1],[,,,,,,,,,,,,,,function(t,e,L){"use strict";var s=L(1),i=L(64),a=L(58),M=L.n(a),u=L(59),o=L.n(u);s.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Home",component:M.a},{path:"/produtos",name:"Produtos",component:o.a}]})},function(t,e,L){"use strict";var s=L(1),i=L(6),a=L(66),M=L.n(a),u=L(68),o=L.n(u);s.a.use(i.b);var r=new i.b.Store({plugins:[M()({paths:["cart"]})],state:{products:o.a,cart:[]},mutations:{addToCart:function(t,e){t.cart.push(e)},removeFromCart:function(t,e){t.cart.splice(e,1)}}});e.a=r},function(t,e){},function(t,e){},function(t,e,L){var s=L(0)(L(21),L(62),null,null,null);t.exports=s.exports},,function(t,e,L){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=L(1),i=L(18),a=L.n(i),M=L(14),u=L(15),o=L(17),r=(L.n(o),L(19)),n=L.n(r),j=L(16);L.n(j);s.a.config.productionTip=!1,s.a.use(n.a),new s.a({el:"#app",router:M.a,store:u.a,render:function(t){return t(a.a)}})},function(t,e,L){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=L(57),i=L.n(s);e.default={name:"app",data:function(){return{cartOpen:!1}},methods:{toggleCart:function(){this.cartOpen=!this.cartOpen}},components:{ASideCart:i.a},created:function(){var t=this;this.$store.subscribe(function(e,L){"addToCart"===e.type&&(t.cartOpen=!0)})}}},function(t,e,L){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=L(7),i=L.n(s),a=L(6);e.default={methods:{closeCart:function(){this.$emit("close-cart")},formattedPrice:function(t){return"R$ "+t.toFixed(2).replace(/\./,",")},removeFromCart:function(t){this.$store.commit("removeFromCart",t)}},computed:i()({},L.i(a.a)(["cart"]),{totalPrice:function(){return this.cart.reduce(function(t,e){return t+e.price},0)}})}},function(t,e,L){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=L(53),i=L.n(s);e.default={name:"home",data:function(){return{readme:i.a}}}},function(t,e,L){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=L(7),i=L.n(s),a=L(6);e.default={name:"produtos",data:function(){return{orderBy:{selected:null,items:[{label:"Menor preço",value:"price-lb"},{label:"Maior preço",value:"price-bl"},{label:"Alfabética",value:null}]},productsPerPage:{selected:null,items:[4,8,12]},page:1}},methods:{resetPagination:function(){this.page=1},formattedPrice:function(t){return t.toFixed(2).replace(/\./,",")},addToCart:function(t){this.$store.commit("addToCart",t)}},computed:i()({pageStartEnd:function(){var t=this.selectedProductsPerPage*this.page+1-this.selectedProductsPerPage,e=this.selectedProductsPerPage*this.page;return e>this.totalProducts&&(e=this.totalProducts),{start:t,end:e}},selectedProductsPerPage:function(){return this.productsPerPage.selected||8},totalPages:function(){return Math.ceil(this.totalProducts/this.selectedProductsPerPage)},totalProducts:function(){return this.products.length}},L.i(a.a)(["products"]),{filteredProducts:function(){var t=this;return this.products.sort(function(e,L){return"price-lb"===t.orderBy.selected?e.price-L.price:"price-bl"===t.orderBy.selected?L.price-e.price:e.title>L.title?1:-1}).slice(this.pageStartEnd.start-1,this.pageStartEnd.end)}})}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports='<h1 id="shopping-cart-demo">Shopping Cart Demo</h1>\n<p>Aplicação de demonstração de um simples fluxo de adição e remoção de produtos de um carrinho de compras, juntamente com ordenação e paginação. Funcionando <strong>completamente</strong> no browser, sem utilizar APIs ou servidores externos. Todo o fluxo foi desenvolvido utilizando apenas as ferramentas disponíveis nos navegadores.</p>\n<p>Esta aplicação também mantém sessão com o carrinho, para poder retomar ao fechar a página e individual para cada usuário (navegador, neste caso), também sem utilizar servidores externos para isso. Clique em <strong>Produtos</strong> acima para testar.</p>\n<h2 id="execu-o-local">Execução local</h2>\n<p>O repositório pode ser acessado abaixo.</p>\n<p><a href="https://github.com/matheusgrieger/shopping-cart">Repositório no GitHub</a></p>\n<p>Para executar e visualizar localmente, bem como desenvolver, execute os passos abaixo:</p>\n<ol>\n<li>Clone o repositório em uma pasta</li>\n<li>Instale o NodeJS caso não esteja instalado</li>\n<li>Abra um console/terminal na pasta do repositório clonado</li>\n<li>Execute o comando <code>npm install</code> (ou <code>yarn install</code> caso use Yarn)</li>\n<li>Após finalizar, execute o comando <code>npm run dev</code> e uma nova aba do navegador será aberta com a aplicação em modo de desenvolvimento e atualização automática</li>\n</ol>\n'},,,function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyMjkuNiAxMjcuNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjI5LjYgMTI3LjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGQ9Ik0xNDguMyw0OS45YzEwLjEsMi4zLDE2LjMsMC4zLDIwLjEtNi4zYzMuNy02LjUsMi44LTE0LjEtMi4yLTE5LjRjLTQuNi00LjctMTEuNC01LjctMTcuNS0yLjVjLTcuMiwzLjgtOS43LDEwLjYtNy41LDIwLjkNCgljLTEuMiwwLjYtMi40LDEuMy0zLjYsMS45Yy0yLjktMS43LTMuMi0xMS43LTAuOS0xNy4zYzMuOS05LjIsMTQuMi0xNC4zLDIzLjgtMTEuOGMxMC43LDIuOCwxNi42LDExLjksMTUuMSwyMy4xDQoJYy0xLjQsMTEtMTAsMTcuNC0yMy41LDE3LjZjLTIuNSwzLjMtMS44LDUuNCwxLjgsNy44YzIxLjQsMTQuOSw0Mi43LDMwLjEsNjQsNDUuM2MzLjMsMi40LDYuNSw1LjMsOC45LDguNmMxLjYsMi4xLDEuNyw1LjMsMi41LDgNCgljLTIuNiwwLjYtNS4yLDEuOC03LjgsMS43Yy0yLjctMC4xLTUuNS0xLjItOC4yLTIuMWMtNTMtMTYuNi0xMDYtMzMuMS0xNTktNDkuN2MtMi43LTAuOC01LjQtMS44LTcuOC0zLjNjLTEuNC0wLjktMy4xLTMuMi0yLjktNC41DQoJYzAuMy0xLjcsMi4yLTQuMSwzLjctNC40YzcuMy0xLjUsMTQuNy0zLjIsMjIuMS0zLjNjMjIuOC0wLjUsNDUuNi0wLjYsNjguNC0wLjNjNS4zLDAuMSw4LjUtMC44LDkuMS02LjUNCglDMTQ3LjIsNTIuMywxNDcuOCw1MS4yLDE0OC4zLDQ5Ljl6IE00OS43LDY3LjJjMCwwLjcsMCwxLjQsMCwyLjFjNTcuOSwxOC4xLDExNS44LDM2LjIsMTczLjcsNTQuMmMwLjMtMC42LDAuNi0xLjEsMC45LTEuNw0KCWMtMy4yLTMtNi4yLTYuNC05LjctOWMtMjEuOS0xNS43LTQ0LTMxLjItNjYuMS00Ni42Yy0xLjMtMC45LTMuMS0xLjQtNC42LTEuNGMtMjUsMC01MC0wLjEtNzQuOSwwLjJDNjIuNCw2NSw1Niw2Ni40LDQ5LjcsNjcuMnoNCgkgTTE4Ni4zLDQ5LjNjMCw2LjksMCwxMywwLDIxYy0yLjMtMS43LTQuNy0yLjYtNC43LTMuNmMtMC4yLTE2LjgtMC4yLTMzLjYtMC4yLTUwLjdjMS44LDAsMy4yLDAsNC44LDBjMC4xLDEuOCwwLjIsMy40LDAuNCw2DQoJYzUuNC01LjgsMTEuNy04LjcsMTguNi02LjhjNC40LDEuMiw4LjksMy45LDEyLjEsNy4yYzcuMSw3LjQsNi4zLDE5LjctMC44LDI3LjNDMjA4LjgsNTcuOSwxOTguNiw1Ny45LDE4Ni4zLDQ5LjN6IE0xODYuMiwzNS42DQoJYzAsOSw2LjQsMTUuNCwxNS4zLDE1LjRjOC42LDAsMTUuMi02LjksMTUuMi0xNS42YzAtOS4xLTYuNy0xNS44LTE1LjctMTUuN0MxOTIuNCwxOS44LDE4Ni4yLDI2LjYsMTg2LjIsMzUuNnogTTM1LjUsMjEuMg0KCWMwLjItMiwwLjMtMy41LDAuNC01LjFjMi40LTAuNCw0LjktMS41LDQuOSwyLjVjMCwxMS44LDAsMjMuNiwwLDM1LjVjLTQuMywxLjYtNS44LDAuMS00LjgtNS4zYy01LjcsNC44LTEwLjksNy41LTE3LjQsNw0KCWMtNi41LTAuNS0xMS4zLTMuNS0xNS04LjdDLTIuMSwzOS0wLjksMjcuNCw2LjQsMjAuM0MxNC4yLDEyLjgsMjMuNywxMywzNS41LDIxLjJ6IE0yMC41LDUxYzguOSwwLjEsMTUuNC02LjMsMTUuNi0xNS4zDQoJYzAuMi05LjEtNi41LTE2LjEtMTUuNC0xNi4xYy04LjYsMC0xNS40LDYuOS0xNS41LDE1LjZDNS4yLDQ0LDExLjksNTEsMjAuNSw1MXogTTExMC45LDU1LjljLTExLjgsMC0yMC41LTguNy0yMC41LTIwLjQNCgljMC0xMS43LDguOC0yMC43LDIwLjQtMjAuN2MxMS41LDAsMjAuNSw5LDIwLjYsMjAuNkMxMzEuNCw0Ni45LDEyMi41LDU1LjgsMTEwLjksNTUuOXogTTExMC40LDUxYzguNywwLjIsMTUuNS02LjQsMTUuNy0xNS4zDQoJYzAuMi04LjUtNi43LTE1LjktMTUuMS0xNmMtOC4xLTAuMS0xNS4xLDYuOC0xNS41LDE1LjJDOTUuMiw0My42LDEwMS44LDUwLjgsMTEwLjQsNTF6IE01MC44LDU0LjljMS43LTAuMiwzLjEtMC40LDQuNC0wLjUNCgljMC0xOC4xLDAtMzUuNiwwLTUzLjRjLTEuNSwwLTIuOCwwLTQuNCwwQzUwLjgsMTkuMSw1MC44LDM2LjksNTAuOCw1NC45eiBNNzAsNTQuNWMwLTE4LjEsMC0zNS45LDAtNTMuOWMtMS44LDAuMi0zLjEsMC40LTQuNSwwLjYNCgljMCwxNy45LDAsMzUuNCwwLDUzLjZDNjcuMyw1NC43LDY4LjcsNTQuNiw3MCw1NC41eiBNODAuNSw1NC44YzEuOC0wLjEsMy4yLTAuMiw0LjYtMC4zYzAtMTMuMSwwLTI1LjgsMC0zOC42Yy0xLjYsMC0yLjksMC00LjYsMA0KCUM4MC41LDI5LjEsODAuNSw0MS44LDgwLjUsNTQuOHogTTgyLjYsMGMtMS41LDAuMi0yLjcsMi41LTQuMSwzLjhjMS40LDEuMywyLjcsMy41LDQuMiwzLjdjMS40LDAuMiwzLTEuOSw1LjktMy44DQoJQzg1LjcsMS44LDg0LTAuMiw4Mi42LDB6Ii8+DQo8cGF0aCBkPSJNMTQ4LjYsNDkuOWMxMC4xLDIuMywxNi4zLDAuMywyMC4xLTYuM2MzLjctNi41LDIuOC0xNC4xLTIuMi0xOS40Yy00LjYtNC43LTExLjQtNS43LTE3LjUtMi41Yy03LjIsMy44LTkuNywxMC42LTcuNSwyMC45DQoJYy0xLjIsMC42LTIuNCwxLjMtMy42LDEuOWMtMi45LTEuNy0zLjItMTEuNy0wLjktMTcuM2MzLjktOS4yLDE0LjItMTQuMywyMy44LTExLjhjMTAuNywyLjgsMTYuNiwxMS45LDE1LjEsMjMuMQ0KCWMtMS40LDExLTEwLDE3LjQtMjMuNSwxNy42Yy0yLjUsMy4zLTEuOCw1LjQsMS44LDcuOGMyMS40LDE0LjksNDIuNywzMC4xLDY0LDQ1LjNjMy4zLDIuNCw2LjUsNS4zLDguOSw4LjZjMS42LDIuMSwxLjcsNS4zLDIuNSw4DQoJYy0yLjYsMC42LTUuMiwxLjgtNy44LDEuN2MtMi43LTAuMS01LjUtMS4yLTguMi0yLjFjLTUzLTE2LjYtMTA2LTMzLjEtMTU5LTQ5LjdjLTIuNy0wLjgtNS40LTEuOC03LjgtMy4zYy0xLjQtMC45LTMuMS0zLjItMi45LTQuNQ0KCWMwLjMtMS43LDIuMi00LjEsMy43LTQuNGM3LjMtMS41LDE0LjctMy4yLDIyLjEtMy4zYzIyLjgtMC41LDQ1LjYtMC42LDY4LjQtMC4zYzUuMywwLjEsOC41LTAuOCw5LjEtNi41DQoJQzE0Ny41LDUyLjMsMTQ4LjEsNTEuMiwxNDguNiw0OS45eiBNNTAsNjcuMmMwLDAuNywwLDEuNCwwLDIuMWM1Ny45LDE4LjEsMTE1LjgsMzYuMiwxNzMuNyw1NC4yYzAuMy0wLjYsMC42LTEuMSwwLjktMS43DQoJYy0zLjItMy02LjItNi40LTkuNy05Yy0yMS45LTE1LjctNDQtMzEuMi02Ni4xLTQ2LjZjLTEuMy0wLjktMy4xLTEuNC00LjYtMS40Yy0yNSwwLTUwLTAuMS03NC45LDAuMkM2Mi44LDY1LDU2LjQsNjYuNCw1MCw2Ny4yeg0KCSBNMTg2LjcsNDkuM2MwLDYuOSwwLDEzLDAsMjFjLTIuMy0xLjctNC43LTIuNi00LjctMy42Yy0wLjItMTYuOC0wLjItMzMuNi0wLjItNTAuN2MxLjgsMCwzLjIsMCw0LjgsMGMwLjEsMS44LDAuMiwzLjQsMC40LDYNCgljNS40LTUuOCwxMS43LTguNywxOC42LTYuOGM0LjQsMS4yLDguOSwzLjksMTIuMSw3LjJjNy4xLDcuNCw2LjMsMTkuNy0wLjgsMjcuM0MyMDkuMiw1Ny45LDE5OC45LDU3LjksMTg2LjcsNDkuM3ogTTE4Ni41LDM1LjYNCgljMCw5LDYuNCwxNS40LDE1LjMsMTUuNGM4LjYsMCwxNS4yLTYuOSwxNS4yLTE1LjZjMC05LjEtNi43LTE1LjgtMTUuNy0xNS43QzE5Mi44LDE5LjgsMTg2LjUsMjYuNiwxODYuNSwzNS42eiBNMzUuOSwyMS4yDQoJYzAuMi0yLDAuMy0zLjUsMC40LTUuMWMyLjQtMC40LDQuOS0xLjUsNC45LDIuNWMwLDExLjgsMCwyMy42LDAsMzUuNWMtNC4zLDEuNi01LjgsMC4xLTQuOC01LjNjLTUuNyw0LjgtMTAuOSw3LjUtMTcuNCw3DQoJYy02LjUtMC41LTExLjMtMy41LTE1LTguN0MtMS44LDM5LTAuNSwyNy40LDYuOCwyMC4zQzE0LjYsMTIuOCwyNC4xLDEzLDM1LjksMjEuMnogTTIwLjksNTFjOC45LDAuMSwxNS40LTYuMywxNS42LTE1LjMNCgljMC4yLTkuMS02LjUtMTYuMS0xNS40LTE2LjFjLTguNiwwLTE1LjQsNi45LTE1LjUsMTUuNkM1LjYsNDQsMTIuMyw1MSwyMC45LDUxeiBNMTExLjIsNTUuOWMtMTEuOCwwLTIwLjUtOC43LTIwLjUtMjAuNA0KCWMwLTExLjcsOC44LTIwLjcsMjAuNC0yMC43YzExLjUsMCwyMC41LDksMjAuNiwyMC42QzEzMS44LDQ2LjksMTIyLjksNTUuOCwxMTEuMiw1NS45eiBNMTEwLjcsNTFjOC43LDAuMiwxNS41LTYuNCwxNS43LTE1LjMNCgljMC4yLTguNS02LjctMTUuOS0xNS4xLTE2Yy04LjEtMC4xLTE1LjEsNi44LTE1LjUsMTUuMkM5NS41LDQzLjYsMTAyLjEsNTAuOCwxMTAuNyw1MXogTTUxLjIsNTQuOWMxLjctMC4yLDMuMS0wLjQsNC40LTAuNQ0KCWMwLTE4LjEsMC0zNS42LDAtNTMuNGMtMS41LDAtMi44LDAtNC40LDBDNTEuMiwxOS4xLDUxLjIsMzYuOSw1MS4yLDU0Ljl6IE03MC40LDU0LjVjMC0xOC4xLDAtMzUuOSwwLTUzLjkNCgljLTEuOCwwLjItMy4xLDAuNC00LjUsMC42YzAsMTcuOSwwLDM1LjQsMCw1My42QzY3LjcsNTQuNyw2OS4xLDU0LjYsNzAuNCw1NC41eiBNODAuOCw1NC44YzEuOC0wLjEsMy4yLTAuMiw0LjYtMC4zDQoJYzAtMTMuMSwwLTI1LjgsMC0zOC42Yy0xLjYsMC0yLjksMC00LjYsMEM4MC44LDI5LjEsODAuOCw0MS44LDgwLjgsNTQuOHogTTgzLDBjLTEuNSwwLjItMi43LDIuNS00LjEsMy44YzEuNCwxLjMsMi43LDMuNSw0LjIsMy43DQoJYzEuNCwwLjIsMy0xLjksNS45LTMuOEM4Ni4xLDEuOCw4NC40LTAuMiw4MywweiIvPg0KPC9zdmc+DQo="},function(t,e,L){var s=L(0)(L(22),L(61),null,null,null);t.exports=s.exports},function(t,e,L){var s=L(0)(L(23),L(63),null,null,null);t.exports=s.exports},function(t,e,L){var s=L(0)(L(24),L(60),null,null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,L=t._self._c||e;return L("v-container",{staticClass:"products-page"},[L("v-toolbar",{staticClass:"elevation-0 product-toolbar"},[L("v-toolbar-title",{staticClass:"body-1 hidden-sm-and-down"},[t._v(t._s(t.pageStartEnd.start)+" a "+t._s(t.pageStartEnd.end)+" de "+t._s(t.totalProducts))]),t._v(" "),L("v-spacer",{staticClass:"hidden-sm-and-down"}),t._v(" "),L("v-select",{attrs:{items:t.orderBy.items,overflow:"",label:"Ordenação","item-text":"label","item-value":"value"},on:{change:t.resetPagination},model:{value:t.orderBy.selected,callback:function(e){t.orderBy.selected=e},expression:"orderBy.selected"}}),t._v(" "),L("v-select",{attrs:{items:t.productsPerPage.items,overflow:"",label:"Produtos por página","item-text":"label","item-value":"value"},on:{change:t.resetPagination},model:{value:t.productsPerPage.selected,callback:function(e){t.productsPerPage.selected=e},expression:"productsPerPage.selected"}})],1),t._v(" "),L("v-container",{staticClass:"pl-0 pr-0",attrs:{fluid:""}},[L("v-layout",{attrs:{"row-sm":"","column-xs":"",wrap:""}},t._l(t.filteredProducts,function(e){return L("v-flex",{key:e.id,staticClass:"mb-2",attrs:{xs12:"",sm6:"",md4:"",lg3:"",xl2:""}},[L("v-card",[L("v-card-media",{staticClass:"white--text",attrs:{src:"https://placehold.it/200x200",height:"200px"}},[L("v-container",{attrs:{"fill-height":"",fluid:""}},[L("v-layout",{attrs:{"fill-height":""}},[L("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[L("span",{staticClass:"headline"},[t._v(t._s(e.title))])])],1)],1)],1),t._v(" "),L("v-card-title",[L("div",[L("span",{staticClass:"green--text title"},[t._v("R$ "+t._s(t.formattedPrice(e.price)))])])]),t._v(" "),L("v-card-actions",[L("v-spacer"),t._v(" "),L("v-btn",{attrs:{outline:"",secondary:""},nativeOn:{click:function(L){L.stopPropagation(),t.addToCart(e)}}},[t._v("\n              Comprar\n              "),L("v-icon",{attrs:{right:"",fa:"",secondary:""}},[t._v("plus-circle")])],1)],1)],1)],1)}))],1),t._v(" "),L("v-layout",{directives:[{name:"show",rawName:"v-show",value:t.totalPages>1,expression:"totalPages > 1"}],attrs:{row:"","justify-center":""}},[L("v-pagination",{attrs:{length:t.totalPages},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,L=t._self._c||e;return L("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[L("v-layout",{staticClass:"ml-0",attrs:{column:""}},[L("v-toolbar",{staticClass:"elevation-0",attrs:{dark:""}},[L("v-toolbar-title",[t._v("Sacola")]),t._v(" "),L("v-spacer"),t._v(" "),L("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.closeCart(e)}}},[L("v-icon",{attrs:{fa:""}},[t._v("close")])],1)],1),t._v(" "),L("v-list",{attrs:{dark:"","two-line":""}},[t._l(t.cart,function(e,s){return[L("v-list-tile",{key:e.id,attrs:{avatar:"",tag:"div"}},[L("v-list-tile-avatar",[L("img",{attrs:{src:"https://placehold.it/32x32",alt:e.title}})]),t._v(" "),L("v-list-tile-content",[L("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),L("v-list-tile-sub-title",{domProps:{innerHTML:t._s(t.formattedPrice(e.price))}})],1),t._v(" "),L("v-list-tile-action",[L("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.removeFromCart(s)}}},[L("v-icon",{staticClass:"error--text",attrs:{fa:""}},[t._v("trash")])],1)],1)],1)]})],2),t._v(" "),L("v-divider"),t._v(" "),L("v-layout",{attrs:{row:"","justify-space-between":""}},[L("v-flex",{staticClass:"ml-3"},[L("p",{staticClass:"subheading mb-0 mt-3 grey--text text--lighten-2"},[t._v("Subtotal")])]),t._v(" "),L("v-flex",{staticClass:"mr-3 text-xs-right"},[L("p",{staticClass:"title mb-0 mt-3 blue--text text--lighten-2"},[t._v(t._s(t.formattedPrice(t.totalPrice)))])])],1)],1)],1)},staticRenderFns:[]}},function(t,e,L){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"app"}},[s("v-toolbar",{staticClass:"elevation-0 main-toolbar",attrs:{fixed:""}},[s("v-toolbar-title",[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:L(56),alt:"Allioop"}})])],1),t._v(" "),s("v-toolbar-items",[s("v-btn",{attrs:{flat:"",to:"/produtos","router-link":""}},[t._v("Produtos")])],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.toggleCart(e)}}},[s("v-icon",{attrs:{fa:""}},[t._v("shopping-bag")])],1)],1),t._v(" "),s("main",[s("router-view")],1),t._v(" "),s("v-navigation-drawer",{attrs:{clipped:"",right:"",temporary:"",dark:""},model:{value:t.cartOpen,callback:function(e){t.cartOpen=e},expression:"cartOpen"}},[s("a-side-cart",{on:{"close-cart":function(e){t.cartOpen=!1}}})],1),t._v(" "),s("v-footer")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,L=t._self._c||e;return L("v-container",{staticClass:"home"},[L("v-layout",[L("v-flex",{attrs:{xs12:""},domProps:{innerHTML:t._s(t.readme)}})],1)],1)},staticRenderFns:[]}},,,,,function(t,e){t.exports=[{title:"Calça Jeans",price:149.9,id:1},{title:"Camisa Xadrez",price:99,id:2},{title:"Camisa Polo",price:129.99,id:3},{title:"Calça Jeans 2",price:199.9,id:4},{title:"Camiseta Homem de Ferro",price:49.9,id:5},{title:"Camiseta Capitão América",price:49.9,id:6},{title:"Camiseta Thor",price:49.9,id:7},{title:"Camiseta Homem-Aranha",price:59.9,id:8},{title:"Camiseta Hulk",price:49.9,id:9},{title:"Calça de Abrigo",price:39.9,id:10},{title:"Casaco de Couro",price:279.9,id:11},{title:"Casaco Plumado",price:399.9,id:12}]}],[20]);
//# sourceMappingURL=app.91878b6c590ce57e6391.js.map