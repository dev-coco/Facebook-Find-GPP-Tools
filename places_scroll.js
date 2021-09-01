setTimeout(function() {
    click_place();
}, 3800);

function click_place() {
    var search_type = document.getElementsByClassName("ow4ym5g4 auili1gw rq0escxv j83agx80 buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 nnctdnn4 hpfvmrgz qt6c0cv9 jb3vyjys l9j0dhe7 du4w35lb bp9cbjyn btwxx1t3 dflh9lhu scb9dxdr");
    for (var i = 0; i < search_type.length; i++) {
        try {
            search_type[i].outerHTML.match(/地点|社團/g)[0];
            search_type[i].click();
            setTimeout(function() {
                places_printf();
            }, 2000);
        } catch {}
    }
}

function places_printf() {
    try {
        location.href.match(/places/g)[0];
        try {
            var out_text = document.getElementsByClassName("out_text")[0].outerHTML.match(/./g);
        } catch {
            var para = document.createElement("textarea");
            var element = document.querySelector("body");
            element.appendChild(para);
            para.setAttribute("class", "out_text");
            para.setAttribute("style", "position: fixed;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);border:1px solid;padding:3px 12px;border-radius:10px;color:#fff;background-color:#99CCFF;z-index:9999;font-size:16px;width:640px;height:360px;");
        }
        if ("1" == enbledscroll) {
            var enbledscroll = 0;
            clearInterval(autoscroll)
        } else {
            enbledscroll = 1;
            var autoscroll = setInterval(function() {
                try {
                    document.documentElement.outerHTML.match(/已经到底啦|無其他結果/g)[0];
                    try {
                        var get_html = document.getElementsByClassName("rq0escxv l9j0dhe7 du4w35lb hybvsw6c io0zqebd m5lcvass fbipl8qg nwvqtn77 k4urcfbm ni8dbmo4 stjgntxs sbcfpzgs");
                        for (var i = 0; i < get_html.length; i++) {
                            var get_url = get_html[i].outerHTML.match(/(?<=lrazzd5p dkezsu63" href=").*?(?=")/g)[0];
                            var get_name = get_html[i].outerHTML.match(/(?<=<span>).*?(?=<\/span>)/g)[0].replace(/.*\. /g, "");
                            var get_type = get_html[i].outerHTML.match(/(?<=b1v8xokw m9osqain">).*?(?=<\/span>)/g)[0].replace(/.*· /g, "");
                            var get_location = get_html[i].outerHTML.match(/(?<=b1v8xokw m9osqain">).*?(?=<\/span>)/g)[1];
                            if (!get_location) {
                                var get_location = "";
                            }
                            var get_check_in = get_html[i].outerHTML.match(/(?<=b1v8xokw m9osqain">).*?(?=<\/span>)/g)[2].replace(/[^0-9]/g, "");
                            if (!get_check_in) {
                                var get_check_in = "";
                            }
                            var printf_data = document.getElementsByClassName("out_text")[0].value += get_name + "\t\t" + get_url + "\t" + get_check_in + "\t" + get_type + "\t\t" + get_location + "\t" + "\n";
                        }
                    } catch {
                        var enbledscroll = 0;
                        clearInterval(autoscroll)
                        return;
                    }
                } catch {
                    window.scrollTo(0, document.body.scrollHeight)
                }
            }, 100)
        }
    } catch {}
}
