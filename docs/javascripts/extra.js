keyboard$.subscribe(function(key) {
  if (key.mode === "global" && key.type === "x") {
    /* Add custom keyboard handler here */
    //alert("Presionaste la tecla x");
    //window.alert(5 + 6);
    //window.print()
    let text = "pepe" + "<br>";
    for (let i = 0; i < 10; i++) {
      text =  text + "pepe" + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
    key.claim() 
  }
})