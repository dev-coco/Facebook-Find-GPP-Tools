if ("1" == enbledscroll) {
    var enbledscroll = 0;
    clearInterval(autoscroll);
} else {
    enbledscroll = 1;
    var autoscroll = setInterval(function() {
        try {
            document.documentElement.outerHTML.match(/已经到底啦|無其他結果/g)[0];
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
            var enbledscroll = 0;
            clearInterval(autoscroll)
            return;
        } catch {
            window.scrollTo(0, document.body.scrollHeight);
        }
    }, 100)
}
