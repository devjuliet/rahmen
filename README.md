# rahmen
Rahmen es un proyecto de clase cuyo proposito es facilitar el manejo de proyectos de software bajo el marco de trabajo SCRUM.<br>
Permite manejar multiples proyectos mediante un backlog de proyecto, asi como el control por medio de sprints, permite manejar los equipos de trabajo y conocer en que proyectos estan trabajando o en cuales han trabajado

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
- Sebastián de la Riva Rivera 
- Julieta Navarro Rivera
- Cristhoper Ochoa Gutierrez
- Jose Manuel Padilla Caro
- Jorge Alejandro Romero Garcia
### Materia
Plataformas Web

## Agradecimientos
- **[Start Bootstrap - SB Admin](https://github.com/BlackrockDigital/startbootstrap-sb-admin)** - Template utilizado

