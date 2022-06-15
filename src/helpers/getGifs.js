export const getGifs = async (category) => {
    // usamos la api de Giphy 
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=wjYprR2skumZJU4aMkJdwSfFIV9gvcjl`;
    const response = await fetch(url);
    // desestructuramos la data
    const { data } = await response.json();

    // recorremos la data con la ayuda de map para localizar la informacion que necesitamos 
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })
    return gifs;
};
// getGifs();