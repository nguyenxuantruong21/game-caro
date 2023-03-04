/**
 * tạo 1 cái items để duyệt qua các phần tử ô của bàn cờ
 * tạo vòng lặp để duyệt qua các phần tử, tạo biến đến i
 * nếu tại phần tử nào mà rỗng vs i chia het cho 2 thi hien thi la 0
 * tang bien den i
 * nếu tại phần tử nào mà rỗng vs i khong chia het cho 2 thi hien thi la x
 * tang bien dem i
 * neu da danh thi hien thi ra thong bao
 */

document.addEventListener("DOMContentLoaded", function () {
    var items = Array.from(document.querySelectorAll('.item'))
    var i = 0
    for (const key in items) {
        items[key].addEventListener('click', function () {
            i++
            if (i % 2 === 0 && items[key].innerHTML === '') {
                items[key].innerHTML = 'O'
            } else if (i % 2 !== 0 && items[key].innerHTML === '') {
                items[key].innerHTML = 'X'
            } else if (items[key].innerHTML === 'X' || items[key].innerHTML === 'O') {
                alert('xin loi khong danh duoc')
            }
        })
    }
})














