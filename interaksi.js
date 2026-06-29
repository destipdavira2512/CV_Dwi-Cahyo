document.addEventListener('DOMContentLoaded',function() {
    
    const tombol = document.getElementById('tombolWA');

    tombol.addEventListener('click', function () {

        const nomorHP = "6289531339494" ;
        const pesanOtomatis = "Hallo, Saya telah melihat CV Anda dan Ingin Terhubung.";
        const pesanFormat = encodeURIComponent(pesanOtomatis);
        const linkWhatsApp = `https://wa.me/${nomorHP}?text=${pesanFormat}`;

        window.open(linkWhatsApp, '_blank');   
});
    });



 document.addEventListener('DOMContentLoaded',function() {
    
    const tombol = document.getElementById('tombolEmail');

    tombol.addEventListener('click', function () {

        const alamatEmail = "boydwi97@gmail.com" ;
        const subjekEmail = "Tanya tentang CV Digital";
        const isiEmail = "Hallo, Saya telah melihat CV Anda dan Ingin Terhubung.";
        const subjekFormat = encodeURIComponent(subjekEmail);
        const isiFormat = encodeURIComponent(isiEmail);
        const linkEmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${alamatEmail}&su=${subjekFormat}&body=${isiFormat}`;

        window.open(linkEmail,'_blank');
    });
});


    const tombolJco = document.getElementById("tomboljco");
    if(tombolJco){
        tombolJco.addEventListener("click", function(){
            window.open("https://drive.google.com/file/d/1sm5RVmrM9Lj0hR1tbnhzxLUjzvhh7uFW/view?usp=sharing","_blank");
        });
}

    const tombolChattime = document.getElementById("tombolchattime");
    if(tombolChattime){
        tombolChattime.addEventListener("click", function(){
            window.open("https://drive.google.com/file/d/1W4O2W9R0FpB_zYazbEpfMZK5xS9KT8Um/view?usp=sharing","_blank");
        });
    }

    const tombolIjasah = document.getElementById("tombolijasah");
    if(tombolIjasah){
        tombolIjasah.addEventListener("click", function(){
            window.open("https://drive.google.com/file/d/1CcDqhYo4M5zWdNNkMwEdPEUscv6vqLNE/view?usp=sharing", "_blank");
        });
    }