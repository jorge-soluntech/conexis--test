(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4768],{70103:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/buyers/edit/[buyerId]",function(){return r(71072)}])},62633:function(t,e,r){"use strict";r.d(e,{_I:function(){return p},aO:function(){return o},j2:function(){return i}});var n,a,s,u=r(14924),o={create:"create",edit:"edit",view:"view"},i={buyer:"buyers",supplier:"suppliers"},c="MSP Administrator",l="Program Manager",p=(s={},(0,u.Z)(s,i.buyer,(n={},(0,u.Z)(n,o.view,[c,l]),(0,u.Z)(n,o.create,[c]),(0,u.Z)(n,o.edit,[c]),n)),(0,u.Z)(s,i.supplier,(a={},(0,u.Z)(a,o.view,[c,l]),(0,u.Z)(a,o.create,[c]),(0,u.Z)(a,o.edit,[c]),a)),s)},70092:function(t,e,r){"use strict";r.d(e,{i:function(){return p}});var n=r(47568),a=r(51438),s=r(70655),u=r(51573),o=r(97237),i=r(17632),c=function(t,e){return"".concat(t).concat(e)},l="https://d5ja6jkvsot2v.cloudfront.net",p=function t(e){(0,a.Z)(this,t);var r=this;this.getAllBuyers=function(){var t=(0,n.Z)((function(t){var e,n,a;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,(0,o.Z)((0,u.zn)(c(l,"/buyers?page=1&".concat(t?"size=".concat(t):"size=500"))))];case 1:return[2,s.sent().data];case 2:throw e=s.sent(),404===(null===(n=e.response)||void 0===n?void 0:n.status)||400===(null===(a=e.response)||void 0===a?void 0:a.status)||i.$.serverIsDown(r.router),e;case 3:return[2]}}))}));return function(e){return t.apply(this,arguments)}}();var p=this;this.validateNameBuyer=function(){var t=(0,n.Z)((function(t,e){var r,n,a,v;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),r=e?"/buyers/validateName/".concat(t,"?buyerId=").concat(e):"/buyers/validateName/".concat(t),[4,(0,o.Z)((0,u.zn)(c(l,r)))];case 1:return[2,s.sent().data];case 2:throw n=s.sent(),404===(null===(a=n.response)||void 0===a?void 0:a.status)||400===(null===(v=n.response)||void 0===v?void 0:v.status)||i.$.serverIsDown(p.router),n;case 3:return[2]}}))}));return function(e,r){return t.apply(this,arguments)}}();var v=this;this.createBuyer=function(){var t=(0,n.Z)((function(t){var e,r,n;return(0,s.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,(0,o.Z)((0,u.DH)([c(l,"/buyers")],t))];case 1:return[2,a.sent().data];case 2:throw e=a.sent(),404===(null===(r=e.response)||void 0===r?void 0:r.status)||400===(null===(n=e.response)||void 0===n?void 0:n.status)||i.$.serverIsDown(v.router),e;case 3:return[2]}}))}));return function(e){return t.apply(this,arguments)}}();var d=this;this.editBuyer=function(){var t=(0,n.Z)((function(t,e){var r,n,a;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,(0,o.Z)((0,u.FQ)([c(l,"/buyers/".concat(t))],e))];case 1:return[2,s.sent().data];case 2:throw r=s.sent(),404===(null===(n=r.response)||void 0===n?void 0:n.status)||400===(null===(a=r.response)||void 0===a?void 0:a.status)||i.$.serverIsDown(d.router),r;case 3:return[2]}}))}));return function(e,r){return t.apply(this,arguments)}}();var f=this;this.getBuyerById=function(){var t=(0,n.Z)((function(t){var e,r,n;return(0,s.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,(0,o.Z)((0,u.zn)(c(l,"/buyers/".concat(t))))];case 1:return[2,a.sent().data];case 2:throw e=a.sent(),404===(null===(r=e.response)||void 0===r?void 0:r.status)||400===(null===(n=e.response)||void 0===n?void 0:n.status)||i.$.serverIsDown(f.router),e;case 3:return[2]}}))}));return function(e){return t.apply(this,arguments)}}(),this.router=e}},71072:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Z}});var n=r(85893),a=r(5152),s=r.n(a),u=r(47568),o=r(70655),i=r(27484),c=r.n(i),l=r(11163),p=r(67294),v=r(94411),d=r(89480),f=r(70092),h=function(t){var e={};return Object.keys(t).forEach((function(r){var n=r.replace(/([-_][a-z])/gi,(function(t){return t.toUpperCase().replace("_","")}));e[n]=t[r]})),e},y=function(){var t=(0,p.useState)(!1),e=t[0],r=t[1],n=(0,l.useRouter)(),a=(0,d.T)();return(0,p.useEffect)((function(){r(!0),a((0,v.HQ)(0));var t=function(){var t=(0,u.Z)((function(){var t;return(0,o.__generator)(this,(function(e){switch(e.label){case 0:return(t=n.query.buyerId)?[4,new f.i(n).getBuyerById(t).then((function(t){var e,n,s=t.data,u=h(s);u.contractExpiryDate=c()(s.contract_expiry_date),u.contractApproverId=s.contract_approver?{label:null===(e=s.contract_approver)||void 0===e?void 0:e.full_name,value:null===(n=s.contract_approver)||void 0===n?void 0:n.id}:null,u.vatAmount=parseInt(s.vat_amount,10),u.salesTaxAmount=parseInt(s.sales_tax_amount,10),u.otherTaxAmount=parseInt(s.other_tax_amount,10),u.bypassJobApproval=!s.bypass_job_approval,u.bypassSubmissionApproval=!s.bypass_submission_approval,u.attachments=[],a((0,v.x1)(u)),a((0,v.$w)(s.attachments.map((function(t){return{id:t.id,key:t.id,file:t.file,name:t.name,original_name:t.original_name,type:t.type,expiry_date:t.expiry_date?c()(t.expiry_date).format("DD MMM YYYY"):""}})))),a((0,v.Fr)(s.id)),r(!1)}))]:[2];case 1:return e.sent(),[2]}}))}));return function(){return t.apply(this,arguments)}}();return t(),function(){a((0,v.IG)())}}),[a,n]),{isLoading:e}},_=r(56209),b=r(75047),w=r(62633),m=s()((function(){return Promise.all([r.e(4193),r.e(2773),r.e(3589),r.e(1738),r.e(7740)]).then(r.bind(r,9745))}),{loadableGenerated:{webpack:function(){return[9745]}},loading:function(){return(0,n.jsx)(_.Z,{})}}),Z=function(){return(0,n.jsx)(b.pG,{useGetData:y,withFormSteps:!0,children:(0,n.jsx)(m,{action:w.aO.edit,dashboard:w.j2.buyer})})}}},function(t){t.O(0,[7805,1945,1577,1075,5453,3385,2460,7790,1855,8377,5591,5047,9774,2888,179],(function(){return e=70103,t(t.s=e);var e}));var e=t.O();_N_E=e}]);