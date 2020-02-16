function processYear(){
    let year = document.getElementById("year").value;
    let elementsInDay =[];
    let dataToAdd = [];
    //clear previous data 
    for (let index = 1; index <= 7; index++) {
        let container = document.getElementById(index);
        container.innerHTML =``;
    }
    if( year.length == 4 ){
        for (let index = 0; index < data.length; index++) {
            let cardname = data[index].name.split(" ")[0][0] + data[index].name.split(" ")[1][0]; 

            let date = new Date(data[index].birthday);
            date.setFullYear(year);
            let day = date.getDay();

            if(day == 0){ day = 7;}
            if (!dataToAdd[day]){
                dataToAdd[day] = [];
            }
            dataToAdd[day].push(cardname);
            if (!elementsInDay[day]){
                elementsInDay[day] = 0;
            }
            elementsInDay[day]+=1;
        }

        for (let index = 1; index <=7; index++) {
            let count = elementsInDay[index];
            let container = document.getElementById(index);
            let height = (100/count).toString();
            let width = (100/count).toString();
            dataToAdd[index].forEach(element => {
                const card = document.createElement('div');
                card.contentEditable =  true;
                card.classList = 'card-entry';
                card.style.width = width+"%";
                card.style.height = height+"%";
                // Construct card content
                const content = `
                        <div class="column-entry">
                            <div class="card-entry">${element}
                            </div>
                        </div>`;
                container.innerHTML += content;
            });

        }
    }
    else{
        alert("Please enter Year in valid format");
    }
}

document.addEventListener("DOMContentLoaded", function(){
const container = document.getElementById('row');
let days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"]
for (let index = 1; index <= 7; index++)  {
  // Create card element
  const card = document.createElement('div');
  card.className = 'column';
  card.classList = 'column';
  let heading = days[index-1];
  // Construct card content
  const content = `
    <div class="column">
      <div class="header">
        <p>${heading}</p>
      </div>
      <div id=${index} class="card">
        <div id=${index} class="row-entry">
        </div>
      </div>
    </div>`;
  container.innerHTML += content;
}
});