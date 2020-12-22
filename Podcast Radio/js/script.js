window.addEventListener('load', start); //carregando a pagina



//buscando os 2 elementos no DOM
let imputCurrentFrequency = document.getElementById('inputCurrentFrequency');

let rangeFrequency = document.getElementById('rangeFrequency');


let divPodcasts = document.getElementById('divPodcasts');















function start() {
   

    rangeFrequency.addEventListener('input', () => { //Arrow Function

        inputCurrentFrequency.value = rangeFrequency.value;

        findPodcast(rangeFrequency.value)


    }); //Fim da Arrow Function


























    //=====================//==========================//===========================//=====================//

    
    /*findPodcast,(frequency) => { //Arrow Function 

        for(i = 0; i < podcastsData.length; i++) {

        let currentPodcast = podcastsData[i];
        console.log(currentPodcast);

        }
    


    }*/


} //Fim da function Start









function findPodcast(frequency) {

    let foundPodcast = null;





    for(i = 0; i < podcastsData.length; i++) {

        let currentPodcast = podcastsData[i];
        
        //Comparando
        if(frequency === currentPodcast.id)  {

           // document.write('Encontrado!!' + frequency);
           foundPodcast = currentPodcast;

        }

    }
    
    //Verdadeiravel ou Falseavel

    if(!!foundPodcast) {
        renderItems(foundPodcast);



    } else {
        divPodcasts.innerHTML = '';
        divPodcasts.innerHTML = '<p>Nenhum Podcast localizado!!</p>';
    }


}


function renderItems(podcast) {

    divPodcasts.innerHTML = ''; //Limpa a div 

    let connect = document.createElement('h4'); //Insere na div 
    connect.textContent = 'Quer ter acesso a pagina Oficial do Podcast ? ';


    //Criando elementos  para a pagina do Podcast

    //imagem
    let img = document.createElement('img');
    img.src = 'img/' + podcast.img;
    img.alt = 'Logo do podcast' + podcast.title;
    img.title = podcast.title; 

    //link da pagina
    let link = document.createElement('a');
    link.href = podcast.link;
    link.textContent = 'Clique aqui!!';

    //Titulo
    let h2 = document.createElement('h2');
    h2.textContent = podcast.title;

    //Descrição
    let p = document.createElement('p');
    p.textContent = podcast.description;


    //Exibindo os elementos na pagina
    divPodcasts.append(connect);
    divPodcasts.append(link);
    divPodcasts.append(h2);
    divPodcasts.append(p);

}





