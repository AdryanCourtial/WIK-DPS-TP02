# FROM node as builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npx tsc

# FROM node:slim
# USER node
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci --production
# COPY .env.json .
# COPY --from=builder /app/build ./build
# ENV NODE_ENV=production
# ENV host_api=0.0.0.0
# ENV port_api=3000
# EXPOSE $port_api
# CMD [ "node", "build/server.js" ]

FROM node:slim
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
ENV NODE_ENV=production
ENV host_api=0.0.0.0
ENV port_api=3000
USER node
EXPOSE 3000
CMD ["node", "build/server.js"]

