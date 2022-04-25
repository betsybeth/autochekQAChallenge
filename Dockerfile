FROM cypress/included:9.5.4

COPY package.json package.json
RUN npm i 

COPY ./cypress ./cypress

RUN npm test