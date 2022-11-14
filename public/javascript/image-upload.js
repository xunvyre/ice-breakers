// async function imagesPreview(input, placeToInsertImagePreview)
// {
//     if (input.files)
//     {
//         let filesAmount = input.files.length;
//         for (i = 0; i < filesAmount; i++)
//         {
//             let reader = new FileReader();
//             reader.onload = function(event)
//             {
//                 $($.parseHTML('<img>'))
//                 .attr('src', event.target.result)
//                 .appendTo(placeToInsertImagePreview);
//             };
//             reader.readAsDataURL(input.files[i]);
//         }
//     }
// };

// $('#photo').on('click', function()
// {
//     imagesPreview(this, 'div.preview-images');
// });

const photo = document.querySelector('#photo');
var uploadedImage = "";

photo.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        photo = reader.result;
        document.querySelector('#displayImage').style.backgroundImage = `url(${photo})`
    });
    reader.readAsDataURL(this.files[0]);
})