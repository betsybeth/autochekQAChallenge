FROM cypress/included:9.5.4
# Helps with substitution of env vars 
RUN npm install -g envsub
COPY package.json package.json
RUN npm i 

COPY ./cypress ./cypress
COPY ./config   ./config
