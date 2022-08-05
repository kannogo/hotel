'use strict'

const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function(item, index) {
    item.onclick = function() {
        document.getElementById('bigimg').src = this.dataset.image;
    }
});

const thumbs2 = document.querySelectorAll('.thumb2');
thumbs2.forEach(function(item, index) {
    item.onclick = function() {
        document.getElementById('bigimg2').src = this.dataset.image;
    }
});

const thumbs3 = document.querySelectorAll('.thumb3');
thumbs3.forEach(function(item, index) {
    item.onclick = function() {
        document.getElementById('bigimg3').src = this.dataset.image;
    }
});

const thumbs4 = document.querySelectorAll('.thumb4');
thumbs4.forEach(function(item, index) {
    item.onclick = function() {
        document.getElementById('bigimg4').src = this.dataset.image;
    }
});

const thumbs5 = document.querySelectorAll('.thumb5');
thumbs5.forEach(function(item, index) {
    item.onclick = function() {
        document.getElementById('bigimg5').src = this.dataset.image;
    }
});

const thumbs6 = document.querySelectorAll('.thumb6');
thumbs6.forEach(function(item, index) {
    item.onclick = function() {
        document.getElementById('bigimg6').src = this.dataset.image;
    }
});

const thumbs7 = document.querySelectorAll('.thumb7');
thumbs7.forEach(function(item, index) {
    item.onclick = function() {
        document.getElementById('bigimg7').src = this.dataset.image;
    }
});

const thumbs8= document.querySelectorAll('.thumb8');
thumbs8.forEach(function(item, index) {
    item.onclick = function() {
        document.getElementById('bigimg8').src = this.dataset.image;
    }
});

