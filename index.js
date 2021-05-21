const reader = new FileReader();
const upload = document.getElementById("upload");

upload.addEventListener("change", (e) => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function() {
        //img에 이미지 지정
        const view = document.getElementById("view");
        view.setAttribute("src", reader.result);

        //mobilenet
        mobilenet.load().then(model => {
            model.classify(view).then(predictions => {
                console.log(predictions);
            });
        });        
    }
})