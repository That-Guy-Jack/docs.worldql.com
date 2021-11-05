"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[621],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7986:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:7},l="Instructions",c={unversionedId:"architecture/instructions",id:"architecture/instructions",isDocsHomePage:!1,title:"Instructions",description:"For convenience, here's the Message and Record from WorldQL's Flatbuffer schema:",source:"@site/docs/architecture/instructions.md",sourceDirName:"architecture",slug:"/architecture/instructions",permalink:"/architecture/instructions",editUrl:"https://github.com/WorldQL/docs.worldql.com/tree/trunk/docs/architecture/instructions.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Scripts",permalink:"/architecture/scripts"},next:{title:"WorldQL 101 - A chatroom and shared canvas over WebSockets in the browser",permalink:"/example-projects/chat-room"}},d=[{value:"Heartbeat",id:"heartbeat",children:[],level:2},{value:"Handshake",id:"handshake",children:[],level:2},{value:"LocalMessage",id:"localmessage",children:[],level:2},{value:"GlobalMessage",id:"globalmessage",children:[],level:2},{value:"RecordCreate",id:"recordcreate",children:[],level:2},{value:"RecordRead",id:"recordread",children:[],level:2},{value:"RecordUpdate",id:"recordupdate",children:[],level:2},{value:"RecordDelete",id:"recorddelete",children:[],level:2},{value:"RecordReply",id:"recordreply",children:[],level:2},{value:"AreaSubscribe",id:"areasubscribe",children:[],level:2},{value:"AreaUnsubscribe",id:"areaunsubscribe",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"instructions"},"Instructions"),(0,i.kt)("p",null,"For convenience, here's the ",(0,i.kt)("a",{parentName:"p",href:"./messages"},"Message")," and Record from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WorldQL/flatbuffer-schema/blob/main/flatbuffer/WorldQLFB.fbs"},"WorldQL's Flatbuffer schema"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"table Record {\n    uuid:string;\n    position:Vec3d;\n    world_name:string;\n    data:string;\n    flex:[ubyte];\n}\n\ntable Message {\n    instruction:Instruction;\n    parameter:string;\n    sender_uuid:string;\n    world_name:string;\n    records:[Record];\n    entities:[Entity];\n    position:Vec3d;\n    flex:[ubyte];\n}\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"This page is a work in progress!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"While this page contains an exhaustive list of instructions implemented by WorldQL, it lacks code samples. ",(0,i.kt)("strong",{parentName:"p"},"This article will be updated with usage examples for each instruction soon.")))),(0,i.kt)("h2",{id:"heartbeat"},"Heartbeat"),(0,i.kt)("p",null,"Sent by the client periodically to let the server know it's still alive. Must contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"sender_uuid"),"."),(0,i.kt)("h2",{id:"handshake"},"Handshake"),(0,i.kt)("p",null,"Sent by the client to establish a connection to the server. Must contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"sender_uuid")," if being sent by a client (clients are responsible for generating their own ",(0,i.kt)("inlineCode",{parentName:"p"},"sender_uuid"),"). The server will reply with the another message with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Handshake")," instruction. If using ZeroMQ networking, the ",(0,i.kt)("inlineCode",{parentName:"p"},"parameter")," field will be set with a port assignment for the client's ZeroMQ pull server.  "),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Every instruction requires ",(0,i.kt)("inlineCode",{parentName:"p"},"sender_uuid")," if server-bound (being sent by a WorldQL client). To avoid redundancy, we won't list it as a requirement for the instructions below."))),(0,i.kt)("h2",{id:"localmessage"},"LocalMessage"),(0,i.kt)("p",null,"Sends a message to all clients which are subscribed to a certain area. Must contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"world_name")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"position"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"parameter")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"flex")," are sent to all recipients and can be used to store a payload."),(0,i.kt)("h2",{id:"globalmessage"},"GlobalMessage"),(0,i.kt)("p",null,"Like LocalMessage, but does not require a ",(0,i.kt)("inlineCode",{parentName:"p"},"position"),". Sends the message to all clients which are subscribed to at least one region of the specified World."),(0,i.kt)("h2",{id:"recordcreate"},"RecordCreate"),(0,i.kt)("p",null,"Creates a new Record. Fields ",(0,i.kt)("inlineCode",{parentName:"p"},"world_name")," must be set and ",(0,i.kt)("inlineCode",{parentName:"p"},"records")," must contain at least one ",(0,i.kt)("a",{parentName:"p",href:"./records"},"Record"),". For ",(0,i.kt)("a",{parentName:"p",href:"https://www.worldql.com/posts/2021-09-spatial-partitions-postgres/"},"spatial indexing")," to be applied a ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," must be provided. "),(0,i.kt)("h2",{id:"recordread"},"RecordRead"),(0,i.kt)("p",null,"Retrieves a collection of Records or a singular one. There are two patterns for retrieving records:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Getting all records near a certain point. Useful for hydrating regions of a world as they are loaded by a client."),(0,i.kt)("li",{parentName:"ol"},"Retrieving a record by UUID. Due to the way WorldQL partitions Records across multiple tables, looking up a Record with a position requires you to also pass its ",(0,i.kt)("inlineCode",{parentName:"li"},"position"),". This allows the server to know which table to look for the Record in. Records which were created without a ",(0,i.kt)("inlineCode",{parentName:"li"},"position")," can be looked up directly by specifying the UUID in ",(0,i.kt)("inlineCode",{parentName:"li"},"parameter"),".")),(0,i.kt)("h2",{id:"recordupdate"},"RecordUpdate"),(0,i.kt)("p",null,"Modifies the ",(0,i.kt)("inlineCode",{parentName:"p"},"position"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"flex")," fields. The record to be updated is specified using a UUID in the ",(0,i.kt)("inlineCode",{parentName:"p"},"parameter")," (and a ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," if the Record has one)."),(0,i.kt)("h2",{id:"recorddelete"},"RecordDelete"),(0,i.kt)("p",null,"Deletes a Record. Uses the same lookup process as RecordUpdate."),(0,i.kt)("h2",{id:"recordreply"},"RecordReply"),(0,i.kt)("p",null,"The response to RecordRead. A client-bound Message containing an array of Records."),(0,i.kt)("h2",{id:"areasubscribe"},"AreaSubscribe"),(0,i.kt)("p",null,"Subscribes to receive LocalMessages from a certain area. WorldQL splits the world into cubic areas based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"WQL_REGION_CUBE_SIZE")," configuration variable. For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"WQL_REGION_CUBE_SIZE=100")," then the world is partitioned into 100^3 cubes that clients can subscribe and unsubscribe to. Requires a ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," specifying an area."),(0,i.kt)("h2",{id:"areaunsubscribe"},"AreaUnsubscribe"),(0,i.kt)("p",null,"Unsubscribes from LocalMessages in a certain area."))}u.isMDXComponent=!0}}]);