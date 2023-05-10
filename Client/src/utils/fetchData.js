export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
};

// export const youtubeOptions = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//         'X-RapidAPI-Key': 'b75b1e97b5msh3f4ff0f7b2b59f4p10368bjsn59edd74e771b',
//     },
// };

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};