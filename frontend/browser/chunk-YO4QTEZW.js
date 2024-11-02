import{$ as se,U as ie,V as ne,W as oe,X as re,Y as ae,Z as le,_ as me,aa as de,k as G,l as S,m as b,o as Q,q as C,r as $,s as J,t as K,u as Y,v as X,w as Z,x as ee,z as te}from"./chunk-XLWFQ7QZ.js";import{Db as q,Fb as U,Gb as z,Hb as H,Lb as i,Mb as d,Nb as j,Pb as g,Rb as I,Ta as _,Tb as p,Ub as f,Wa as a,Xa as L,ca as V,ga as u,kb as c,ob as s,sb as e,tb as t,tc as h,ub as m,uc as W,vb as w,vc as T,wb as F,xc as x,z as R,zb as P}from"./chunk-CQWY5DC2.js";var fe=r=>({transform:r});function ue(r,o){if(r&1&&(w(0),m(1,"img",8),F()),r&2){let n=o.$implicit;a(),s("src",n,_)}}var A=class r{currentSlide=0;translateService=V(G);images=["images/people_in_meeting.jpg"];ngOnInit(){this.autoSlide()}autoSlide(){setInterval(()=>{this.currentSlide=(this.currentSlide+1)%this.images.length},3e3)}nextSlide(){this.currentSlide=(this.currentSlide+1)%this.images.length}prevSlide(){this.currentSlide=(this.currentSlide-1+this.images.length)%this.images.length}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=u({type:r,selectors:[["app-home"]],standalone:!0,features:[g],decls:16,vars:13,consts:[[1,"relative","overflow-hidden","w-full","h-screen"],[1,"absolute","inset-0","transition-transform","duration-700",3,"ngStyle"],[4,"ngFor","ngForOf"],[1,"absolute","inset-0","bg-gradient-to-t","from-gray-900","to-black","opacity-80"],[1,"absolute","top-0","left-0","h-full","w-full","inset-0","flex","flex-col","items-center","justify-center"],[1,"website_title","text-white","text-4xl","font-bold"],[1,"text-white","text-2xl","text-center"],[1,"px-6","py-2","bg-[#AF4E64]","text-white","transition","duration-800","hover:bg-[#701C2F]"],["alt","Slider Image",1,"w-full","h-full","object-cover",3,"src"]],template:function(n,l){n&1&&(e(0,"div",0)(1,"div",1),c(2,ue,2,1,"ng-container",2),t(),m(3,"div",3),e(4,"div",4)(5,"h1",5),i(6,"CVTHEQUE"),t(),e(7,"p",6),i(8),p(9,"translate"),t(),e(10,"p",6),i(11),p(12,"translate"),t(),e(13,"button",7),i(14),p(15,"translate"),t()()()),n&2&&(a(),s("ngStyle",I(11,fe,"translateX("+l.currentSlide*-100+"%)")),a(),s("ngForOf",l.images),a(6),d(f(9,5,"FIND_TALENTS")),a(3),d(f(12,7,"FIND_JOBS")),a(3),d(f(15,9,"START_NOW")))},dependencies:[x,h,T,b,S],styles:[".website_title[_ngcontent-%COMP%]{font-size:calc(15px + 10vw);-webkit-text-stroke:white;-webkit-text-stroke-width:4px;color:transparent;padding:10px}"]})};function ge(r,o){if(r&1&&(e(0,"li",15)(1,"span",16),i(2),t(),e(3,"div")(4,"h3",17),i(5),t(),e(6,"p",18),i(7),t()()()),r&2){let n=o.$implicit,l=o.index;a(2),j("",l+1,"."),a(3),d(n.title),a(2),d(n.description)}}function ve(r,o){if(r&1&&(e(0,"li",15)(1,"span",16),i(2),t(),e(3,"div")(4,"h3",17),i(5),t(),e(6,"p",18),i(7),t()()()),r&2){let n=o.$implicit,l=o.index;a(2),j("",l+1,"."),a(3),d(n.title),a(2),d(n.description)}}var O=class r{companiesAdvantages=[{title:"Access to a Vast Talent Pool",description:"Easily search, filter, and find qualified candidates suited for various roles across industries"},{title:"Enhanced Screening Tools",description:"View standardized CV formats, skill summaries, and candidate profiles to streamline the hiring process"},{title:"Customizable CV Database",description:"Save and organize favorite profiles, and set notifications for new candidates meeting your requirements"},{title:"Direct Messaging and Scheduling",description:"Contact candidates directly or schedule interviews within the platform"},{title:"Analytics and Insights",description:"Access data on search trends and hiring stats to make informed recruitment decisions"}];jobSeekersAdvantages=[{title:"Professional CV Builder",description:"Create and customize a standout CV with templates that suit various industries and roles."},{title:"Personalized Job Recommendations",description:"Receive job matches based on your skills, experience, and career goals."},{title:"Enhanced Profile Visibility",description:"Showcase your skills and achievements directly to top companies"},{title:"Application Tracking",description:"Stay updated on the status of your applications, from submission to interview invites"},{title:"Career Resources",description:"Access tools and tips on improving your CV, acing interviews, and advancing your career"}];static \u0275fac=function(n){return new(n||r)};static \u0275cmp=u({type:r,selectors:[["app-services"]],standalone:!0,features:[g],decls:33,vars:8,consts:[["id","#services",1,"flex","flex-col","items-center","min-h-screen"],[1,"flex","flex-col","align-center","w-full","p-8","shadow-xl"],[1,"text-4xl","text-center"],[1,"text-center"],[1,"as-company","py-6","flex","flex-col","md:flex-row","w-full","h-fit","mt-2","bg-[#F1A7B8]","bg-opacity-60"],[1,"flex","flex-col","md:flex-row","w-full","justify-center","items-center","gap-8"],["src","images/people_in_business_clothes.png","alt","",1,"w-full","max-w-lg","h-auto"],[1,"flex","flex-col"],[1,"text-2xl","font-bold","text-center","text-white"],[1,"mt-4"],["class","flex items-start mb-2",4,"ngFor","ngForOf"],[1,"w-fit","px-6","py-2","bg-white","text-[#AF4E64]","transition","duration-800","hover:text-white","hover:bg-[#701C2F]"],[1,"as-jobseeker","flex","flex-col","md:flex-row","w-full","h-fit"],[1,"flex","flex-col","pt-6","md:flex-row-reverse","w-full","justify-center","items-center","gap-8","bg-gradient-to-r","from-[#F1A7B8]","via-[#F1A7B8]","to-[#F1A7B8]"],["src","images/job_seeker.png","alt","",1,"w-full","max-w-lg","h-auto"],[1,"flex","items-start","mb-2"],[1,"text-lg","font-semibold","text-gray-700","mr-4"],[1,"text-xl","font-bold","text-gray-800"],[1,"text-gray-600"]],template:function(n,l){n&1&&(e(0,"div",0)(1,"div",1)(2,"h2",2),i(3,"OFFERED SERVICE"),t(),e(4,"p",3),i(5,"Look at the advantages of being on the gozemServices Cvtheque"),t()(),e(6,"section",4)(7,"div",5),m(8,"img",6),e(9,"div",7)(10,"h3",8),i(11,"AS A COMPANY"),t(),e(12,"p",3),i(13,"What "),t(),e(14,"ul",9),c(15,ge,8,3,"li",10),t(),e(16,"button",11),i(17),p(18,"translate"),t()()()(),m(19,"div"),e(20,"section",12)(21,"div",13),m(22,"img",14),e(23,"div",7)(24,"h3",8),i(25,"AS A JOBSEEKER"),t(),e(26,"p",3),i(27,"What "),t(),e(28,"ul",9),c(29,ve,8,3,"li",10),t(),e(30,"button",11),i(31),p(32,"translate"),t()()()()()),n&2&&(a(15),s("ngForOf",l.companiesAdvantages),a(2),d(f(18,4,"START_NOW")),a(12),s("ngForOf",l.jobSeekersAdvantages),a(2),d(f(32,6,"START_NOW")))},dependencies:[x,h,b,S]})};function xe(r,o){r&1&&(e(0,"mat-error"),i(1," Name is required. "),t())}function he(r,o){r&1&&(e(0,"mat-error"),i(1," Valid email is required. "),t())}function Se(r,o){r&1&&(e(0,"mat-error"),i(1," Message is required. "),t())}var D=class r{constructor(o){this.fb=o;this.contactForm=this.fb.group({name:["",C.required],email:["",[C.required,C.email]],phone:["",[]],content:["",C.required]})}contactForm;ngOnInit(){}onSubmit(){if(this.contactForm.valid){let o=this.contactForm.value;console.log("Form Submitted!",o)}}static \u0275fac=function(n){return new(n||r)(L(ee))};static \u0275cmp=u({type:r,selectors:[["app-contact-us"]],standalone:!0,features:[g],decls:27,vars:5,consts:[[1,"mt-4","my-10","bg-white","w-90","rounded-xl","px-4","flex","justify-center","items-center","flex-col","mx-auto","p-8"],[1,"text-2xl","font-bold","mb-4"],[1,"p-8","shadow-xl",3,"ngSubmit","formGroup"],["appearance","fill",1,"w-full","mb-4"],["matInput","","formControlName","name","required",""],[4,"ngIf"],["matInput","","type","email","formControlName","email","required",""],["matInput","","type","tel","formControlName","phone"],["matInput","","formControlName","content","rows","4","required",""],["type","submit",1,"w-fit","px-4","cursor-pointer","bg-white","border-[#AF4E64]","border-2","text-[#AF4E64]","font-bold","py-2","rounded-sm","hover:bg-[#AF4E64]","hover:text-white","transition","duration-800",3,"disabled"]],template:function(n,l){if(n&1&&(e(0,"div",0)(1,"h2",1),i(2,"Contact Us"),t(),e(3,"p"),i(4,"Un soucis, une suggestion, envoyez nous un message et nous vous r\xE9pondront dans de brefs d\xE9lais"),t(),e(5,"form",2),P("ngSubmit",function(){return l.onSubmit()}),e(6,"mat-form-field",3)(7,"mat-label"),i(8,"Name"),t(),m(9,"input",4),c(10,xe,2,0,"mat-error",5),t(),e(11,"mat-form-field",3)(12,"mat-label"),i(13,"Email"),t(),m(14,"input",6),c(15,he,2,0,"mat-error",5),t(),e(16,"mat-form-field",3)(17,"mat-label"),i(18,"Phone"),t(),m(19,"input",7),t(),e(20,"mat-form-field",3)(21,"mat-label"),i(22,"Message"),t(),m(23,"textarea",8),c(24,Se,2,0,"mat-error",5),t(),e(25,"button",9),i(26," Send Message "),t()()()),n&2){let v,E,y;a(5),s("formGroup",l.contactForm),a(5),s("ngIf",((v=l.contactForm.get("name"))==null?null:v.invalid)&&((v=l.contactForm.get("name"))==null?null:v.touched)),a(5),s("ngIf",((E=l.contactForm.get("email"))==null?null:E.invalid)&&((E=l.contactForm.get("email"))==null?null:E.touched)),a(9),s("ngIf",((y=l.contactForm.get("content"))==null?null:y.invalid)&&((y=l.contactForm.get("content"))==null?null:y.touched)),a(),s("disabled",l.contactForm.invalid)}},dependencies:[te,K,Q,$,J,Z,Y,X,x,W,se,le,ae,oe,ie,ne,re,me]})};var be=["cvContainer"],Ce=r=>({"background-color":r});function Ee(r,o){if(r&1&&(e(0,"div",12),m(1,"img",13),e(2,"p"),i(3),t()()),r&2){let n=o.$implicit;s("ngStyle",I(3,Ce,n.color)),a(),q("src",n.image,_),a(2),d(n.title)}}var k=class r{cvContainer;cvs=[];scrollSubscription;constructor(){let o=Array(20).fill(0).map((n,l)=>({image:"images/people_in_meeting.jpg",title:`Web developer ${l+1}`,color:this.getRandomColor()}));this.cvs=[...o,...o]}ngOnInit(){this.startAutoScroll()}ngOnDestroy(){this.scrollSubscription&&this.scrollSubscription.unsubscribe()}startAutoScroll(){this.scrollSubscription=R(3e3).subscribe(()=>{this.scrollToRight()})}scrollToRight(){let o=this.cvContainer.nativeElement,n=345;o.scrollLeft+=n,o.scrollLeft>=o.scrollWidth/2-o.clientWidth&&(o.scrollLeft=0)}getRandomColor(){let o="0123456789ABCDEF",n="#";for(let l=0;l<6;l++)n+=o[Math.floor(Math.random()*16)];return n}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=u({type:r,selectors:[["app-latest-cv"]],viewQuery:function(n,l){if(n&1&&U(be,5),n&2){let v;z(v=H())&&(l.cvContainer=v.first)}},standalone:!0,features:[g],decls:19,vars:10,consts:[["cvContainer",""],[1,"relative","overflow-hidden","w-full","h-screen"],[1,"absolute","inset-0","transition-transform","duration-700"],["src","images/people_in_meeting_from_top.jpg","alt","Slider Image",1,"w-full","h-full","object-cover"],[1,"absolute","inset-0","bg-gradient-to-t","from-gray-900","to-black","opacity-80"],[1,"absolute","top-0","left-0","h-full","w-full","inset-0","flex","flex-col","items-center","justify-center","gap-10"],[1,"website_title","text-white","text-4xl","font-bold"],[1,"text-white","text-2xl","text-center"],[1,"w-full","inline-flex","flex-nowrap","overflow-hidden","[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"],[1,"latest-cv","flex","items-center","justify-center","md:justify-start","[&_li]:mx-8","[&_img]:max-w-none","animate-infinite-scroll"],["class","jobseeker-card inline-block mx-2 flex flex-col items-center w-[329px] h-[329px]",3,"ngStyle",4,"ngFor","ngForOf"],[1,"px-6","py-2","bg-[#AF4E64]","text-white","transition","duration-800","hover:bg-[#701C2F]"],[1,"jobseeker-card","inline-block","mx-2","flex","flex-col","items-center","w-[329px]","h-[329px]",3,"ngStyle"],["alt","",1,"w-[45px]","h-[45px]","rounded-full",3,"src"]],template:function(n,l){n&1&&(e(0,"div",1)(1,"div",2),w(2),m(3,"img",3),F(),t(),m(4,"div",4),e(5,"div",5)(6,"h1",6),i(7),p(8,"translate"),t(),e(9,"p",7),i(10),p(11,"translate"),t(),e(12,"div",8)(13,"div",9,0),c(15,Ee,4,5,"div",10),t()(),e(16,"button",11),i(17),p(18,"translate"),t()()()),n&2&&(a(7),d(f(8,4,"CHECK_LATEST_CV_INTRO")),a(3),d(f(11,6,"CHECK_LATEST_CV_DESC")),a(5),s("ngForOf",l.cvs),a(2),d(f(18,8,"SEE_MORE")))},dependencies:[x,h,T,b,S]})};var pe=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=u({type:r,selectors:[["app-landing"]],standalone:!0,features:[g],decls:58,vars:0,consts:[[1,"fixed","top-0","sm:top-20","z-50","w-full"],["id","home"],["id","cvs"],["id","services"],["id","contact"],[1,"bg-[#F1A7B8]","text-white","pt-8"],[1,"container","mx-auto","flex","flex-col","md:flex-row","text-white","justify-between","px-2"],[1,"mb-8","md:mb-0"],[1,"text-2xl","font-bold"],[1,"mt-2"],[1,"text-lg","font-semibold"],["href","#",1,"hover:underline"],[1,"mt-2","flex","space-x-4"],["href","#",1,"text-gray-400","hover:text-white"],[1,"fab","fa-facebook-f"],[1,"fab","fa-twitter"],[1,"fab","fa-instagram"],[1,"fab","fa-linkedin-in"],[1,"bg-[#823244]","mt-8","py-4","text-center"],[1,"text-sm"]],template:function(n,l){n&1&&(e(0,"div",0),m(1,"app-header"),t(),e(2,"div",1),m(3,"app-home"),t(),e(4,"div",2),m(5,"app-latest-cv"),t(),e(6,"div",3),m(7,"app-services"),t(),e(8,"div",4),m(9,"app-contact-us"),t(),e(10,"footer",5)(11,"div",6)(12,"div",7)(13,"h2",8),i(14,"Cvtheque"),t(),e(15,"p",9),i(16,"Your one-stop solution for managing and sharing your CVs with ease."),t()(),e(17,"div",7)(18,"h3",10),i(19,"Company"),t(),e(20,"ul",9)(21,"li")(22,"a",11),i(23,"About Us"),t()(),e(24,"li")(25,"a",11),i(26,"Our Services"),t()(),e(27,"li")(28,"a",11),i(29,"Privacy Policy"),t()()()(),e(30,"div",7)(31,"h3",10),i(32,"Fast Links"),t(),e(33,"ul",9)(34,"li")(35,"a",11),i(36,"Home"),t()(),e(37,"li")(38,"a",11),i(39,"Services"),t()(),e(40,"li")(41,"a",11),i(42,"Contact"),t()()()(),e(43,"div")(44,"h3",10),i(45,"Follow Us"),t(),e(46,"div",12)(47,"a",13),m(48,"i",14),t(),e(49,"a",13),m(50,"i",15),t(),e(51,"a",13),m(52,"i",16),t(),e(53,"a",13),m(54,"i",17),t()()()(),e(55,"div",18)(56,"p",19),i(57,"\xA9 2024 Cvtheque. All rights reserved."),t()()())},dependencies:[A,de,O,D,k]})};export{pe as LandingComponent};
