// http://api.tvmaze.com/search/shows?q=girls


const form = document.querySelector('#searchForm');
const movie = document.querySelector('#movies');
form.addEventListener('submit',async function(e) {
    try{
        e.preventDefault();
        movie.innerHTML = '';
        const searchTerm = form.elements.query.value;
        const config = {params : {q : searchTerm }};
        const res = await axios.get(`http://api.tvmaze.com/search/shows`,config);
        makeImages(res.data);
        document.querySelector('input').value = "";
        
    }
    catch(e){
        console.log("Error!!!!", e);
    }
})

const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            movie.append(img);  
        }
    }

    const showImages = document.images;
    for(let i = 0;i < showImages.length;i++){
        showImages[i].style.margin = "20px";
        showImages[i].style.border = "1px solid white"
    }
}
