(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9505],{76278:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(1413),a=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},s=n(93771),o=function(e,t){return a.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))};o.displayName="CheckCircleFilled";var c=a.forwardRef(o)},26702:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(1413),a=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},s=n(93771),o=function(e,t){return a.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))};o.displayName="ExclamationCircleFilled";var c=a.forwardRef(o)},1558:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(1413),a=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},s=n(93771),o=function(e,t){return a.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))};o.displayName="InfoCircleFilled";var c=a.forwardRef(o)},27914:function(e,t,n){"use strict";var r=n(828),a=n(85893),i=n(99559),s=n(67294),o=n(50769),c=n.n(o);t.Z=function(e){var t=e.rows,n=e.columns,o=e.loading,l=e.children,u=(0,r.Z)(s.useState([]),2),d=u[0],h=u[1],p=(0,r.Z)(s.useState([]),2),_=p[0],f=p[1];return s.useEffect((function(){for(var e=[],r=[],a=0;a<t;a++)e.push(Math.floor(9*Math.random()));for(var i=0;i<n;i++)r.push(Math.floor(9*Math.random()));h(e),f(r)}),[]),(0,a.jsx)(a.Fragment,{children:o?(0,a.jsx)("div",{className:c().table,children:d.map((function(e,t){return(0,a.jsx)("div",{className:c().table__row,children:_.map((function(e,t){return(0,a.jsx)("div",{className:c().table__cell,children:(0,a.jsx)(i.Z,{active:!0,title:!1,loading:o,paragraph:{rows:1,width:"100%"}})},t)}))},t)}))}):l})}},53105:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(47568),a=n(70655),i=n(85893),s=n(834),o=n(51945),c=n(97183),l=n(71230),u=n(15746),d=n(25675),h=n.n(d),p=n(11163),_=n(67294),f=n(89480),v=n(8025),m=n(89235),b=n(20720),w=n(17348),g=n(57605),x=n.n(g),Z=function(e){var t=e.loading,n=e.dataUser,r=(0,_.useRef)(null),a=(0,_.useState)(!1),s=a[0],o=a[1],c=[{title:function(){return(0,i.jsx)("span",{className:x().headerTable,children:"File"})},dataIndex:"file",className:x().columnTable,sorter:function(e,t,n){return(0,b.Z)(e.file.props.children,t.file.props.children,"1",n)}},{title:function(){return(0,i.jsx)("span",{className:x().headerTable,children:"Name"})},dataIndex:"name",className:x().columnTable,sorter:function(e,t,n){return(0,b.Z)(e.name.props,t.name.props,"children",n)}},{title:function(){return(0,i.jsx)("span",{className:x().headerTable,children:"Type of document"})},dataIndex:"type",className:x().columnTable,sorter:function(e,t,n){return(0,b.Z)(e.type.props,t.type.props,"children",n)}},{title:function(){return(0,i.jsx)("span",{className:x().headerTable,children:"Expiry date"})},dataIndex:"expiryDate",className:x().columnTable,sorter:function(e,t,n){return(0,b.Z)(e.expiryDate.props,t.expiryDate.props,"children",n)}}];return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(w.Z,{page:1,loading:t,dataTable:n,pageSize:20,columns:c,onChange:function(){},rowsSkeleton:8,columnsSkeleton:7,padding:"32px 33px",errorMessage:"Something went wrong, try again.",showError:s,setShowError:o,tableRef:r})})},S=n(99317),T=n.n(S),y=o.Z.Title,j=c.Z.Content,N=m.r_,C=function(e){var t=e.idSupplier,n=(0,p.useRouter)(),o=new v.S(n),c=(0,f.C)((function(e){return e.dashboard})).currentUserRoleName,d=(0,_.useState)([]),m=d[0],b=d[1],w=(0,_.useState)(!0),g=w[0],x=w[1],S=(0,_.useCallback)((0,r.Z)((function(){return(0,a.__generator)(this,(function(e){switch(e.label){case 0:return[4,o.getSuppliersById(t).then((function(e){var t=e.data.attachments.map((function(e){var t=e.id,n=e.file,r=e.name,a=e.type,s=e.expiry_date,o="".concat(s.slice(5,7),"/").concat(s.slice(8,10),"/").concat(s.slice(0,4));return{key:t,file:(0,i.jsxs)("span",{className:T().att_container_file,children:[(0,i.jsx)("span",{children:(0,i.jsx)(h(),{src:"/assets/icons/doc.svg",width:40,height:40,alt:"doc"})}),n]}),name:(0,i.jsx)("span",{className:T().att_container_row,children:r}),type:(0,i.jsx)("span",{className:T().att_container_row,children:a}),expiryDate:(0,i.jsx)("span",{className:T().att_container_row,children:o})}}));b(t),x(!1)}))];case 1:return e.sent(),[2]}}))})),[t]);return(0,_.useEffect)((function(){S()}),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(j,{children:(0,i.jsxs)("div",{className:"".concat(T().att_container),children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)(u.Z,{children:(0,i.jsxs)("div",{style:{cursor:"pointer",color:"#888E95",width:"fit-content",fontSize:"16px"},onClick:function(){n.push("/home/suppliers",void 0,{shallow:!0})},children:[(0,i.jsx)(s.Z,{}),"\xa0 Suppliers"]})})}),(0,i.jsx)(y,{level:4,className:T().att_container__buyer,children:c}),(0,i.jsx)(y,{level:3,className:T().att_container__title,children:N.textGoTo}),(0,i.jsx)(Z,{loading:g,dataUser:m})]})})})}},17348:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(85893),a=n(4393),i=n(99138),s=n(74919),o=n(25675),c=n.n(o),l=n(67294),u=n(27914),d=n(60255),h=n(58310),p=n(2100),_=n.n(p),f=n(29815),v=n(11163),m=n.n(v),b=n(21852),w=n(62633),g=function(e){var t=e.dashboard,n=e.page,o=e.loading,p=e.dataTable,v=e.pageSize,g=void 0===v?25:v,x=e.columns,Z=e.onChange,S=e.rowsSkeleton,T=e.columnsSkeleton,y=e.padding,j=void 0===y?"32px 48px":y,N=e.showError,C=void 0!==N&&N,z=e.setShowError,k=void 0===z?function(){return null}:z,E=e.widthError,I=void 0===E?"95%":E,R=e.errorMessage,D=e.expandable,M=e.tableRef,A=e.total,B=e.showSizeChanger,F=void 0!==B&&B,G=e.rowSelection,L=void 0===G?void 0:G,U=(0,d.Z)().width,Q=void 0===U?0:U,V=function(e){var t=e.dashboard,n=e.columns,a=(0,l.useContext)(b.Vo).user,i=(0,f.Z)(n);return a&&t&&w._I[t].edit.includes(a.role)&&i.push({title:function(){return(0,r.jsx)("span",{className:_().header_Table,children:"Actions"})},dataIndex:"actions",className:_().columnTable,render:function(e,n){return(0,r.jsx)("span",{onClick:function(){m().push("/home/".concat(t,"/edit/").concat(n.key))},className:_().wrapperLinkActions,children:(0,r.jsx)(c(),{alt:"edit",width:16,height:16,src:"/assets/icons/edit.svg"})})}}),i}({dashboard:t,columns:x}),W=(0,l.useState)(g),$=W[0],H=W[1];return(0,r.jsx)(a.Z,{ref:M,className:_().card,bodyStyle:{padding:j},children:(0,r.jsxs)(a.Z.Grid,{hoverable:!1,className:_().grid,children:[C&&(0,r.jsx)(i.Z,{showIcon:!0,closable:!0,type:"error",message:R,style:{width:I},className:"alert_red ".concat(_().alert),afterClose:function(){return k(!1)},icon:(0,r.jsx)(c(),{src:"/assets/icons/alert_error.svg",alt:"logo_conexis",width:24,height:24})}),(0,r.jsx)(u.Z,{loading:o,rows:S,columns:T,children:(0,r.jsx)(s.Z,{rowSelection:L,columns:V,onChange:Z,className:_().userTable,dataSource:p,expandable:D,pagination:{size:"small",current:n,showSizeChanger:F,style:{marginTop:"28px",marginBottom:"0px",left:Q<=h.Gh?"0":"",position:Q<=h.Gh?"sticky":"initial",width:Q<=h.Gh?"max-content":"100%"},pageSize:$,defaultPageSize:$,onShowSizeChange:function(e,t){H(t)},pageSizeOptions:["10","25","50","100","500","1000"],showTotal:function(e){return(0,r.jsxs)("span",{style:{height:"32px"},children:["Page ",n," from ",Math.ceil(e/$)]})},total:A}})})]})})}},89480:function(e,t,n){"use strict";n.d(t,{C:function(){return i},T:function(){return a}});var r=n(9473),a=r.I0,i=r.v9},60255:function(e,t,n){"use strict";var r=n(67294);t.Z=function(){var e=(0,r.useState)({width:void 0,height:void 0}),t=e[0],n=e[1];return(0,r.useEffect)((function(){var e=function(){n({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}},58310:function(e,t,n){"use strict";n.d(t,{Gh:function(){return r},IU:function(){return i},rN:function(){return a}});var r=576,a=992,i=768},62633:function(e,t,n){"use strict";n.d(t,{_I:function(){return d},aO:function(){return o},j2:function(){return c}});var r,a,i,s=n(14924),o={create:"create",edit:"edit",view:"view"},c={buyer:"buyers",supplier:"suppliers"},l="MSP Administrator",u="Program Manager",d=(i={},(0,s.Z)(i,c.buyer,(r={},(0,s.Z)(r,o.view,[l,u]),(0,s.Z)(r,o.create,[l]),(0,s.Z)(r,o.edit,[l]),r)),(0,s.Z)(i,c.supplier,(a={},(0,s.Z)(a,o.view,[l,u]),(0,s.Z)(a,o.create,[l]),(0,s.Z)(a,o.edit,[l]),a)),i)},8025:function(e,t,n){"use strict";n.d(t,{S:function(){return d}});var r=n(47568),a=n(51438),i=n(70655),s=n(51573),o=n(97237),c=n(17632),l=function(e,t){return"".concat(e).concat(t)},u="https://d5ja6jkvsot2v.cloudfront.net",d=function e(t){(0,a.Z)(this,e);var n=this;this.createSupplier=function(){var e=(0,r.Z)((function(e){var t,r,a,d;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,(0,o.Z)((0,s.DH)([l(u,"/suppliers")],e))];case 1:return[2,i.sent().data];case 2:throw t=i.sent(),404===(null===(r=t.response)||void 0===r?void 0:r.status)||400===(null===(a=t.response)||void 0===a?void 0:a.status)||403===(null===(d=t.response)||void 0===d?void 0:d.status)||c.$.serverIsDown(n.router),t;case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}();var d=this;this.getSuppliers=function(){var e=(0,r.Z)((function(e){var t,n,r,a;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,(0,o.Z)((0,s.zn)(l(u,"/suppliers/byLoggedBuyer?page=".concat(e,"&size=20"))))];case 1:return[2,i.sent().data];case 2:throw t=i.sent(),404===(null===(n=t.response)||void 0===n?void 0:n.status)||400===(null===(r=t.response)||void 0===r?void 0:r.status)||403===(null===(a=t.response)||void 0===a?void 0:a.status)||c.$.serverIsDown(d.router),t;case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}();var h=this;this.getSuppliersById=function(){var e=(0,r.Z)((function(e){var t,n,r,a;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,(0,o.Z)((0,s.zn)(l(u,"/suppliers/".concat(e))))];case 1:return[2,i.sent().data];case 2:throw t=i.sent(),404===(null===(n=t.response)||void 0===n?void 0:n.status)||400===(null===(r=t.response)||void 0===r?void 0:r.status)||403===(null===(a=t.response)||void 0===a?void 0:a.status)||c.$.serverIsDown(h.router),t;case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}();var p=this;this.editSupplier=function(){var e=(0,r.Z)((function(e,t){var n,r,a,d;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,(0,o.Z)((0,s.FQ)([l(u,"/suppliers/".concat(e))],t))];case 1:return[2,i.sent().data];case 2:throw n=i.sent(),404===(null===(r=n.response)||void 0===r?void 0:r.status)||400===(null===(a=n.response)||void 0===a?void 0:a.status)||403===(null===(d=n.response)||void 0===d?void 0:d.status)||c.$.serverIsDown(p.router),n;case 3:return[2]}}))}));return function(t,n){return e.apply(this,arguments)}}();var _=this;this.validateSupplierCompanyName=function(){var e=(0,r.Z)((function(e,t){var n,r,a,d,h;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:n="/suppliers/validateCompanyName/".concat(e).concat(t?"?supplierId=".concat(t):""),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,(0,o.Z)((0,s.zn)(l(u,n)))];case 2:return[2,i.sent().data];case 3:throw r=i.sent(),404===(null===(a=r.response)||void 0===a?void 0:a.status)||400===(null===(d=r.response)||void 0===d?void 0:d.status)||403===(null===(h=r.response)||void 0===h?void 0:h.status)||c.$.serverIsDown(_.router),r;case 4:return[2]}}))}));return function(t,n){return e.apply(this,arguments)}}(),this.router=t}},20720:function(e,t){"use strict";t.Z=function(e,t,n,r){var a,i,s=(null===(a=e["".concat(n)])||void 0===a?void 0:a.trim())||"",o=(null===(i=t["".concat(n)])||void 0===i?void 0:i.trim())||"";return s||o?s?o?s.localeCompare(o,void 0,{numeric:!0}):"ascend"===r?-1:1:"ascend"===r?1:-1:0}},50769:function(e){e.exports={table__row:"SkeletonTable_table__row__2eDLk",table__cell:"SkeletonTable_table__cell__bhcQK",moveToRight:"SkeletonTable_moveToRight__t_Xa8"}},99317:function(e){e.exports={att_container:"attachmentSuppliers_att_container__V7W5z",att_container__buyer:"attachmentSuppliers_att_container__buyer__pCYT6",att_container__title:"attachmentSuppliers_att_container__title__zUGDY",att_container_file:"attachmentSuppliers_att_container_file__XeuVt",att_container_row:"attachmentSuppliers_att_container_row__7CyE5",moveToRight:"attachmentSuppliers_moveToRight__BhQux"}},57605:function(e){e.exports={headerTable:"tableAttachmentSuppliers_headerTable__owgWU",columnTable:"tableAttachmentSuppliers_columnTable__4UrB8",moveToRight:"tableAttachmentSuppliers_moveToRight__6amKM"}},2100:function(e){e.exports={card:"Table_card__xG_9J",grid:"Table_grid__mxp3Q",min_width:"Table_min_width__S6WZr",alert:"Table_alert__YHLdR",userTable:"Table_userTable__0lT9U",header_Table:"Table_header_Table__7mvGZ",wrapperLinkActions:"Table_wrapperLinkActions__kgSeW",columnTable:"Table_columnTable__sJ_J1",rowEnabled:"Table_rowEnabled__t2CYa",rowDisabled:"Table_rowDisabled__dTxQ2",iconAttachment:"Table_iconAttachment__uF9Kw",moveToRight:"Table_moveToRight__3iOiw"}},828:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(13375);var a=n(91566);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,r.Z)(e,t)||(0,a.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);