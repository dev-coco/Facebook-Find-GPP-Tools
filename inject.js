var check_url = location.href;
if (check_url.indexOf("search/pages") > -1) {
    pages_printf();
} else if (check_url.indexOf("search/places") > -1) {
    places_printf();
} else if (check_url.indexOf("search/groups") > -1) {
    groups_printf();
} else if (check_url.indexOf("hashtags") > -1) {
    group_tags();
} else if (check_url.indexOf("groups/categories") > -1) {
    friends_group();
} else {
    timeline_places_printf();
}

// 专页列印
function pages_printf() {
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
}

// 小组列印
function groups_printf() {
    var group_data = document.querySelectorAll("div.hpfvmrgz.g5gj957u.buofh1pr.rj1gh0hx.o8rfisnq > div");
    for (i = 0; i < group_data.length; i++) {
        try {
            var url = group_data[i].outerHTML.match(/(?<=href=").*?(?=\/")/g)[0];
            try {
                var group_name = group_data[i].outerHTML.match(/(?<=aria-label=").*?(?=")/g)[0];
            } catch {
                group_name = "无法获取";
            }
            try {
                var group_status = group_data[i].outerHTML.match(/(?<=l9j0dhe7 ltmttdrg g0qnabr5">).*?(?=<\/span>)/g)[0];
                var group_post = group_data[i].outerHTML.match(/(?<=l9j0dhe7 ltmttdrg g0qnabr5">).*?(?=<\/span>)/g)[1];
            } catch {}
            try {
                var group_member = group_data[i].outerHTML.match(/(?<=<\/span><\/span>.+)<\/span>.*?位成员|(?<=<\/span><\/span>.+)<\/span>.*?位成員/g)[0].replace(/<.*?>|·| |位成员|位成員|&nbsp;|,/g, "").replace(/萬|万/g, "0000");
                if(group_member.indexOf(".") > -1) {
                    var group_member = group_member.replace(/\.|.$/g,"");
                }
            } catch (err) {
                var group_member = err;
            }
            document.write("<table><tbody><tr><td>" + group_name + "</td><td></td><td>" + url + "</td><td>" + group_member + "</td><td>" + group_status + "</td><td>" + group_post + "</td></tr></tbody></table>");
        } catch {}
    }
}

// 地标列印
function places_printf() {
    try {
        var out_text = document.getElementsByClassName("out_text")[0].outerHTML.match(/./g);
    } catch {
        var para = document.createElement("textarea");
        var element = document.querySelector("body");
        element.appendChild(para);
        para.setAttribute("class", "out_text");
        para.setAttribute("style", "position: fixed;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);border:1px solid;padding:3px 12px;border-radius:10px;color:#fff;background-color:#99CCFF;z-index:9999;font-size:16px;width:640px;height:360px;");
    }
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
}

// 时间线列印
function timeline_places_printf() {
    var get_list = document.querySelectorAll("div.scb9dxdr.sj5x9vvc.dflh9lhu.cxgpxx05 > ul > div");
    for (var i = 0; i < get_list.length; i++) {
        var get_id = get_list[i].outerHTML.match(/(?<=id=").*?(?=")/g)[0];
        var get_name = get_list[i].outerHTML.match(/(?<=g0qnabr5">).*?(?=<\/span)/g)[0];
        var get_location = get_list[i].outerHTML.match(/(?<=g0qnabr5">).*?(?=<\/span)/g)[1];
        if (get_location == undefined) {
            var get_location = "";
        }
        try {
            new_page.document.write("<table><tbody><tr><td>" + get_name + "</td><td></td><td>https://www.facebook.com/" + get_id + "</td><td></td><td></td><td></td><td>" + get_location + "</td></tr></tbody></table>")
        } catch {
            new_page = window.open('');
        }
    }
}

// 小组标签列印
function group_tags() {
    new_page = window.open('');
    var get_data = document.getElementsByClassName("rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw jifvfom9 gs1a9yip owycx6da btwxx1t3 cxgpxx05 b5q2rw42 lq239pai mysgfdmx hddg9phg");
    for (var i = 0; i < get_data.length; i++) {
        var tags_name = get_data[i].outerHTML.match(/(?<=oo9gr5id">).*?(?=<)/g)[1];
        var tags_url = get_data[i].outerHTML.match(/(?<=hashtag\/).*?(?=\/\?)/g)[0];
        new_page.document.write("<table><tbody><tr><td>"+tags_name+"</td><td>https://www.facebook.com/hashtag/"+encodeURIComponent(tags_url)+"</td></tr></tbody></table>");
    }
}

// 好友小组列印
function friends_group() {
    var get_data = document.getElementsByClassName("rq0escxv rj1gh0hx buofh1pr ni8dbmo4 stjgntxs l9j0dhe7");
    new_page = window.open('');
    for (var i = 0; i < get_data.length; i++) {
        var group_name = get_data[i].outerHTML.match(/(?<=aria-label=").*?(?=")/g)[0];
        var group_url = get_data[i].outerHTML.match(/https:\/\/www\.facebook\.com\/groups.*?(?=")/g)[0];
        var group_info = get_data[i].outerHTML.match(/(?<=g0qnabr5">).*?(?=<\/span>)/g)[0];
        var group_members = group_info.replace(/(?<=\.[0-9])&nbsp;(万|萬).+/g, "000").replace(/(万|萬).+/g, "0000").replace(/&nbsp;|,|\.|位.+/g, "");
        var group_post = group_info.replace(/.+员/g, "").replace(/ • /g,"");
        new_page.document.write("<table><tbody><tr><td>" + group_name + "</td><td></td><td>" + group_url + "</td><td>" + group_members + "</td><td></td><td>" + group_post + "</td></tr></tbody></table>");
    }
}
