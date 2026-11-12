# ---------- Stage 1: production build of the CRA component library ----------
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json .npmrc ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# ---------- Stage 2: serve the build with nginx on port 8083 ----------
# Working dir = lastName_firstName_ui_garden  (change salazar_kane everywhere if your name differs)
FROM nginx:alpine
WORKDIR /salazar_kane_ui_garden
COPY --from=build /app/build .
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]
