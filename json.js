function Export1(){
    var cname = document.getElementById("cname").innerHTML;
    var caddress = document.getElementById("caddress").innerHTML;
    var cimg = document.getElementById("cimg").src;
    var caddi = document.getElementById("caddi").innerHTML;
    var caddin = document.getElementById("caddin").innerHTML;

    var jsonObj = 
        {
            "Website": `HTML-INVOICER`,
            "Author": `HEALER-OP`,
        	"cname": `${cname}`,
        	"caddress": `${caddress}`,  
        	"cimg": `${cimg}`,
        	"caddi": `${caddi}`,
        	"caddin": `${caddin}` 

        };

    var fileName = `${cname}_HTML_INVOICER.json`;
    // Create a blob of the data
    var fileToSave = new Blob([JSON.stringify(jsonObj)], {
        type: 'application/json'
    });

    // Save the file
    saveAs(fileToSave, fileName);
}

(function(){
    var buttonFile = document.getElementById("buttonFile");
    var file = document.getElementById("file");
  
    buttonFile.onclick = function() {
      document.getElementById("file").click();
    };

    function onChange(event) {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event){
        var obj = JSON.parse(event.target.result);
        document.getElementById("cname").innerHTML = obj.cname;
        document.getElementById("caddress").innerHTML= obj.caddress;
        document.getElementById("cimg").src= obj.cimg;
        document.getElementById("caddi").innerHTML= obj.caddi;
        document.getElementById("caddin").innerHTML= obj.caddin;

    }
    
    document.getElementById('file').addEventListener('change', onChange);

}());




