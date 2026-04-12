# Embedding the List of Post-Scarcity Related Efforts

The list is located at `https://nextkind.org/links/?version=1` as a JSON list and can be read by scripts and displayed on any website. You could copy/paste the list to your website manually but scripting it will ensure the list will always display updated.

- `icon` and `tags` are not mandatory and may be missing, please take them into account when displaying list items.
- Please display the `note` somewhere around the list, so visitors can find out they can embed this list on their website too (which will probably boost your traffic).

# Contributing to the List of Post-Scarcity Related Efforts

If you want to add something to the list, please fork this repository, edit the list file `/public/links/v1.json` and create a pull request with your changes. You can do that [on this link](https://github.com/NextKind/website/edit/main/public/links/v1.json).

- Please order items alphabetically according to their title.
- `icon` and `tags` are not mandatory but recommended.


# Contributing to the Website

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Nuxt Configuration Reference](https://nuxt.com/docs/api/nuxt-config).

## Cloudflare Workers deployment

This repository now includes a root `wrangler.jsonc` configured for Nuxt's Cloudflare Workers output.

### Local Cloudflare preview
```
npm run preview:cf
```

Wrangler runs `npm run build` first and serves the generated Worker from `.output/server/index.mjs` with static assets from `.output/public`.

### Deploy to Cloudflare Workers
```
npm run deploy:cf
```

Before deploying the first time:

1. Install and authenticate Wrangler if it is not already available on your machine.
2. Update the Worker name in `wrangler.jsonc` if you want a different deployment name.
3. Add routes or a custom domain in `wrangler.jsonc` once the Cloudflare zone is ready.

The legacy PHP-backed `/links/?version=1` endpoint is handled by Nitro so it continues to work when deployed on Workers.
