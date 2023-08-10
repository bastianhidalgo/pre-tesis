# **Software de control de acceso a áreas restringidas**

Software de seguridad abierto para oganizaciones que cuenten con lugares de acceso restringido, consiste en escanear el código QR de la cédula de identidad y mediante una validación con la base de datos permite o deniega el ingreso al sector o área.

## **Software stack**

La arquitectura de la aplicación web es:

-Ubuntu 20.04
-NodeJS 18.16
-ReactJS 18.2
-ExpressJS 4.18.2
-MySql
-Prisma db
-NPM


# **docker**

Se debe abrir un terminal en la carpeta raiz del backend donde se clonó el repositorio

Se ejecuta el siguiente comando:

```
cd frontend
```

para construir la imagen del backend se debe ejecutar el siguiente comando:

```
docker build -t frontend .
```

ya creada la imagen, para correr el contenedor se ejecuta: 

```
docker run --rm -ti -p 80:80 -v ${pwd}:/home frontend
```

lo siguiente que se debe hacer es ejecutar los siguientes comandos

```
cd home
yarn install
yarn start
```

Clonar el repositorio

para obtener el proyecto se debe ejecutar este comando en la carpeta donde desea tenerlo:

git clone https://github.com/bastianhidalgo/pre-tesis

Se debe agregar el archivo .env con dos variables:

SERVIDOR=http://localhost:80/api

Ambiente de desarrollo

Se deben tener corriendo en servidores diferentes, en donde cada uno deben realizarse los pasos de instalacion de dependencias y agregar las variables de entorno.

primero se ingresa en modo root con las credenciales al servidor


```
sudo su
```

Actualizar el sistema operativo

```
apt-get update
```

Instalar curl para descargar paquetes

```
apt-get install -y curl
```

Instalar git

```
apt-get install git
```

Instalar nano

```
apt-get install nano
```

Instalar nvm para instalar NodeJS

```
curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
```

Reiniciar bash para que se puedan utilizar comandos de NVM

```
exec bash
```

Instalar version 18.16.0

```
nvm install 18.16.0
```

cambiar alias de NodeJS

```
nvm alias deafult 18.16.0
```

Cambiar la version de NodeJS

```
nvm use default
```

Instalar yarn para instalar dependencias y pm2 para correr la aplicación

```
npm install -g yarn
npm install -g pm2
```

Se sigue con el paso de clonar el repositorio señalado mas arriba.

Se ingresa a la carpeta de backend.

Instalar las dependendencias del proyecto del ambiente de produccion, ingresar el siguiente comando.


```
yarn install
```


para ejecutar la aplicación se ingresa el siguiente comando:

```
pm2 start yarn -- start
```

y para ver el frontend:

```
http://ipservidor:80
```