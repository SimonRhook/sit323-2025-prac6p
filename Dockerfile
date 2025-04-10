# Set base image
FROM node:16
# set working directory
WORKDIR /usr/src/app
# Copy Json to working directory
COPY package*.json ./
# run npm install in container
RUN npm install
# copy code to run
COPY index.js .
# port forward
EXPOSE 8080
# run code 
CMD ["node", "index.js"]
