liste = [];
function fn1 () {
    var content = document.getElementById("text").value;

    if(content == ""){
      return;
    }

    for(var i = 0; i <liste.length; i++){
      if(liste[i].idee == content){
        return;
      }
    }
    var text = "<p class = ideen>Ideen<br><hr></o>";
    liste.push({idee: content, likes: 0, tag: "b" + liste.length,canLike: true});
    
    for(var i = 0; i <liste.length; i++){

      text = text +  "<p class = ideen>"+ liste[i].idee +"<br><br><button class = 'buttons' onclick ='fn2(this.id)' id = '"+liste[i].tag+"'>" +liste[i].likes +" like </button>  </p><hr>"
    }
    document.getElementById("post").innerHTML = text;
    console.log(text);
}

function fn2 (tag) {
  for(var i = 0; i<liste.length; i++)
  {
    if(liste[i].tag == tag){
      console.log(liste[i].tag);
      
      if(liste[i].canLike){
        liste[i].likes = liste[i].likes + 1;
        liste[i].canLike = false;
      }else{
        liste[i].likes = liste[i].likes - 1;
        liste[i].canLike = true;
      }
      document.getElementById(tag).innerHTML =  liste[i].likes + " like";
      break;
    }
  }
}