(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5726],{2196:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/my-jobs",function(){return n(22047)}])},81712:function(e,t,n){"use strict";n.d(t,{u:function(){return p}});var o=n(47568),a=n(70655),r=n(11163),u=n.n(r),l=n(67294),i=n(47506),s=n(89480),c=n(81536),d=n(73928),p=function(){var e=(0,s.T)(),t=new d.$(u()),n=(0,s.C)((function(e){return e.dashboard})).currentUserRole,r=(0,l.useState)(!1),p=r[0],f=r[1],b=(0,l.useState)(!1),h=b[0],m=b[1],v=function(e){m(e)},w=function(){return e((0,i.sQ)({router:u(),currentUserRole:n}))},T=function(){var n=(0,o.Z)((function(n,o){return(0,a.__generator)(this,(function(a){return f(!0),t.deleteJobs(n).then((function(){e((0,i.UP)({isIndividual:o,isModalOpened:!0})),w(),f(!1)})),[2]}))}));return function(e,t){return n.apply(this,arguments)}}(),S=function(){var n=(0,o.Z)((function(n){return(0,a.__generator)(this,(function(o){return t.updateStatus(n).then((function(){e((0,i.rv)(!0)),w()})),[2]}))}));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,o.Z)((function(n){return(0,a.__generator)(this,(function(o){return t.updateStatus(n).then((function(){e((0,i.iJ)(!0)),w()})),[2]}))}));return function(e){return n.apply(this,arguments)}}();return{reloadData:w,deleteTemplateJobs:T,loadingDelete:p,repostOnHoldJobs:S,handleUpdateJobStatusOnHold:g,dropdownVisible:h,handleModalDispatch:function(t,n){v(!1),t===c.aO.setToFilled&&e((0,i.m5)(!0)),t===c.aO.cancel&&e((0,i.Ug)(!0)),t===c.aO.duplicateAsTemplate&&e((0,i.X6)(!0)),t===c.aO.delete&&T([n],!0),t===c.aO.repost&&S(n),t===c.aO.putOnHold&&g(n)},handleDropdownVisibleChange:v}}},81536:function(e,t,n){"use strict";n.d(t,{C:function(){return f},Q_:function(){return c},Rz:function(){return i},aO:function(){return d},rC:function(){return p},wG:function(){return s}});var o,a=n(14924),r=n(89235),u=r.vH,l=r.j5.fillJob,i=[{text:u.positionType.temporary,value:u.positionType.temporary},{text:u.positionType.permanent,value:u.positionType.permanent}],s=[{label:l.optionsRejectFailedSubmisions.yes,value:!0},{label:l.optionsRejectFailedSubmisions.no,value:!1}],c={unposted:"Unposted",awaitingApproval:"Awaiting Approval",open:"Open",onHold:"On Hold",template:"Template",canceled:"Canceled",filled:"Filled"},d={edit:"edit",delete:"delete",cancel:"cancel",duplicateAsTemplate:"duplicateAsTemplate",setToFilled:"setToFilled",putOnHold:"putOnHold",addSubmission:"addSubmission",repost:"repost"},p=(o={},(0,a.Z)(o,c.unposted,[d.edit,d.delete,d.cancel,d.duplicateAsTemplate]),(0,a.Z)(o,c.awaitingApproval,[d.edit,d.cancel,d.duplicateAsTemplate]),(0,a.Z)(o,c.open,[d.edit,d.setToFilled,d.cancel,d.putOnHold,d.addSubmission,d.duplicateAsTemplate]),(0,a.Z)(o,c.onHold,[d.setToFilled,d.cancel,d.repost,d.duplicateAsTemplate]),(0,a.Z)(o,c.template,[d.edit,d.delete,d.duplicateAsTemplate]),(0,a.Z)(o,c.canceled,[]),(0,a.Z)(o,c.filled,[]),o),f=[{text:u.jobStatus.template,value:c.template},{text:u.jobStatus.unposted,value:c.unposted},{text:u.jobStatus.open,value:c.open},{text:u.jobStatus.awaitingForApproval,value:c.awaitingApproval},{text:u.jobStatus.filled,value:c.filled},{text:u.jobStatus.canceled,value:c.canceled},{text:u.jobStatus.onHold,value:c.onHold}]},22047:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var o=n(85893),a=n(5152),r=n.n(a),u=n(56209),l=n(75047),i=n(47568),s=n(70655),c=n(11163),d=n.n(c),p=n(67294),f=n(21852),b=n(89480),h=n(60255),m=n(73928),v=n(99189),w=n(81712),T=function(){var e=(0,h.Z)().width,t=void 0===e?0:e,n=(0,p.useContext)(f.Vo).dataUser,o=new m.$(d()),a=(0,b.C)((function(e){return e.jobs})).allJobs,r=(0,b.C)((function(e){return e.dashboard})),u=r.currentUserRole,l=r.currentUserRoleName,c=(0,p.useState)(""),T=c[0],S=c[1],g=(0,p.useState)(!1),_=g[0],J=g[1],j=(0,p.useState)([]),A=j[0],O=j[1],x=(0,p.useState)([]),C=x[0],Z=x[1],y=(0,w.u)().reloadData;(0,p.useEffect)((function(){var e=function(){var e=(0,i.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return J(!0),[4,y()];case 1:return e.sent(),J(!1),[2]}}))}));return function(){return e.apply(this,arguments)}}();return e(),function(){Z([])}}),[u,null===n||void 0===n?void 0:n.logged_buyer]),(0,p.useEffect)((function(){O(T?a.filter((function(e){return e.jobId.toLowerCase().includes(T.toLowerCase())||e.jobTitle.toLowerCase().includes(T.toLowerCase())})):a)}),[a,T]);return{currentUserRoleName:l,handleSearchChange:function(e){S(e)},exportAllJobs:function(e){o.exportAllJobs(u,e).then((function(t){(0,v.Z)("jobs",e,t)}))},loading:_,width:t,filteredData:A,allJobs:a,search:T,setTemplateJobs:Z,templateJobs:C}},S=r()((function(){return Promise.all([n.e(5239),n.e(4479)]).then(n.bind(n,94479))}),{loadableGenerated:{webpack:function(){return[94479]}},loading:function(){return(0,o.jsx)(u.Z,{})},ssr:!0}),g=function(){return(0,o.jsx)(l.gl,{useGetData:T,children:function(e){var t=e.currentUserRoleName,n=e.handleSearchChange,a=e.exportAllJobs,r=e.loading,u=e.width,l=e.filteredData,i=e.allJobs,s=e.search,c=e.setTemplateJobs,d=e.templateJobs;return(0,o.jsx)(S,{currentUserRoleName:t,handleSearchChange:n,exportAllJobs:a,loading:r,width:u,filteredData:l,allJobs:i,search:s,setTemplateJobs:c,templateJobs:d})}})}}},function(e){e.O(0,[7805,1945,1577,1075,5453,3385,2460,7790,1855,8377,5591,5047,9774,2888,179],(function(){return t=2196,e(e.s=t);var t}));var t=e.O();_N_E=t}]);