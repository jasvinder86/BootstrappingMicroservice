# BootstrappingMicroservice
This is a simple video streaming and uploading application based on Microservices. Tech stack used is - NodeJS, Docker, Kubernetes

Buzzwords and commands:
1. Container: It is a way of virtualizing a server. More formally, a container provides a way of virtualizing both the operating system and the hardware. This allows us to abstract (or virtualize) the resources required by our microservice. Containers provide a way to divide up the resources on one computer so that we can share these among many such services.

2. Image: An image is a bootable snapshot of a server (in our case, a microservice) including all the code, dependencies, and assets that it needs to run. Images are immutable, which means an image that has been produced cannot be modified.

3. Dockerfile: For every Docker image we want to create, we must create a Dockerfile. The Dockerfile is a specification for an image created by Docker.

4. Command for building an image and an example. 
docker build -t <your-name-for-the-image> --file <path-to-your-Dockerfile> <path-to-project>
docker build -t video-streaming --file Dockerfile .
The -t argument lets us tag or name our image to a friendly name.

5. docker run command and an example 
docker run -d -p <host-port>:<container-port> <image-name>
docker run -d -p 3001:3000 video-streaming
-d >> runs the container in the detached mode i.e. the container will run in the background.
-p >> binds the port between the host OS to that of the container's. In other words, localhost:3001 will forward us to the container's 3000 port.

6. Login to a private container registry on the cloud provider
docker login <my-registry-url> --username <my-username> --password <my-password>

7. Tagging a docker image before pushing it to the registry
docker tag <existing-image> <registry-url>/<image-name>:<version>

8. Pushing a docker to the registry
docker push <registry-url>/<image-name>:<version>

9. Kill a container 
docker kill <container-id>

10. Remove a container 
docker rm <container-id>

11. Remove an image
docker rmi <image-id or image-name> --force (if want to force delete)

12. Run a container from an image in the remote registry
docker run -d -p <host-port>:<container:port> <registry-url>/<image-name>:<version>

13. Retrieve output from a container
docker logs <container-id>
