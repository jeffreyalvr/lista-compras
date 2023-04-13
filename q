warning: in the working copy of 'tailwind.config.js', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/src/components/Box/index.jsx b/src/components/Box/index.jsx[m
[1mindex 6163f48..94ac467 100644[m
[1m--- a/src/components/Box/index.jsx[m
[1m+++ b/src/components/Box/index.jsx[m
[36m@@ -129,7 +129,7 @@[m [mconst Box = () => {[m
               className="py-2 border-dotted border-b border-[#dadada]"[m
               key={item.id}[m
             >[m
[31m-              {item.nome + item.id}{" "}[m
[32m+[m[32m              {item.nome}{" "}[m
               <button[m
                 onClick={() => handleEditarItem(item.id)}[m
                 className="bg-[#4bc9ff] outline-0 text-xs font-bold	hover:bg-[#6cd3ff] text-white rounded-[1.25rem] px-2 mx-0.5 h-[20px] w-auto box-content align-middle"[m
[36m@@ -148,7 +148,7 @@[m [mconst Box = () => {[m
       </div>[m
       {mostrarDisclaimer ? ([m
         <div[m
[31m-          className={`border-t border-[#dadada] p-[1.8rem] flex justify-between ${[m
[32m+[m[32m          className={`animate-fade-in border-t border-[#dadada] p-[1.8rem] flex justify-between ${[m
             modoEdicao[m
               ? "bg-[#f4faff] text-[steelblue]"[m
               : "bg-[#fff4f4] text-[firebrick]"[m
[1mdiff --git a/tailwind.config.js b/tailwind.config.js[m
[1mindex 614c86b..fccd912 100644[m
[1m--- a/tailwind.config.js[m
[1m+++ b/tailwind.config.js[m
[36m@@ -2,7 +2,22 @@[m
 export default {[m
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],[m
   theme: {[m
[31m-    extend: {},[m
[32m+[m[32m    extend: {[m
[32m+[m[32m      keyframes: {[m
[32m+[m[32m        "fade-in": {[m
[32m+[m[32m          "0%": { opacity: 0 },[m
[32m+[m[32m          "100%": { opacity: 1 },[m
[32m+[m[32m        },[m
[32m+[m[32m        "fade-out": {[m
[32m+[m[32m          "0%": { opacity: 1 },[m
[32m+[m[32m          "100%": { opacity: 0 },[m
[32m+[m[32m        },[m
[32m+[m[32m      },[m
[32m+[m[32m      animation: {[m
[32m+[m[32m        "fade-in": "fade-in .4s ease-in-out",[m
[32m+[m[32m        "fade-out": "fade-out .4s ease-in-out",[m
[32m+[m[32m      },[m
[32m+[m[32m    },[m
   },[m
   plugins: [],[m
 };[m
