 // //滚动navhover

 $('.hide-nav .goods-variety').hover(function() {
         $('.hide-nav   .goods-variety ').find('.variety').show()
         $(".hide-nav .variety-item").hover(function() {
             $(this).css('background', 'rgba(0,0,0,.5)').siblings(".hide-nav .variety-item").css('background', 'rgba(51,51,51,.8)')
             $('.hide-nav #aa-hover .cate-layer-con').eq($(this).index()).show().siblings('.cate-layer-con').hide()
         }, function() {
             $('.hide-nav #aa-hover .cate-layer-con').hover(function() {
                 $(this).show()
             }, function() {
                 $(this).hide()
             })
             $('.hide-nav .variety-item').css('background', 'rgba(51,51,51,.8)')
             $('.hide-nav #aa-hover .cate-layer-con').hide()
         })
     },
     function() {
         $(".hide-nav .variety-item").hover(function() {
             $(this).css('background', 'rgba(0,0,0,.5)').siblings(".hide-nav .variety-item").css('background', 'rgba(51,51,51,.8)')
             $('.hide-nav #aa-hover .cate-layer-con').eq($(this).index()).show().siblings('.cate-layer-con').hide()
         }, function() {
             $('.hide-nav #aa-hover .cate-layer-con').hover(function() {
                 $(this).show()
             }, function() {
                 $(this).hide()
             })
             $('.hide-nav .variety-item').css('background', 'rgba(51,51,51,.8)')
             $('.hide-nav #aa-hover .cate-layer-con').hide()
         })
         $('.hide-nav .goods-variety  .variety').hide()
     })

 // 头部hover部分显示与隐藏
 $(".navitems-wrap .variety-item").hover(function() {
     $(this).css('background', 'rgba(0,0,0,.5)').siblings(".navitems-wrap .variety-item").css('background', 'rgba(51,51,51,.8)')
     $('.navitems-wrap .cate-layer-con').eq($(this).index()).show().siblings('.cate-layer-con').hide()
 }, function() {
     $(this).css('background', 'rgba(51,51,51,.8)')
     $('.navitems-wrap .cate-layer-con').hover(function() {
         $(this).show()
     }, function() {
         $(this).hide()
     })
     $('.navitems-wrap .cate-layer-con').hide()
 })

 // 关闭头部广告
 $('.a-icon-cha').click(function() {
     $('.a-top').hide();
 })


 // 图片原始的top值
 var oldtop = 0;

 // 给地图导航添加事件
 $('.dsc-choie').hover(function() {
     $(this).addClass('choie-active')
     $('.head-map').show()
     mapanimate()
 }, function() {
     $(this).removeClass('choie-active')
     $('.head-map').hide()
     $('.map-con-scrool').css('top', '64px')
     $('.map-con-warp1').css('top', '0px')
     $('.head-map').off('mousemove')
 })

 // 地图导航动画
 function mapanimate() {
     oldtop = $('.map-con-scrool').position().top;
     $('.map-nav a').hover(function() {
         // 每个元素距离顶部的距离
         var scrolltopitem = $('.map-con-warp .map-con-itemr').eq($(this).index()).position().top;
         $('.map-con-warp1').css('top', -scrolltopitem + 'px')

         console.log(scrolltopitem);
         //图片移动的距离
         var scrolltopimg = $('.map-con-warp').height() / $('.map-con-warp1').height() * scrolltopitem
         var newscrolltopimg = oldtop + scrolltopimg + 'px';
         $('.map-con-scrool').css('top', newscrolltopimg)
     })

 }

 // 拖动图片
 $('.map-con-scrool').mousedown(function() {
     $('.head-map').mousemove(function(e) {
         var oClientY = e.pageY - $(this).offset().top
         if (oClientY >= 61 && oClientY < 55 + $('.map-con-warp').height()) {
             $('.map-con-scrool').css('top', oClientY + 'px')
             var oboxtop = ($('.map-con-scrool').position().top - 64) * ($('.map-con-warp1').height() / $('.map-con-warp').height());
             $('.map-con-warp1').css('top', -oboxtop + 'px')
         }
     })
     $('.head-map').mouseup(function(e) {
         $('.head-map').off('mousemove')
     })

 })

 //banner淡入淡出轮播图
 var bannerindex = 0;
 $('.next').click(function() {
         bannerindex++
         if (bannerindex > $(".banner-img").length - 1) {
             bannerindex = 0
         }
         bannerchangeImg()

     })
     //自定义动画
 function bannerchangeImg() {
     //   当前索引淡入，其他兄弟淡出
     $(".banner-img").eq(bannerindex).fadeIn(600).siblings(".banner-img").fadeOut(200)
         //  小圆点的排他
     $('.banner-circle li').eq(bannerindex).addClass('circle-active').siblings('.banner-circle li').removeClass('circle-active')
 }
 //自动轮播，定时器
 var bannerTimer = setInterval(function() {
         bannerindex++
         if (bannerindex > $(".banner-img").length - 1) {
             bannerindex = 0
         }
         bannerchangeImg()
     }, 3000)
     //点击小圆点
 $('.banner-circle li').click(function() {
         bannerindex = $(this).index()
         bannerchangeImg()
     })
     // 鼠标移入关闭定时器
 $('.banner-img').hover(function() {
         clearInterval(bannerTimer)
     },
     function() {
         clearInterval(bannerTimer)

         bannerTimer = setInterval(function() {
             // $('.next').click()
             bannerindex++
             if (bannerindex > $(".banner-img").length - 1) {
                 bannerindex = 0
             }
             bannerchangeImg()
         }, 3000)
     })


 // 公告teb切换
 $('.vip-item-t span').hover(function() {
     $(this).addClass('fred').siblings('span').removeClass('fred')
     $('.vip-item-con').eq($(this).index()).addClass('vipblock').siblings('.vip-item-con').removeClass('vipblock')
 })




 //秒杀轮播定时器
 var seckilltimer

 // 秒杀轮播图
 //移入ul显示按钮，同时停止定时器，移出执行定时器
 $('.seckill-item').hover(function(e) {
     $('.seckill-item-wrap>div').show()
     clearInterval(seckilltimer)
 }, function() {
     $('.seckill-item-wrap>div').hide()
     seckilltimer = setInterval(function() {
         if (off) {
             off = false
             $('.seckill-item ').animate({
                 left: oLeft
             }, 500, function() {
                 $('.seckill-item ').find('li').slice(0, num).appendTo($('.seckill-item'))
                 $('.seckill-item ').css('left', 0)
                 off = true
             })
         }
         // $('.seckill-previous').click()
     }, 2000)

 })

 //移入自身显示
 $('.seckill-item-wrap>div').hover(function() {
     $('.seckill-item-wrap>div').show()
 }, function() {
     $('.seckill-item-wrap>div').hide()
 })

 //给按钮绑定点击事件
 var off = true;
 var num = 1
 var oLeft = -num * $('.seckill-item li:first').outerWidth(true) + 'px';
 //下一个
 $('.seckill-previous').on('click', function() {
     if (off) {
         //  先来个false 多次点击也只触发一次
         off = false
         $('.seckill-item ').animate({
             left: oLeft
         }, 500, function() {
             $('.seckill-item ').find('li').slice(0, num).appendTo($('.seckill-item'))
             $('.seckill-item ').css('left', 0)
             off = true
         })
     }
 })

 //上一个
 $('.seckill-next').on('click', function() {
         if (off) {
             off = false
             var olastli = $('.seckill-item').find('li').slice($('.seckill-item li').length - num)
             olastli.prependTo($('.seckill-item'))
             $('.seckill-item').css('left', oLeft)
             $('.seckill-item').animate({
                 left: 0,
             }, 500, function() {
                 off = true
             })
         }
     })
     //自动轮播
 seckilltimer = setInterval(function() {
     if (off) {
         off = false
         $('.seckill-item ').animate({
             left: oLeft
         }, 500, function() {
             $('.seckill-item ').find('li').slice(0, num).appendTo($('.seckill-item'))
             $('.seckill-item ').css('left', 0)
             off = true
         })
     }
     // $('.seckill-previous').click()
 }, 3000)




 // 侧边跳楼
 //绑定滚动事件
 $(window).scroll(function() {
         //显示滚动导航栏
         var oSrcolltop = $(window).scrollTop()
         if (oSrcolltop > $('.a-header').offset().top + $('.a-header').height()) {
             $('.hide-nav').show()
             $('.hide-nav').css('height', 60 + 'px');
         } else {
             $('.hide-nav').hide()
             $('.hide-nav').css('height', 0 + 'px')
         }
         // 显示侧边栏
         if (oSrcolltop > $('.a-view').offset().top + $('.a-view').height()) {
             $('.a-jump-nav').show()
         } else {
             $('.a-jump-nav').hide()
         }
         //滚动跟随，红色背景跟随页面
         $('.a-main>div').each(function(index, value) {
             if (oSrcolltop > $(value).offset().top - 200) {
                 //  console.log($(value));
                 $('.a-jump-nav>div').eq(index).addClass('a-jump-active').siblings('div').removeClass('a-jump-active')
                 $('.lift-item i').hide()
                 $('.lift-item i').eq(index).show()
             }
         })


     })
     //点击回到右边对应的模块
     // console.log($('.lift-item i'));
 $('.lift-item ').click(function() {
         console.log($(this).index());
         //  右边每块大盒子索引和左边跳楼索引一致
         var oHeight = $('.a-main>div').eq($(this).index()).offset().top - 100
         $('body,html').animate({
                 'scrollTop': oHeight
             }, 500)
             // console.log(111);

     })
     // 返回顶部
 $('.lift-top').click(function() {
     $('body,html').animate({
         'scrollTop': 0
     }, 500)
 })



 // 右侧购物车
 var flag = 1;
 $('.shop-cart').children().on('click', function() {
         if (flag === 1) {
             $(this).parents('.c-sidebar').animate({
                 width: '320px'
             }, 1000);
             flag = 2;
         } else if (flag === 2) {
             $(this).parents('.c-sidebar').animate({
                 width: '40px'
             }, 1000);
             flag = 1;
         }
     })
     // 返回顶部按钮
 var secDisTop = $('.a-view').offset().top;
 console.log(secDisTop);
 console.log($(window).scrollTop());
 $(window).on('scroll', function() {
     if ($(window).scrollTop() >= secDisTop) {
         $('.c-lift-list').fadeIn();
     } else {
         $('.c-lift-list').fadeOut();
     }
 })
 $('.lift-top').on('click', function() {
     $('html').animate({
         scrollTop: 0
     }, 500)
 })

 // 右侧所有的精灵图
 // var panel_arr = $('.c-panel').find('i').toArray();
 // console.log(panel_arr);
 // for (var i = 0; i < panel_arr.length; i++) {
 //     var bgsStep = i * 34;
 //     panel_arr[i].style.backgroundPosition = '5px -' + bgsStep + 'px';
 // }


 // 右侧返回顶部
 console.log($(window).scrollTop());
 $(window).on('scroll', function() {
     if ($(window).scrollTop() >= secDisTop) {
         $('.get-top').fadeIn();
     } else {
         $('.get-top').fadeOut();
     }
 })
 $('.get-top').on('click', function() {
     $('html').animate({
         scrollTop: 0
     }, 500)
 })


 // 右侧所有小li hover事件
 console.log($('.c-panel').find('li'));
 $('.c-panel').find('li').hover(function() {
     $(this).addClass('bg-red').siblings().removeClass('bg-red');
     $(this).find('.none-box').show();
     $(this).find('.none-box').stop().animate({
         right: '40px'
     })
 }, function() {
     $(this).removeClass('bg-red');
     $(this).find('.none-box').hide();
     $(this).find('.none-box').stop().animate({
         right: '70px'
     })
 })


 // 渲染数据
 var  indexDate  =   [{  //首页商品数据
         
     id:  1,
         src:   'images/lsz/y-news1.jpg',
         describe:   '合生元Razer雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘',
         price:   '¥219.00'
 },   {    
     id:  2,
         src:   'images/lsz/y-news2.jpg',
         describe:   '摩飞（Morphyrichards）榨汁机 便携式充电迷你无线果汁机料理机随行杯MR9800 蓝色',
         price:   '¥500.00'
 },   {    
     id:  3,
         src:   'images/lsz/y-news3.jpg',
         describe:   '喜瑞新款学院风韩版时尚太空棉宽松长袖印花圆领卫衣女',
         price:   '¥233.00'
 },   {    
     id:  4,
         src:   'images/lsz/y-news4.jpg',
         describe:   '华帝新款韩版chic学生宽松短款外套上衣字母长袖连帽套头卫衣女潮',
         price:   '¥300.00'
 },   {    
     id:  5,
         src:   'images/lsz/y-news5.jpg',
         describe:   '鸿星尔克韩都衣舍2017韩版女装新款黑白拼接插肩棒球服春季短外套HH5597妠 朴信惠同款 黑白拼接 插肩袖 棒球服',
         price:   '¥450.00'
 },   {    
     id:  6,
         src:   'images/lsz/y-news6.jpg',
         describe:   '工银瑞信Samsung/三星 Galaxy C9 Pro SM-C9000 6+64G全金属超薄手机 12期免息 送蓝牙音箱等多种套餐好礼',
         price:   '¥3500.00'
 },   {    
     id:  7,
         src:   'images/lsz/y-plenty2.jpg',
         describe:   '迪士尼伊米妮2017春新款简约时尚自然摔牛皮单肩手提大小版波士顿包女包 简约时尚 自然摔牛皮 单肩手提 波士顿包',
         price:   '¥888.00'
 },   {    
     id:  8,
         src:   'images/lsz/y-plenty3.jpg',
         describe:   '汤臣倍健春季马丁靴男真皮男靴黄靴工装军靴韩版短靴沙漠靴高帮男鞋大黄靴 头层牛皮',
         price:   '¥1000.00'
 },   {    
     id:  9,
         src:   'images/lsz/y-plenty4.jpg',
         describe:   '匡威Apple/苹果 Apple Watch Series 2 智能手表42mm',
         price:   '¥3188.00'
 },   {    
     id:  10,
         src:   'images/lsz/y-seckill3.jpg',
         describe:   '磨铁图书DIY台式电脑整机I7四核六核独显固态组装游戏电脑主机24寸显示器 送百元礼品 内存免费升级 送显示器',
         price:   '¥1388.00'
 },   {    
     id:  11,
         src:   'images/lsz/y-plenty6.jpg',
         describe:   '姬芮Ne.wEra纽亦华 新款MLB棒球帽男女字母NY洋基LA道奇调节平沿嘻哈帽 官方正品',
         price:   '¥219.00'
 },   {    
     id:  12,
         src:   'images/lsz/y-plenty7.jpg',
         describe:   'YOHO有货潮牌LAL/数字贴布连帽套头卫衣男女通用 吴亦凡亲着同款 春夏焕新季，3.21日00:00开始抢购',
         price:   '¥159.00'
 },   {    
     id:  13,
         src:   'images/lsz/y-plenty8.jpg',
         describe:   '康比特森马针织衫 冬季男圆领套头青年毛衣小清新线衫毛衫纯色韩版学生',
         price:   '¥79.00'
 },    {    
     id:  14,
         src:   'images/lsz/y-plenty5.jpg',
         describe:   '康比特森马针织衫 冬季男圆领套头青年毛衣小清新线衫毛衫纯色韩版学生',
         price:   '¥79.00'
 },   {    
     id:  15,
         src:   'images/lsz/y-plenty10.jpg',
         describe:   '乔山洽福 转椅轮子万向轮 老板椅办公椅子滑轮电脑椅配件滚轮脚轮轱辘 静音灵活不伤地板质保三年下单备注安装方式',
         price:   '¥23.80'
 },   {    
     id:  16,
         src:   'images/lsz/y-plenty11.jpg',
         describe:   '猫人Xiaomi/小米 小米电视4A 55英寸 4k超高清智能网络电视机 50 60',
         price:   '¥2399.00'
 },   {    
     id:  17,
         src:   'images/lsz/y-plenty12.jpg',
         describe:   '欧亚马山水 F7 5.1家庭影院音响套装电视客厅家用3d环绕组合音箱 电视k歌音响套装 家用 组合 重低音蓝牙',
         price:   '¥1999.00'
 },   {    
     id:  18,
         src:   'images/lsz/y-plenty13.jpg',
         describe:   '小米空气净化器2S家用办公智能氧吧除甲醛雾霾粉尘 新品',
         price:   '¥800.0'
 },   {    
     id:  19,
         src:   'images/lsz/y-plenty14.jpg',
         describe:   '小米8SE全面屏拍照游戏智能手机学生机商务机8周年 官方旗舰店正品现货速发',
         price:   '¥1888.0'
 },   {    
     id:  20,
         src:   'images/lsz/y-plenty15.jpg',
         describe:   '小熊（Bear）咖啡机 美式家用 0.7L全自动滴漏式小型泡茶煮咖啡壶 KFJ-A07V1',
         price:   '¥129.00'
 },   {    
     id:  21,
         src:   'images/lsz/y-plenty16.jpg',
         describe:   '东菱 Donlim 多功能早餐机 三明治机 华夫饼机 多士炉面包机 电火锅轻食机 可做甜甜圈蛋挞 D',
         price:   '¥399.00'
 },   {    
     id:  22,
         src:   'images/lsz/y-plenty17.jpg',
         describe:   '华为 HUAWEI Mate 30 麒麟990旗舰芯片4000万超感光徕卡影像屏内指纹8G+128G',
         price:   '¥4399.00'
 },   {    
     id:  23,
         src:   'images/lsz/rb-ad2f-7.jpg',
         describe:   '匡威马克华菲短袖T恤 夏装新款舒适圆领条纹拼接男简约修身短袖上衣',
         price:   '¥128.00'
 },   {    
     id:  24,
         src:   'images/lsz/ssg3.jpg',
         describe:   '金史密斯HLA/海澜之家撞色长袖T恤春季热卖圆领修身拼接T恤男 简约圆领 微弹修身 撞色拼接 触感柔软',
         price:   '¥98.00'
 },   {    
     id:  25,
         src:   'images/lsz/y-special 13.jpg',
         describe:   '杰克琼斯马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤   98',
         price:   '¥80.00'
 } ];

 indexDate.map(function(value, index) {
     console.log(index);
     $('.plenty li').eq(index).find('img').attr('src', value.src);
     $('.plenty li').eq(index).find('.p-name').text(value. describe);
     $('.plenty li').eq(index).find('.shop-price').text(value.price);
 })