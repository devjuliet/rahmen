# rahmen
Proyecto Web Plataforms


## Ejecutando el proyecto
Desde la raiz del proyecto, generar la imagen de Docker haciendo
```
docker build -t rahmen-nginx .
```
Para ejecutarlo, podemos hacer
```
docker run --name rahmen -d -p 8080:80 rahmen-nginx 
```