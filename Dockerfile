FROM cypress/included:9.5.4

COPY package.json package.json
RUN yarn install

COPY ./cypress ./cypress

RUN yarn test