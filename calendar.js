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
            let widthN =Math.pow(Math.ceil(Math.sqrt(count)), 2);
            let width = (138/(Math.sqrt(widthN))).toString();
            dataToAdd[index].forEach(element => {
                const card = document.createElement('div');
                card.contentEditable =  true;
                card.classList = 'card-entry';
                card.style.height = width+"px";
                card.style.width = width+"px";
                card.innerHTML = element;
                card.style.backgroundColor = getRandomColor();
                container.appendChild(card);
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
  const column = document.createElement('div');
  column.classList = 'column';
  container.appendChild(column);

  const header = document.createElement('div');
  header.classList = 'header';
  header.innerHTML= days[index-1];
  column.appendChild(header);

  const card = document.createElement('div');
  card.classList = 'card';
  card.id=index;
  column.appendChild(card);
}
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }