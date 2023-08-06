# Development

Run the myapp Spring Boot backend in your IDE, then start the frontend end dev mode via `ng serve` in the `frontend`
folder.

Browse to http://localhost:4200/

# Building

To build the application run:
```
mvn clean package
```

# Run

```
java -jar backend/target/myapp-*.jar
```

Browse to http://localhost:8080/

# Docker

## Build Image

```
mvn clean package spring-boot:build-image
```

## Run Container

```
docker run -it --rm -p 8080:8080 mycompany.com/library/backend:latest
```