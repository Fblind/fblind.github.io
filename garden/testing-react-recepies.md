---
title: React testing recepies
url: 'testing-react-recepies'
---

# React testing recepies

Los tests tienen que tener 3 momentos:
  - pre-condiciones (setup)
  - ejecucion
  - post-condiciones (verificacion y limpieza)

Entonces por lo general tenemos cada caso de prueba que va a tener:
  - un *beforeEach y varias lineas de codigo antes de la ejecucion* donde seteamos todo lo necesario (nocks, dbs stuffs, cambios de variables, creacion de cosas, etc).
  - una funcion *sut* (por system under test, tal vez sea hora de cambiar el nombre) donde realizo los pasos de ejecucion de mi test (llamadas a funciones y demás).
  - y por ultimo debajo del *sut* vamos a tener todos los *asserts* o *expectations*.
  - a veces si es necesario se puede agregar un *afterEach*.

En react creo que hay dos tipos de *test unitarios*, los *clásicos y los de componentes*, ya que los de componentes son como una especie de integración pero es una unidad, asi que me gusta hacer esa distinción.

## Receta para testear window en un react component

En un componente tenia que verificar en un `useEffect(, [])` si se habia refrescado la página, para validarlo tenia unas cosas en el store y si era asi cortaba la ejecucion y redireccionaba a la página inicial haciendo un `window.location.href = "/nuevapagina"` por lo que necesitaba ver si se cumplia o no para los diferentes casos.

```js
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
      href,
    };
    return render(
        <MemoryRouter
          initialEntries={["/assessment/es"]}
          initialIndex={0}
        >
          <Route exact path={"/assessment/:lang?"}>
            <Component />
          </Route>
        </MemoryRouter>
    );
  }

  it("test test test", () => {
    href = "/" // things that need to be done before (preconditions)
    
    sut(); // executing the test

    expect(window.location.href).toBe("/assessment/es"); // validating the test
  });
})
```
