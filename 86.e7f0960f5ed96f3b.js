"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[86],{9086:(A,d,l)=>{l.r(d),l.d(d,{AccountModule:()=>M});var m=l(6895),a=l(9155),e=l(8256);let p=(()=>{class t{constructor(o){this.document=o}ngOnInit(){this.document.body.classList.add("login")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(m.K0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-account"]],decls:1,vars:0,template:function(o,n){1&o&&e._UZ(0,"router-outlet")},dependencies:[a.lC]}),t})();var s=l(433),c=l(5604),u=l(5811);function h(t,r){1&t&&(e.TgZ(0,"small",19),e._uU(1,"* Please provide a User name"),e.qZA())}function x(t,r){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,h,2,0,"small",18),e.qZA()),2&t){const o=e.oxw();let n;e.xp6(1),e.Q6J("ngIf",null==(n=o.getErrors("username"))?null:n.required)}}function f(t,r){1&t&&(e.TgZ(0,"small",19),e._uU(1," * Please enter a valid password "),e.qZA())}function _(t,r){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,f,2,0,"small",18),e.qZA()),2&t){const o=e.oxw();let n;e.xp6(1),e.Q6J("ngIf",null==(n=o.getErrors("password"))?null:n.required)}}function v(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"app-error-message-modal",20),e.NdJ("onClose",function(){e.CHM(o);const i=e.oxw();return e.KtG(i.closeModal())}),e.TgZ(1,"span"),e._uU(2,"Login Error, Please Try Again"),e.qZA()()}}let y=(()=>{class t{constructor(o,n,i){this.fb=o,this.auth=n,this.router=i,this.msg="",this.isModalVisible=!1}ngOnInit(){this.loginForm=this.fb.group({username:["",[s.kI.required]],password:["",[s.kI.required]]})}getErrors(o){return this.loginForm.get(o)?.errors}getField(o){return this.loginForm.get(o)}onLogin(){this.auth.login(this.loginForm.value).subscribe({next:o=>{this.auth.saveUser(o),this.router.navigateByUrl("/dashboard/main-page")},error:o=>{console.log(o.status),401===o.status&&this.showModal(),console.log("--------errr------------")}})}showModal(){this.timerRef&&clearTimeout(this.timerRef),this.isModalVisible=!0,this.timerRef=setTimeout(()=>{this.closeModal()},2500)}closeModal(){this.isModalVisible=!1,this.timerRef&&clearTimeout(this.timerRef)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.qu),e.Y36(c.e),e.Y36(a.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:23,vars:5,consts:[[1,"container","sm:px-10"],[1,"block","xl:grid","grid-cols-2","gap-4"],[1,"hidden","xl:flex","flex-col","min-h-screen"],[1,"my-auto","logo-wrapper"],[1,"-intro-x","font-medium","text-4xl","leading-tight","mt-10"],[3,"formGroup","ngSubmit"],[1,"h-screen","xl:h-auto","flex","py-5","xl:py-0","my-10","xl:my-0"],[1,"my-auto","mx-auto","xl:ml-20","bg-white","dark:bg-darkmode-600","xl:bg-transparent","px-5","sm:px-8","py-8","xl:p-0","rounded-md","shadow-md","xl:shadow-none","w-full","sm:w-3/4","lg:w-2/4","xl:w-auto"],[1,"intro-x","font-bold","text-2xl","xl:text-3xl","text-center","xl:text-left"],[1,"intro-x","mt-2","text-slate-400","xl:hidden","text-center"],[1,"intro-x","mt-8"],["formControlName","username","type","text","placeholder","User name",1,"intro-x","login__input","form-control","py-3","px-4","block"],[4,"ngIf"],["formControlName","password","type","password","placeholder","Password",1,"intro-x","login__input","form-control","py-3","px-4","block","mt-4"],[1,"intro-x","mt-5","xl:mt-8","text-center","xl:text-left"],["type","submit",1,"btn","btn-primary","py-3","px-4","w-full","xl:w-32","xl:mr-3","align-top",3,"disabled"],[1,"intro-x","mt-10","xl:mt-24","text-slate-600","dark:text-slate-500","text-center","xl:text-left"],[3,"onClose",4,"ngIf"],["class","error-message",4,"ngIf"],[1,"error-message"],[3,"onClose"]],template:function(o,n){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._uU(5," Surveillance system for the private health sector "),e.qZA()()(),e.TgZ(6,"form",5),e.NdJ("ngSubmit",function(){return n.onLogin()}),e.TgZ(7,"div",6)(8,"div",7)(9,"h2",8),e._uU(10,"Sign In"),e.qZA(),e.TgZ(11,"div",9),e._uU(12," Supreme Council of Egyptian Universities "),e.qZA(),e.TgZ(13,"div",10),e._UZ(14,"input",11),e.YNc(15,x,2,1,"div",12),e._UZ(16,"input",13),e.YNc(17,_,2,1,"div",12),e.qZA(),e.TgZ(18,"div",14)(19,"button",15),e._uU(20,"Login"),e.qZA()(),e._UZ(21,"div",16),e.qZA()()()(),e.YNc(22,v,3,0,"app-error-message-modal",17),e.qZA()),2&o){let i,g;e.xp6(6),e.Q6J("formGroup",n.loginForm),e.xp6(9),e.Q6J("ngIf",n.getErrors("username")&&(null==(i=n.getField("username"))?null:i.touched)),e.xp6(2),e.Q6J("ngIf",n.getErrors("password")&&(null==(g=n.getField("password"))?null:g.touched)),e.xp6(2),e.Q6J("disabled",n.loginForm.invalid),e.xp6(3),e.Q6J("ngIf",n.isModalVisible)}},dependencies:[m.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,u.f],styles:[".logo-wrapper[_ngcontent-%COMP%]{width:80%;text-align:center}.logo-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:300px;border-radius:50%;height:300px;margin:auto;background-color:#fff}.h-screen[_ngcontent-%COMP%]{display:flex;align-items:center;height:auto;min-height:100vh}.btn-primary[_ngcontent-%COMP%]{width:100%;background-color:#b4ddef!important;color:#1e293b;font-weight:700;font-size:1.3rem}.error-message[_ngcontent-%COMP%]{color:#e92020}"]}),t})();var C=l(5656);function T(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"app-error-message-modal",11),e.NdJ("onClose",function(){e.CHM(o);const i=e.oxw();return e.KtG(i.closeModal())}),e.TgZ(1,"span"),e._uU(2,"Login Error, Please Try Again"),e.qZA()()}}const b=[{path:"",component:p,children:[{path:"",component:y},{path:"login-by-token/:token",component:(()=>{class t{constructor(o,n,i){this.auth=o,this.router=n,this.activatedRoute=i,this.msg="",this.isModalVisible=!1}ngOnInit(){if(this.auth.checkUser(),this.auth.userData.token)return void this.router.navigateByUrl("/");let o=this.activatedRoute.snapshot.paramMap.get("token")||"",n=this.decodeToken(o);n?this.auth.login({username:n.auth.username,password:n.auth.password}).subscribe({next:i=>{this.auth.saveUser(i),this.router.navigateByUrl("/dashboard/main-page")},error:i=>{this.router.navigateByUrl("/account")}}):this.router.navigateByUrl("/account")}decodeToken(o){try{return(0,C.o)(o)}catch{return null}}showModal(){this.timerRef&&clearTimeout(this.timerRef),this.isModalVisible=!0,this.timerRef=setTimeout(()=>{this.closeModal()},2500)}closeModal(){this.isModalVisible=!1,this.timerRef&&clearTimeout(this.timerRef)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.e),e.Y36(a.F0),e.Y36(a.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login-by-token"]],decls:14,vars:1,consts:[[1,"container","sm:px-10"],[1,"block","xl:grid","grid-cols-2","gap-4"],[1,"hidden","xl:flex","flex-col","min-h-screen"],[1,"my-auto","logo-wrapper"],["alt","logo","src","./assets/images/logo_new.svg",1,"-intro-x","w-1/2","-mt-16"],[1,"-intro-x","text-red","font-medium","text-4xl","leading-tight","mt-10"],[1,"h-screen","xl:h-auto","flex","py-5","xl:py-0","my-10","xl:my-0"],[1,"my-auto","mx-auto","xl:ml-20","bg-white","dark:bg-darkmode-600","xl:bg-transparent","px-5","sm:px-8","py-8","xl:p-0","rounded-md","shadow-md","xl:shadow-none","w-full","sm:w-3/4","lg:w-2/4","xl:w-auto"],[1,"intro-x","font-bold","text-2xl","xl:text-3xl","text-center","xl:text-left"],[1,"intro-x","mt-2","text-slate-400","xl:hidden","text-center"],[3,"onClose",4,"ngIf"],[3,"onClose"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.TgZ(5,"div",5),e._uU(6," FHI360 Dashboard "),e.qZA()()(),e.TgZ(7,"div",6)(8,"div",7)(9,"h2",8),e._uU(10,"Wait will redirect soon"),e.qZA(),e.TgZ(11,"div",9),e._uU(12," Supreme Council of Egyptian Universities "),e.qZA()()()(),e.YNc(13,T,3,0,"app-error-message-modal",10),e.qZA()),2&o&&(e.xp6(13),e.Q6J("ngIf",n.isModalVisible))},dependencies:[m.O5,u.f],styles:[".logo-wrapper[_ngcontent-%COMP%]{width:80%;text-align:center}.logo-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:300px;border-radius:50%;height:300px;margin:auto;background-color:#fff}.h-screen[_ngcontent-%COMP%]{display:flex;align-items:center;height:auto;min-height:100vh}.btn-primary[_ngcontent-%COMP%]{width:100%;background-color:#b4ddef!important}.error-message[_ngcontent-%COMP%]{color:#e92020}"]}),t})()}]}];let w=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(b),a.Bz]}),t})();var Z=l(2234);let M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.ez,w,s.UX,s.u5,Z.m]}),t})()}}]);