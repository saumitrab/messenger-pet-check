FROM node:argon

RUN mkdir -p /usr/src/PetCheck
RUN mkdir -p /var/log/
WORKDIR /usr/src/PetCheck

COPY package.json /usr/src/PetCheck
RUN npm install

COPY . /usr/src/PetCheck

CMD [ "npm", "start" ]

