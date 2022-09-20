(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{267:function(e,t){const n={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("h1",[e._v("React Memo")]),e._v(" "),n("p",[e._v("I started in a new project and the first ticket I got was related some snackbar that wasn't hidden correctly at certain amount of time, in fact once the snackbar shows up it will never disapear.")]),e._v(" "),n("p",[e._v("I made a quick look into the code and found where this code was generated, my first thought was alright maybe the timeout and the onTimeout properties which are the ones in charge to handle this are wrong because the library this project is using is on beta since 2016 :/.")]),e._v(" "),n("p",[e._v("After saw the implementation of the library and play around with some console.log I found that it wasn't the problem at all instead the problem was that this component was beign mounted several times, in fact updated every f**cking second because of where it was (inside a component that relays on a clock :face_palm:). And well after seeing this I said to myself: \"React.memo !!\". I never used it but I knew that it won't re render if props are the same between cycles, so I found this blog post https://dmitripavlutin.com/use-react-memo-wisely/ and I created the following basic memoized snackbar:")]),e._v(" "),n("pre",[n("code",{pre:!0,attrs:{class:"language-js"}},[e._v('import React from "react";\nimport { FormattedMessage } from "react-intl";\nimport Snackbar from "react-toolbox/lib/snackbar";\n\ninterface IProps {\n  label: string; // id of the label to be translated\n  onTimeout?: Function;\n  active: boolean;\n}\n\nconst SnackbarWrapper: React.FC<IProps> = ({ label, onTimeout, active }) => {\n  const onTimeoutFn = onTimeout ? { onTimeout: onTimeout } : {};\n  return (\n    <Snackbar\n      label={<FormattedMessage id={label} />}\n      active={active}\n      timeout={5000}\n      {...onTimeoutFn}\n      type="accept"\n    />\n  );\n};\n\nexport const MemoizedSnackbar = React.memo(SnackbarWrapper);\n')])]),e._v(" "),n("h1",[e._v("React Redirect Click")]),e._v(" "),n("p",[e._v("I created an app using semantic-ui a while ago and for some part of the application I needed to had a modal that can be moved around so the user can see what is behind it. So what I did was use a lib that makes any component draggable and inside of it I added my Modal with its content. Originally, the app was thought as a web app, not as a mobile app, but since I used semantic-ui it will at least show the content (in a horrible way maybe 😂 but it'll be shown 🤷).\nBuuuuut then the app was tested in a mobile and puuuum some things weren't right. The main problem was that when the user tried to click something inside that draggable modal it didn't react to any action.")]),e._v(" "),n("p",[e._v("After some research I came up with a solution using the some basic concepts of the web, event propagation. The click event never arrived to the children component, first I tried to pass the event around, in this case the MouseEvent for the Draggable component but you can't send the same event more than once by default. So the solution was pretty simple, when on mouse down event I stopped the propagation of that event and then the target element dispatch a new fake click event, and depending on how the child component reacts to the click event the behavior of the app will be different.")]),e._v(" "),n("pre",[n("code",{pre:!0,attrs:{class:"language-js"}},[e._v('const redirectClick = (e: MouseEvent) => {\n  e.stopPropagation();\n  const event = new MouseEvent("click", {\n    view: window,\n    bubbles: true,\n    cancelable: true\n  });\n  e.target?.dispatchEvent(event);\n};\n\nconst handleClick = option => {\n  // here I can put the actual code that I want to be dispatch from the click made in the father\n  dispatch("something");\n};\n\n<Draggable {...draggableProps} onMouseDown={redirectClick}>\n  <Modal>\n    <Modal.Content>\n      {options.map(option => {\n        return (\n          <Segment\n            tertiary\n            key={index}\n            onClick={() => handleClick(opt)}\n            style={{ ...styles, cursor: "pointer" }}\n          >\n            {intl.formatMessage({ id: opt.id })}\n          </Segment>\n        );\n      })}\n    </Modal.Content>\n  </Modal>\n</Draggable>;\n')])])])}]};e.exports={attributes:{title:"React recipes and insights",url:"react-recipes"},meta:{resourcePath:"/home/fack/Documentos/Proyectos/personal-website/garden/react-recipes.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);