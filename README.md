# rahmen
Proyecto Web Plataforms

## Prerequsitos
- Docker
<!--  -->
## Ejecutando el proyecto
Desde la raiz del proyecto, generar la imagen de Docker haciendo
```
docker build -t rahmen-nginx .
```
Para ejecutarlo, podemos hacer
```
docker run --name rahmen -d -p 8080:80 rahmen-nginx 
```
## Autores
- Sebastían de la Riva Rivera 
- Julieta Navarro Rivera
- Cristhoper Ochoa Gutierrez
- Jose Manuel Padilla Caro
- Jorge Alejandro Romero Garcia

## Agradecimientos
- **[Start Bootstrap - SB Admin](https://github.com/BlackrockDigital/startbootstrap-sb-admin)** - Template utilizado

