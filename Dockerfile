FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Run build and check output directory structure 
RUN npm run build && echo "Checking build output:" && ls -la

FROM nginx:stable-alpine
# Choose the correct line based on your build output directory:
COPY --from=build /app/build /usr/share/nginx/html
# COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'