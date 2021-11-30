(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{222:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"basic-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-concepts"}},[t._v("#")]),t._v(" Basic concepts")]),t._v(" "),a("p",[t._v("WebAssembly is fundamentally different from JavaScript, ultimately enabling entirely new use cases not only on the web. Consequently, AssemblyScript is much more similar to a static compiler than it is to a JavaScript VM. One can think of it as a mix of TypeScript's high level syntax and C's low-level capabilities. This page is dedicated to getting you up to speed in no time.")]),t._v(" "),a("h2",{attrs:{id:"strictness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strictness"}},[t._v("#")]),t._v(" Strictness")]),t._v(" "),a("p",[t._v("Unlike TypeScript, which targets a JavaScript environment with all of its dynamic features, AssemblyScript targets WebAssembly with all of its static guarantees, hence intentionally "),a("strong",[t._v("avoids the dynamicness of JavaScript")]),t._v(" where it cannot be compiled ahead of time "),a("em",[t._v("efficiently")]),t._v(".")]),t._v(" "),a("p",[t._v("Limiting ourselves to where WebAssembly excels, for example by assigning or inferring definite types, eliminates the need to ship a JIT doing the heavy lifting at runtime, yielding "),a("strong",[t._v("predictable performance")]),t._v(" right from the start of execution while guaranteeing that the resulting WebAssembly "),a("strong",[t._v("modules are small")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"static-typing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-typing"}},[t._v("#")]),t._v(" Static typing")]),t._v(" "),a("p",[t._v("The first peculiarity one is going to notice when writing AssemblyScript is that its "),a("RouterLink",{attrs:{to:"/types.html"}},[t._v("basic types")]),t._v(" are a bit different from TypeScript's in that it uses WebAssembly's "),a("strong",[t._v("more specific integer and floating point types")]),t._v(", with JavaScript's "),a("code",[t._v("number")]),t._v(" merely an alias of WebAssembly's "),a("code",[t._v("f64")]),t._v(".")],1),t._v(" "),a("p",[t._v("A JavaScript JIT would try to figure out the best representation of a numeric value while the code is executing, making assumptions as values flow around, potentially recompiling code multiple times, while AssemblyScript lets the developer "),a("strong",[t._v("specify the ideal type in advance")]),t._v(" with all its pros and cons. To give a few examples:")]),t._v(" "),a("h3",{attrs:{id:"no-any-or-undefined"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-any-or-undefined"}},[t._v("#")]),t._v(" No any or undefined")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 😢")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" b\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 😊")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("i32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("i32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" b\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"no-union-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-union-types"}},[t._v("#")]),t._v(" No union types")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 😢")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("i32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 😊")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"strictly-typed-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strictly-typed-objects"}},[t._v("#")]),t._v(" Strictly typed objects")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 😢")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 😊")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 😊")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" prop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"sandbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sandbox"}},[t._v("#")]),t._v(" Sandbox")]),t._v(" "),a("p",[t._v("WebAssembly modules execute in a sandbox, providing "),a("strong",[t._v("strong security guarantees")]),t._v(" for all sorts of use cases not necessarily limited to the browser. As such, a module has "),a("strong",[t._v("no immediate access to the DOM")]),t._v(" or other external APIs out of the box. Also, WebAssembly does not yet have a concept of objects, making it necessary to "),a("strong",[t._v("translate and exchange objects via pointers")]),t._v(" to linear memory either through the module's "),a("RouterLink",{attrs:{to:"/exports-and-imports.html"}},[t._v("exports and imports")]),t._v(" or by reading from respectively writing to the module's linear memory. The "),a("RouterLink",{attrs:{to:"/loader.html"}},[t._v("loader")]),t._v(" is able to help there.")],1),t._v(" "),a("h2",{attrs:{id:"quirks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quirks"}},[t._v("#")]),t._v(" Quirks")]),t._v(" "),a("p",[t._v("Some patterns behave a little different in AssemblyScript compared to TypeScript. This section covers the more or less obvious ones and shows how to deal with them, so you can keep them in mind and build something great today.")]),t._v(" "),a("h3",{attrs:{id:"triple-equals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#triple-equals"}},[t._v("#")]),t._v(" Triple equals")]),t._v(" "),a("p",[t._v("The special semantics of the "),a("code",[t._v("===")]),t._v(" operator ("),a("code",[t._v("true")]),t._v(" when both the value and type match) don't make a lot of sense in AssemblyScript because comparing two values of incompatible types is illegal anyway. Hence the "),a("code",[t._v("===")]),t._v(" operator has been repurposed to perform an identity comparison, evaluating to "),a("code",[t._v("true")]),t._v(" if both operands are "),a("strong",[t._v("the exact same object")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* true */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* false */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* true */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This semantical change turned out to be quite useful during implementation of some parts of the standard library where knowing if something is actually exactly the same makes a lot of sense, but it can be confusing for those coming from a TypeScript background where using "),a("code",[t._v("===")]),t._v(" for everything unless required otherwise is common good practice. However, the alternative here is to make "),a("code",[t._v("===")]),t._v(" a redundant alias of "),a("code",[t._v("==")]),t._v(" by sacrificing an otherwise useful feature, and it's still unclear if that'd be objectively better, so has been postponed multiple times.")]),t._v(" "),a("h3",{attrs:{id:"nullability-checks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nullability-checks"}},[t._v("#")]),t._v(" Nullability checks")]),t._v(" "),a("p",[t._v("Like TypeScript, the AssemblyScript compiler can propagate whether a value is nullable or not after a check:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("something"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("something"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    something"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// works")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This doesn't work on fields, however, because their value can change in between the check and the use of the value:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("something"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... some code ...")]),t._v("\n    foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("something"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fails")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("For example, "),a("code",[t._v("foo.something")]),t._v(" might be a property that sets the underlying field to "),a("code",[t._v("null")]),t._v(" when accessed, or code in between may set the field to "),a("code",[t._v("null")]),t._v(". In fact, TypeScript "),a("a",{attrs:{href:"https://www.typescriptlang.org/play/index.html#code/MYGwhgzhAEBiD29oG8BQ0PQvAtgUwBcALASwDsBzALiwICdyLoAfaMgVxBGgF43OQAblQBfVKgBm7MsAIl4ZaABN4AZVyFSlABQTENBPACUKdJhITouxADps+YoxNpMr5Wo2PKAURAQ81sbCbph68HaeWhQ2IHiUxILQAPRJWETwnErQeHR08HQANNAARuwE7ngQZADkBGYYYmKS0rLyiirqDlG+-oEGiM710GERXYy8-FzCIkA",target:"_blank",rel:"noopener noreferrer"}},[t._v("fails"),a("OutboundLink")],1),t._v(" in "),a("a",{attrs:{href:"https://www.typescriptlang.org/play/index.html#code/MYGwhgzhAEBiD29oG8BQ0PQPoXgWwFMAXACwEsA7AcwC5oIiAnSq6AH2goFcQRoBeaACISBXvCEBudJirF6+YuWoAKAJR0Gzau048+aTEegh5jeYNJkIAOhyKr1accxXb9wo9aDuvZy+hzIi5GCkDifwwAX1QY1AAzLgpgIjJ4MIATeABlB2UqFXjEOgR4NRQZDDJ46ELEG1xPfPLDAKL4BryWG1NqUkloAHpB+hJ4HgzoAkZGeEYAGmgAIy4iaCyCCAoAciJK6BiYoA",target:"_blank",rel:"noopener noreferrer"}},[t._v("both"),a("OutboundLink")],1),t._v(" scenarios, leading to a runtime error. However, there can't be runtime errors like this in AssemblyScript, so one must instead use a local to be safe:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" something "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("something\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("something"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    something"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// works")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"non-linear-compilation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#non-linear-compilation"}},[t._v("#")]),t._v(" Non-linear compilation")]),t._v(" "),a("p",[t._v("AssemblyScript does not compile a module linearly, but starts at the module's exports and only compiles what's reachable from them, often referred to as "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Tree_shaking",target:"_blank",rel:"noopener noreferrer"}},[t._v("tree-shaking"),a("OutboundLink")],1),t._v(". As such, dead code is always validated syntactically, but not necessarily checked for semantic correctness. While this mechanism significantly helps to reduce compile times and feels almost natural to those familiar with "),a("em",[t._v("executing")]),t._v(" JavaScript, it may initially feel a little strange not only to those with a background in traditional compilers, for example because emitted diagnostics do not happen linearly, but also to those with a background in TypeScript, because even type annotations remain unchecked as part of dead code. The exception to the rule is top-level code, including top-level variable declarations and their initializers, that must be evaluated as soon as the respective file would first execute.")]),t._v(" "),a("p",[t._v("So far, so good. Shall we continue with a "),a("RouterLink",{attrs:{to:"/status.html"}},[t._v("status of WebAssembly and language features")]),t._v("?")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);