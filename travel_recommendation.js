  function searchCondition() {
        const input = document.getElementById('conditionInput').value.toLowerCase();
        const resultDiv = document.getElementById('popup-results');
        if(input=="country" || input=="countries" ){   
        resultDiv.innerHTML = '';
        resultDiv.innerHTML += `<h2>${"Australia"}</h2>`;

        resultDiv.innerHTML += `<img src="syd_img.jpg">`;
        resultDiv.innerHTML += `<p><strong>Name:</strong> ${"Sydney, Australia"}</p>`;
        resultDiv.innerHTML += `<p><strong>Description:</strong> ${"A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."}</p>`;

        resultDiv.innerHTML += `<h2>${"Japan"}</h2>`;

        resultDiv.innerHTML += `<img src="tok_img.jpg">`;
        resultDiv.innerHTML += `<p><strong>Name:</strong> ${"Tokyo, Japan"}</p>`;
        resultDiv.innerHTML += `<p><strong>Description:</strong> ${"A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."}</p>`;

       
    } else if(input=="temple" || input=="temples"){
        resultDiv.innerHTML = '';
        resultDiv.innerHTML += `<h2>${"Cambodia"}</h2>`;

        resultDiv.innerHTML += `<img src="Angkor_templ_img.jpg">`;
        resultDiv.innerHTML += `<p><strong>Name:</strong> ${"Angkor Wat, Cambodia"}</p>`;
        resultDiv.innerHTML += `<p><strong>Description:</strong> ${"A UNESCO World Heritage site and the largest religious monument in the world."}</p>`;

        resultDiv.innerHTML += `<h2>${"India"}</h2>`;

        resultDiv.innerHTML += `<img src="taj_templ_img.jpg">`;
        resultDiv.innerHTML += `<p><strong>Name:</strong> ${"Taj Mahal, India"}</p>`;
        resultDiv.innerHTML += `<p><strong>Description:</strong> ${"An iconic symbol of love and a masterpiece of Mughal architecture."}</p>`;

        }else if(input=="beach"|| input=="beaches"){
            resultDiv.innerHTML = '';
            resultDiv.innerHTML += `<h2>${"French Polynesia"}</h2>`;
    
            resultDiv.innerHTML += `<img src="bora_beach.jpg">`;
            resultDiv.innerHTML += `<p><strong>Name:</strong> ${"Bora Bora, French Polynesia"}</p>`;
            resultDiv.innerHTML += `<p><strong>Description:</strong> ${"An island known for its stunning turquoise waters and luxurious overwater bungalows."}</p>`;
    
            resultDiv.innerHTML += `<h2>${"Brazil"}</h2>`;
    
            resultDiv.innerHTML += `<img src="copacabana_beach.jpg">`;
            resultDiv.innerHTML += `<p><strong>Name:</strong> ${"Copacabana Beach, Brazil"}</p>`;
            resultDiv.innerHTML += `<p><strong>Description:</strong> ${"A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."}</p>`;
                }else{

                    resultDiv.innerHTML = '';
                    resultDiv.innerHTML += `<h2>${"Results not found"}</h2>`;   
                }
                // Show the popup
                const popup = document.getElementById("search-popup");
                popup.classList.remove("hidden");
                
                
               
                
      }
        btnSearch.addEventListener('click', searchCondition);

     const resetButton = document.getElementById('reset');
      resetButton.addEventListener('click', function() {
        document.getElementById('conditionInput').value=""; 
        const popup = document.getElementById("search-popup");
        popup.classList.add("hidden");
      });

    function change_myselect(sel) {

        if (sel=="Australia") {  
            let date = new Date();
        let options = {timeZone: 'Australia/Sydney'};
        let eastCoastTime = date.toLocaleString('en-AU', options);

            const recommendDiv = document.getElementById('recommend-results');
            recommendDiv.innerHTML = '';
            recommendDiv.innerHTML += `<h2>${sel}</h2>`;
            recommendDiv.innerHTML += `<h5>${eastCoastTime}</h5>`;
    
            recommendDiv.innerHTML += `<img src="syd_img.jpg">`;
            recommendDiv.innerHTML += `<p><strong>Name:</strong> ${"Sydney, Australia"}</p>`;
            recommendDiv.innerHTML += `<p><strong>Description:</strong> ${"A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."}</p>`;
    
            recommendDiv.innerHTML += `<img src="mel_img.jpg">`;
            recommendDiv.innerHTML += `<p><strong>Name:</strong> ${"Melbourne, Australia"}</p>`;
            recommendDiv.innerHTML += `<p><strong>Description:</strong> ${"A cultural hub famous for its art, food, and diverse neighborhoods."}</p>`;

          /*  document.getElementById("aus").style.visibility = 'visible'
            document.getElementById('jap').style.visibility = 'hidden'
            document.getElementById('braz').style.visibility = 'hidden'*/
          } else if (sel=="Japan") {

            let date = new Date();
            let options = {timeZone: 'Asia/Tokyo'};
            let eastCoastTime = date.toLocaleString('ja-JP-u-ca-japanese', options);

            const recommendDiv = document.getElementById('recommend-results');         
            recommendDiv.innerHTML = '';
            recommendDiv.innerHTML += `<h2>${sel}</h2>`;
            recommendDiv.innerHTML += `<h5>${eastCoastTime}</h5>`;
    
            recommendDiv.innerHTML += `<img src="tok_img.jpg">`;
            recommendDiv.innerHTML += `<p><strong>Name:</strong> ${"Tokyo, Japan"}</p>`;
            recommendDiv.innerHTML += `<p><strong>Description:</strong> ${"A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."}</p>`;
    
            recommendDiv.innerHTML += `<img src="kyoto_img.jpg">`;
            recommendDiv.innerHTML += `<p><strong>Name:</strong> ${"Kyoto, Japan"}</p>`;
            recommendDiv.innerHTML += `<p><strong>Description:</strong> ${"Known for its historic temples, gardens, and traditional tea houses."}</p>`;

          /*  document.getElementById('jap').style.visibility = 'visible'
            document.getElementById('aus').style.visibility = 'hidden'
            document.getElementById('braz').style.visibility = 'hidden'*/

          }else if (sel=="Brazil") {

            const recommendDiv = document.getElementById('recommend-results');
            recommendDiv.innerHTML = '';
            recommendDiv.innerHTML += `<h2>${sel}</h2>`;
    
            recommendDiv.innerHTML += `<img src="riode_img.jpg">`;
            recommendDiv.innerHTML += `<p><strong>Name:</strong> ${"Rio de Janeiro, Brazil"}</p>`;
            recommendDiv.innerHTML += `<p><strong>Description:</strong> ${"A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."}</p>`;
    
            recommendDiv.innerHTML += `<img src="saopaulo_img.jpg">`;
            recommendDiv.innerHTML += `<p><strong>Name:</strong> ${"São Paulo, Brazil"}</p>`;
            recommendDiv.innerHTML += `<p><strong>Description:</strong> ${"The financial hub with diverse culture, arts, and a vibrant nightlife."}</p>`;

            /*document.getElementById('braz').style.visibility = 'visible'
            document.getElementById('aus').style.visibility = 'hidden'
            document.getElementById('jap').style.visibility = 'hidden'*/

          }else {
            recommendDiv.innerHTML = '';
          }
            
}
function myFunction(){
    document.getElementById('braz').style.visibility = 'hidden'
    document.getElementById('aus').style.visibility = 'hidden'
    document.getElementById('jap').style.visibility = 'hidden'
}

