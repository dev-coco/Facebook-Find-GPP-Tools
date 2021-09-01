if ("1" == enbledscroll) {
    var enbledscroll = 0;
    clearInterval(autoscroll);
} else {
    enbledscroll = 1;
    var autoscroll = setInterval(function() {
        try {
            document.documentElement.outerHTML.match(/已经到底啦|無其他結果/g)[0];
            var get_data = document.querySelectorAll("[class='sjgh65i0'][role='article']");
            for (var i = 0; i < get_data.length; i++) {
                var page_name = get_data[i].outerHTML.match(/(?<=aria-label=").*?(?=")/g)[0].replace(/、.+/g, "");
                try {
                    var page_url = get_data[i].outerHTML.match(/(?<=thwo4zme" href=").*?(?=")/g)[0];
                } catch {
                    var page_url = get_data[i].outerHTML.match(/(?<=href=").*?(?=")/g).slice(-1)[0].replace(/\?__.+/g, "");
                }
                var page_like = get_data[i].outerHTML.match(/(?<=g0qnabr5">).*?(?=<\/span><\/span><)/g)[0].replace(/.+>/g,"").replace(/\../g,"$&").replace(/万|萬/g,"0000").replace(/[^0-9]/g,"");
                if(page_like.indexOf(".") > -1) {
                    var page_like = page_like.replace(/\.|.$/g,"");
                }
                try {
                    var page_description = get_data[i].outerHTML.match(/(?<=l9j0dhe7".*?>).*?(?=<)/g)[0];
                } catch {
                    var page_description = "";
                }
                document.write("<table><tbody><tr><td>" + page_name + "</td><td></td><td>" + page_url + "</td><td>" + page_like + "</td><td></td><td>" + page_description + "</td></tr></tbody></table>");
            }
            var enbledscroll = 0;
            clearInterval(autoscroll);
            return;
        } catch {
            window.scrollTo(0, document.body.scrollHeight);
        }
    }, 100)
}
