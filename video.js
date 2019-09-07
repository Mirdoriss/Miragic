(function() {

    var bv = new Bideo();
    bv.init({
        // Video 事件
        videoEl: document.querySelector('#background_video'),

        // Container容器 事件
        container: document.querySelector('body'),

        // Resize调整大小
        resize: true,

        // autoplay: false, 自动播放：假

        isMobile: window.matchMedia('(max-width: 768px)').matches,

        playButton: document.querySelector('#play'),
        pauseButton: document.querySelector('#pause'),

        // Array of objects containing the src and type包含src和类型的对象数组
        // of different video formats to add 添加不同的视频格式
        src: [{
                src: 'video/The Shark In The Park.mp4',
                type: 'video/mp4'
            },
            {
                src: 'bgvideo/The Shark In The Park.webm',
                type: 'video/webm;codecs="vp8, vorbis"'
            }
        ],

        // What to do once video loads (initial frame)加载视频后该做什么(初始帧)
        onLoad: function() {
            document.querySelector('#video_cover').style.display = 'none';
        }
    });
}());