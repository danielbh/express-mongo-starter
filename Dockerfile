FROM node:boron
MAINTAINER Daniel Hollcraft

# Create app directory
ENV INSTALL_PATH /app
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY app .

VOLUME ["static"]

EXPOSE 3000
CMD [ "npm", "start" ]