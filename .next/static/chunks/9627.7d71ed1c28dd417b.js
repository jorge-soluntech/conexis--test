(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9627,5139],{2224:function(e,r,t){"use strict";var o=t(85893),n=t(51904);t(67294);r.Z=function(e){var r=e.label,t=e.closable,a=e.onClose;return(0,o.jsx)(n.Z,{color:"#E6F1CB",onMouseDown:function(e){e.preventDefault(),e.stopPropagation()},closable:t,onClose:a,style:{marginRight:3},children:r})}},19917:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return ne}});var o=t(85893),n=t(67294),a=t(22915),s=t(89480),l=t(62633),i=t(39005),c=t(89235),u=t(63878),p=t(34582),d=t(94996),m=t(4393),_=t(50261),h=t(71230),f=t(71577),v=t(72017),b=t(70856),x=t.n(b),y=function(e){var r=e.title,t=e.form,n=c.k6;return(0,o.jsxs)("div",{className:x().form_subtitle_container,children:[(0,o.jsxs)("div",{className:x().form_small_title,children:[" ",r]}),(0,o.jsx)("button",{type:"button",className:x().form_clear_fields,onClick:function(){return t.resetFields()},children:n.clearFields})]})},g=t(26042),Z=t(69396),C=t(75008),j=t(61342),w=t(67527),E=t(15746),F=t(27484),S=t.n(F),N=t(2224),P=t(16610),I=t.n(P),O=t(46833),G=function(){return{onChangePhoneNumber:function(e){var r=e.target.value;return(0,O.Z)(r)}}},T=t(29776),B=C.Z.TextArea,A=function(e){var r=e.required,t=e.label,a=e.errorMsg,s=void 0===a?"":a,l=e.placeholder,i=e.name,c=e.numberOfColumns,u=void 0===c?1:c,p=e.type,d=void 0===p?"text":p,m=e.options,h=e.aditionalInfo,f=function(e){var r,t,o=e.numberOfColumns,n=e.type,a=e.required,s=e.errorMsg,l=G().onChangePhoneNumber,i={lg:1===o?12:24,sm:24,xs:24,md:1===o?12:24},c=(0,T.Z)(),u=c.ruleValidator,p=c.emptyFieldValidator,d=c.emailFieldValidator,m=c.phoneFieldValidator,_=c.multiSelectValidator,h="";return"email"===n&&(r=[u(!1,"email",d,s)]),"text"!==n&&"select"!==n||!a||(r=[u(!0,"string",p,s)]),"phone"===n&&(r=[u(!1,"string",m,s)],t=l),"multiSelect"===n&&(r=[u(!0,"string",_,s)],h="form_item"),{rules:r,columnsWidthBySize:i,getValueFromEvent:t,className:h}}({type:d,required:r,errorMsg:s,numberOfColumns:u}),v=f.columnsWidthBySize,b=f.getValueFromEvent,x=f.rules,y=f.className,F=(0,n.useCallback)((function(){switch(d){case"date":return(0,o.jsx)(j.Z,{placeholder:l,format:function(e){return"".concat(S()(e).format("DD MMM YYYY"))}});case"select":return(0,o.jsx)(w.Z,{size:"large",maxTagCount:"responsive",optionFilterProp:"children",placeholder:l,options:m});case"textArea":return(0,o.jsx)(B,{size:"large",placeholder:l});case"multiSelect":var e,r,t;return(0,o.jsx)(w.Z,{mode:"multiple",options:m,size:"large",placeholder:l,tagRender:N.Z,style:{height:"fit-content"},className:"select_assigned_buyers",filterOption:function(r,t){return(null!==(e=null===t||void 0===t?void 0:t.label)&&void 0!==e?e:"").toLowerCase().includes(r.toLowerCase())},filterSort:function(e,o){return(null!==(r=null===e||void 0===e?void 0:e.label)&&void 0!==r?r:"").toLowerCase().localeCompare((null!==(t=null===o||void 0===o?void 0:o.label)&&void 0!==t?t:"").toLowerCase())}});default:return(0,o.jsx)(C.Z,{type:"text",size:"large",placeholder:l})}}),[d,l,m]);return(0,o.jsxs)(E.Z,(0,Z.Z)((0,g.Z)({},v),{children:[(0,o.jsx)(_.Z.Item,{help:!1,className:"".concat(I().label," ").concat(y),name:i,validateTrigger:"onSubmit",getValueFromEvent:b,label:t,rules:x,children:F()}),h&&h]}))},k=t(68554),M=t.n(k),z=t(828),R=function(){var e=(0,z.Z)(_.Z.useForm(),1)[0],r=(0,s.T)(),t=(0,s.C)((function(e){return e.suppliers})).dataSupplier,o=(0,n.useState)([]),l=o[0],i=o[1],c=(0,n.useState)(!1),u=c[0],p=c[1];(0,n.useEffect)((function(){e.setFieldsValue(t)}),[]);return{form:e,errors:l,showError:u,clearFormFields:function(){e.resetFields()},onFinishFailed:function(e){var r=e.errorFields,t=[];r.forEach((function(e){e.name&&e.errors&&t.push(e.errors[0])})),i(t),p(!0)},onBack:function(){r((0,a.EY)(0))},setShowError:p,handleContinue:function(e){r((0,a.Bq)(e)),r((0,a.EY)(2))}}},D=c.r_.stepTwo,V=function(){var e=R(),r=e.handleContinue,t=e.form,n=e.onFinishFailed,a=e.errors,s=e.showError,l=e.setShowError,c=e.onBack;return(0,o.jsxs)(m.Z,{className:M().form_create,children:[s&&(0,o.jsx)(v.Z,{message:a[0],afterClose:function(){return l(!1)}}),(0,o.jsxs)(_.Z,{form:t,scrollToFirstError:!0,onFinish:r,onFinishFailed:n,children:[(0,o.jsx)(y,{title:D.title,form:t}),(0,o.jsxs)(h.Z,{className:M().row,children:[(0,o.jsx)(A,{label:D.supplierContactName2,placeholder:D.supplierContactNamePlaceholder,name:i.GZ.stepTwo.optionals.secondary_contact_name}),(0,o.jsx)(A,{type:"email",label:D.supplierContactEmail2,errorMsg:D.supplierContactEmail2Error,placeholder:D.supplierContactEmailPlaceholder,name:i.GZ.stepTwo.optionals.secondary_contact_email})]}),(0,o.jsxs)(h.Z,{className:M().row,children:[(0,o.jsx)(A,{label:D.supplierContactName3,placeholder:D.supplierContactNamePlaceholder,name:i.GZ.stepTwo.optionals.tertiary_contact_name}),(0,o.jsx)(A,{type:"email",label:D.supplierContactEmail3,errorMsg:D.supplierContactEmail3Error,placeholder:D.supplierContactEmailPlaceholder,name:i.GZ.stepTwo.optionals.tertiary_contact_email})]}),(0,o.jsxs)(h.Z,{className:M().row,children:[(0,o.jsx)(A,{label:D.AccountsReceivableContactLabel,placeholder:D.AccountsReceivableContactPlaceHolder,name:i.GZ.stepTwo.optionals.accounts_receivable_contact_name}),(0,o.jsx)(A,{type:"email",label:D.AccountsReceivableContactEmailLabel,errorMsg:D.AccountsReceivableContactEmailError,placeholder:D.AccountsReceivableContactEmailPlaceHolder,name:i.GZ.stepTwo.optionals.accounts_receivable_contact_email})]}),(0,o.jsxs)("div",{className:M().container_button,children:[(0,o.jsx)(f.ZP,{size:"large",type:"default",htmlType:"submit",onClick:c,children:D.backButton}),(0,o.jsx)(f.ZP,{size:"large",type:"primary",htmlType:"submit",children:D.continueButton})]})]})]})},Y=t(73854),q=t.n(Y),L=t(21852),H=function(){var e=(0,z.Z)(_.Z.useForm(),1)[0],r=(0,s.T)(),t=(0,s.C)((function(e){return e.suppliers})).dataSupplier,o=(0,n.useContext)(L.Vo).dataUser,l=(0,n.useState)([{label:"",value:""}]),i=l[0],c=l[1],u=(0,n.useState)(!1),p=u[0],d=u[1],m=(0,n.useState)([]),h=m[0],f=m[1];(0,n.useEffect)((function(){e.setFieldsValue(t)}),[t,e]),(0,n.useEffect)((function(){o&&c(o.permissioned_buyers.map((function(e){return{value:e.buyer,label:e.buyerName}})))}),[o]);return{form:e,showError:p,errors:h,permissionedBuyers:i,onFinishFailed:function(e){var r=e.errorFields,t=[];r.forEach((function(e){e.name&&e.errors&&t.push(e.errors[0])})),f(t),d(!0)},clearFormFields:function(){e.resetFields()},onBack:function(){r((0,a.EY)(1))},setShowError:d,handleContinue:function(e){r((0,a.Bq)(e)),r((0,a.EY)(3))}}},W=function(){var e=c.r_.stepThree,r=H(),t=r.handleContinue,n=r.form,a=r.onBack,s=r.permissionedBuyers,l=r.errors,u=r.showError,p=r.setShowError,d=r.onFinishFailed;return(0,o.jsxs)(m.Z,{className:q().form_create,children:[u&&(0,o.jsx)(v.Z,{message:l[0],afterClose:function(){return p(!1)}}),(0,o.jsxs)(_.Z,{form:n,scrollToFirstError:!0,onFinish:t,onFinishFailed:d,children:[(0,o.jsx)(y,{title:e.title,form:n}),(0,o.jsx)(A,{type:"multiSelect",label:e.AssignedBuyersLabel,errorMsg:e.AssignedBuyersError,placeholder:e.AssignedBuyersPlaceHolder,name:i.GZ.stepThree.mandatories.associated_buyers,numberOfColumns:2,options:s}),(0,o.jsxs)("div",{className:q().container_button,children:[(0,o.jsx)(f.ZP,{size:"large",type:"default",htmlType:"submit",onClick:a,children:e.backButton}),(0,o.jsx)(f.ZP,{size:"large",type:"primary",htmlType:"submit",children:e.continueButton})]})]})]})},$=t(56049),Q=t.n($),U=t(29815),K=t(11163),X=t.n(K),J=t(8025),ee=c.r_.stepOne,re=function(e){var r=e.action,t=(0,z.Z)(_.Z.useForm(),1)[0],o=(0,s.T)(),c=new J.S(X()),u=(0,s.C)((function(e){return e.suppliers})),p=u.dataSupplier,d=u.supplierId,m=(0,n.useState)([]),h=m[0],f=m[1],v=(0,n.useState)(!1),b=v[0],x=v[1],y=(0,T.Z)().validateMandatoryEmptyFields;(0,n.useEffect)((function(){t.setFieldsValue(p)}),[p,t]);return{form:t,errors:h,showError:b,setShowError:x,handleContinue:function(e){var t;x(!1);var n=[e.supplier_company_name,""];r!==l.aO.create&&(n=[e.supplierCompanyName,d]),(t=c).validateSupplierCompanyName.apply(t,(0,U.Z)(n)).then((function(r){r.data.valid?(o((0,a.Bq)((0,Z.Z)((0,g.Z)({},e),{work_categories_covered:[e.work_categories_covered].flat()}))),o((0,a.EY)(1))):(f([ee.supplierCompanyNameAlreadyExistsError]),x(!0))}))},onFinishFailed:function(e){var r=Object.keys(i.GZ.stepOne.mandatories),t=y({errorInfo:e,mandatoriesFields:r});f(t),x(!0)}}},te=function(e){var r=e.action,t=c.r_.stepOne,n=re({action:r}),a=n.form,s=n.errors,l=n.showError,u=n.setShowError,p=n.handleContinue,d=n.onFinishFailed;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(m.Z,{className:Q().form_create,children:(0,o.jsxs)("div",{children:[l&&(0,o.jsx)(v.Z,{message:s[0],afterClose:function(){return u(!1)}}),(0,o.jsxs)(_.Z,{form:a,scrollToFirstError:!0,name:"supplierInformation",onFinish:p,onFinishFailed:d,children:[(0,o.jsx)(y,{form:a,title:t.title}),(0,o.jsxs)(h.Z,{className:Q().row,children:[(0,o.jsx)(A,{required:!0,label:t.SupplierCompanyName,errorMsg:t.SupplierCompanyNameError,placeholder:t.SupplierCompanyNamePlaceholder,name:i.GZ.stepOne.mandatories.supplier_company_name}),(0,o.jsx)(A,{required:!0,label:t.legalNameForInvoicing,errorMsg:t.legalNameForInvoicingError,placeholder:t.legalNameForInvoicingPlaceholder,name:i.GZ.stepOne.mandatories.legal_name_for_invoicing})]}),(0,o.jsxs)(h.Z,{className:Q().row,children:[(0,o.jsx)(A,{label:t.supplierContactName,placeholder:t.supplierContactNamePlaceholder,name:i.GZ.stepOne.optionals.primary_contact_name}),(0,o.jsx)(A,{label:t.supplierCode,placeholder:t.supplierCodePlaceholder,name:i.GZ.stepOne.optionals.supplier_code})]}),(0,o.jsxs)(h.Z,{className:Q().row,children:[(0,o.jsx)(A,{type:"email",label:t.supplierContactEmail,errorMsg:t.supplierContactEmailError,placeholder:t.supplierContactEmailPlaceholder,name:i.GZ.stepOne.optionals.primary_contact_email}),(0,o.jsx)(A,{label:t.supplierMailingAddress,placeholder:t.supplierMailingAddressPlaceholder,name:i.GZ.stepOne.optionals.street_address_line1})]}),(0,o.jsxs)(h.Z,{className:Q().row,children:[(0,o.jsx)(A,{type:"phone",label:t.supplierContactPhone,errorMsg:t.supplierContactPhoneError,placeholder:t.supplierContactPhonePlaceholder,name:i.GZ.stepOne.optionals.primary_contact_phone}),(0,o.jsx)(A,{type:"date",label:t.contractExpirationDate,placeholder:t.contractExpirationDatePlaceholder,name:i.GZ.stepOne.optionals.agreement_expiry_date})]}),(0,o.jsxs)(h.Z,{className:Q().row,children:[(0,o.jsx)(A,{label:t.country,placeholder:t.countryPlaceholder,name:i.GZ.stepOne.optionals.country}),(0,o.jsx)(A,{label:t.state,placeholder:t.statePlaceholder,name:i.GZ.stepOne.optionals.province_region})]}),(0,o.jsxs)(h.Z,{className:Q().row,children:[(0,o.jsx)(A,{label:t.city,placeholder:t.cityPlaceholder,name:i.GZ.stepOne.optionals.city}),(0,o.jsx)(A,{label:t.zipCode,placeholder:t.zipCodePlaceholder,name:i.GZ.stepOne.optionals.postal_code})]}),(0,o.jsxs)(h.Z,{className:Q().row,children:[(0,o.jsx)(A,{label:t.taxIdNumber,placeholder:t.taxIdNumberPlaceholder,name:i.GZ.stepOne.optionals.tax_id}),(0,o.jsx)(A,{type:"select",label:t.geographicCoverage,placeholder:t.geographicCoveragePlaceholder,errorMsg:t.workCategoriesCoveredError,name:i.GZ.stepOne.optionals.geographic_coverage,options:i.p2})]}),(0,o.jsxs)(h.Z,{className:Q().row,children:[(0,o.jsx)(A,{type:"select",label:t.workCategoriesCovered,placeholder:t.geographicCoveragePlaceholder,errorMsg:t.workCategoriesCoveredError,name:i.GZ.stepOne.mandatories.work_categories_covered,options:i.ay,required:!0}),(0,o.jsx)(A,{label:t.dunBradstreetNumber,placeholder:t.dunBradstreetNumberPlaceholder,name:i.GZ.stepOne.optionals.dunn_and_bradstreet_number})]}),(0,o.jsxs)(h.Z,{className:Q().row,children:[(0,o.jsx)(A,{type:"select",label:t.supplierStatus,placeholder:t.supplierStatusPlaceholder,name:i.GZ.stepOne.optionals.supplier_status,options:i.Ft}),(0,o.jsx)(A,{type:"select",label:t.nonResidentSupplier,placeholder:t.nonResidentSupplierPlaceholder,name:i.GZ.stepOne.optionals.is_non_resident_supplier,options:i.G1})]}),(0,o.jsx)(h.Z,{className:Q().row,children:(0,o.jsx)(A,{type:"select",label:t.diversityCertifications,placeholder:t.diversityCertificationsPlaceholder,name:i.GZ.stepOne.optionals.diversity_certifications,options:i.Oc,numberOfColumns:2,aditionalInfo:(0,o.jsx)("div",{className:Q().info_text,children:t.diversityCertificationsInfo})})}),(0,o.jsx)(h.Z,{className:Q().row,children:(0,o.jsx)(A,{type:"textArea",label:t.comments,placeholder:t.commentsPlaceholder,name:i.GZ.stepOne.optionals.comments,options:i.G1,numberOfColumns:2})}),(0,o.jsx)("div",{className:Q().continue_button,children:(0,o.jsx)(f.ZP,{size:"large",type:"primary",htmlType:"submit",children:t.continueButton})})]})]})})})},oe=c.r_,ne=function(e){var r=e.action,t=e.dashboard,c=(0,s.C)((function(e){return e.suppliers})).currentStepSupplier,m=(0,n.useMemo)((function(){return[{step:0,component:(0,o.jsx)(te,{action:r})},{step:1,component:(0,o.jsx)(V,{})},{step:2,component:(0,o.jsx)(W,{})},{step:3,component:r===l.aO.create?(0,o.jsx)(u.Z,{dashboard:l.j2.supplier}):(0,o.jsx)(p.Z,{dashboard:l.j2.supplier})}]}),[r]);return(0,o.jsx)(d.Z,{dashboard:t,setStep:a.EY,clearDataState:a.qS,stepProgressComponent:i.rj,titleForm:oe[r].title,stepsComponents:m,currentStep:c})}},70092:function(e,r,t){"use strict";t.d(r,{i:function(){return p}});var o=t(47568),n=t(51438),a=t(70655),s=t(51573),l=t(97237),i=t(17632),c=function(e,r){return"".concat(e).concat(r)},u="https://d5ja6jkvsot2v.cloudfront.net",p=function e(r){(0,n.Z)(this,e);var t=this;this.getAllBuyers=function(){var e=(0,o.Z)((function(e){var r,o,n;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,(0,l.Z)((0,s.zn)(c(u,"/buyers?page=1&".concat(e?"size=".concat(e):"size=500"))))];case 1:return[2,a.sent().data];case 2:throw r=a.sent(),404===(null===(o=r.response)||void 0===o?void 0:o.status)||400===(null===(n=r.response)||void 0===n?void 0:n.status)||i.$.serverIsDown(t.router),r;case 3:return[2]}}))}));return function(r){return e.apply(this,arguments)}}();var p=this;this.validateNameBuyer=function(){var e=(0,o.Z)((function(e,r){var t,o,n,d;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),t=r?"/buyers/validateName/".concat(e,"?buyerId=").concat(r):"/buyers/validateName/".concat(e),[4,(0,l.Z)((0,s.zn)(c(u,t)))];case 1:return[2,a.sent().data];case 2:throw o=a.sent(),404===(null===(n=o.response)||void 0===n?void 0:n.status)||400===(null===(d=o.response)||void 0===d?void 0:d.status)||i.$.serverIsDown(p.router),o;case 3:return[2]}}))}));return function(r,t){return e.apply(this,arguments)}}();var d=this;this.createBuyer=function(){var e=(0,o.Z)((function(e){var r,t,o;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,(0,l.Z)((0,s.DH)([c(u,"/buyers")],e))];case 1:return[2,n.sent().data];case 2:throw r=n.sent(),404===(null===(t=r.response)||void 0===t?void 0:t.status)||400===(null===(o=r.response)||void 0===o?void 0:o.status)||i.$.serverIsDown(d.router),r;case 3:return[2]}}))}));return function(r){return e.apply(this,arguments)}}();var m=this;this.editBuyer=function(){var e=(0,o.Z)((function(e,r){var t,o,n;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,(0,l.Z)((0,s.FQ)([c(u,"/buyers/".concat(e))],r))];case 1:return[2,a.sent().data];case 2:throw t=a.sent(),404===(null===(o=t.response)||void 0===o?void 0:o.status)||400===(null===(n=t.response)||void 0===n?void 0:n.status)||i.$.serverIsDown(m.router),t;case 3:return[2]}}))}));return function(r,t){return e.apply(this,arguments)}}();var _=this;this.getBuyerById=function(){var e=(0,o.Z)((function(e){var r,t,o;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,(0,l.Z)((0,s.zn)(c(u,"/buyers/".concat(e))))];case 1:return[2,n.sent().data];case 2:throw r=n.sent(),404===(null===(t=r.response)||void 0===t?void 0:t.status)||400===(null===(o=r.response)||void 0===o?void 0:o.status)||i.$.serverIsDown(_.router),r;case 3:return[2]}}))}));return function(r){return e.apply(this,arguments)}}(),this.router=r}},70856:function(e){e.exports={form_subtitle_container:"clearFields_form_subtitle_container__llewC",form_small_title:"clearFields_form_small_title__3PGy_",form_clear_fields:"clearFields_form_clear_fields__ZQjl1",moveToRight:"clearFields_moveToRight__smbs_"}},16610:function(e){e.exports={form_item:"InputStyle_form_item__Rmxin",label:"InputStyle_label__3_hIE",moveToRight:"InputStyle_moveToRight__sIpL_"}},68554:function(e){e.exports={form_create:"AditionalSupplierContacts_form_create__5pxm7",form_subtitle_container:"AditionalSupplierContacts_form_subtitle_container__zEZFH",form_small_title:"AditionalSupplierContacts_form_small_title__Gya9W",form_clear_fields:"AditionalSupplierContacts_form_clear_fields__AOlMY",row:"AditionalSupplierContacts_row__Da_cn",label:"AditionalSupplierContacts_label__X_EV4",info_text:"AditionalSupplierContacts_info_text__n3t9L",container_button:"AditionalSupplierContacts_container_button__LkDVQ",moveToRight:"AditionalSupplierContacts_moveToRight__EQYec"}},73854:function(e){e.exports={form_create:"BuyerInformation_form_create__cvbsv",container_button:"BuyerInformation_container_button__lxjM2",moveToRight:"BuyerInformation_moveToRight__Kj0Gl"}},56049:function(e){e.exports={form_create:"SupplierInformation_form_create__cifIH",form_subtitle_container:"SupplierInformation_form_subtitle_container__qWiLE",form_small_title:"SupplierInformation_form_small_title__MbWOw",form_clear_fields:"SupplierInformation_form_clear_fields__ad9yj",row:"SupplierInformation_row__E1Znl",label:"SupplierInformation_label__8oztx",info_text:"SupplierInformation_info_text__mlOsh",continue_button:"SupplierInformation_continue_button__pyfiG",moveToRight:"SupplierInformation_moveToRight__j_UAY"}}}]);