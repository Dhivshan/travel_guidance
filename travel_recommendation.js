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

        function showtravelDetails(event) {
      event.preventDefault();
      const city = document.getElementById('city').value;
      fetch('./travel_recommendation_api.json')
    .then((res) => {
                    if (!res.ok) {
                        throw new Error
                            (`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();
                })
                .then((data) =>
                    console.log(data))
                .catch((error) =>
                    console.error("Unable to fetch data:", error));
        }
        
    document.getElementById('recForm').addEventListener('submit',showtravelDetails );

      function resetDet(){
        document.getElementById('conditionInput').value=""; 
        alert("Reset done");
    
    }
    function change_myselect(sel) {
        if (sel=="Australia") {
            
            document.getElementById("aus").style.visibility = 'visible'
            document.getElementById('jap').style.visibility = 'hidden'
            document.getElementById('braz').style.visibility = 'hidden'
          } else if (sel=="Japan") {
            document.getElementById('jap').style.visibility = 'visible'
            document.getElementById('aus').style.visibility = 'hidden'
            document.getElementById('braz').style.visibility = 'hidden'
          }else if (sel=="Brazil") {
            document.getElementById('braz').style.visibility = 'visible'
            document.getElementById('aus').style.visibility = 'hidden'
            document.getElementById('jap').style.visibility = 'hidden'
          }else{
            document.getElementById('braz').style.visibility = 'hidden'
            document.getElementById('aus').style.visibility = 'hidden'
            document.getElementById('jap').style.visibility = 'hidden'
          }
            
}
function myFunction(){
    document.getElementById('braz').style.visibility = 'hidden'
    document.getElementById('aus').style.visibility = 'hidden'
    document.getElementById('jap').style.visibility = 'hidden'
}

