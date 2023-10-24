<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">


## Realizado con

Creado con [Nest]

## Instalación

```bash
$ npm install
```

## Ejecutar app

```bash
$ npm start
```


## Descripción

Ejercicio 1: Diseñar un servicio simulado tipo GET (beeceptor.com) Crear un servicio simulado tipo GET que responda un mensaje diferente de acuerdo a los datos de entrada. Garantizar que el servicio se ejecute correctamente y devuelva una respuesta válida.

Curl
```bash
curl --location --request GET 'https://josecedamano.free.beeceptor.com/' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Jose"
}'
```

Ejercicio 2: Diseñar un servicio para la creación de tickets Implementar un servicio tipo POST que permita la creación de tickets. Diseñar una mutación de GraphQL (GQL) que se integre con el servicio para crear tickets. Realizar el mapeado de la entidad a un DTO (Data Transfer Object) para garantizar la correcta transferencia de datos. Implementar un control de excepciones personalizadas para el control de datos de entrada incorrectos, lógica de negocio, errores en la base de datos y problemas con el proveedor externo (api-fake).

Curl
```bash
curl --location 'http://localhost:3000/tickets' \
--header 'Content-Type: application/json' \
--data '{
  "title": "ticket3",
  "description": "Descripcion del ticket 3"
}'
```


Ejercicio 3: Diseñar un servicio para la consulta de un ticket dado un ID Desarrollar un servicio tipo GET que permita consultar un ticket específico utilizando un identificador (ID). Diseñar una query de GraphQL (GQL) que se integre con el servicio para consultar tickets por ID. Implementar un control de excepciones personalizadas para el control de datos de entrada incorrectos y registro no encontrado.

Curl
```bash
curl --location 'http://localhost:3000/tickets/910477571767926785'
```

Ejercicio 4: Diseñar un servicio para consultar tickets según los filtros y paginación aplicados. Crear un servicio tipo GET que habilite la consulta de múltiples tickets utilizando filtros de búsqueda y paginación. Diseñar una query de GraphQL (GQL) que se conecte con el servicio para consultar varios tickets según los filtros y la paginación especificados. Establecer un control de excepciones personalizadas para el control de datos de entrada incorrectos.

Curl
```bash
curl --location 'http://localhost:3000/tickets?title=ticket3&page=1&limit=10'
```

Ejercicio 5: Diseñar un servicio que permita cargar y procesar un archivo de 5 MB

Crear un servicio tipo POST que realice la carga de un archivo CSV con 500K de registros que contengan la siguiente estructura

id, balance, account, description, status, date

· Validar que el archivo no contenga filas duplicadas
· Validar que el archivo no esté vacío
· Validar el formato del archivo
· Validar que el id sea de tipo integer
· Validar que el balance sea de tipo number
· Validar que el account sea string y que tenga los valores válidos [INTERNAL, PEOPLE, OPERATIONS]
· Validar que el description sea string de 500 caracteres
· Validar que el status sea un string y que contenga los valores [PENDING, PROCESSED]
· Validar que la fecha sea tenga un formato de fecha UTC y que sea del día actual

Curl
```bash
curl --location 'http://localhost:3000/upload/csv' \
--form 'file=@"/C:/Users/Jose/Downloads/Capture.csv"'  
```

## Autor - Herramienta

- Autor - [José Cedamano]
- NestJS - [https://nestjs.com](https://nestjs.com/)

## Licencia

Free.
