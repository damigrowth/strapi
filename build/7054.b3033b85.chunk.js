"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[7054],{27054:(_s,N,s)=>{s.d(N,{ReviewWorkflowsCreatePage:()=>G});var t=s(92132),l=s(21272),z=s(85963),h=s(83997),k=s(43064),A=s(30893),D=s(51337),V=s(54514),c=s(61535),Y=s(54894),i=s(82437),H=s(17703),J=s(20296),$=s(264),o=s(97687),I=s(69580),P=s(50516),r=s(45084),O=s(25524),Q=s(47765),ls=s(35658),rs=s(56336),is=s(48940),Es=s(12083),ds=s(15126),Ms=s(63299),Ds=s(67014),Ps=s(59080),Os=s(79275),gs=s(14718),fs=s(5790),ms=s(35223),vs=s(5409),hs=s(74930),cs=s(2600),Ls=s(41286),Cs=s(51187),Rs=s(39404),Ts=s(58692),Ws=s(54257),As=s(501),Is=s(57646),Bs=s(23120),Ks=s(44414),Us=s(25962),ys=s(14664),ws=s(42588),us=s(90325),js=s(62785),xs=s(87443),Ss=s(41032),ps=s(22957),Fs=s(93179),Ns=s(73055),zs=s(15747),ks=s(85306),Vs=s(77965),Ys=s(26509),Hs=s(84624),Js=s(71210),$s=s(32058),Qs=s(81185),Gs=s(82261),Xs=s(60032);const G=()=>{const{formatMessage:a}=(0,Y.A)(),{push:X}=(0,H.W6)(),{_unstableFormatAPIError:Z,_unstableFormatValidationErrors:b}=(0,D.wq)(),_=(0,i.wA)(),E=(0,D.hN)(),{collectionTypes:B,singleTypes:K,isLoading:L}=(0,$.u)(),{isLoading:g,meta:U,workflows:f,createWorkflow:q}=(0,Q.u)(),{isLoading:C,roles:y}=(0,J.u)(),m=(0,i.d4)(o.s),ss=(0,i.d4)(o.a),n=(0,i.d4)(o.b),w=(0,i.d4)(o.c),[u,d]=l.useState(null),{isLoading:j,getFeature:ts}=(0,I.m)(),[os,es]=l.useState(),[x,R]=l.useState({}),v=ts("review-workflows"),S=v?.[O.C],M=v?.[O.a],p=f?.flatMap(e=>e.contentTypes),F=async()=>{R({});try{const e=await q({data:n});if("error"in e){(0,I.x)(e.error)&&e.error.name==="ValidationError"&&es(b(e.error)),E({type:"warning",message:Z(e.error)});return}E({type:"success",message:{id:"Settings.review-workflows.create.page.notification.success",defaultMessage:"Workflow successfully created"}}),X(`/settings/review-workflows/${e.data.id}`)}catch{E({type:"warning",message:{id:"Settings.review-workflows.create.page.notification.error",defaultMessage:"An error occurred"}})}},as=async()=>{await F()},ns=()=>{R({})},T=(0,c.Wx)({enableReinitialize:!0,initialErrors:os,initialValues:n,async onSubmit(){const e=n.contentTypes?.some(W=>p?.includes(W));U&&S&&U?.workflowCount>=parseInt(S,10)?d("workflow"):n.stages&&M&&n.stages.length>=parseInt(M,10)?d("stage"):e?R(W=>({...W,hasReassignedContentTypes:!0})):F()},validate(e){return(0,o.v)({values:e,formatMessage:a})}});return(0,o.u)(O.R,o.i),l.useEffect(()=>{_((0,o.r)()),!g&&f&&_((0,o.d)({workflows:f})),L||_((0,o.e)({collectionTypes:B,singleTypes:K})),C||_((0,o.f)(y)),_((0,o.g)(L||C)),_((0,o.h)({name:""}))},[B,_,L,C,g,y,K,f]),l.useEffect(()=>{!g&&!j&&n.stages&&v?.[O.a]&&M&&n.stages.length>=parseInt(M,10)&&d("stage")},[j,g,v,n.stages,M]),l.useEffect(()=>{!m&&w?.length===0&&E({blockTransition:!0,type:"warning",message:a({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[a,m,w,E]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(P.D,{}),(0,t.jsx)(c.QI,{value:T,children:(0,t.jsxs)(c.lV,{onSubmit:T.handleSubmit,children:[(0,t.jsx)(P.H,{navigationAction:(0,t.jsx)(P.B,{href:"/settings/review-workflows"}),primaryAction:(0,t.jsx)(z.$,{startIcon:(0,t.jsx)(V.A,{}),type:"submit",size:"M",disabled:!ss,children:a({id:"global.save",defaultMessage:"Save"})}),title:a({id:"Settings.review-workflows.create.page.title",defaultMessage:"Create Review Workflow"}),subtitle:a({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:n?.stages?.length??0})}),(0,t.jsx)(P.R,{children:(0,t.jsx)(h.s,{alignItems:"stretch",direction:"column",gap:7,children:m?(0,t.jsx)(k.a,{children:a({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})}):(0,t.jsxs)(h.s,{alignItems:"stretch",direction:"column",gap:7,children:[(0,t.jsx)(o.W,{}),(0,t.jsx)(o.S,{stages:T.values?.stages})]})})})]})}),(0,t.jsx)(D.TM.Root,{isConfirmButtonLoading:m,isOpen:Object.keys(x).length>0,onToggleDialog:ns,onConfirm:as,children:(0,t.jsx)(D.TM.Body,{children:(0,t.jsxs)(h.s,{direction:"column",gap:5,children:[x.hasReassignedContentTypes&&(0,t.jsx)(A.o,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:p?.filter(e=>n.contentTypes?.includes(e)).length})}),(0,t.jsx)(A.o,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})}),(0,t.jsxs)(r.L.Root,{isOpen:u==="workflow",onClose:()=>d(null),children:[(0,t.jsx)(r.L.Title,{children:a({id:"Settings.review-workflows.create.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(r.L.Body,{children:a({id:"Settings.review-workflows.create.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(r.L.Root,{isOpen:u==="stage",onClose:()=>d(null),children:[(0,t.jsx)(r.L.Title,{children:a({id:"Settings.review-workflows.create.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(r.L.Body,{children:a({id:"Settings.review-workflows.create.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}}}]);
