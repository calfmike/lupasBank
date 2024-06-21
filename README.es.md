# Documentación Funcional de lupasBank

[Read this documentation in English](README.md)

## Introducción --- !!!! IMPORTANTE !!!!
## Para ser justo, este es un proyecto realizado 100% con IA, hecho por diversión y de una manera que mi conocimiento pueda ser demostrado de manera práctica, aplicando las habilidades que adquirí después de 10 años trabajando en TI. Dentro de /src/backend está el swagger.json para ver el detalle de la colección de postman en cualquier editor swagger como https://editor.swagger.io/ ¡Espero que te guste! Fue divertido crearlo.

## -- Aún por implementar el frontEnd para el usuario final. La primera versión del BO ya está fusionada, tengo pendiente hacer un video con una demostración de la aplicación. Pero tengo el entorno configurado en caso de que alguien tenga curiosidad, podemos concertar una reunión y con gusto les mostraré mi pequeño monstruo (?)

lupasBank es una aplicación bancaria integral que permite a los usuarios gestionar sus cuentas, realizar transacciones y más. Este documento describe las funcionalidades implementadas en la aplicación.

## Tabla de Contenidos
- [Usuarios](#usuarios)
  - [Registro](#registro)
  - [Inicio de Sesión](#inicio-de-sesión)
  - [Inscripción](#inscripción)
- [Cuentas](#cuentas)
  - [Creación de Cuentas](#creación-de-cuentas)
  - [Obtener Cuentas](#obtener-cuentas)
- [Transacciones](#transacciones)
  - [Transferencias](#transferencias)
  - [Notas de Crédito](#notas-de-crédito)
  - [Notas de Débito](#notas-de-débito)
- [Admin](#admin)
  - [Gestión de Administradores](#gestión-de-administradores)
- [Integración con el Backoffice](#integración-con-el-backoffice)
- [Demo](#demo)

## Usuarios

### Registro
Los usuarios pueden registrarse proporcionando su nombre, apellido, correo electrónico y contraseña.

### Inicio de Sesión
Los usuarios registrados pueden iniciar sesión en la aplicación usando su correo electrónico y contraseña para obtener un token JWT para la autenticación.

### Inscripción
Después de iniciar sesión, los usuarios pueden inscribirse configurando una imagen de seguridad, seleccionando un tipo de cuenta (ahorros o corriente) y proporcionando un alias para la cuenta.

## Cuentas

### Creación de Cuentas
Los usuarios pueden crear cuentas. Los administradores también pueden crear cuentas para los usuarios.

### Obtener Cuentas
Los usuarios pueden obtener todas sus cuentas o una cuenta específica por ID de usuario. Los administradores pueden obtener todas las cuentas.

## Transacciones

### Transferencias
Los usuarios pueden realizar transferencias entre cuentas utilizando el CBU o el alias. El motivo de la transferencia se registra como "internalTransfer".

### Notas de Crédito
Los administradores pueden crear notas de crédito para las cuentas.

### Notas de Débito
Los administradores pueden crear notas de débito para las cuentas.

## Admin

### Gestión de Administradores
Los administradores pueden registrarse e iniciar sesión en el backoffice. Los administradores también pueden obtener una lista de todos los usuarios.

## Integración con el Backoffice
El backoffice está integrado con la API para gestionar usuarios, cuentas y transacciones sin requerir que los administradores tengan cuentas de usuario regulares o inscripción.

## Demo
Próximamente una demo de las APIs integradas con un backoffice y un front end de usuario.
