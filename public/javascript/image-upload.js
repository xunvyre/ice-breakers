document.querySelector('#photo').addEventListener('change', (e) => {
    if(window.File && window.FileReader && window.FileList && window.Blob){
        const files= e.target.files;
        const output = document.querySelector("#result");

        for(let i = 0; i < files.length; i++ ) {
            if(!files[i].type.match("image")) continue;
            const picReader = new FileReader();
            picReader.addEventListener("load", function(event) {
                const picFile = event.target;
                const picture = document.getElementById("pic");
                picture.innerHTML += `<img class="card-img-top img-preview" src="${picFile.result}" title="${picFile.name}"/>`;
                output.appendChild(picture)
            })
            picReader.readAsDataURL(files[i]);
        }

    } else {
        alert("Your browser does not support image upload");
    }
})
