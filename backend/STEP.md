CREATE - Crear un producto nuevo
- Etapa de muestra del formulario
1- Crear una vista ejs que contenga el formulario con todos los campos necesarios que apunte a una ruta con el metodo post
2- Crear una ruta que escuche el metodo get para luego implementar un controlador
3- Crear el controlador que renderice la vista creada en el paso 1 con todo lo necesario (categorias y colores).
- Etapa de procesamiento de los datos
1- Crear una ruta que escuche el metodo post por ej /products/create (POST)
2- Crear un controlador que reciba la info del formario (req.body)
3- Leer el json, convertirlo a javascript
4- Armar el objeto del nuevo producto
5- Agregarlo al listado leído anteriormente products.push(nuevoProducto)
6- Convertir a string, JSON.stringify
7- Sobreescribir archivo con ese nuevo listado
8- Redireccionar.

READ - Catalogo de productos
1- Crear una vista ejs para tener una estructura base del contendor de productos y cada tarjeta o card de un producto.
2- Crear un json con atributos de cada producto, indispensable un id unico.
3- Crear una ruta que escuche el metodo get para devolver la vista creada en el paso 1
4- Cuando una persona solicite algo a esa ruta por get, crear un controlador que lea el json, y nos renderice una vista con todo lo creado en el paso 1 enviandole ese listado de productos.
5- Actualizar lo creado en el paso 1 con valores dinámicos utilizando un foreach por ejemplo.

UPDATE - Editar un producto
- Etapa de muestra del formulario
1- Crear una vista ejs que contenga el formulario con todos los campos necesarios del producto que queremos editar que apunte a una ruta con el metodo post
2- Crear una ruta que escuche el metodo get para luego implementar un controlador, agregar un parametro dinamico para ser especifico :id
3- Crear el controlador que renderice la vista creada en el paso 1 con todo lo necesario (producto a editar (req.params.id), categorias y colores).
4- Implementar en la vista cada valor en el form con el value, por ejemplo de name value="<%= prod.name %>"
- Etapa de procesamiento de los datos
1- Crear una ruta que escuche el metodo put por ej /products/update/:id?_method=put (POST)
--- No olvidar instalar method-override para pisar el post con el put
2- Crear un controlador que reciba la info del formario (req.body)
3- Leer el json, convertirlo a javascript
4- Recorrer con foreach por ejemplo implementando un condicional para actualizar el producto elegir a editar
6- Convertir a string el listado actualizado, JSON.stringify
7- Sobreescribir archivo con ese nuevo listado
8- Redireccionar.

DELETE - Eliminar un producto
1- Crear un form que su accion apunte a un metodo DELETE por ejemplo "/products/delete/1?_method=DELETE" y su metodo por detras sea post
2- Crear una ruta que espere esa accion de metodo DELETE para ejecutar un controlador
3- Crear el controlador para filtrar el producto a eliminar
4- Actualizar el listado como se realiza en los metodos anteriores (convertir a json, sobreescribir, redireccionar)