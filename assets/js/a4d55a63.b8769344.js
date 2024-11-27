"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9598],{6909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"Features/sasCodeEditing","title":"SAS Code Editing Features","description":"SAS Syntax Highlighting","source":"@site/docs/Features/sasCodeEditing.md","sourceDirName":"Features","slug":"/Features/sasCodeEditing","permalink":"/vscode-sas-extension/Features/sasCodeEditing","draft":false,"unlisted":false,"editUrl":"https://github.com/sassoftware/vscode-sas-extension/tree/main/website/docs/Features/sasCodeEditing.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"defaultSidebar","previous":{"title":"Fixing Errors and Warnings","permalink":"/vscode-sas-extension/Features/errorsWarnings"},"next":{"title":"SAS Notebook","permalink":"/vscode-sas-extension/Features/sasNotebook"}}');var s=t(4848),o=t(8453);const d={sidebar_position:7},a="SAS Code Editing Features",r={},l=[{value:"SAS Syntax Highlighting",id:"sas-syntax-highlighting",level:2},{value:"Color Themes",id:"color-themes",level:2},{value:"Code Completion",id:"code-completion",level:2},{value:"Pop-up Syntax Help",id:"pop-up-syntax-help",level:2},{value:"Snippets",id:"snippets",level:2},{value:"Code Folding and Code Outline",id:"code-folding-and-code-outline",level:2},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Function Signature Help",id:"function-signature-help",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"sas-code-editing-features",children:"SAS Code Editing Features"})}),"\n",(0,s.jsx)(n.h2,{id:"sas-syntax-highlighting",children:"SAS Syntax Highlighting"}),"\n",(0,s.jsx)(n.p,{children:"The SAS extension highlights these syntax elements in your program, just as they would appear in a SAS editor:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Global statements"}),"\n",(0,s.jsx)(n.li,{children:"SAS procedures"}),"\n",(0,s.jsx)(n.li,{children:"SAS procedure statements"}),"\n",(0,s.jsx)(n.li,{children:"Data step definition"}),"\n",(0,s.jsx)(n.li,{children:"Data step statements"}),"\n",(0,s.jsx)(n.li,{children:"SAS data sets"}),"\n",(0,s.jsx)(n.li,{children:"Macro definition"}),"\n",(0,s.jsx)(n.li,{children:"Macro statements"}),"\n",(0,s.jsx)(n.li,{children:"Functions"}),"\n",(0,s.jsx)(n.li,{children:"CALL routines"}),"\n",(0,s.jsx)(n.li,{children:"Formats and informats"}),"\n",(0,s.jsx)(n.li,{children:"Macro variables"}),"\n",(0,s.jsx)(n.li,{children:"SAS colors"}),"\n",(0,s.jsx)(n.li,{children:"Style elements and style attributes"}),"\n",(0,s.jsx)(n.li,{children:"Comment"}),"\n",(0,s.jsx)(n.li,{children:"Various constants"}),"\n",(0,s.jsx)(n.li,{children:"Options, enumerated option values, sub-options and sub-option values for various procedure definitions and statements"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"color-themes",children:"Color Themes"}),"\n",(0,s.jsx)(n.p,{children:"You can choose among three SAS-related color themes that control the color of the application and syntax elements. The SAS Light, SAS Dark and SAS High Contrast options mirror the themes available in SAS Studio."}),"\n",(0,s.jsx)(n.p,{children:"To specify the color theme:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.code,{children:"File > Preferences > Color Theme"})," and select the theme, by name. The image below demonstrates the process changing from SAS Light to SAS Dark."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"vsCodeChangeTheme2",src:t(4466).A+"",width:"550",height:"437"})}),"\n",(0,s.jsx)(n.h2,{id:"code-completion",children:"Code Completion"}),"\n",(0,s.jsx)(n.p,{children:"The SAS extension includes automatic code completion and pop-up syntax help for SAS keywords. The autocomplete, or code completion, feature in the code editor can predict the next word that you want to enter in your SAS program. See code completion in action below."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"vsCodeTypeAhead",src:t(7028).A+"",width:"548",height:"364"})}),"\n",(0,s.jsx)(n.p,{children:"To use the autocomplete feature:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Start typing a valid SAS keyboard. Scroll through the pop-up list of suggested keywords by using your mouse or the up and down arrow keys."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"pop-up-syntax-help",children:"Pop-up Syntax Help"}),"\n",(0,s.jsx)(n.p,{children:"The syntax help gets you started with a hint about the syntax or a brief description of the keyword. You can get additional help by clicking the links in the syntax help window."}),"\n",(0,s.jsx)(n.p,{children:"To view the syntax help:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Move the mouse pointer over a valid SAS keyword in the code."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In the following example, the help panel displays syntax help for the DATA= option in the PROC PRINT statement."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"vsCodeSyntaxAssist2",src:t(1849).A+"",width:"888",height:"160"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Click the links in the syntax help window to navigate to the SAS online help."})}),"\n",(0,s.jsx)(n.h2,{id:"snippets",children:"Snippets"}),"\n",(0,s.jsx)(n.p,{children:"Snippets are lines of commonly used code or text that you can insert into your program. The SAS extension includes snippets for SAS functions and procedures to facilitate writing your SAS programs."}),"\n",(0,s.jsx)(n.p,{children:"To access the list of snippets for a function or procedure:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Type the name of a function or procedure in your SAS program. This example shows a snippet for the PROC DS2."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"vsCodeSnippets",src:t(3115).A+"",width:"783",height:"419"})}),"\n",(0,s.jsx)(n.h2,{id:"code-folding-and-code-outline",children:"Code Folding and Code Outline"}),"\n",(0,s.jsx)(n.p,{children:"Regions of code are identified in your SAS program as blocks of code that can be collapsed and expanded. You can also view an outline of your program that identifies DATA steps, procedures, macro sections, and user-defined regions of code."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"vsCodeFoldAndOutline",src:t(9811).A+"",width:"676",height:"304"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can define a custom region by adding ",(0,s.jsx)(n.code,{children:"/*region*/"})," and ",(0,s.jsx)(n.code,{children:"/*endregion*/"})," tags to the start and end of the block of code."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"vsCodeRegionFunction",src:t(3213).A+"",width:"550",height:"146"})}),"\n",(0,s.jsx)(n.h2,{id:"code-formatting",children:"Code Formatting"}),"\n",(0,s.jsxs)(n.p,{children:["To format your code, open context menu and select ",(0,s.jsx)(n.code,{children:"Format Document"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"formatter",src:t(8799).A+"",width:"860",height:"406"})}),"\n",(0,s.jsx)(n.h2,{id:"function-signature-help",children:"Function Signature Help"}),"\n",(0,s.jsx)(n.p,{children:"Signature help provides information for current parameter as you are writing function calls."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"signatureHelp",src:t(8214).A+"",width:"825",height:"296"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8799:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/formatter-ed27fec0a3b8da40d9461288851fc23f.gif"},8214:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/signatureHelp-e069c4398f42a4eac293ce2db757d5ad.gif"},4466:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vsCodeChangeTheme2-3cb552b7552f7675c437220a81b377d2.gif"},9811:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vsCodeFoldAndOutline-481bacea76cbb4ed5a65283645ef2f4b.gif"},3213:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vsCodeRegionFunction-95c48753039d9093e6a17dc7ce5bdaff.gif"},3115:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vsCodeSnippets-bfb32d3d005922bcd5443f047ee7a202.gif"},1849:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vsCodeSyntaxAssist2-6e9f6d09837cb8d2ab35c66d1eccf0c3.gif"},7028:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vsCodeTypeAhead-e16abdf9fa508f5fc52c1763d46d62de.gif"},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);