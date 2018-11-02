FROM gcr.io/google_appengine/nodejs

WORKDIR /

COPY . .

RUN npm install && npm run build

EXPOSE 5000

CMD ["npm", "run", "start"]