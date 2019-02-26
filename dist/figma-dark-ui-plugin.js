!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["figma-dark-ui-plugin"]=n()}(this,function(){"use strict";var n=function(e){if(Array.isArray(e)){for(var n=0,a=new Array(e.length);n<e.length;n++)a[n]=e[n];return a}};var a=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)};var t=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")};var s=function(e){return n(e)||a(e)||t()};var r=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")};function c(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var e=function(e,n,a){return n&&c(e.prototype,n),a&&c(e,a),e},l=function(){function n(){var e;r(this,n),this.enabled=localStorage.getItem("figma-dark-ui-plugin-enabled",!1),this.options=["Toggle Dark Mode",this.toggleDarkUI.bind(this),null,null],(e=window.figmaPlus).createPluginsMenuItem.apply(e,s(this.options)),this.enabled&&this.toggleDarkUI()}return e(n,[{key:"toggleDarkUI",value:function(){var n={bgLightest:"#676C70",bgLight:"#333536",bgBase:"#262829",bgDark:"#1B1C1C",bgActive:"#30c2ff",txtLabelSection:"#EBF0F5",txtLabel:"#C1C5C9",txtDisabled:"#525558",txtSymbol:"#907cff",stActivePressed:"#25b5f1"};if(null===document.getElementById("f-ui")){var e=document.createElement("style"),a=document.createTextNode('\n// Credits\n// Mirko Santangelo, Papertiger, All Right Reserved\n\n::selection {\n  background: #30c2ff;\n  color: white;\n}\n\n[class*="pageContent-"] {\n  background: #2a2d2d;\n  color: #c1c5c9;\n}\n\n[class*="team_admin--table"] [class*="lazy_input--lazyInput-"] {\n  background: #262829;\n  color: #c1c5c9;\n}\n\n[class*="top_bar--header-"],\n[class*="pages_panel--edgeLine-"],\n[class*="toolbar_view--toolbar-"] {\n  background-color: #262829;\n  border-bottom: 1px solid #161617;\n}\n\n[class*="filename_view--pageTitle"] {\n  background-color: #262829;\n}\n\n[class*="importPrompt-"] {\n  color: #676c70;\n  fill: #676c70;\n}\n\n[class*="library_preferences_modal--toggle-"] {\n  background: #c1c5c9;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 2),\nscreen and (min-resolution: 2dppx) {\n  [class*="file_tile--shadowTileBorder-"] {\n    box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.5);\n  }\n}\n\n[class*="scroll_container--trackDragging"] {\n  border-left: 1px solid #262829;\n  background: #33333350;\n}\n\n[class*="scroll_container--scrollBar-"]:after {\n  background: #11111180;\n}\n\n[class*="scroll_container--track"]:hover {\n  border-left: 1px solid #1b1c1c;\n  background: #262829;\n}\n\n[class*="left_panel--tabs"] {\n  box-shadow: inset 0 1px 0 0 #1b1c1c;\n}\n\n[class*="file_browser--navContent-"] {\n  box-shadow: 1px 0 0 0 #1b1c1c;\n}\n\n[class*="sidebar_library--searchInput"] {\n  color: #c1c5c9;\n}\n\n[class*="style_icon--bitmapImage"]:not([class*="style_icon--fillIcon"]) {\n  -webkit-filter: invert(90%);\n  filter: invert(90%);\n}\n\n[class*="style_preview_panel--preview"] {\n  border-bottom: 1px solid #1b1c1c) !importan;\n  border-top: 1px solid #1b1c1c) !importan;\n}\n\n[class*="style_preview_panel--renderedTextStyleThumbnail"] {\n  -webkit-filter: invert(100%);\n  filter: invert(100%);\n}\n\n[class*="style_icon--fillIcon"] [class*="style_icon--bitmapImage"],\n[class*="style_preview_panel--preview"] [class*="style_icon--bitmapImage"],\n[class*="style_preview_panel--preview"]\n[class*="style_preview_panel--renderedFillStyleThumbnail"] {\n  -webkit-filter: none;\n  filter: none;\n}\n\n[class*="role_row--select"] {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOSA2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICA8ZyBkYXRhLW5hbWU9IkNhbnZhcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyODEyIC0xMTgwOCkiIGZpbGw9Im5vbmUiPiAgICAgICAgPGcgZGF0YS1uYW1lPSJWZWN0b3IgNyAoU3Ryb2tlKSI+ICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjI4MTIuNiAxMTgwOC42KSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgwIiBmaWxsPSIjNjY2NjY2IiBmaWxsLW9wYWNpdHk9IjEiLz4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz4gICAgPGRlZnM+ICAgICAgICA8cGF0aCBpZD0icGF0aDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNIDAgMC43MDcxMDdMIDAuNzA3MTA3IDBMIDMuODUzNTUgMy4xNDY0NUwgNyAwTCA3LjcwNzExIDAuNzA3MTA3TCAzLjg1MzU1IDQuNTYwNjZMIDAgMC43MDcxMDdaIi8+ICAgIDwvZGVmcz48L3N2Zz4=);\n}\n\n[class*="basic_form--checkbox"]:checked:after {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgdmVyc2lvbj0iMi4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIg0KICAgIHhtbG5zOmZpZ21hPSJodHRwOi8vd3d3LmZpZ21hLmNvbS9maWdtYS9ucyI+DQogICAgPGcgaWQ9IkNhbnZhcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTgwIDQ4MTUpIiBmaWdtYTp0eXBlPSJjYW52YXMiPg0KICAgICAgICA8bWFzayBpZD0ibWFzazBfb3V0bGluZSIgbWFzay10eXBlPSJhbHBoYSI+DQogICAgICAgICAgICA8cGF0aCBkPSINCk0gLTU4MCAtNDgxNQ0KTCAtNTcwIC00ODE1DQpMIC01NzAgLTQ4MDUNCkwgLTU4MCAtNDgwNQ0KTCAtNTgwIC00ODE1DQpaIiBmaWxsPSIjRkZGRkZGIiAvPg0KICAgICAgICA8L21hc2s+DQogICAgICAgIDxnIGlkPSJjaGVjay1nbHlwaCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbDsiIG1hc2s9InVybCgjbWFzazBfb3V0bGluZSkiIGZpZ21hOnR5cGU9ImZyYW1lIj4NCiAgICAgICAgICAgIDxnIGlkPSJjaGVjay1nbHlwaCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbDsiIGZpZ21hOnR5cGU9InZlY3RvciI+DQogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aDBfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU3OS41IC00ODEzKSIgZmlsbD0iI0MxQzVDOSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbDsiIC8+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJwYXRoMF9maWxsIiBkPSINCk0gMS41IDINCkwgMCAzLjUNCkwgMy41IDcNCkwgOSAxLjUNCkwgNy41IDANCkwgMy41IDQNCkwgMS41IDINCloiIC8+DQogICAgPC9kZWZzPg0KPC9zdmc+);\n  background-position: 50%;\n  background-repeat: no-repeat;\n}\n\n[class*="sidebar_library--margin24"] [class*="sidebar_library--searchInput"] {\n  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMzk3NDYgOC4xMDQ1NUM2LjYxODE2IDguNzI5NTUgNS42Mjg0MiA5LjEwMzQ1IDQuNTUxNzYgOS4xMDM0NUMyLjAzODA5IDkuMTAzNDUgMCA3LjA2NTU1IDAgNC41NTE3QzAgMi4wMzc5IDIuMDM4MDkgMCA0LjU1MTc2IDBDNy4wNjU0MyAwIDkuMTAzNTIgMi4wMzc5IDkuMTAzNTIgNC41NTE3QzkuMTAzNTIgNS42Mjg2IDguNzI5NDkgNi42MTgxIDguMTA0NDkgNy4zOTc1MkwxMS4zNTM1IDEwLjY0NjVMMTAuNjQ2IDExLjM1MzZMNy4zOTc0NiA4LjEwNDU1Wk04LjEwMzUyIDQuNTUxN0M4LjEwMzUyIDYuNTEzMzEgNi41MTMxOCA4LjEwMzQ1IDQuNTUxNzYgOC4xMDM0NUMyLjU5MDMzIDguMTAzNDUgMSA2LjUxMzMxIDEgNC41NTE3QzEgMi41OTAxNSAyLjU5MDMzIDEgNC41NTE3NiAxQzYuNTEzMTggMSA4LjEwMzUyIDIuNTkwMTUgOC4xMDM1MiA0LjU1MTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSIjQzFDNUM5IiBmaWxsLW9wYWNpdHk9IjAuNyIvPg0KPC9zdmc+DQo=)\n  no-repeat center left 23px;\n}\n\n[class*="sidebar_library--margin12"] [class*="sidebar_library--searchInput"] {\n  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy4zOTc0NiA4LjEwNDU1QzYuNjE4MTYgOC43Mjk1NSA1LjYyODQyIDkuMTAzNDUgNC41NTE3NiA5LjEwMzQ1QzIuMDM4MDkgOS4xMDM0NSAwIDcuMDY1NTUgMCA0LjU1MTdDMCAyLjAzNzkgMi4wMzgwOSAwIDQuNTUxNzYgMEM3LjA2NTQzIDAgOS4xMDM1MiAyLjAzNzkgOS4xMDM1MiA0LjU1MTdDOS4xMDM1MiA1LjYyODYgOC43Mjk0OSA2LjYxODEgOC4xMDQ0OSA3LjM5NzUyTDExLjM1MzUgMTAuNjQ2NUwxMC42NDYgMTEuMzUzNkw3LjM5NzQ2IDguMTA0NTVaTTguMTAzNTIgNC41NTE3QzguMTAzNTIgNi41MTMzMSA2LjUxMzE4IDguMTAzNDUgNC41NTE3NiA4LjEwMzQ1QzIuNTkwMzMgOC4xMDM0NSAxIDYuNTEzMzEgMSA0LjU1MTdDMSAyLjU5MDE1IDIuNTkwMzMgMSA0LjU1MTc2IDFDNi41MTMxOCAxIDguMTAzNTIgMi41OTAxNSA4LjEwMzUyIDQuNTUxN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiIGZpbGw9IiNDMUM1QzkiIGZpbGwtb3BhY2l0eT0iMC43Ii8+DQo8L3N2Zz4=)\n  no-repeat center left 11px;\n  color: #c1c5c9;\n}\n\n[class*="checkbox--checkbox"]::after,\n[class*="raw_components--modalPanel"] [class*="raw_components--input--"],\n[class*="basic_form--btn"]:not([class*="basic_form--primaryBtn"]),\n[class*="raw_components--input"] {\n  background: #212325;\n  border-color: #1b1c1c;\n}\n\n[class*="emoji-mart-search"] input {\n  color: #c1c5c9;\n  background: #262829;\n}\n\n[class*="constraints_panel--centerX"],\n[class*="constraints_panel--centerY"],\n[class*="constraints_panel--selectorContainer"] {\n  border-color: #525558;\n}\n\n[class*="constraints_panel--centerX"],\n[class*="constraints_panel--centerY"],\n[class*="constraints_panel--selectorContainer"] {\n  border-color: #525558;\n}\n\n[class*="constraints_panel--bottom--"]:not([class*="constraints_panel--selected"])::after,\n[class*="constraints_panel--left--"]:not([class*="constraints_panel--selected"])::after,\n[class*="constraints_panel--centerX--"]:not([class*="constraints_panel--selected"])::after,\n[class*="constraints_panel--centerY--"]:not([class*="constraints_panel--selected"])::after,\n[class*="constraints_panel--right--"]:not([class*="constraints_panel--selected"])::after,\n[class*="constraints_panel--top--"]:not([class*="constraints_panel--selected"])::after {\n  background: #525558;\n}\n\n[class*="comments_list--activeComment"]\n[class*="comments_list--commentMessage"],\n[class*="comments_list--activeComment"][class*="comments_list--hovered"]\n[class*="comments_list--commentMessage"],\n[class*="comments_list--activeComment"]:hover\n[class*="comments_list--commentMessage"] {\n  color: #333536;\n}\n\n[class*="object_row--selected"] [class*="object_row--input"] {\n  color: #333536;\n}\n');e.id="f-ui",e.appendChild(a),function(){var a="",t=document.styleSheets;Object.keys(t).forEach(function(e){var n=t[e].href;n&&n.includes("figma_app")&&(a=t[e])});var e=a.cssRules,n=!0,s=!1,r=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var o=c.value;null!=o.style&&(i(o),g(o),b(o),I(o),d(o),M(o),C(o),u(o))}}catch(e){s=!0,r=e}finally{try{n||null==l.return||l.return()}finally{if(s)throw r}}}(),document.head.appendChild(e),window.App.sendMessage("clearSelection"),window.App.updateSelectionProperties({backgroundColor:{r:.2,g:.20784313725490197,b:.21176470588235294,a:1},backgroundEnabled:!0}),localStorage.setItem("figma-dark-ui-plugin-enabled",!0)}else confirm("Figma needs a refresh in order to restore the default theme. Continue?")&&(localStorage.removeItem("figma-dark-ui-plugin-enabled"),window.App.sendMessage("clearSelection"),window.App.updateSelectionProperties({backgroundColor:{r:.8980392156862745,g:.8980392156862745,b:.8980392156862745,a:1},backgroundEnabled:!0}),setTimeout(function(){location.reload()},1e3));function i(e){if(""!=e.style.color)switch(e.style.color){case"rgb(0, 0, 0)":e.style.color=n.txtLabelSection;break;case"rgba(0, 0, 0, 0.5)":e.style.color=n.bgLightest;break;case"rgb(5, 5, 5)":e.style.color=n.txtLabelSection;break;case"rgb(44, 44, 44)":case"rgb(68, 68, 68)":e.style.color=n.txtLabel;break;case"rgba(68, 68, 68, 0.3)":e.style.color=n.txtDisabled;break;case"rgb(170, 170, 170)":case"rgb(212, 212, 212)":e.style.color=n.bgLightest}}function g(e){if(""!=e.style.backgroundColor)switch(e.style.backgroundColor){case"rgb(44, 44, 44)":case"rgb(212, 212, 212)":e.style.backgroundColor=n.bgLight;break;case"rgb(229, 229, 229)":e.style.backgroundColor=n.bgDark;break;case"rgb(239, 239, 239)":e.style.backgroundColor=n.bgLight;break;case"rgb(248, 248, 248)":case"rgb(252, 252, 252)":e.style.backgroundColor=n.bgBase;break;case"rgb(255, 255, 255)":case"#FFF":case"rgba(255, 255, 255, 0.95)":case"rgba(255, 255, 255, 0.953)":e.style.backgroundColor=n.bgBase}}function b(e){if(""!=e.style.fill)switch(e.style.fill){case"rgb(0, 0, 0)":case"rgb(5, 5, 5)":case"rgb(44, 44, 44)":case"rgb(68, 68, 68)":e.style.fill=n.txtLabelSection;break;case"hsla(0,0%,67%,0.3)":e.style.fill=n.txtDisabled;break;case"rgb(170, 170, 170)":case"rgb(212, 212, 212)":e.style.fill=n.bgLightest;break;case"rgb(229, 229, 229)":e.style.fill=n.bgDark;break;case"rgb(239, 239, 239)":e.style.fill=n.bgLight;break;case"rgb(252, 252, 252)":e.style.fill=n.bgBase}}function I(e){if(""!=e.style.stroke)switch(e.style.stroke){case"rgb(170, 170, 170)":e.style.stroke=n.bgLightest}}function d(e){if(""!=e.style.borderBottomColor)switch(e.style.borderBottomColor){case"rgb(239, 239, 239)":case"rgb(212, 212, 212)":case"rgb(217, 217, 217)":case"rgb(229, 229, 229)":e.style.borderBottomColor=n.bgDark}}function M(e){if(""!=e.style.borderRightColor)switch(e.style.borderRightColor){case"rgb(239, 239, 239)":case"rgb(212, 212, 212)":case"rgb(217, 217, 217)":case"rgb(229, 229, 229)":e.style.borderRightColor=n.bgDark}}function C(e){if(""!=e.style.borderLeftColor)switch(e.style.borderLeftColor){case"rgb(239, 239, 239)":case"rgb(212, 212, 212)":case"rgb(217, 217, 217)":case"rgb(229, 229, 229)":e.style.borderLeftColor=n.bgDark}}function u(e){if(""!=e.style.borderTopColor)switch(e.style.borderTopColor){case"rgb(212, 212, 212)":case"rgb(217, 217, 217)":case"rgb(229, 229, 229)":case"rgb(239, 239, 239)":e.style.borderTopColor=n.bgDark;break;case"rgb(252, 252, 252)":e.style.borderTopColor=n.bgBase}}}}]),n}();return window.darkUIPlugin=new l,l});
