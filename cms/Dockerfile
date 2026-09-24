# syntax=docker/dockerfile:1
FROM node:20-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
# The npm cache is kept between builds, so a retry after a network failure resumes.
RUN --mount=type=cache,target=/root/.npm \
    npm ci --fetch-retries=5 --fetch-retry-mintimeout=20000 --fetch-timeout=300000
COPY . .
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "start"]
