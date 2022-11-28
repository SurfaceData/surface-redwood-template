import fetch from 'node-fetch'

export const generateImage = async ({ input }) => {
  console.log(input)
  const result = await fetch(process.env.SURFACE_DIFFUSION_URL, {
    method: 'POST',
    body: JSON.stringify({
      input: {
        apikey: process.env.SURFACE_DIFFUSION_KEY,
        ...input,
      },
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
  return result.output.map((image, index) => ({
    id: index,
    content: image,
  }))
}
