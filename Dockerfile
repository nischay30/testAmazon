FROM mhart/alpine-node
RUN mkdir -p /usr/demo
WORKDIR /usr/demo
COPY . .
RUN ls -ls
RUN npm install
CMD ["npm", "run", "express"]
