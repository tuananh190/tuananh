// ứng dụng jquery
// cách sử dụng
// đặc điểm giữa JS và Jquery 

// document            $
// . get               ('selector') .action() 

// b1 : xác định đc phần tử cần tương tác $ (selector) vd: $('h2')          | $('h2').shows();
// b2 : thực hiện thao tác : action()                  vd: .shows() .hide() | $('h2').hide();


var view = `<div class="news-content">
<div class="news-title">
    <h4>Cách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang lại ách sử dụng trà thảo dược mang lại hiệu quả tốt cho sức khỏe</h4>
</div>
<div class="news-desc">
    <p>
    Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...
    Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...
    Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có...
    </p>
</div>
</div>
</div>`;
// for(let j =0; j < 3; j++ ){
//     $('.list-news').append(view);
// }
$('.list-news').css('flex-wrap' , 'wrap');

var arrNews = [
    {
        Image:"../img/14_ Am tra 1 coc.png",
        title:"Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có",
        content:"Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có",
    },
    {
        Image:"../img/14_ Am tra 1 coc.png",
        title:"Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có",
        content:"Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có",
    },
    {
        Image:"../img/14_ Am tra 1 coc.png",
        title:"Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có",
        content:"Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có",
    },
    {
        Image:"../img/14_ Am tra 1 coc.png",
        title:"Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có",
        content:"Trà thảo dược được coi là một loại thực phẩm chức năng có tác dụng tốt cho sức khỏe. Tuy nhiên, để có",
    }
]
// arrNews.length = 19 ,index max =18
var pageNumber = 4;
var pageSize = 5;
    // 1 : 0 -> 4
    // 2 : 5 -> 9
    // 3 : 10 -> 14
    // 4 : 15 -> 19

// yêu cầu hiển thị sản phẩm trang số 3

// for(let j =0; j < arrNews.length; j++ ){
for(let j =15; j < 19; j++ ){
    let view2 = `<div class="news-item w-30">
    <div class="news-img">
        <img src="${arrNews[j].Image}" alt="item">
    </div>
    <div class="news-content">
        <div class="news-title">
            <h4>${arrNews[j].title}"</h4>
        </div>
        <div class="news-desc">
            <p>
            ${arrNews[j].content}"
            </p>
        </div>
    </div>
</div>`;
    $('.list-news').append(view2);
}

// b1: xác định mảng dữ liệu cần view
// b2: lặp ra các phần tử thỏa mãn trong mảng để tạo view => append

// function checklist(array){
//     for(let i = 0; i < array.lenght;i++)
//     let view2 = `<div class="news-item w-30">
//     <div class="news-img">
//         <img src="${arrNews[j].Image}" alt="item">
//     </div>
//     <div class="news-content">
//         <div class="news-title">
//             <h4>${arrNews[j].title}"</h4>
//         </div>
//         <div class="news-desc">
//             <p>
//             ${arrNews[j].content}"
//             </p>
//         </div>
//     </div>
// </div>`;
//     $('.list-news').append(view2);
// }


// caching
var bien_toan_cuc = "str";
var bien_cuc_bo = "123";
var cache = "str";

localStorage.setItem("dev", "javascrip");
var x =localStorage.getItem("dev"); //==> x = 'javascrip'

// tổng kết  + mục đích & ý nghĩa jquery 
            //    cú pháp : b1 khai báo thư viện
            //              b2 $ ('selector').action();
            // tương tác với array object 
// lưu ý : gán giá trị cho html cho 1 biến : `` ; 
//         gán giá trị của biến trên 1 chuỗi html : ${tham số} 

