(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{21821:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/suppliers",function(){return a(51722)}])},8025:function(e,t,a){"use strict";a.d(t,{S:function(){return p}});var n=a(47568),r=a(51438),i=a(70655),s=a(51573),u=a(97237),o=a(17632),c=function(e,t){return"".concat(e).concat(t)},l="https://d5ja6jkvsot2v.cloudfront.net",p=function e(t){(0,r.Z)(this,e);var a=this;this.createSupplier=function(){var e=(0,n.Z)((function(e){var t,n,r,p;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,(0,u.Z)((0,s.DH)([c(l,"/suppliers")],e))];case 1:return[2,i.sent().data];case 2:throw t=i.sent(),404===(null===(n=t.response)||void 0===n?void 0:n.status)||400===(null===(r=t.response)||void 0===r?void 0:r.status)||403===(null===(p=t.response)||void 0===p?void 0:p.status)||o.$.serverIsDown(a.router),t;case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}();var p=this;this.getSuppliers=function(){var e=(0,n.Z)((function(e){var t,a,n,r;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,(0,u.Z)((0,s.zn)(c(l,"/suppliers/byLoggedBuyer?page=".concat(e,"&size=20"))))];case 1:return[2,i.sent().data];case 2:throw t=i.sent(),404===(null===(a=t.response)||void 0===a?void 0:a.status)||400===(null===(n=t.response)||void 0===n?void 0:n.status)||403===(null===(r=t.response)||void 0===r?void 0:r.status)||o.$.serverIsDown(p.router),t;case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}();var d=this;this.getSuppliersById=function(){var e=(0,n.Z)((function(e){var t,a,n,r;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,(0,u.Z)((0,s.zn)(c(l,"/suppliers/".concat(e))))];case 1:return[2,i.sent().data];case 2:throw t=i.sent(),404===(null===(a=t.response)||void 0===a?void 0:a.status)||400===(null===(n=t.response)||void 0===n?void 0:n.status)||403===(null===(r=t.response)||void 0===r?void 0:r.status)||o.$.serverIsDown(d.router),t;case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}();var v=this;this.editSupplier=function(){var e=(0,n.Z)((function(e,t){var a,n,r,p;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,(0,u.Z)((0,s.FQ)([c(l,"/suppliers/".concat(e))],t))];case 1:return[2,i.sent().data];case 2:throw a=i.sent(),404===(null===(n=a.response)||void 0===n?void 0:n.status)||400===(null===(r=a.response)||void 0===r?void 0:r.status)||403===(null===(p=a.response)||void 0===p?void 0:p.status)||o.$.serverIsDown(v.router),a;case 3:return[2]}}))}));return function(t,a){return e.apply(this,arguments)}}();var f=this;this.validateSupplierCompanyName=function(){var e=(0,n.Z)((function(e,t){var a,n,r,p,d;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:a="/suppliers/validateCompanyName/".concat(e).concat(t?"?supplierId=".concat(t):""),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,(0,u.Z)((0,s.zn)(c(l,a)))];case 2:return[2,i.sent().data];case 3:throw n=i.sent(),404===(null===(r=n.response)||void 0===r?void 0:r.status)||400===(null===(p=n.response)||void 0===p?void 0:p.status)||403===(null===(d=n.response)||void 0===d?void 0:d.status)||o.$.serverIsDown(f.router),n;case 4:return[2]}}))}));return function(t,a){return e.apply(this,arguments)}}(),this.router=t}},51722:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var n=a(85893),r=a(5152),i=a.n(r),s=a(56209),u=a(75047),o=a(47568),c=a(29815),l=a(70655),p=a(11163),d=a(67294),v=a(21852),f=a(89480),_=a(8025),h=function(){var e=(0,d.useState)(!1),t=e[0],a=e[1],n=(0,d.useState)(!0),r=n[0],i=n[1],s=(0,d.useState)({status:[],expiration:[],contactEmail:[],contactName:[]}),u=s[0],h=s[1],m=(0,d.useState)([]),g=m[0],y=m[1],S=(0,d.useState)([]),w=S[0],b=S[1],x=(0,p.useRouter)(),D=new _.S(x),Z=(0,d.useContext)(v.Vo).dataUser,C=(0,f.C)((function(e){return e.suppliers})).page,N=(0,d.useCallback)((0,o.Z)((function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return[4,D.getSuppliers(C).then((function(e){var t=e.data.suppliers.map((function(e){var t=e.id,a=e.id_number,n=e.agreement_expiry_date,r=e.supplier_company_name,i=e.supplier_status,s=e.primary_contact_name,u=e.primary_contact_email,o=e.account,l=e.is_non_resident_supplier,p=e.primary_contact_phone,d=e.country,v=e.street_address_line1,f=e.rating,_=e.geographic_coverage,m=e.diversity_certifications,g=e.dunn_and_bradstreet_number,y=e.secondary_contact_name,S=e.secondary_contact_email,w=e.tertiary_contact_name,b=e.tertiary_contact_email,x=e.tax_id,D=e.work_categories_covered,Z=e.accounts_receivable_contact_name,C=e.accounts_receivable_contact_email,N=n?"".concat(n.slice(5,7),"/").concat(n.slice(8,10),"/").concat(n.slice(0,4)):"";return h((function(e){var t,a,n,r;return{status:-1===(null===(t=e.status)||void 0===t?void 0:t.indexOf(i))?(0,c.Z)(e.status).concat([i]):(0,c.Z)(e.status),expiration:-1===(null===(a=e.expiration)||void 0===a?void 0:a.indexOf(N))?(0,c.Z)(e.expiration).concat([N]):(0,c.Z)(e.expiration),contactEmail:-1===(null===(n=e.contactEmail)||void 0===n?void 0:n.indexOf(u))?(0,c.Z)(e.contactEmail).concat([u]):(0,c.Z)(e.contactEmail),contactName:-1===(null===(r=e.contactName)||void 0===r?void 0:r.indexOf(s))?(0,c.Z)(e.contactName).concat([s]):(0,c.Z)(e.contactName)}})),{key:t,supplierCompanyName:r,contactName:s,contactEmail:u,idNumber:a,agreementExpiryDate:N,supplierStatus:i,supplierInformation:[{title:"Created by",value:null===o||void 0===o?void 0:o.full_name},{title:"Non resident supplier",value:l?"No":"Yes"},{title:"Supplier ID",value:a},{title:"Rating",value:f},{title:"Supplier status",value:i},{title:"Supplier company name",value:r},{title:"Supplier contact name",value:s},{title:"Supplier contact phone",value:p},{title:"Country",value:d},{title:"Supplier mailing address",value:v},{title:"Supplier contact email",value:u},{title:"Geographic coverage",value:_[0]},{title:"Diversity certification",value:m[0]},{title:"Dun & bradstreet number",value:g}],additionalSupplierContacts:[{title:"Supplier contact name 2",value:y},{title:"Supplier contact email 2",value:S},{title:"Supplier contact name 3",value:w},{title:"Supplier contact email 3",value:b}],taxes:{title:"Tax ID",value:x},workCategory:{title:"Work categories covered",value:D},accountContactInformation:[{title:"Accounts receivable contact name",value:Z},{title:"Accounts receivable contact email",value:C}]}}));y(t),i(!1)}))];case 1:return e.sent(),[2]}}))})),[C]);return(0,d.useEffect)((function(){N()}),[null===Z||void 0===Z?void 0:Z.logged_buyer]),{dataManageSuppliers:g,filters:u,filteredData:w,handleSearchChange:function(e){if(""!==e.toLowerCase()){a(!0);var t=g.filter((function(t){var a;return null===(a=t.supplierCompanyName)||void 0===a?void 0:a.toLowerCase().includes(e.toLowerCase())}));b(t)}else a(!1)},loading:r,searchText:t,setFilteredData:b,setDataManageSuppliers:y}},m=i()((function(){return Promise.all([a.e(4617),a.e(532)]).then(a.bind(a,27681))}),{loadableGenerated:{webpack:function(){return[27681]}},loading:function(){return(0,n.jsx)(s.Z,{})}}),g=function(){return(0,n.jsx)(u.gl,{useGetData:h,children:function(e){var t=e.dataManageSuppliers,a=e.filters,r=e.filteredData,i=e.handleSearchChange,s=e.loading,u=e.searchText,o=e.setFilteredData,c=e.setDataManageSuppliers;return(0,n.jsx)(m,{dataManageSuppliers:t,filters:a,filteredData:r,handleSearchChange:i,loading:s,searchText:u,setFilteredData:o,setDataManageSuppliers:c})}})}}},function(e){e.O(0,[7805,1945,1577,1075,5453,3385,2460,7790,1855,8377,5591,5047,9774,2888,179],(function(){return t=21821,e(e.s=t);var t}));var t=e.O();_N_E=t}]);