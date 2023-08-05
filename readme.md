
# Build

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