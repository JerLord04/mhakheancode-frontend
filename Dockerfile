# Build Stage
FROM node:23.4.0-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production Stage
FROM node:23.4.0-alpine AS PRODUCTION_STAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/package*.json ./
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
ARG NEXT_PUBLIC_BASE_URL

# Write the environment variable to a .env file
RUN echo "NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL" > /app/.env.production

EXPOSE 3002
CMD ["npm", "start"]