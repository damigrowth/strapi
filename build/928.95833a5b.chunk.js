"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[928,6428],{60928:(F,U,s)=>{s.d(U,{ProtectedCreateView:()=>Q});var t=s(92132),P=s(51337),m=s(82437),v=s(97987),C=s(86428),g=s(21272),c=s(72810),D=s(18022),_=s(69580),O=s(15126),e=s(63299),a=s(67014),z=s(59080),N=s(79275),y=s(14718),x=s(61535),L=s(5790),f=s(12083),j=s(35223),A=s(5409),l=s(74930),H=s(2600),X=s(48940),Z=s(41286),w=s(51187),b=s(56336),q=s(39404),ss=s(58692),ts=s(54257),_s=s(501),ns=s(57646),as=s(23120),Es=s(44414),os=s(25962),rs=s(14664),es=s(42588),ds=s(90325),is=s(62785),Ms=s(87443),Ps=s(41032),Ds=s(22957),Os=s(93179),ls=s(73055),Ts=s(15747),ms=s(85306),vs=s(77965),Cs=s(26509),Ls=s(84624),As=s(71210),Is=s(32058),Rs=s(81185),Bs=s(82261),Us=s(14577),fs=s(32118);const Q=()=>{const $=(0,m.d4)(v.s);return(0,t.jsx)(P.kz,{permissions:$.settings?.["transfer-tokens"].create,children:(0,t.jsx)(C.w,{})})}},86428:(F,U,s)=>{s.d(U,{ProtectedEditView:()=>Ks,w:()=>k});var t=s(92132),P=s(21272),m=s(38413),v=s(4198),C=s(83997),g=s(94061),c=s(30893),D=s(90151),_=s(68074),O=s(55356),e=s(85963),a=s(51337),z=s(54514),N=s(61535),y=s(54894),x=s(17703),L=s(12083),f=s(69580),j=s(14577),A=s(99831),l=s(32118),H=s(15126),X=s(63299),Z=s(67014),w=s(59080),b=s(79275),q=s(14718),ss=s(82437),ts=s(5790),_s=s(35223),ns=s(5409),as=s(74930),Es=s(2600),os=s(48940),rs=s(41286),es=s(51187),ds=s(56336),is=s(39404),Ms=s(58692),Ps=s(54257),Ds=s(501),Os=s(57646),ls=s(23120),Ts=s(44414),ms=s(25962),vs=s(14664),Cs=s(42588),Ls=s(90325),As=s(62785),Is=s(87443),Rs=s(41032),Bs=s(22957),Us=s(93179),fs=s(73055),Q=s(15747),$=s(85306),Fs=s(77965),zs=s(26509),Ns=s(84624),Qs=s(71210),$s=s(32058),ks=s(81185),Ys=s(82261);const Ws=L.Ik().shape({name:L.Yj().max(100).required(a.iW.required),description:L.Yj().nullable(),lifespan:L.ai().integer().min(0).nullable().defined(a.iW.required),permissions:L.Yj().required(a.iW.required)}),k=()=>{(0,a.L4)();const{formatMessage:o}=(0,y.A)(),{lockApp:r,unlockApp:W}=(0,a.MA)(),i=(0,a.hN)(),I=(0,x.W6)(),{state:K}=(0,x.zy)(),[E,R]=P.useState(K&&"accessKey"in K.transferToken?{...K.transferToken}:null),{trackUsage:T}=(0,a.z1)(),{setCurrentStep:cs}=(0,a.Cx)(),ys=(0,f.j)(d=>d.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:xs,canUpdate:js,canRegenerate:ps}}=(0,a.ec)(ys),p=(0,x.W5)("/settings/transfer-tokens/:id")?.params?.id,M=p==="create",{_unstableFormatAPIError:u,_unstableFormatValidationErrors:Y}=(0,a.wq)();P.useEffect(()=>{T(M?"didAddTokenFromList":"didEditTokenFromList",{tokenType:A.T})},[M,T]);const{data:S,error:V}=(0,j.u)(p,{skip:M||E!==null||!p});P.useEffect(()=>{V&&i({type:"warning",message:u(V)})},[V,u,i]),P.useEffect(()=>{S&&R(S)},[S]);const[us]=(0,j.a)(),[Ss]=(0,j.b)(),Vs=async(d,B)=>{T(M?"willCreateToken":"willEditToken",{tokenType:A.T}),r();const h=d.permissions.split("-");if((n=>n.length===1?n[0]==="push"||n[0]==="pull":n[0]==="push"&&n[1]==="pull")(h))try{if(M){const n=await us({...d,permissions:h});if("error"in n){(0,f.x)(n.error)&&n.error.name==="ValidationError"?B.setErrors(Y(n.error)):i({type:"warning",message:u(n.error)});return}R(n.data),i({type:"success",message:o({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),T("didCreateToken",{type:E?.permissions,tokenType:A.T}),I.push(`/settings/transfer-tokens/${n.data.id}`,{transferToken:n.data}),cs("transferTokens.success")}else{const n=await Ss({id:p,name:d.name,description:d.description,permissions:h});if("error"in n){(0,f.x)(n.error)&&n.error.name==="ValidationError"?B.setErrors(Y(n.error)):i({type:"warning",message:u(n.error)});return}R(n.data),i({type:"success",message:o({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),T("didEditToken",{type:E?.permissions,tokenType:A.T})}}catch{i({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{W()}},G=js&&!M||xs&&M;return!M&&!E?(0,t.jsx)(gs,{}):(0,t.jsxs)(m.g,{children:[(0,t.jsx)(a.x7,{name:"Transfer Tokens"}),(0,t.jsx)(N.l1,{validationSchema:Ws,validateOnChange:!1,initialValues:{name:E?.name||"",description:E?.description||"",lifespan:E?.lifespan??null,permissions:E?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(d,B)=>Vs(d,B),children:({errors:d,handleChange:B,isSubmitting:h,values:J})=>(0,t.jsxs)(a.lV,{children:[(0,t.jsx)(l.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:E,setToken:R,canEditInputs:G,canRegenerate:ps,isSubmitting:h,regenerateUrl:"/admin/transfer/tokens/"}),(0,t.jsx)(v.s,{children:(0,t.jsxs)(C.s,{direction:"column",alignItems:"stretch",gap:6,children:[E&&Boolean(E?.name)&&"accessKey"in E&&(0,t.jsx)(l.c,{token:E.accessKey,tokenType:A.T}),(0,t.jsx)(hs,{errors:d,onChange:B,canEditInputs:G,isCreating:M,values:J,transferToken:E})]})})]})})]})},Ks=()=>{const o=(0,f.j)(r=>r.admin_app.permissions.settings?.["transfer-tokens"].read);return(0,t.jsx)(a.kz,{permissions:o,children:(0,t.jsx)(k,{})})},hs=({errors:o={},onChange:r,canEditInputs:W,isCreating:i,values:I,transferToken:K={}})=>{const{formatMessage:E}=(0,y.A)(),R=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,t.jsx)(g.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(C.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(c.o,{variant:"delta",as:"h2",children:E({id:"global.details",defaultMessage:"Details"})}),(0,t.jsxs)(D.x,{gap:5,children:[(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.T,{error:o.name,value:I.name,canEditInputs:W,onChange:r})},"name"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.a,{error:o.description,value:I.description,canEditInputs:W,onChange:r})},"description"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.L,{isCreating:i,error:o.lifespan,value:I.lifespan,onChange:r,token:K})},"lifespan"),(0,t.jsx)(_.E,{col:6,xs:12,children:(0,t.jsx)(l.b,{name:"permissions",value:I.permissions,error:o.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:T=>{r({target:{name:"permissions",value:T}})},options:R,canEditInputs:W})},"permissions")]})]})})},gs=({transferTokenName:o})=>{const{formatMessage:r}=(0,y.A)();return(0,a.L4)(),(0,t.jsxs)(m.g,{"aria-busy":"true",children:[(0,t.jsx)(a.x7,{name:"Transfer Tokens"}),(0,t.jsx)(O.Q,{primaryAction:(0,t.jsx)(e.$,{disabled:!0,startIcon:(0,t.jsx)(z.A,{}),type:"button",size:"L",children:r({id:"global.save",defaultMessage:"Save"})}),title:o||r({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,t.jsx)(v.s,{children:(0,t.jsx)(a.Bl,{})})]})}},14577:(F,U,s)=>{s.d(U,{a:()=>C,b:()=>c,c:()=>m,d:()=>g,u:()=>v});var t=s(69580);const P=t.n.injectEndpoints({endpoints:D=>({getTransferTokens:D.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:_=>_.data,providesTags:(_,O)=>[..._?.map(({id:e})=>({type:"TransferToken",id:e}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:D.query({query:_=>`/admin/transfer/tokens/${_}`,transformResponse:_=>_.data,providesTags:(_,O,e)=>[{type:"TransferToken",id:e}]}),createTransferToken:D.mutation({query:_=>({url:"/admin/transfer/tokens",method:"POST",data:_}),transformResponse:_=>_.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:D.mutation({query:_=>({url:`/admin/transfer/tokens/${_}`,method:"DELETE"}),transformResponse:_=>_.data,invalidatesTags:(_,O,e)=>[{type:"TransferToken",id:e}]}),updateTransferToken:D.mutation({query:({id:_,...O})=>({url:`/admin/transfer/tokens/${_}`,method:"PUT",data:O}),transformResponse:_=>_.data,invalidatesTags:(_,O,{id:e})=>[{type:"TransferToken",id:e}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:m,useGetTransferTokenQuery:v,useCreateTransferTokenMutation:C,useDeleteTransferTokenMutation:g,useUpdateTransferTokenMutation:c}=P}}]);
