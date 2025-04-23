import fm from "front-matter"

// grab all your markdown...
const mdFiles = import.meta.glob(
  "/src/content/photography/**/[!_]*.md",
  { as: "raw", eager: true }
)

// grab all jpgs as URLs (so Vite won’t bundle the pixels)
const imgFiles = import.meta.glob(
  "/src/content/photography/**/*.{jpg,jpeg}",
  { as: "url", eager: true }
)

export function loadPhotoCollections() {
  return Object.entries(mdFiles)
    .map(([path, raw]) => {
      const { attributes } = fm(raw as string)
      const id = path.split("/").slice(-2, -1)[0]

      // count images in this folder
      const imageCount = Object.keys(imgFiles)
        .filter(p => p.includes(`/photography/${id}/`))
        .length

      return {
        id,
        title: attributes.title,
        description: attributes.description,
        date: attributes.date,
        imageCount,
        coverImage: `src/content/photography/${id}/cover.jpg`,
        scale: attributes.scale
      }
    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
}
