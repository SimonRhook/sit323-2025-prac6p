# sit323-2025-prac6p

Basic web service using a docker container run in kubernetes.

## To run


1. If necessary start docker registry `docker run -d -p 5000:5000 --name registry registry:2`
2. Build docker image with `docker build -t localhost:5000/web-calc`
3. push image to registry `docker push localhost:5000/web-calc:latest`
4. create kubernetes deployment `kubectl apply -f deployment.yaml`
5. apply service config `kubectl apply -f service.yaml`
6. port forward `kubectl port-forward svc/web-calc 8080:8080`
7. connect to service http://localhost:8080/ 
