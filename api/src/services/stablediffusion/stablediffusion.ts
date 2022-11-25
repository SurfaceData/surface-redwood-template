import fetch from 'node-fetch'

export const generateImage = async () => {
  const result = await fetch(process.env.SURFACE_DIFFUSION_URL, {
    method: 'POST',
    body: JSON.stringify({
      input: {
        apikey: process.env.SURFACE_DIFFUSION_KEY,
        prompt: 'a logo of a fox made of fire',
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
