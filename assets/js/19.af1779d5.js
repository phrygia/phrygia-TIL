(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{377:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("Storage, Cookie")]),t._v(" "),a("h2",{attrs:{id:"브라우저-저장소-web-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#브라우저-저장소-web-storage"}},[t._v("#")]),t._v(" 브라우저 저장소 (Web Storage)")]),t._v(" "),a("p",[t._v("웹의 "),a("u",[t._v("데이터를 클라이언트에 저장할 수 있는")]),t._v(" 자료구조다.\nHTML5에서는 웹 사이트의 데이터를 클라이언트에 저장할 수 있는 새로운 자료구조인 Web Storage 스펙이 포함되어있다."),a("br"),t._v(" "),a("code",[t._v("key:value")]),t._v(" 쌍으로 데이터를 저장하고 "),a("code",[t._v("key")]),t._v("를 기반으로 데이터를 조회하는 패턴이다. "),a("br"),t._v("\n내부적으로는 영구저장소(LocalStorage)와 임시저장소(SessionStorage)가 분리되어 데이터 지속성에 따라 구분할 수 있어 응용 환경에 맞는 선택이 가능하다. "),a("br"),t._v("\nWeb Storage는 Local Storage와 Session Storage 두 가지 방식이 있다.")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"web-storage의-특징"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-storage의-특징"}},[t._v("#")]),t._v(" Web Storage의 특징")]),t._v(" "),a("ol",[a("li",[t._v("서버 전송이 없다 : 데이터를 서버로 전송하지 않기 때문에 트래픽 비용을 아낄 수 있다.")]),t._v(" "),a("li",[t._v("브라우저별 용량제한이 다르다.")]),t._v(" "),a("li",[t._v("영구적으로 저장이 가능하다 : 만료기간 없이 영구적으로 데이터를 저장할 수도 있다."),a("br"),t._v("\n(Local Storage = 만료기한 없음, Session Storage = 세션 종료 시 만료)")]),t._v(" "),a("li",[t._v("키와 값은 문자열로 변환되어 저장된다.")]),t._v(" "),a("li",[t._v("쿠키 보다 보안이 우수하며 많은 정보를 담을 수 있다.")])]),t._v(" "),a("ul",[a("li",[t._v("장점 : 서버에 불필요한 데이터를 저장을 안 하고, 저장할 수 있는 용량이 크다.")]),t._v(" "),a("li",[t._v("단점 : HTML5를 지원되는 브라우저에서 사용이 가능하다.")])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_1-로컬-스토리지-local-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-로컬-스토리지-local-storage"}},[t._v("#")]),t._v(" 1. 로컬 스토리지 (Local Storage)")]),t._v(" "),a("ul",[a("li",[t._v("저장한 데이터 영구적으로 보관가능 (브라우저 종료하더라도 데이터가 남아있다.)")]),t._v(" "),a("li",[t._v("도메인 마다 별도로 localStorage가 생성된다.")]),t._v(" "),a("li",[t._v("Windows 전역 객체의 LocalStorage라는 컬렉션을 통해 저장/조회가 이루어 진다.")]),t._v(" "),a("li",[t._v("Session Storage와 Cookie에 비해 저장 공간이 크다. (최대 5MB까지)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// localStorage 저장")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXXXXXXX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringfy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// localStorage 조회")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// localStorage 설정된 키로 삭제")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// localStorage 전체 삭제")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"_2-세션-스토리지-session-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-세션-스토리지-session-storage"}},[t._v("#")]),t._v(" 2. 세션 스토리지 (Session Storage)")]),t._v(" "),a("ul",[a("li",[t._v("데이터가 지속적으로 보관되지 않는다. 현재 페이지가 브라우징 되고 있는 브라우저 컨텍스트 내에서만 데이터가 유지된다. "),a("br"),t._v("\n(브라우저가 종료되면 데이터도 같이 지워진다.)")]),t._v(" "),a("li",[t._v("Windows 전역 객체의 sessionStorage 컬렉션을 통해 저장/조회가 이루어진다.")]),t._v(" "),a("li",[t._v("도메인별로 생성된다."),a("br"),t._v("\n(브라우저 컨텍스트가 다르기 때문 같은 도메인/사이트라 하더라도 브라우저가 다르면 서로 다른 영역이된다.)")]),t._v(" "),a("li",[t._v("브라우저를 하나 더 실행해서 동일한 페이지를 열었을 때, 두페이지의 sessionStorage는 별개의 영역으로 서로 침범하지 못한다.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sessionStorage 저장")]),t._v("\nsessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXXXXXXX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringfy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sessionStorage 조회")]),t._v("\nsessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sessionStorage 설정된 키로 삭제")]),t._v("\nsessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sessionStorage 전체 삭제")]),t._v("\nsessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),a("ul",[a("li",[t._v("쿠키를 설정하면 쿠키 정보를 포함하여 서버로 보내진다. "),a("br"),t._v("\n쿠키에 사용자의 정보를 담아서 서버로 전송하면 서버에서 사용자를 확인할 수 있다. 서버와 클라이언트 간의 지속적인 데이터 교환을 위해 만들어 졌기 때문에 서버로 계속 전송된다.")]),t._v(" "),a("li",[t._v("서버에서 데이터 만료일을 설정하고 관리한다.")]),t._v(" "),a("li",[t._v("4KB 이하의 아주 작은 데이터를 보관한다.")]),t._v(" "),a("li",[t._v("클라이언트에서 읽을 수 있지만, 보통 서버 사이드에서 읽는 데이터 이다.")]),t._v(" "),a("li",[t._v("클라이언트에서 쿠키 접급을 방지할 수 있다. (httpOnly= true)")]),t._v(" "),a("li",[t._v("종류 : persistent cookies, session cookies")]),t._v(" "),a("li",[t._v("persistent cookies: 브라우저나 탭이 열려있는 동안에만 저장되며 만료일이 포함되지 않는다 - ex) 은행의 자격 증명 등")]),t._v(" "),a("li",[t._v("session cookies: 만료일까지 사용자의 브라우저에 저장되고 만료일이 지나면 삭제된다 - ex) 사용자의 행동 기록 등")])]),t._v(" "),a("p",[a("strong",[t._v("*cookie property")])]),t._v(" "),a("table",{staticClass:"ph_tbl"},[a("tr",[a("th",[t._v("property")]),t._v(" "),a("th",[t._v("설명")])]),t._v(" "),a("tr",[a("td",[t._v("name=")]),t._v(" "),a("td",[t._v("쿠키의 이름과 값을 설정")])]),t._v(" "),a("tr",[a("td",[t._v("expires= ")]),t._v(" "),a("td",[t._v("쿠키가 만료일 설정 (expires 값이 없으면 브라우저를 닫을때 소멸)")])]),t._v(" "),a("tr",[a("td",[t._v("path=")]),t._v(" "),a("td",[t._v("쿠키가 적용될 사이트의 패스를 지정하고자 하는 경우 사용")])]),t._v(" "),a("tr",[a("td",[t._v("domain= ")]),t._v(" "),a("td",[t._v("쿠키를 사용할 도메인을 지정")])]),t._v(" "),a("tr",[a("td",[t._v("httpOnly")]),t._v(" "),a("td",[t._v("자바스크립트에서 쿠키에 접근할 수 없다.")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 쿠키 생성하기")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("setCookie")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expiredays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" today "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  today"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("today"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" expiredays"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("escape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    value\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("; path=/; expires=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("today"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toGMTString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 쿠키 조회하기")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getCookie")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('";"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("some")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" dic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"쿠키생성"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"여기는 내용"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 만료일 : 1일")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"쿠키생성"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"web-storage-vs-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-storage-vs-cookie"}},[t._v("#")]),t._v(" Web Storage vs Cookie")]),t._v(" "),a("table",{staticClass:"ph_tbl"},[a("tr",[a("th"),t._v(" "),a("th",[t._v("Local Storage")]),t._v(" "),a("th",[t._v("Session Storage")]),t._v(" "),a("th",[t._v("Cookie")])]),t._v(" "),a("tr",[a("th",[t._v("저장 위치")]),t._v(" "),a("td",[t._v("클라이언트에 존재 (서버 전송 X)")]),t._v(" "),a("td",[t._v("클라이언트에 존재 (서버 전송 X)")]),t._v(" "),a("td",[t._v("매번 서버로 전송되어 서버에 저장")])]),t._v(" "),a("tr",[a("th",[t._v("데이터 유지 측면")]),t._v(" "),a("td",[t._v("영구보관")]),t._v(" "),a("td",[t._v("브라우저 종료시 삭제됨")]),t._v(" "),a("td",[t._v("반영구 (만료일 설정)")])]),t._v(" "),a("tr",[a("th",[t._v("데이터 범위 측면")]),t._v(" "),a("td",[t._v("도메인만 같으면 전역적으로 공유 가능")]),t._v(" "),a("td",[t._v("도메인별로 별도로 생성 (공유 x)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("th",[t._v("지원")]),t._v(" "),a("td",[t._v("html5 지원 브라우저")]),t._v(" "),a("td",[t._v("html5 지원 브라우저")]),t._v(" "),a("td",[t._v("대부분의 브라우저 지원")])]),t._v(" "),a("tr",[a("th",[t._v("용량")]),t._v(" "),a("td",[t._v("5MB")]),t._v(" "),a("td",[t._v("5MB")]),t._v(" "),a("td",[t._v("최대 쿠키 수: 20개, 최대쿠키 크기: 4KB")])]),t._v(" "),a("tr",[a("th",[t._v("추천 상황")]),t._v(" "),a("td",[t._v("자동 로그인, 다크/라이트 모드")]),t._v(" "),a("td",[t._v("입력 폼 정보, 비로그인 장바구니, 페이지 이동 시 스크롤 위치 값")]),t._v(" "),a("td",[t._v("팝업 창")])])]),t._v(" "),a("Comment")],1)}),[],!1,null,null,null);s.default=e.exports}}]);