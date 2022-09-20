(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{273:function(e,t){const n={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("h1",[e._v("React testing recipes")]),e._v(" "),n("p",[e._v("Los tests tienen que tener 3 momentos:")]),e._v(" "),n("ul",[n("li",[e._v("pre-condiciones (setup)")]),e._v(" "),n("li",[e._v("ejecucion")]),e._v(" "),n("li",[e._v("post-condiciones (verificacion y limpieza)")])]),e._v(" "),n("p",[e._v("Entonces por lo general tenemos cada caso de prueba que va a tener:")]),e._v(" "),n("ul",[n("li",[e._v("un "),n("em",[e._v("beforeEach y varias lineas de codigo antes de la ejecucion")]),e._v(" donde seteamos todo lo necesario (nocks, dbs stuffs, cambios de variables, creacion de cosas, etc).")]),e._v(" "),n("li",[e._v("una funcion "),n("em",[e._v("sut")]),e._v(" (por system under test, tal vez sea hora de cambiar el nombre) donde realizo los pasos de ejecucion de mi test (llamadas a funciones y demás).")]),e._v(" "),n("li",[e._v("y por ultimo debajo del "),n("em",[e._v("sut")]),e._v(" vamos a tener todos los "),n("em",[e._v("asserts")]),e._v(" o "),n("em",[e._v("expectations")]),e._v(".")]),e._v(" "),n("li",[e._v("a veces si es necesario se puede agregar un "),n("em",[e._v("afterEach")]),e._v(".")])]),e._v(" "),n("p",[e._v("En react creo que hay dos tipos de "),n("em",[e._v("test unitarios")]),e._v(", los "),n("em",[e._v("clásicos y los de componentes")]),e._v(", ya que los de componentes son como una especie de integración pero es una unidad, asi que me gusta hacer esa distinción.")]),e._v(" "),n("h2",[e._v("Receta para testear window en un react component")]),e._v(" "),n("p",[e._v("En un componente tenia que verificar en un "),n("code",{pre:!0},[e._v("useEffect(, [])")]),e._v(" si se habia refrescado la página, para validarlo tenia unas cosas en el store y si era asi cortaba la ejecucion y redireccionaba a la página inicial haciendo un "),n("code",{pre:!0},[e._v('window.location.href = "/nuevapagina"')]),e._v(" por lo que necesitaba ver si se cumplia o no para los diferentes casos.")]),e._v(" "),n("pre",[n("code",{pre:!0,attrs:{class:"language-javascript"}},[e._v('import { render } from "@testing-library/react";\nimport { Route, MemoryRouter } from "react-router-dom";\nimport { Component } from "./Component";\n\ndescribe("Component that is using window", () => {\n  const { location } = window; // location o lo que necesites modificar del window.\n  let href = null; // o string "", ts => let href: string = "";\n\n  beforeEach(() => {\n    Reflect.deleteProperty(window, "location"); // remove location, and every property that you need to test\n    href = "/assessment/es"; // happy path\n  });\n\n  afterEach(() => {\n    window.location = location; // reset properties with original\n  });\n\n  function sut() {\n    // prepare our field and render the component\n    window.location = {\n      ...location,\n      href\n    };\n    return render(\n      <MemoryRouter initialEntries={["/assessment/es"]} initialIndex={0}>\n        <Route exact path={"/assessment/:lang?"}>\n          <Component />\n        </Route>\n      </MemoryRouter>\n    );\n  }\n\n  it("test test test", () => {\n    href = "/"; // things that need to be done before (preconditions)\n\n    sut(); // executing the test\n\n    expect(window.location.href).toBe("/assessment/es"); // validating the test\n  });\n});\n')])]),e._v(" "),n("h2",[e._v("Receta para testear unit store functions (TS)")]),e._v(" "),n("p",[e._v("Simplemente uso el factory que tiene todo creado (middlewares y esas cosas) y dsp lo uso como si fuera una dependencia más.")]),e._v(" "),n("pre",[n("code",{pre:!0,attrs:{class:"language-js"}},[e._v('import { storeFactory } from "../../../redux/store";\nimport step37 from "../steps/step37";\nimport actionCreators from "../../../redux/actionCreators";\nimport { createIntl } from "react-intl";\nimport en from "../../../lang/en-US.json";\n\ndescribe("EXAM - Step 37", () => {\n  let store = storeFactory();\n  const localization = createIntl({\n    // Locale of the application\n    locale: "en",\n    // Locale of the fallback defaultMessage\n    defaultLocale: "en",\n    messages: en\n  });\n\n  beforeEach(() => {});\n\n  afterEach(() => {});\n\n  function sut(expectation: (cb: any) => void) {\n    store = storeFactory();\n    const enhancerRedux = { store, dispatch: store.dispatch, actionCreators };\n    return step37(enhancerRedux, localization).run(expectation);\n  }\n\n  it("should complete the simulation with the correct information when timeout", done => {\n    const expectations = () => {\n      const { addCodeModal } = store.getState();\n      expect(addCodeModal.confirmed).toBe(true);\n      expect(addCodeModal.date).toBe("12/19/15");\n      expect(addCodeModal.transactionCode).toBe("05");\n      expect(addCodeModal.saved).toBe(true);\n      done();\n    };\n    sut(expectations);\n  });\n\n  it("should finish the step even if wrong info was filled", done => {\n    const expectations = () => {\n      const { addCodeModal } = store.getState();\n      expect(addCodeModal.confirmed).toBe(true);\n      expect(addCodeModal.date).toBe("12/19/15");\n      expect(addCodeModal.transactionCode).toBe("05");\n      expect(addCodeModal.saved).toBe(true);\n      done();\n    };\n    sut(expectations);\n\n    // deberia ser asi: https://stackoverflow.com/questions/54371096/redux-thunk-property-type-missing-when-calling-action-through-store-dispatch\n    store.dispatch < any > actionCreators.addCodeModalShow();\n    store.dispatch <\n      any >\n      actionCreators.addCodeModalSet({\n        date: "12/19/15",\n        transactionCode: "95"\n      });\n\n    // const { addCodeModal } = store.getState();\n    // console.log(addCodeModal.transactionCode);\n  });\n});\n')])]),e._v(" "),n("h2",[e._v("Receta para testear la existencia de una clase especifica.")]),e._v(" "),n("p",[e._v("La siguiente receta me sirvio usando css modules, asi que esta bueno, necesitaba saber si estaban bien puestas las classes ya que antes las habia puesto mal 😅")]),e._v(" "),n("pre",[n("code",{pre:!0,attrs:{class:"language-js"}},[e._v('it("should have the \'Scheduler-not-available\' class in the description for NOT AVAILABLE chart", () => {\n  const { getByTestId } = sut();\n\n  const notAvailable = getByTestId("notAvailable");\n  expect(notAvailable).toBeInTheDocument();\n  expect(notAvailable.classList).toHaveLength(2);\n  expect(notAvailable).toHaveClass("Scheduler-not-available");\n});\n')])]),e._v(" "),n("h2",[e._v("Receta no tan react pero para testear partial objects y partial arrays")]),e._v(" "),n("pre",[n("code",{pre:!0,attrs:{class:"language-js"}},[e._v('// https://codewithhugo.com/jest-array-object-match-contain/\nexpect(responses).toEqual(\n  expect.arrayContaining([\n    expect.objectContaining({ data_item_name: "A_1_3_5", value: 1 })\n  ])\n);\n')])])])}]};e.exports={attributes:{title:"React testing recipes",url:"testing-react-recipes"},meta:{resourcePath:"/home/fack/Documentos/Proyectos/personal-website/garden/testing-react-recipes.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);