(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8114:function(t,n,e){Promise.resolve().then(e.bind(e,8219))},8219:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return AuthButtonClient}});var i=e(7437),s=e(3082),a=e(1396),u=e.n(a),r=e(4033),o=e(2265);let getUserInfo=async()=>{let t=await fetch("https://supabase-nextjs-twitter-clone.pages.dev/api/userinfo"),n=await t.json();return n};function UserData(){let[t,n]=o.useState(!1),[e,s]=o.useState(null);return o.useEffect(()=>{n(!0),getUserInfo().then(t=>{n(!1),s(t)})},[]),o.useEffect(()=>{console.log("userinfo =====> ",e)},[e]),(0,i.jsx)("div",{children:"User Info"})}function AuthButtonClient(t){let{session:n}=t,e=(0,s.createClientComponentClient)(),a=(0,r.useRouter)(),handleGithubSignIn=async()=>{await e.auth.signInWithOAuth({provider:"github",options:{redirectTo:"https://supabase-nextjs-twitter-clone.pages.dev/api/auth/callback"}})},handleFigmaSignIn=async()=>{await e.auth.signInWithOAuth({provider:"figma",options:{redirectTo:"https://supabase-nextjs-twitter-clone.pages.dev/api/auth/callback"}})},handleSignOut=async()=>{await e.auth.signOut(),a.refresh()};return n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{onClick:handleSignOut,children:"Logout"}),(0,i.jsx)(UserData,{})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:(0,i.jsx)(u(),{href:"/sign-up",children:"Sign Up"})}),(0,i.jsx)("div",{children:(0,i.jsx)("button",{onClick:handleGithubSignIn,children:"Github Login"})}),(0,i.jsx)("div",{children:(0,i.jsx)("button",{onClick:handleFigmaSignIn,children:"Figma Login"})})]})}}},function(t){t.O(0,[881,251,971,12,744],function(){return t(t.s=8114)}),_N_E=t.O()}]);