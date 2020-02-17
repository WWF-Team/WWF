        $("document").ready(function () {

            var $picker = $(".region_picker"),
                $util = $(".gnb .gnb_util .gnb_util_l"),
                $util_img = $(".gnb .gnb_util .gnb_util_l img"),
                $close = $(".region_picker .close");

            $picker.hide();

            $util.on("click", function ($close_event) {
                $picker.toggle();
                $util_img.toggle();

            })

            var $close_event = $close.click(function () {
                $picker.hide();
                $util_img.show();
            });

            //세계 WWF End


            var i = 0,
                d = 0,
                time = false,
                $arrow = $("main").find("a"),
                $slide = $("main").find(".slide"),
                $countBox = $("main .paging ul li"),
                leng_indi = $("main").find(".slide").length - 1,
                count = [
                    "01", "02", "03", "04"
                ],
                timer = setInterval(auto_play, 3000);

            function auto_play() {

                $slide.eq(i).stop().animate({
                    left: "-100%"
                }, 1500)
                i++;
                if (i > leng_indi) i = 0;
                $slide.eq(i).stop().css("left", "100%").animate({
                    left: "0"
                }, 1500)
                d = i;
            }



            $arrow.click(function (e) {
                e.preventDefault();
                var index = $arrow.index(this);
                if (time == true) {
                    return;
                }
                setTimeout(function () {
                    time = false;
                }, 300)
                time = true;

                if (index == 0) {
                    $slide.eq(i).stop().animate({
                        left: "100%"
                    }, 300)
                    i--;
                    if (i < 0) i = leng_indi;
                    $slide.eq(i).stop().css("left", "-100%").animate({
                        left: "0"
                    }, 300)

                    $countBox.text(count[i])

                } else {
                    $slide.eq(i).stop().animate({
                        left: "-100%"
                    }, 300)
                    i++;
                    if (i > leng_indi) i = 0;
                    $slide.eq(i).stop().css("left", "100%").animate({
                        left: "0"
                    }, 300)

                    $countBox.text(count[i])
                }

                d = i;
            })

            //메인 슬라이더 루프 영역 End

        })
