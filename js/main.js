$(document).ready(function() {
    // end toggle
    $('#back-top').hide();
    $('.tap-content-item').hide();
    $('.tap-content-item:first-child').fadeIn();
    $('ul#main-menu li').click(function() {
        // active main-menu
        $('ul#main-menu li').removeClass('active');
        $(this).addClass('active');
        // show id
        let id_content = $(this).children('a').attr('href');
        // alert(id_content);
        $('.tap-content-item').hide();
        $(id_content).fadeIn();
        $("html").stop().animate({ scrollTop: 0 }, 500);
        return false;
    });
    $('ul#main-menu li:last').click(function() {
        $('.tap-content-item:first-child').fadeIn();
        $('ul#main-menu li').removeClass('active');
        $('ul#main-menu li:first').addClass('active');
        var footer_top = $("#wp-footer").offset().top;
        $("html").stop().animate({ scrollTop: footer_top }, 800);
        return false;
    });
    // $('ul#main-menu li:first').click(function() {
    //     var header_top = $("#wp-header").offset().top;
    //     $("html").stop().animate({ scrollTop: header_top }, 3000);
    //     return false;
    // });
    $('ul#menu-article').click(function() {
        $('ul#main-menu li').removeClass('active');
        $('#blog').hide();
        $('#all').fadeIn();
        $("html").stop().animate({ scrollTop: 0 }, 800);
        return false;
    });
    $('ul#post-suggest').click(function() {
        $('ul#main-menu li').removeClass('active');
        $('#blog').hide();
        $('#all').fadeIn();
        $("html").stop().animate({ scrollTop: 0 }, 800);
        return false;
    });
    $('ul#product').click(function() {
        $('ul#main-menu li').removeClass('active');
        $('#home').hide();
        $('#all').fadeIn();
        $("html").stop().animate({ scrollTop: 0 }, 800);
        return false;
    });
    var scroll1 = window.pageYOffset;
    window.onscroll = function() {
        var scroll2 = window.pageYOffset;
        if (scroll1 > scroll2) {
            document.querySelector('#wp-header nav').style.top = "0";
        } else {
            document.querySelector('#wp-header nav').style.top = "-150px";
        }
        scroll1 = scroll2;
        return false;
    }
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').hide();
        }
    });
    $('#back-top').click(function() {
        $("html").stop().animate({ scrollTop: 0 }, 500);
    });
    $('#home #ct-myForever ul#slide-menu .heart div').click(function() {
        $('.heart div').css('background', '#ff0000');
    });
    // end
    $('#wp-header nav #toggle').click(function() {
        $('ul#toggle-menu').slideToggle();
        return false;
    });
    // end
    $('ul#toggle-menu li').click(function() {
        // active main-menu
        $('ul#toggle-menu li').removeClass('active');
        $(this).addClass('active');
        // show id
        let id_content = $(this).children('a').attr('href');
        // alert(id_content);
        $('.tap-content-item').hide();
        $(id_content).fadeIn();
        $('#toggle').removeClass('open')
        $('ul#toggle-menu').slideUp();
        $("html").stop().animate({ scrollTop: 0 }, 500);
        return false;
    });
    $('#toggle').click(function() {
        $(this).toggleClass('open');
    });
    $('ul#toggle-menu li:last').click(function() {
        $('.tap-content-item:first-child').fadeIn();
        $('ul#toggle-menu li').removeClass('active');
        $('#toggle').removeClass('open')
        $('ul#toggle-menu li:first').addClass('active');
        var footer_top = $("#wp-footer").offset().top;
        $("html").stop().animate({ scrollTop: footer_top }, 800);
        return false;
    });
    $('ul#menu-article').click(function() {
        $('ul#toggle-menu li').removeClass('active');
        $('#blog').hide();
        $('#all').fadeIn();
        $('ul#toggle-menu').slideUp();
        $('#toggle').removeClass('open')
        $("html").stop().animate({ scrollTop: 0 }, 800);
        return false;
    });
    $('ul#post-suggest').click(function() {
        $('ul#toggle-menu li').removeClass('active');
        $('#blog').hide();
        $('#all').fadeIn();
        $('ul#toggle-menu').slideUp();
        $('#toggle').removeClass('open')
        $("html").stop().animate({ scrollTop: 0 }, 800);
        return false;
    });
    $('ul#product').click(function() {
        $('ul#toggle-menu li').removeClass('active');
        $('#home').hide();
        $('#all').fadeIn();
        $('#toggle').removeClass('open')
        $('ul#toggle-menu').slideUp();
        $("html").stop().animate({ scrollTop: 0 }, 800);
        return false;
    });
    $(window).scroll(function() {
        $('ul#toggle-menu').slideUp();
        $('#toggle').removeClass('open')
    });
    $(window).resize(function() {
        $('ul#toggle-menu').slideUp();
        $('#toggle').removeClass('open')
    });





    // end
    $('li#player').click(function() {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);
        const PlAYER_STORAGE_KEY = "F8_PLAYER";

        const player = $(".player");
        const cd = $(".cd");
        const heading = $("header h2");
        const cdThumb = $(".cd-thumb");
        const audio = $("#audio");
        const playBtn = $(".btn-toggle-play");
        const progress = $("#progress");
        const prevBtn = $(".btn-prev");
        const nextBtn = $(".btn-next");
        const randomBtn = $(".btn-random");
        const repeatBtn = $(".btn-repeat");
        const playlist = $(".playlist");

        const app = {
            currentIndex: 0,
            isPlaying: false,
            isRandom: false,
            isRepeat: false,
            config: {},
            // (1/2) Uncomment the line below to use localStorage
            // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
            songs: [{
                    name: "Chạy Về Khóc Với Anh",
                    singer: "Erik",
                    path: "./music/song1.mp3",
                    image: "./images/song1.jpg"
                },
                {
                    name: "Thằng Điên",
                    singer: "JUSTATEE X PHƯƠNG LY",
                    path: "./music/song2.mp3",
                    image: "./images/song2.jpg"
                },
                {
                    name: "Nơi Này Có Anh",
                    singer: "SƠN TÙNG-MTP",
                    path: "./music/song3.mp3",
                    image: "./images/song3.jpg"
                },
                {
                    name: "Mang tiền Về Cho Mẹ",
                    singer: "ĐEN VÂU",
                    path: "./music/song4.mp3",
                    image: "./images/song4.jpg"
                },
                {
                    name: "Về Bên Anh",
                    singer: "JACK",
                    path: "./music/song5.mp3",
                    image: "./images/song5.jpg"
                },
                {
                    name: "Yêu 5",
                    singer: "RHYMASTIC",
                    path: "./music/song6.mp3",
                    image: "./images/song6.jpg"
                },
                {
                    name: "Chầm Chậm Em Thích Anh",
                    singer: "MẠC VĂN ÚY",
                    path: "./music/song7.mp3",
                    image: "./images/song7.jpg"
                },
                {
                    name: "Chạy Về Khóc Với Anh",
                    singer: "Erik",
                    path: "./music/song1.mp3",
                    image: "./images/song1.jpg"
                },
                {
                    name: "Thằng Điên",
                    singer: "JUSTATEE X PHƯƠNG LY",
                    path: "./music/song2.mp3",
                    image: "./images/song2.jpg"
                },
                {
                    name: "Nơi Này Có Anh",
                    singer: "SƠN TÙNG-MTP",
                    path: "./music/song3.mp3",
                    image: "./images/song3.jpg"
                },
                {
                    name: "Mang tiền Về Cho Mẹ",
                    singer: "ĐEN VÂU",
                    path: "./music/song4.mp3",
                    image: "./images/song4.jpg"
                },
                {
                    name: "Về Bên Anh",
                    singer: "JACK",
                    path: "./music/song5.mp3",
                    image: "./images/song5.jpg"
                },
                {
                    name: "Yêu 5",
                    singer: "RHYMASTIC",
                    path: "./music/song6.mp3",
                    image: "./images/song6.jpg"
                },
                {
                    name: "Chầm Chậm Em Thích Anh",
                    singer: "MẠC VĂN ÚY",
                    path: "./music/song7.mp3",
                    image: "./images/song7.jpg"
                },
            ],
            setConfig: function(key, value) {
                this.config[key] = value;
                // (2/2) Uncomment the line below to use localStorage
                // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
            },
            render: function() {
                const htmls = this.songs.map((song, index) => {
                    return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
                });
                playlist.innerHTML = htmls.join("");
            },
            defineProperties: function() {
                Object.defineProperty(this, "currentSong", {
                    get: function() {
                        return this.songs[this.currentIndex];
                    }
                });
            },
            handleEvents: function() {
                const _this = this;
                const cdWidth = cd.offsetWidth;

                // Xử lý CD quay / dừng
                // Handle CD spins / stops
                const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
                    duration: 10000, // 10 seconds
                    iterations: Infinity
                });
                cdThumbAnimate.pause();

                // Xử lý phóng to / thu nhỏ CD
                // Handles CD enlargement / reduction
                document.onscroll = function() {
                    const scrollTop = window.scrollY || document.documentElement.scrollTop;
                    const newCdWidth = cdWidth - scrollTop;

                    cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
                    cd.style.opacity = newCdWidth / cdWidth;
                    const das = window.scrollY
                    if (scrollY == 0) {
                        dashboard.style.fadeIn();
                    }
                };

                // Xử lý khi click play
                // Handle when click play
                playBtn.onclick = function() {
                    if (_this.isPlaying) {
                        audio.pause();
                    } else {
                        audio.play();
                    }
                };

                // Khi song được play
                // When the song is played
                audio.onplay = function() {
                    _this.isPlaying = true;
                    player.classList.add("playing");
                    cdThumbAnimate.play();
                };

                // Khi song bị pause
                // When the song is pause
                audio.onpause = function() {
                    _this.isPlaying = false;
                    player.classList.remove("playing");
                    cdThumbAnimate.pause();
                };

                // Khi tiến độ bài hát thay đổi
                // When the song progress changes
                audio.ontimeupdate = function() {
                    if (audio.duration) {
                        const progressPercent = Math.floor(
                            (audio.currentTime / audio.duration) * 100
                        );
                        progress.value = progressPercent;
                    }
                };

                // Xử lý khi tua song
                // Handling when seek
                progress.onchange = function(e) {
                    const seekTime = (audio.duration / 100) * e.target.value;
                    audio.currentTime = seekTime;
                };
                playlist.onscroll = function() {
                        alert('ok');
                    }
                    // Khi next song
                    // When next song
                nextBtn.onclick = function() {
                    if (_this.isRandom) {
                        _this.playRandomSong();
                    } else {
                        _this.nextSong();
                    }
                    audio.play();
                    _this.render();
                    _this.scrollToActiveSong();
                };

                // Khi prev song
                // When prev song
                prevBtn.onclick = function() {
                    if (_this.isRandom) {
                        _this.playRandomSong();
                    } else {
                        _this.prevSong();
                    }
                    audio.play();
                    _this.render();
                    _this.scrollToActiveSong();
                };

                // Xử lý bật / tắt random song
                // Handling on / off random song
                randomBtn.onclick = function(e) {
                    _this.isRandom = !_this.isRandom;
                    _this.setConfig("isRandom", _this.isRandom);
                    randomBtn.classList.toggle("active", _this.isRandom);
                };

                // Xử lý lặp lại một song
                // Single-parallel repeat processing
                repeatBtn.onclick = function(e) {
                    _this.isRepeat = !_this.isRepeat;
                    _this.setConfig("isRepeat", _this.isRepeat);
                    repeatBtn.classList.toggle("active", _this.isRepeat);
                };

                // Xử lý next song khi audio ended
                // Handle next song when audio ended
                audio.onended = function() {
                    if (_this.isRepeat) {
                        audio.play();
                    } else {
                        nextBtn.click();
                    }
                };

                // Lắng nghe hành vi click vào playlist
                // Listen to playlist clicks
                playlist.onclick = function(e) {
                    const songNode = e.target.closest(".song:not(.active)");

                    if (songNode || e.target.closest(".option")) {
                        // Xử lý khi click vào song
                        // Handle when clicking on the song
                        if (songNode) {
                            _this.currentIndex = Number(songNode.dataset.index);
                            _this.loadCurrentSong();
                            _this.render();
                            audio.play();
                        }

                        // Xử lý khi click vào song option
                        // Handle when clicking on the song option
                        if (e.target.closest(".option")) {}
                    }
                };
            },
            scrollToActiveSong: function() {
                setTimeout(() => {
                    $(".song.active").scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    });
                }, 300);
            },
            loadCurrentSong: function() {
                heading.textContent = this.currentSong.name;
                cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
                audio.src = this.currentSong.path;
            },
            loadConfig: function() {
                this.isRandom = this.config.isRandom;
                this.isRepeat = this.config.isRepeat;
            },
            nextSong: function() {
                this.currentIndex++;
                if (this.currentIndex >= this.songs.length) {
                    this.currentIndex = 0;
                }
                this.loadCurrentSong();
            },
            prevSong: function() {
                this.currentIndex--;
                if (this.currentIndex < 0) {
                    this.currentIndex = this.songs.length - 1;
                }
                this.loadCurrentSong();
            },
            playRandomSong: function() {
                let newIndex;
                do {
                    newIndex = Math.floor(Math.random() * this.songs.length);
                } while (newIndex === this.currentIndex);

                this.currentIndex = newIndex;
                this.loadCurrentSong();
            },
            start: function() {
                // Gán cấu hình từ config vào ứng dụng
                // Assign configuration from config to application
                this.loadConfig();

                // Định nghĩa các thuộc tính cho object
                // Defines properties for the object
                this.defineProperties();

                // Lắng nghe / xử lý các sự kiện (DOM events)
                // Listening / handling events (DOM events)
                this.handleEvents();

                // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
                // Load the first song information into the UI when running the app
                this.loadCurrentSong();

                // Render playlist
                this.render();

                // Hiển thị trạng thái ban đầu của button repeat & random
                // Display the initial state of the repeat & random button
                randomBtn.classList.toggle("active", this.isRandom);
                repeatBtn.classList.toggle("active", this.isRepeat);
            }
        };

        app.start();
    });
});