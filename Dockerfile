FROM cypress/included:9.5.4
# Helps with substitution of env vars 

COPY package.json package.json
RUN npm i 

COPY ./cypress ./cypress

ENTRYPOINT ["npm" "test"]