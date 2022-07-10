export const getMemes = async () => {
  const awaitedValue = await fetch('https://api.imgflip.com/get_memes')
  return awaitedValue.json()
}
