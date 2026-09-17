# Inference lab

Srikanth Malipatel's personal blog about inference engineering, GPU performance,
and experiments with language model serving.

Site: https://srikanthmalipatel.github.io

## Local development

Use Node.js 24 or newer.

```sh
npm ci
npm run dev
```

Run `npm run build` to build the static site, and `npm run preview` to preview it.
Posts live in `src/content/posts/`.

## Deployment

GitHub Actions builds and deploys the site on every push to `main`.
In repository Settings → Pages, the publishing source is **GitHub Actions**.

## Third-party notices

IBM Plex Sans and JetBrains Mono are distributed under the SIL Open Font License.
Their copyright notices and licenses are included in `public/font-licenses/`.
Other dependencies retain their respective licenses.
