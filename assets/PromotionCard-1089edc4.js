import{i as g,u as y,k as C,l as e,r as c,B as v,C as d}from"./index-4586ddbc.js";import{u as w,c as f,a as m}from"./Footer-8a8a5c6b.js";import{i as x}from"./chunk-OFGZKCFR-87253493.js";var p=g((s,a)=>{var r;const{as:t,className:l,children:o,...n}=s,b=t||"div",j=y(a),{slots:u,classNames:i}=w(),N=C(i==null?void 0:i.body,l);return e.jsx(b,{ref:j,className:(r=u.footer)==null?void 0:r.call(u,{class:N}),...n,children:o})});p.displayName="NextUI.CardFooter";var h=p;function R(s={}){const{rerender:a=!1,delay:r=0}=s,t=c.useRef(!1),[l,o]=c.useState(!1);return c.useEffect(()=>{t.current=!0;let n=null;return a&&(r>0?n=setTimeout(()=>{o(!0)},r):o(!0)),()=>{t.current=!1,a&&o(!1),n&&clearTimeout(n)}},[a]),[c.useCallback(()=>t.current,[]),l]}function M({discountNumber:s,content:a,image:r,id:t}){const{isLogged:l}=v(),o=d();return e.jsxs(f,{id:t,className:"h-[200px]",as:"button",isPressable:!0,onPress:()=>o(l?`/coupons&promotions/${t}`:"/login"),children:[e.jsxs(m,{className:"w-full absolute z-10 top-1 flex-col items-start rounded-xl bg-primary/30",children:[e.jsx("p",{className:"text-tiny text-white/60 uppercase font-bold",children:`${s} Discount Coupon`}),e.jsx("h4",{className:"text-white font-medium text-large text-left",children:a})]}),e.jsx(x,{removeWrapper:!0,alt:"Card background",className:"z-0 w-full h-full object-cover",src:r}),e.jsx(h,{className:"absolute z-10 bottom-2 left-2 w-[80px] h-[80px] rounded-full flex items-center justify-center bg-primary/80",children:e.jsx("span",{className:"text-3xl text-white",children:s})})]})}function k({id:s,levelPromotion:a,title:r,image:t}){const l=d();return e.jsxs(f,{id:s,className:"h-[200px]",isPressable:!0,onPress:()=>l(`/coupons&promotions/${s}`),children:[e.jsxs(m,{className:"w-full absolute z-10 bottom-0 flex-col !items-start rounded-xl bg-secondary/40",children:[e.jsx("p",{className:"text-tiny text-white/60 uppercase font-bold",children:"Loyalty Promotion"}),e.jsx("h4",{className:"text-white font-medium text-large text-left",children:r})]}),e.jsx(x,{removeWrapper:!0,alt:"Card background",className:"z-0 w-full h-full object-cover",src:t,isZoomed:!0}),e.jsx(h,{className:"absolute z-10 top-2 left-2 w-[90px] h-[90px] rounded-full flex items-center justify-center bg-secondary/80",children:e.jsx("span",{className:"text-xs text-center font-medium text-white uppercase",children:`Only ${a}`})})]})}export{M as C,k as P,R as u};
