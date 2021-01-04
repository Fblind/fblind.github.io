## Test private methods

Aunque considero que esto es un smell, porque deberias testear tu unidad y tu unidad publica deberia ser suficientemente chica y desacoplada, hay veces donde agarras codigo que no esta testeado y no esta en los planes testear absolutamente todo entonces los tests los vas agregando a medida que arreglas bugs que se encuentran, o al menos esa es la situacion en la que use esto:

```javascript
const staticPrivateMethod: () => void = Klass["staticPrivateMethod"]; // dar visibilidad a un metodo statico privado (usar property access con [])
```
