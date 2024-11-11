  function searchCondition() {
        const input = document.getElementById('conditionInput').value.toLowerCase();
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';
        fetch('travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
            const condition = data.conditions.find(item => item.name.toLowerCase() === input);
            if (condition) {
              const symptoms = condition.symptoms.join(', ');
              const prevention = condition.prevention.join(', ');
              const treatment = condition.treatment;
              resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;
              resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
              resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
              resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
            } else {
              resultDiv.innerHTML = 'Condition not found.';
            }
          })
          .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
          });
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
        document.getElementById('search').value=""; 
        alert("Reset done");
    
    }