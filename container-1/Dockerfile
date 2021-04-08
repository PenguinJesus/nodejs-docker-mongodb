FROM node:14

#Create app directory
WORKDIR /usr/src/app

# Label
LABEL description="this is the nodejs docker container"




# Bundle app source
COPY . .

RUN npm install

EXPOSE 8080

# Define the command to run your app
CMD ["node", "server.js"]

