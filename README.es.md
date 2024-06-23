# Documentación Funcional de lupasBank

[Read this documentation in English](README.md)

## Introducción --- !!!! IMPORTANTE !!!!
Solo para ser justos, este es un proyecto hecho 100% con IA, hecho por diversión y de una manera que mis conocimientos puedan ser demostrados de una manera práctica, aplicando las habilidades que adquirí después de 10 años trabajando en IT. Puede consultar la colección de postman en el direcotio raiz. Intenté actualizar el swagger que está en /src porque quedo desactializada pero va a quedar para  la próxima sesión

**Nota:** El frontend para el usuario final aún no se ha implementado. La primera versión del BO ya está implementada, y pronto se hará un video demo de la aplicación. Sin embargo, tengo el entorno configurado, y si alguien tiene curiosidad, podemos organizar una reunión, y les mostraré mi pequeño monstruo.

## SCREENSHOTS of the BO enviroment##
Login Admin on BO:
![image](https://github.com/calfmike/lupasBank/assets/49999749/b61f215e-fdc4-4f1e-8097-e20bd4750dd4)

Admin dashboard on BO:
![image](https://github.com/calfmike/lupasBank/assets/49999749/ca96e84c-30f6-47e0-9ab9-40ce297df3be)

Manage users on BO (yet to complete) colors depending on each onboarding state:
![image](https://github.com/calfmike/lupasBank/assets/49999749/f4284bdd-c0e0-4c7f-8b2c-83b973adb2ec)

Modal for editing user:
![image](https://github.com/calfmike/lupasBank/assets/49999749/9d97c084-faa3-42c7-9a30-8ed285365918)


lupasBank es una aplicación bancaria integral que permite a los usuarios gestionar sus cuentas, realizar transacciones y más. Este documento describe las funcionalidades implementadas en la aplicación.

## Tabla de Contenidos
- [Usuarios](#usuarios)
  - [Registro](#registro)
  - [Inicio de Sesión](#inicio-de-sesión)
  - [Enrolamiento](#enrolamiento)
- [Cuentas](#cuentas)
  - [Creación de Cuenta](#creación-de-cuenta)
  - [Obtener Cuentas](#obtener-cuentas)
- [Transacciones](#transacciones)
  - [Transferencias](#transferencias)
  - [Notas de Crédito](#notas-de-crédito)
  - [Notas de Débito](#notas-de-débito)
- [Administrador](#administrador)
  - [Gestión de Administradores](#gestión-de-administradores)
- [Integración de Backoffice](#integración-de-backoffice)
- [Demostración](#demostración)

## Usuarios

### Registro
Los usuarios pueden registrarse proporcionando su nombre, apellido, correo electrónico y contraseña.

### Inicio de Sesión
Los usuarios registrados pueden iniciar sesión en la aplicación utilizando su correo electrónico y contraseña para obtener un token JWT para la autenticación.

### Enrolamiento
Después de iniciar sesión, los usuarios pueden enrolarse configurando una imagen de seguridad, seleccionando un tipo de cuenta (ahorros o corriente), y proporcionando un alias para la cuenta.

## Gestión de Riesgo

### Evaluación de Riesgo
Al registrarse, se asigna a los usuarios una puntuación de riesgo generada aleatoriamente. Según la puntuación de riesgo:
- **Riesgo Bajo (0-33):** Los usuarios pueden enrolarse directamente sin la aprobación del administrador, con un estado de onboarding 'aprobado'.
- **Riesgo Medio (34-66):** El estado de onboarding de los usuarios será 'pendiente', y requerirá la aprobación del administrador para completar el enrolamiento.
- **Riesgo Alto (67-100):** El estado de onboarding de los usuarios será 'rechazado', y no podrán completar el enrolamiento.

## Cuentas

### Creación de Cuenta
Los usuarios pueden crear cuentas. Los administradores también pueden crear cuentas para los usuarios.

### Obtener Cuentas
Los usuarios pueden obtener todas sus cuentas o una cuenta específica por ID de usuario. Los administradores pueden obtener todas las cuentas.

## Transacciones

### Transferencias
Los usuarios pueden hacer transferencias entre cuentas utilizando ya sea el CBU o el alias. La razón de la transferencia se registra como "internalTransfer".

### Notas de Crédito
Los administradores pueden crear notas de crédito para las cuentas.

### Notas de Débito
Los administradores pueden crear notas de débito para las cuentas.

## Administrador

### Gestión de Administradores
Los administradores pueden registrarse e iniciar sesión en el backoffice. Los administradores también pueden obtener una lista de todos los usuarios.

## Integración de Backoffice
El backoffice está integrado con la API para gestionar usuarios, cuentas y transacciones sin requerir que los administradores tengan cuentas de usuarios regulares o enrolamiento.

## Demostración
Próximamente se hará una demostración de las APIs integradas con un BO y un frontend para el usuario final.
