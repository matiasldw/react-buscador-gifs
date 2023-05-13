export const getGifs = async (category, limit = 10) => {

    const key_api = 'IrVJxhponm1yZnUEY8EbxsXlnm3EkB4W&q';

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key_api}=${category}&limit=${limit}`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}