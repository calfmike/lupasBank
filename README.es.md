# Documentación Funcional de lupasBank

[Read this documentation in English](README.md)

## Introducción --- !!!!! IMPORTANTE !!!!
Para dejarlo claro, este es un proyecto hecho 100% con IA, aplicando mis habilidades funcionales y técnicas para mostrar los conocimientos que adquirí después de 10 años de trabajar en TI.

lupasBank es una aplicación bancaria integral que permite a los usuarios gestionar sus cuentas, realizar transacciones y más. Este documento describe las funcionalidades implementadas en la aplicación.

## Tabla de Contenidos
- [Usuarios](#usuarios)
  - [Registro](#registro)
  - [Inicio de Sesión](#inicio-de-sesion)
  - [Enrolamiento](#enrolamiento)
- [Cuentas](#cuentas)
  - [Creación de Cuentas](#creacion-de-cuentas)
  - [Obtener Cuentas](#obtener-cuentas)
- [Transacciones](#transacciones)
  - [Transferencias](#transferencias)
  - [Notas de Crédito](#notas-de-credito)
  - [Notas de Débito](#notas-de-debito)
- [Administrador](#administrador)
  - [Gestión de Administradores](#gestion-de-administradores)
- [Integración con Backoffice](#integracion-con-backoffice)
- [Configuración del Desarrollador](#configuracion-del-desarrollador)
- [Contribuciones](#contribuciones)
- [Despliegue](#despliegue)
- [Demo](#demo)

## Usuarios

### Registro
Los usuarios pueden registrarse proporcionando su nombre, apellido, correo electrónico y contraseña.

### Inicio de Sesión
Los usuarios registrados pueden iniciar sesión en la aplicación utilizando su correo electrónico y contraseña para obtener un token JWT para autenticación.

### Enrolamiento
Después de iniciar sesión, los usuarios pueden enrolarse configurando una imagen de seguridad, seleccionando un tipo de cuenta (ahorros o corriente) y proporcionando un alias para la cuenta.

## Cuentas

### Creación de Cuentas
Los usuarios pueden crear cuentas. Los administradores también pueden crear cuentas para los usuarios.

### Obtener Cuentas
Los usuarios pueden obtener todas sus cuentas o una cuenta específica por ID de usuario. Los administradores pueden obtener todas las cuentas.

## Transacciones

### Transferencias
Los usuarios pueden realizar transferencias entre cuentas utilizando el CBU o alias. El motivo de la transferencia se registra como "internalTransfer".

### Notas de Crédito
Los administradores pueden crear notas de crédito para las cuentas.

### Notas de Débito
Los administradores pueden crear notas de débito para las cuentas.

## Administrador

### Gestión de Administradores
Los administradores pueden registrarse e iniciar sesión en el backoffice. Los administradores también pueden obtener una lista de todos los usuarios.

## Integración con Backoffice
El backoffice está integrado con la API para gestionar usuarios, cuentas y transacciones sin requerir que los administradores tengan cuentas de usuario regulares o enrolamiento.

## Demo
Próximamente estará disponible una demo de las APIs integradas con un backoffice y un front end para usuarios.
