# Macro4BIM blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/e621104b-fef7-4244-bf8f-8fe9daa319c2/deploy-status)](https://app.netlify.com/sites/macro4bim/deploys)

---

## Journal

- The application started with `npm create vite@latest` => choosing React and jsx
- `npm i react-markdown` as the intention is to write post in MD
  - all the MD files and their media are stored in `public/` folder
  - the concept is to read only the path and rely on HTTP requests
- MongoDB Atlas is used => `npm i mongoose`
  - at `mongodb-mongoose/` are stored all the Schemas
- add Netlify variable for Mongo
  - store locally in .env file: `API_KEY=your_api_key_value`
  - from Netlify website

## Guides

### How to publish post

the core is to update the Mongo DB, to do so, just execute the `mongodb-mongoose/createBlog.js` script.
