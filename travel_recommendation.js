  function searchCondition() {
        const input = document.getElementById('conditionInput').value.toLowerCase();
        const resultDiv = document.getElementById('result');
        if(input=="country" || input=="countries" || input=="australia"|| input=="japan" || input=="brazil"){
        resultDiv.innerHTML = '';
        resultDiv.innerHTML += `<h2>${input}</h2>`;
        resultDiv.innerHTML += `<img src="country.jpg">`;
        resultDiv.innerHTML += `<p><strong>Name:</strong> ${input}</p>`;
        resultDiv.innerHTML += `<p><strong>Description:</strong> ${"A lively place known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks"}</p>`;
    
        }else if(input=="temple" || input=="temples" || input=="cambodia"|| input=="india"){
            resultDiv.innerHTML = '';
            resultDiv.innerHTML += `<h2>${input}</h2>`;
            resultDiv.innerHTML += `<img src="taj_templ_img.jpg">`;
            resultDiv.innerHTML += `<p><strong>Name:</strong> ${"Taj Mahal, India"}</p>`;
            resultDiv.innerHTML += `<p><strong>Description:</strong> ${"An iconic symbol of love and a masterpiece of Mughal architecture."}</p>`;
            }else if(input=="beach"|| input=="beaches" || input=="french polynesia"|| input=="brazil"){
                resultDiv.innerHTML = '';
                resultDiv.innerHTML += `<h2>${input}</h2>`;
                resultDiv.innerHTML += `<img src="copacabana_beach.jpg">`;
                resultDiv.innerHTML += `<p><strong>Name:</strong> ${"Copacabana Beach, Brazil"}</p>`;
                resultDiv.innerHTML += `<p><strong>Description:</strong> ${"A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views"}</p>`;
                }else{

                    resultDiv.innerHTML = '';
                    resultDiv.innerHTML += `<h2>${"Results not found"}</h2>`;   
                }
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

