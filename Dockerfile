FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/package.json /app/package-lock.json ./
RUN npm ci
COPY --from=build /app/dist ./dist
COPY --from=build /app/vite.config.ts ./
EXPOSE 3000
CMD ["npx", "vike", "preview", "--host", "--port", "3000"]
