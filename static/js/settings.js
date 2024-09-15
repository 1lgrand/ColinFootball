function addColore(){
     const selectedColor = colorPicker.value;
     const colorBox = document.createElement('div');
     colorBox.className = 'color-box';
     colorBox.style.backgroundColor = selectedColor;
     colorGrid.appendChild(colorBox);
}

function salvaColori(){
     const colorBoxes = colorGrid.getElementsByClassName('color-box');
     arrayColori = []

     for (i = 0;i< colorBoxes.length; i++){
          arrayColori[i] = colorBoxes[i].style.backgroundColor
          console.log(arrayColori[i])
     }

     localStorage.setItem('colori',JSON.stringify(arrayColori))
}

function salvaTempo(){
     tempo = document.getElementById("changeTime").value;

     localStorage.setItem('tempo',tempo.toString())
}


function initializeStorage(){
     localStorage.clear()
     salvaColori()
     localStorage.setItem('tempo',5) //5s di default (da convertire in ms)
}