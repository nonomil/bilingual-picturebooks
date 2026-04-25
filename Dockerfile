FROM node:22-alpine AS build
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .

FROM nginx:alpine
COPY --from=build /src /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

