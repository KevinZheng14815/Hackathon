const axios = require('axios')

const options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
    params: {
        q: 'global oil prices',
        pageNumber: '1',
        pageSize: '1',
        autoCorrect: 'true',
        fromPublishedDate: 'null',
        toPublishedDate: 'null'
    },
    headers: {
        'X-RapidAPI-Key': 'df7b7367f1mshbb472ba7122aec4p19dd22jsna85b26a629ca',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
};


axios.request(options).then(function (response) {
    //instead of console log, set the state below 
    console.log(response.data['value'][0]['title']);
}).catch(function (error) {
    console.error(error);
});


