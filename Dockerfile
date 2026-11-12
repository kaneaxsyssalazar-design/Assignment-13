FROM node:20-alpine

WORKDIR /salazar_kane_ui_garden_build_checks

COPY package*.json ./
RUN npm ci --legacy-peer-deps --ignore-scripts

COPY . .
RUN npm run build

RUN npm install -g serve

EXPOSE 8018
CMD ["serve", "-s", "build", "-l", "8018"]
