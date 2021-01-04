---
title: React testing recipes
url: "testing-react-recipes"
---

# React testing recipes

Los tests tienen que tener 3 momentos:

- pre-condiciones (setup)
- ejecucion
- post-condiciones (verificacion y limpieza)

Entonces por lo general tenemos cada caso de prueba que va a tener:

- un _beforeEach y varias lineas de codigo antes de la ejecucion_ donde seteamos todo lo necesario (nocks, dbs stuffs, cambios de variables, creacion de cosas, etc).
- una funcion _sut_ (por system under test, tal vez sea hora de cambiar el nombre) donde realizo los pasos de ejecucion de mi test (llamadas a funciones y demás).
- y por ultimo debajo del _sut_ vamos a tener todos los _asserts_ o _expectations_.
- a veces si es necesario se puede agregar un _afterEach_.

En react creo que hay dos tipos de _test unitarios_, los _clásicos y los de componentes_, ya que los de componentes son como una especie de integración pero es una unidad, asi que me gusta hacer esa distinción.

## Receta para testear window en un react component

En un componente tenia que verificar en un `useEffect(, [])` si se habia refrescado la página, para validarlo tenia unas cosas en el store y si era asi cortaba la ejecucion y redireccionaba a la página inicial haciendo un `window.location.href = "/nuevapagina"` por lo que necesitaba ver si se cumplia o no para los diferentes casos.

```javascript
import { render } from "@testing-library/react";
import { Route, MemoryRouter } from "react-router-dom";
import { Component } from "./Component";

describe("Component that is using window", () => {
  const { location } = window; // location o lo que necesites modificar del window.
  let href = null; // o string "", ts => let href: string = "";

  beforeEach(() => {
    Reflect.deleteProperty(window, "location"); // remove location, and every property that you need to test
    href = "/assessment/es"; // happy path
  });

  afterEach(() => {
    window.location = location; // reset properties with original
  });

  function sut() {
    // prepare our field and render the component
    window.location = {
      ...location,
      href
    };
    return render(
      <MemoryRouter initialEntries={["/assessment/es"]} initialIndex={0}>
        <Route exact path={"/assessment/:lang?"}>
          <Component />
        </Route>
      </MemoryRouter>
    );
  }

  it("test test test", () => {
    href = "/"; // things that need to be done before (preconditions)

    sut(); // executing the test

    expect(window.location.href).toBe("/assessment/es"); // validating the test
  });
});
```

## Receta para testear unit store functions (TS)

Simplemente uso el factory que tiene todo creado (middlewares y esas cosas) y dsp lo uso como si fuera una dependencia más.

```js
import { storeFactory } from "../../../redux/store";
import step37 from "../steps/step37";
import actionCreators from "../../../redux/actionCreators";
import { createIntl } from "react-intl";
import en from "../../../lang/en-US.json";

describe("EXAM - Step 37", () => {
  let store = storeFactory();
  const localization = createIntl({
    // Locale of the application
    locale: "en",
    // Locale of the fallback defaultMessage
    defaultLocale: "en",
    messages: en
  });

  beforeEach(() => {});

  afterEach(() => {});

  function sut(expectation: (cb: any) => void) {
    store = storeFactory();
    const enhancerRedux = { store, dispatch: store.dispatch, actionCreators };
    return step37(enhancerRedux, localization).run(expectation);
  }

  it("should complete the simulation with the correct information when timeout", done => {
    const expectations = () => {
      const { addCodeModal } = store.getState();
      expect(addCodeModal.confirmed).toBe(true);
      expect(addCodeModal.date).toBe("12/19/15");
      expect(addCodeModal.transactionCode).toBe("05");
      expect(addCodeModal.saved).toBe(true);
      done();
    };
    sut(expectations);
  });

  it("should finish the step even if wrong info was filled", done => {
    const expectations = () => {
      const { addCodeModal } = store.getState();
      expect(addCodeModal.confirmed).toBe(true);
      expect(addCodeModal.date).toBe("12/19/15");
      expect(addCodeModal.transactionCode).toBe("05");
      expect(addCodeModal.saved).toBe(true);
      done();
    };
    sut(expectations);

    // deberia ser asi: https://stackoverflow.com/questions/54371096/redux-thunk-property-type-missing-when-calling-action-through-store-dispatch
    store.dispatch < any > actionCreators.addCodeModalShow();
    store.dispatch <
      any >
      actionCreators.addCodeModalSet({
        date: "12/19/15",
        transactionCode: "95"
      });

    // const { addCodeModal } = store.getState();
    // console.log(addCodeModal.transactionCode);
  });
});
```

## Receta para testear la existencia de una clase especifica.

La siguiente receta me sirvio usando css modules, asi que esta bueno, necesitaba saber si estaban bien puestas las classes ya que antes las habia puesto mal 😅

```js
it("should have the 'Scheduler-not-available' class in the description for NOT AVAILABLE chart", () => {
  const { getByTestId } = sut();

  const notAvailable = getByTestId("notAvailable");
  expect(notAvailable).toBeInTheDocument();
  expect(notAvailable.classList).toHaveLength(2);
  expect(notAvailable).toHaveClass("Scheduler-not-available");
});
```

## Receta no tan react pero para testear partial objects y partial arrays

```js
// https://codewithhugo.com/jest-array-object-match-contain/
expect(responses).toEqual(
  expect.arrayContaining([
    expect.objectContaining({ data_item_name: "A_1_3_5", value: 1 })
  ])
);
```
