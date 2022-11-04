
function checkLinkImage()   {

    const typeFilm = document.querySelector("#type-film").value;

    if (typeFilm.endsWith(".jpg") || typeFilm.endsWith(".png")) {

        addFilm(typeFilm); // chamando funcao e passando a variavel typeFilme para a funcao addFilm

    } else {
        
        alert("Use um link de imagem que termine com .jpg ou .png");
    }

    document.querySelector("#type-film").value = "";
} 

function addFilm(linkFilm)  {

    const bannerFilm = "<img src=" + linkFilm + ">"; // repare no nome da variavel linkFilm posso por qualquer nome aqui pois passei a variavel typeFilm
    const listBanners = document.querySelector(".list-banners");

    listBanners.innerHTML = bannerFilm + listBanners.innerHTML;
    
}