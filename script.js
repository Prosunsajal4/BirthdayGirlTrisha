// ============================================
// BIRTHDAY GIRL TRISHA - COMPLETE JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // ---- CUSTOM CURSOR ----
    var cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = (e.clientX - 14) + 'px';
        cursor.style.top = (e.clientY - 14) + 'px';
    });
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('button, a, .photo-item, .envelope-scene, .carousel-btn, .dot, .heart-photo, .lightbox-close')) {
            cursor.classList.add('hover');
        }
    });
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('button, a, .photo-item, .envelope-scene, .carousel-btn, .dot, .heart-photo, .lightbox-close')) {
            cursor.classList.remove('hover');
        }
    });

    // ---- STARS FIELD ----
    var starsField = document.getElementById('starsField');
    for (var i = 0; i < 80; i++) {
        var s = document.createElement('div');
        s.className = 'star';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        var size = Math.random() * 3 + 1;
        s.style.width = size + 'px';
        s.style.height = size + 'px';
        s.style.setProperty('--dur', (Math.random() * 3 + 2) + 's');
        s.style.animationDelay = Math.random() * 3 + 's';
        starsField.appendChild(s);
    }

    // ---- STEP 5 BACKGROUND (blurred image) ----
    var step5Bg = document.getElementById('step5Bg');

    // ---- PHOTO DATA ----
    var PHOTOS = [
        { src: 'photos/photo1.jpg', caption: '\u09A4\u09C1\u09AE\u09BF \u09A6\u09C7\u0996\u099B\u09CB \u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE\u09AF\u09BC, \u0986\u09AE\u09BF \u09A6\u09C7\u0996\u099B\u09BF \u09A4\u09C1\u09AE\u09BE\u09AF\u09BC', sub: "Prosun's POV", section: 'grid' },
        { src: 'photos/photo2.jpg', caption: '\u098F\u09A8\u09CD\u09A1 \u09AA\u09CB\u099C \u09A6\u09C7\u0996\u09C7 \u09AE\u09A8\u09C7 \u09B9\u09AF\u09BC \u09A4\u09C1\u09AE\u09BF \u09AA\u09CD\u09B0\u09B9\u09B8\u09B8 \u09AE\u09A6\u09C7\u09B2', sub: 'Natural Queen', section: 'grid' },
        { src: 'photos/photo3.jpg', caption: '\u0986\u09AE\u09BE\u09A6\u09C7\u09B0 cartoon version - \u0995\u09A4 \u09AA\u09C7\u09B0\u09AB\u09C7\u0995\u09CD\u09BF \u09B2\u09BE\u0997\u09A4\u09CB!', sub: 'Our Fairy Tale', section: 'grid' },
        { src: 'photos/photo4.jpg', caption: '\u0997\u09CB\u09B2\u09BE\u09AA \u09A6\u09BF\u09B2\u09C7 \u09A4\u09C1\u09AE\u09BF \u0986\u09B0\u0993 \u09B8\u09C1\u09A8\u09CD\u09A6\u09B0, \u09A4\u09C1\u09AE\u09BF \u09A8\u09BE \u0997\u09CB\u09B2\u09BE\u09AA?', sub: 'Rose vs Trisha', section: 'grid' },
        { src: 'photos/photo5.jpg', caption: '\u0986\u09AE\u09BF \u09B0\u09BE\u09A4\u09C7 \u09A4\u09C1\u09AE\u09BE\u09B0 \u0995\u09A5\u09BE \u09AD\u09BE\u09AC\u09BF, \u09A4\u09C1\u09AE\u09BF \u09A6\u09BF\u09A8\u09C7 \u0986\u09AE\u09BE\u09B0 \u0995\u09A5\u09BE', sub: 'Two Souls, One Story', section: 'grid' },
        { src: 'photos/photo6.jpg', caption: '\u09B8\u09C7\u09A6\u09BF\u09A8 \u09AA\u09BE\u09B0\u09CD\u0995\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7\u099B\u09BF\u09B2\u09BE\u09AE, \u09A4\u09C1\u09AE\u09BE\u0995\u09C7 \u09AA\u09C7\u09B2\u09BE\u09AE \u09A8\u09BE', sub: 'Missing You There', section: 'grid' },
        { src: 'photos/photo7.jpg', caption: '\u099A\u09CB\u0996 \u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09C7 \u0995\u09C0 \u09AD\u09BE\u09AC\u09CB? \u0986\u09AE\u09BE\u09B0 \u0995\u09A5\u09BE?', sub: 'Dreaming Out Loud', section: 'carousel' },
        { src: 'photos/photo8.jpg', caption: '\u098F\u09A8\u09CD\u09A1 \u0995\u09B2\u09BE\u099C \u09A6\u09C7\u0996\u09C7 \u09AE\u09A8\u09C7 \u09AA\u09A1\u09BC\u09C7 \u09B8\u09AC\u0995\u09BF\u099B\u09C1', sub: 'Our Scrapbook', section: 'carousel' },
        { src: 'photos/photo9.jpg', caption: '\u099C\u09BE\u09B9\u09BE\u099C \u09A6\u09C7\u0996\u09C7 \u09AE\u09A8\u09C7 \u09B9\u09AF\u09BC - \u09A4\u09C1\u09AE\u09BF\u09A6\u09CD\u09A1\u09C7 \u0986\u09AE\u09BE\u09B0 \u09AF\u09BE\u09A4\u09CD\u09B0\u09BE\u09B0 \u09B6\u09C7\u09B7 \u09AC\u09A8\u09CD\u09A6\u09B0', sub: 'My Final Destination', section: 'carousel' },
        { src: 'photos/photo10.jpg', caption: '\u09A8\u09A6\u09C0\u09B0 \u09AA\u09BE\u09B6\u09C7, \u09A4\u09C1\u09AE\u09BE\u09B0 \u09AA\u09BE\u09B6\u09C7 - \u09A6\u09C1\u099F\u09CB\u09A8\u09C7 \u09B6\u09BE\u09A8\u09CD\u09A4\u09BF \u09A6\u09C7\u09AF\u09BC', sub: 'Peace Found', section: 'carousel' },
        { src: 'photos/photo11.jpg', caption: '\u09AB\u09CB\u09A8\u09C7 \u0995\u09BE\u09B0 \u09B8\u09BE\u09A5\u09C7 \u0995\u09A5\u09BE? \u0986\u09AE\u09BE\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09A8\u09BE\u0995\u09BF \u09AD\u09C1\u09B2\u09C7 \u0997\u09C7\u099B\u09CB?', sub: "Who's That?!", section: 'carousel' },
        { src: 'photos/photo12.jpg', caption: '\u098F\u09A8\u09CD \u0986\u0999\u09CD\u0997\u09C1\u09B2\u09BF\u09A4\u09C7 \u098F\u09A8\u09CD \u0986\u099E\u09CD\u099A\u09B0 - \u09B8\u09AC \u09AC\u09B2\u09C7 \u09A6\u09C7\u09AF\u09BC \u09A4\u09C1\u09AE\u09BF \u0995\u09BE\u09B0', sub: 'Marked As Mine', section: 'carousel' },
        { src: 'photos/photo13.jpg', caption: '\u09B8\u09C7\u09B2\u09AB\u09BF \u09A4\u09C1\u09B2\u09A4\u09C7 \u0997\u09BF\u09AF\u09BC\u09C7 \u09A4\u09C1\u09AE\u09BE\u09B0 \u098F\u09A8\u09CD \u09AE\u09C1\u0996 \u09A6\u09C7\u0996\u09C7 \u09AA\u09BE\u0997\u09B2 \u09B9\u09C7\u09A8!', sub: 'Camera Shy? No Way!', section: 'heart' },
        { src: 'photos/photo14.jpg', caption: '\u09B8\u09C2\u09B0\u09CD\u09AF\u09AE\u09C1\u0996\u09C0 \u09A4\u09C1\u09AE\u09BF, \u0986\u09AE\u09BF \u09B8\u09C2\u09B0\u09CD\u09AF - \u09A4\u09C1\u09AE\u09BE\u0995\u09C7 \u0998\u09C1\u09B0\u09C7 \u0998\u09C1\u09B0\u09C7 \u09A6\u09C7\u0996\u09BF', sub: 'You Are My Sunflower', section: 'heart' },
        { src: 'photos/photo15.jpg', caption: '\u09B8\u09C7\u09A6\u09BF\u09A8 \u09A4\u09C1\u09AE\u09BF \u09B8\u09A4\u09CD\u09AF\u09BF \u09B0\u09BE\u09A8\u09C0 \u099B\u09BF\u09B2\u09C7 - \u0986\u09AE\u09BF \u09B0\u09BE\u099C\u09BE \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09BF\u09A8\u09BF', sub: 'Royal Look', section: 'heart' },
        { src: 'photos/photo16.jpg', caption: '\u09B8\u09AC\u09C1\u099C \u09AA\u09BE\u0997\u09B2\u09BF! \u09A4\u09C1\u09AE\u09BE\u09B0 \u09B0\u0999 \u09B8\u09AC\u09C1\u099C, \u0986\u09AE\u09BE\u09B0 \u09AD\u09BE\u09B2\u09CB\u09AC\u09BE\u09B8\u09BE\u09B8\u09AB\u09C1 \u09B8\u09AC\u09C1\u099C', sub: 'Green Is Your Color', section: 'heart' },
        { src: 'photos/photo17.jpg', caption: '\u098F\u09A8\u09CD peace sign \u09A6\u09C7\u0996\u09C7 \u09AE\u09A8\u09C7 \u09AA\u09A1\u09BC\u09C7 - \u09A4\u09C1\u09AE\u09BF \u09B8\u09AC\u09B8\u09AE\u09AF\u09BC trouble \u099F\u09BE\u09B2\u09BE\u09A8!', sub: 'Trouble Maker', section: 'heart' },
        { src: 'photos/photo18.jpg', caption: '\u09AC\u09A8\u09CD\u09A7\u09C1\u09A6\u09C7\u09B0 \u09B8\u09BE\u09A5\u09C7\u09B0\u09B8\u09C7\u09A8\u09C8 \u09A4\u09C1\u09AE\u09BF \u09B8\u09C1\u09A8\u09CD\u09A6\u09B0, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u0986\u09AE\u09BE\u09B0 \u09B8\u09BE\u09A5\u09C7 \u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7', sub: 'With Friends', section: 'letter' },
        { src: 'photos/photo19.jpg', caption: '\u09A4\u09C1\u09AE\u09BE\u0995\u09C7 \u09A6\u09C7\u0996\u09C7 \u09B9\u09BE\u09B8\u09BF \u09A5\u09BE\u09AE\u09C7 \u09A8\u09BE, \u09A4\u09C1\u09AE\u09BE\u09B0 \u09A6\u09BF\u0995\u09C7 \u09A4\u09BE\u0995\u09BE\u09B2\u09C7 \u09B8\u09AE\u09AF\u09BC \u09A5\u09BE\u09AE\u09C7', sub: 'Time Stops', section: 'letter' },
        { src: 'photos/photo20.jpg', caption: '\u09A1\u09BE\u0995\u09CD\u09A4\u09BE\u09B0 \u09AC\u09BE\u09A8\u09CD\u09A6\u09BF\u09AF\u09BC\u09C7 \u0986\u09AE\u09BE\u09B0 \u09B9\u09C3\u09A6\u09AF\u09BC \u09AD\u09BE\u09B2\u09CB \u0995\u09B0\u09C7 \u09A6\u09BF\u09B2\u09C7!', sub: 'Dr. Trisha', section: 'letter' },
        { src: 'photos/photo21.jpg', caption: '\u098F\u09A8\u09CD \u09B9\u09BE\u09B8\u09BF \u09A6\u09C7\u0996\u09C7 \u0986\u09AE\u09BF \u09AA\u09BE\u0997\u09B2 - \u09A4\u09C1\u09AE\u09BF \u09B9\u09BE\u09B8\u09B2\u09C7 \u0986\u09AE\u09BE\u09B0 \u09AA\u09C3\u09A5\u09BF\u09AC\u09C0 \u099C\u09CD\u09B2\u09C7 \u0993\u09A0\u09C7', sub: 'My Happy Place', section: 'final' },
        { src: 'photos/photo22.jpg', caption: '\u09A4\u09C1\u09AE\u09BE\u09B0 \u098F\u09A8\u09CD \u099A\u09CB\u0996, \u09A4\u09C1\u09AE\u09BE\u09B0 \u098F\u09A8\u09CD \u09AE\u09C1\u0996 - \u09B8\u09AC \u09AC\u09B2\u09C7 \u09A6\u09C7\u09AF\u09BC', sub: 'Pure Beauty', section: 'final' }
    ];

    var letterContent = "\u09AA\u09CD\u09B0\u09BF\u09AF\u09BC\u09A4\u09AE Trisha,\n\n\u0986\u099C \u09A4\u09C1\u09AE\u09BE\u09B0 \u099C\u09A8\u09CD\u09AE\u09A6\u09BF\u09A8\u09A8\u09C7\u09B0 \u09A6\u09BF\u09A8\u099F\u09BF \u098F\u09A8\u09B8\u09C1\u09A1\u09BC\u09C0 \u09A4\u09C1\u09AE\u09BE\u09B0 \u099C\u09A8\u09CD\u09AE\u09A6\u09BF\u09A8\u09C7\u09B0 \u09B8\u09A8\u09CD\u09A6\u09B0\u09CD\u09AC\u09AA\u09A8\u09CD\u09A1, \u0995\u09BE\u09B0\u09A3 \u098F\u09A8\u09CD \u09A6\u09BF\u09A8\u09C7\u09A4\u09B8\u09C6 \u09A4\u09C1\u09AE\u09BF \u098F\u09A8 \u09AA\u09C3\u09A5\u09BF\u09AC\u09C0\u09A4\u09C7 \u098F\u09B8\u09C7 \u099B\u09BF\u09B2\u09C7 - \u0986\u09AE\u09BE\u09B0 \u099C\u09C0\u09AC\u09A8\u09C7 \u0986\u09B8\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF\u09B0 \u09B8\u09A8\u09CD\u09A4\u09BE\u09A8\u09A8\u09C7\u09B0\u09A8\u09C0\u09A4\u09C7\u09A8\u09A8\u09C7\u09B0\u09A8\u09C1\u09B8\u09C0 \u09A4\u09C1\u09AE\u09BE\u0995\u09C7 \u099C\u09BE\u09A8\u09BF \u09A4\u09C1\u09AE\u09BE\u0995\u09C7 \u09AD\u09BE\u09B2\u09CB\u09AC\u09BE\u09B8\u09BF - \u098F\u09A8\u09B8\u09A4\u09CD\u09B0 \u0995\u09A5\u09BE\u0997\u09C1\u09B2\u09CB \u09AC\u09B2\u09BE \u09B8\u09B9\u099C, \u0995\u09BF\u09A8\u09CD\u09A4\u09C1 \u09A4\u09C1\u09AE\u09BE\u0995\u09C7 \u09A8\u09BF\u09B0\u09C1\u09AD\u09AC \u0995\u09B0\u09BE \u0986\u09B0\u0993 \u09B8\u09C1\u09A8\u09CD\u09A6\u09B0\u09BE\u09B0\u09B8\u09CD\u09B0\u09C7\u09B8\u09CD\u09B9\u09C0\u09B0\u09B8\u09C7 \u099C\u09B8\u09A8\u09C0\u09B0 \u09B9\u09AF\u09BC\u09C7 \u09AF\u09BE\u09AF\u09C7\u09A8\u09A8\u09A8\u09C1\u09B8\u09C0 \u09A4\u09C1\u09AE\u09BF \u099C\u09BE\u09A8\u09CB \u09A8\u09BE, \u09A4\u09C1\u09AE\u09BE\u0995\u09C7 \u09A6\u09C7\u0996\u09BE\u09B0 \u09AA\u09B0 \u09A5\u09C7\u0995\u09C7 \u0986\u09AE\u09BE\u09B0 \u099C\u09C0\u09AC\u09A8 \u0995\u09A4 \u09AC\u09A6\u09B2\u09C7 \u0997\u09C7\u099B\u09C7\u099F\u09A6\u09BF\u099C\u09C7\u099B\u09C7\u099F\u09C6 \u099F\u09CB\u09B8\u09A4 \u0995\u09C7\u09A8\u09CD\u09A1\u09C7\u099F\u09C6 \u09AC\u09B2\u09C7 \u09A6\u09C7\u09AF\u09BC\u09C8\u09A8\u09AC\u09C7\u099F\u09BF\u09B2 \u098F\u0995\u099F\u09BE \u0995\u09A5\u09BE \u09A8\u09BF\u09B6\u09CD\u099A\u09BF\u09A4 \u09A4\u09C1\u09AE\u09BE\u0995\u09C7 \u099B\u09BE\u09A1\u09BC\u09BE \u0986\u09AE\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09A6\u09BF\u09A8 \u09AA\u09C2\u09B0\u09A3 \u09B9\u09DF\u09C7 \u09A8\u09BE\u09A4\u09C7\u09B0\u09A8\u09C1\u09B8\u09C0 \u09A4\u09C1\u09AE\u09BF \u0986\u09AE\u09BE\u09B0 \u09AA\u09CD\u09B0\u09A5\u09AE \u09AD\u09BE\u09B2\u09CB\u09AC\u09BE\u09B8\u09BE, \u09A4\u09C1\u09AE\u09BF \u0986\u09AE\u09BE\u09B0 \u09B6\u09C7\u09B7 \u09AD\u09BE\u09B2\u09CB\u09AC\u09BE\u09B8\u09BE\u09A8\u09C1\u09B8\u09C0 \u09A4\u09C1\u09AE\u09BF \u0986\u09AE\u09BE\u09B0 \u09B6\u09C7\u09B7 \u09AD\u09BE\u09B2\u09CB\u09AC\u09BE\u09B8\u09BE\u09A8\u09C1\u09B8\u09C0\n\n\u098F\u09A8\u09CD \u099C\u09A8\u09CD\u09AE\u09A6\u09BF\u09A8\u09C7 \u0986\u09AE\u09BF \u09A4\u09C1\u09AE\u09BE\u0995\u09C7 \u098F\u0995\u099F\u09BE\u09A8\u09C7 \u0995\u09A5\u09BE \u09AC\u09B2\u09A4\u09C7 \u099A\u09BE\u09A8 \u09A4\u09C1\u09AE\u09BF \u0986\u09AE\u09BE\u09B0 \u099C\u09C0\u09AC\u09A8\u09C7\u09B0 \u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7 \u09B8\u09C1\u09A8\u09CD\u09A6\u09B0 \u0989\u09AA\u09B9\u09BE\u09B0\u09C7\u09B0 \u09AA\u09CD\u09B0\u09BE\u09AA\u09A4\u09C7\u09B0\u09A8\u09A8\u09C0\u09A4\u09C7\u09A8\u09A8\u09C1\u09B8\u09C0 \u09A4\u09C1\u09AE\u09BE\u0995\u09C7 \u09AA\u09C7\u09AF\u09BC\u09C7 \u0986\u09AE\u09BF \u09A8\u09BF\u099C\u09C7\u0995\u09C7 \u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7 \u09AD\u09BE\u0997\u09CD\u09AF\u09AC\u09BE\u09A8 \u09AE\u09A8\u09C7 \u0995\u09B0\u09BF\u09A8\u09C1\u09B8\u09C0\n\n\u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BE \u09A6\u09BF\u09A8, \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BE \u09AE\u09C1\u09B9\u09C2\u09B0\u09CD\u09A4, \u0986\u09AE\u09BF \u09A4\u09C1\u09AE\u09BE\u0995\u09C7 \u09AD\u09BE\u09B2\u09CB\u09AC\u09BE\u09B8\u09AC\u09CB - \u0986\u099C \u09A5\u09C7\u0995\u09C7 \u09A8\u09DF, \u09B6\u09A4\u09BE\u09AC\u09CD\u09A6\u09C0\u09B0 \u09AA\u09B0 \u09B6\u09A4\u09BE\u09AC\u09CD\u09A6\u09C0\u09B0\n\n\u099C\u09A8\u09CD\u09AE\u09A6\u09BF\u09A8\u09C7\u09B0 \u09A5\u09C7\u0995 \u09A4\u09C7\u0995 \u09AD\u09BE\u09B2\u09CB\u09AC\u09BE\u09B8\u09BE \u09AA\u09CD\u09B0\u09BF\u09AF\u09BC\u09A4\u09AE\u09A8\u09C1\u09B8\u09C0\u09A8\u09A8\u09C1\u09B8\u09C0\n\n\u09B8\u09AC\u09B8\u09AE\u09AF\u09BC \u09A4\u09C1\u09AE\u09BE\u09B0\u09C7\u09A8\u09C6,\nProsun";

    // ---- STATE ----
    var currentStep = 1;
    var carouselInterval = null;
    var currentSlide = 0;
    var charIndex = 0;
    var letterCharIndex = 0;

    // ---- HELPERS ----
    function getPhotosBySection(section) {
        return PHOTOS.filter(function(p) { return p.section === section; });
    }

    // ---- STEP NAVIGATION ----
    function goToStep(step) {
        var oldStep = document.getElementById('step' + currentStep);
        var newStep = document.getElementById('step' + step);
        if (!oldStep || !newStep) return;
        oldStep.classList.add('exiting');
        setTimeout(function() {
            oldStep.classList.remove('active', 'exiting');
        }, 600);
        setTimeout(function() {
            newStep.classList.add('active');
            currentStep = step;
            switch(step) {
                case 2: initConfetti(); break;
                case 3: initPhotoGrid(); break;
                case 4: initCarousel(); break;
                case 5: initHeartLayout(); break;
                case 6: initLetter(); break;
                case 7: initFinalSurprise(); break;
            }
        }, 300);
    }

    // ==================== STEP 1: INTRO ====================
    var typedText = document.getElementById('typedText');
    var heart1 = document.getElementById('heart1');
    var btn1 = document.getElementById('btn1');
    var introText = "Hey Trisha...";

    function typeWriter() {
        if (charIndex < introText.length) {
            typedText.textContent += introText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 120);
        } else {
            setTimeout(function() { heart1.classList.add('show'); }, 500);
            setTimeout(function() {
                btn1.style.display = 'inline-block';
                btn1.classList.add('visible');
            }, 1200);
        }
    }
    setTimeout(typeWriter, 600);
    btn1.addEventListener('click', function() { goToStep(2); });

    // ==================== STEP 2: CONFETTI ====================
    function initConfetti() {
        var c = document.getElementById('confetti');
        if (!c || c.children.length > 0) return;
        var colors = ['#90ee90', '#fff', '#ff6b6b', '#ffd700', '#ff69b4', '#00d4ff', '#ff1493', '#98fb98'];
        for (var i = 0; i < 100; i++) {
            var d = document.createElement('div');
            d.className = 'confetti';
            d.style.left = Math.random() * 100 + '%';
            d.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            d.style.animationDelay = Math.random() * 5 + 's';
            d.style.animationDuration = (Math.random() * 2 + 2) + 's';
            d.style.width = (Math.random() * 8 + 5) + 'px';
            d.style.height = (Math.random() * 8 + 5) + 'px';
            d.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            c.appendChild(d);
        }
    }
    document.getElementById('btn2').addEventListener('click', function() { goToStep(3); });

    // ==================== STEP 3: PHOTO GRID ====================
    function initPhotoGrid() {
        var grid = document.getElementById('grid1');
        if (!grid || grid.children.length > 0) return;
        var gridPhotos = getPhotosBySection('grid');
        gridPhotos.forEach(function(photo) {
            var item = document.createElement('div');
            item.className = 'photo-item';
            item.innerHTML = '<img src="' + photo.src + '" alt="Memory" loading="lazy">' +
                '<div class="photo-overlay">' +
                '<span class="overlay-main">' + photo.caption + '</span>' +
                '<span class="overlay-sub">' + photo.sub + '</span>' +
                '</div>';
            item.addEventListener('click', function() { openLightbox(photo); });
            grid.appendChild(item);
        });
    }
    document.getElementById('btn3').addEventListener('click', function() { goToStep(4); });

    // ==================== STEP 4: CAROUSEL ====================
    function initCarousel() {
        var carousel = document.getElementById('carousel1');
        var dotsContainer = document.getElementById('dots1');
        if (!carousel || carousel.children.length > 0) return;
        var cp = getPhotosBySection('carousel');
        cp.forEach(function(photo, i) {
            var slide = document.createElement('div');
            slide.className = 'carousel-slide' + (i === 0 ? ' active' : '');
            slide.innerHTML = '<img src="' + photo.src + '" alt="Moment" loading="lazy">' +
                '<div class="carousel-caption">' +
                '<span class="cap-main">' + photo.caption + '</span>' +
                '<span class="cap-sub">' + photo.sub + '</span>' +
                '</div>';
            carousel.appendChild(slide);
            var dot = document.createElement('div');
            dot.className = 'dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', function() { goToSlide(i); });
            dotsContainer.appendChild(dot);
        });
        carouselInterval = setInterval(function() {
            var total = getPhotosBySection('carousel').length;
            currentSlide = (currentSlide + 1) % total;
            goToSlide(currentSlide);
        }, 3500);
    }

    function goToSlide(index) {
        var slides = document.querySelectorAll('#carousel1 .carousel-slide');
        var dots = document.querySelectorAll('#dots1 .dot');
        slides.forEach(function(s) { s.classList.remove('active'); });
        dots.forEach(function(d) { d.classList.remove('active'); });
        if (slides[index]) slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        currentSlide = index;
    }

    document.getElementById('prevBtn').addEventListener('click', function() {
        clearInterval(carouselInterval);
        var total = getPhotosBySection('carousel').length;
        currentSlide = (currentSlide - 1 + total) % total;
        goToSlide(currentSlide);
    });
    document.getElementById('nextBtn').addEventListener('click', function() {
        clearInterval(carouselInterval);
        var total = getPhotosBySection('carousel').length;
        currentSlide = (currentSlide + 1) % total;
        goToSlide(currentSlide);
    });
    document.getElementById('btn4').addEventListener('click', function() {
        clearInterval(carouselInterval);
        goToStep(5);
    });

    // ==================== STEP 5: HEART LAYOUT ====================
    function initHeartLayout() {
        var layout = document.getElementById('heartLayout');
        if (!layout || layout.children.length > 0) return;
        var hp = getPhotosBySection('heart');
        hp.forEach(function(photo) {
            var div = document.createElement('div');
            div.className = 'heart-photo';
            div.innerHTML = '<img src="' + photo.src + '" alt="Love" loading="lazy">';
            div.addEventListener('click', function() {
                step5Bg.style.backgroundImage = 'url(' + photo.src + ')';
                step5Bg.classList.add('show');
                openLightbox(photo);
            });
            layout.appendChild(div);
        });
    }
    document.getElementById('btn5').addEventListener('click', function() {
        step5Bg.classList.remove('show');
        goToStep(6);
    });

    // ==================== STEP 6: LOVE LETTER ====================
    function initLetter() {
        var envelope = document.getElementById('envelope');
        var letterPaper = document.getElementById('letterPaper');
        var letterPhotos = document.getElementById('letterPhotos');
        if (letterPhotos && letterPhotos.children.length === 0) {
            getPhotosBySection('letter').forEach(function(photo) {
                var div = document.createElement('div');
                div.className = 'letter-photo';
                div.innerHTML = '<img src="' + photo.src + '" alt="Love" loading="lazy">';
                letterPhotos.appendChild(div);
            });
        }
        envelope.onclick = function() {
            envelope.classList.add('opened');
            setTimeout(function() {
                envelope.style.display = 'none';
                letterPaper.style.display = 'block';
                letterPaper.classList.add('show');
                typeLetter();
            }, 600);
        };
    }

    function typeLetter() {
        var letterBody = document.getElementById('letterBody');
        var btn6 = document.getElementById('btn6');
        letterCharIndex = 0;
        function typeChar() {
            if (letterCharIndex < letterContent.length) {
                letterBody.textContent += letterContent.charAt(letterCharIndex);
                letterCharIndex++;
                var speed = letterContent.charAt(letterCharIndex - 1) === '\n' ? 80 : 15;
                setTimeout(typeChar, speed);
            } else {
                btn6.style.display = 'inline-block';
                btn6.classList.add('visible');
            }
        }
        typeChar();
    }
    document.getElementById('btn6').addEventListener('click', function() { goToStep(7); });

    // ==================== STEP 7: FINAL SURPRISE ====================
    function initFinalSurprise() {
        createFloatingHearts();
        var fp = document.getElementById('finalPhotos');
        if (fp && fp.children.length === 0) {
            getPhotosBySection('final').forEach(function(photo) {
                var div = document.createElement('div');
                div.className = 'final-photo';
                div.innerHTML = '<img src="' + photo.src + '" alt="Final" loading="lazy">';
                fp.appendChild(div);
            });
        }
    }

    function createFloatingHearts() {
        var container = document.getElementById('floatingHearts');
        if (!container) return;
        var symbols = ['\u2764', '\uD83D\uDC9A', '\uD83D\uDC9C', '\uD83D\uDC95', '\uD83D\uDC96', '\u2B50', '\uD83C\uDF38', '\uD83C\uDF3C', '\u2728'];
        var colors = ['#ff6b6b', '#90ee90', '#ff69b4', '#ffd700', '#ff1493', '#00ff88'];
        setInterval(function() {
            var h = document.createElement('div');
            h.className = 'floating-heart';
            h.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            h.style.left = Math.random() * 100 + '%';
            h.style.fontSize = (Math.random() * 18 + 14) + 'px';
            h.style.color = colors[Math.floor(Math.random() * colors.length)];
            h.style.animationDuration = (Math.random() * 3 + 3) + 's';
            container.appendChild(h);
            setTimeout(function() { h.remove(); }, 6000);
        }, 200);
    }

    // ==================== LIGHTBOX ====================
    function openLightbox(photo) {
        var lb = document.createElement('div');
        lb.className = 'lightbox';
        lb.innerHTML = '<div class="lightbox-content">' +
            '<img src="' + photo.src + '" alt="' + photo.caption + '">' +
            '<p class="lightbox-caption">' + photo.caption + '</p>' +
            '<p class="lightbox-sub">' + photo.sub + '</p>' +
            '<button class="lightbox-close">&times;</button>' +
            '</div>';
        lb.querySelector('.lightbox-close').addEventListener('click', function() { lb.remove(); });
        lb.addEventListener('click', function(e) { if (e.target === lb) lb.remove(); });
        document.body.appendChild(lb);
    }

    // ==================== REPLAY ====================
    document.getElementById('replayBtn').addEventListener('click', function() {
        currentSlide = 0;
        charIndex = 0;
        letterCharIndex = 0;
        clearInterval(carouselInterval);
        var grid1 = document.getElementById('grid1');
        var carousel1 = document.getElementById('carousel1');
        var dots1 = document.getElementById('dots1');
        var heartLayout = document.getElementById('heartLayout');
        var envelope = document.getElementById('envelope');
        var letterPaper = document.getElementById('letterPaper');
        var letterBody = document.getElementById('letterBody');
        var letterPhotos = document.getElementById('letterPhotos');
        var finalPhotos = document.getElementById('finalPhotos');
        var btn6 = document.getElementById('btn6');
        if (grid1) grid1.innerHTML = '';
        if (carousel1) carousel1.innerHTML = '';
        if (dots1) dots1.innerHTML = '';
        if (heartLayout) heartLayout.innerHTML = '';
        if (envelope) { envelope.style.display = 'block'; envelope.classList.remove('opened'); }
        if (letterPaper) { letterPaper.style.display = 'none'; letterPaper.classList.remove('show'); }
        if (letterBody) letterBody.textContent = '';
        if (btn6) { btn6.style.display = 'none'; btn6.classList.remove('visible'); }
        if (letterPhotos) letterPhotos.innerHTML = '';
        if (finalPhotos) finalPhotos.innerHTML = '';
        step5Bg.classList.remove('show');
        step5Bg.style.backgroundImage = '';
        goToStep(1);
        typedText.textContent = '';
        heart1.classList.remove('show');
        btn1.style.display = 'none';
        btn1.classList.remove('visible');
        setTimeout(typeWriter, 600);
    });
});
