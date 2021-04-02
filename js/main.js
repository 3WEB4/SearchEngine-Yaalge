'use strict';
const googleBtn = document.getElementById('googleBtn');
const yahooBtn = document.getElementById('yahooBtn');
const bingBtn =document.getElementById('bingBtn')
const youtubeBtn = document.getElementById('youtubeBtn');
const twitterBtn = document.getElementById('twitterBtn');
const instagramBtn = document.getElementById('instagramBtn');
const amazonBtn=document.getElementById('amazonBtn');
const rakutenBtn=document.getElementById('rakutenBtn');
const merukariBtn=document.getElementById('merukariBtn')
const tiktokBtn= document.getElementById('tiktokBtn');
const genre =document.getElementById('genre');
const input =document.getElementById('text')

const inputArea = document.querySelector('input');

inputArea.addEventListener('input', inputText);

function inputText(e){
    if(e.target.value){
        inputCheck();
        setInterval(inputCheck,200);
        


}

function inputCheck() {
    let template = document.getElementById( "text" ).value;
    googleBtn.href = "https://www.google.co.jp/search?q=" + template;
    googleBtn.target='_blank'

    yahooBtn.href = "https://search.yahoo.co.jp/search?p=" + template;
    yahooBtn.target='_blank'

    bingBtn.href="https://www.bing.com/search?q="+template;
    bingBtn.target='_blank'

    youtubeBtn.href = "https://www.youtube.com/results?search_query=" + template;
    youtubeBtn.target='_blank'

    twitterBtn.href = "https://twitter.com/search?q=" + template;
    twitterBtn.target='_blank'

    instagramBtn.href = "https://www.instagram.com/explore/tags/" + template;
    instagramBtn.target='_blank'

    amazonBtn.href = "https://www.amazon.co.jp/s?k=" + template;
    amazonBtn.target='_blank'

    rakutenBtn.href = "https://search.rakuten.co.jp/search/mall/"+ template;
    rakutenBtn.target='_blank'

    merukariBtn.href = "https://www.mercari.com/jp/search/?keyword="+ template;
    merukariBtn.target='_blank'

    tiktokBtn.href = "https://www.tiktok.com/tag/"+template;
    tiktokBtn.target='_blank'
}




$(function() {
    $('#text').autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "https://www.google.com/complete/search",
                data: {hl:'ja', client:'firefox', q: request.term},
                dataType: "jsonp",
                type: "GET",
                success :function(data) {
                    response(data[1]);
                }
            });
        },
        autoFocus: true,
        delay: 100,
        minLength: 1,

        
    });
});


$('#autocomplete').autocomplete({
    open: function(){
        setTimeout(function () {
            $('.ui-autocomplete').css('z-index', 99999999999999);
        }, 0);
    }
});

}
