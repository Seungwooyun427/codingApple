for(let i = 0; i < 3; i++){
    $('.tab-button').eq(i).on('click',function(){
        $('.tab-button').removeClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').eq(i).addClass('show');
    });
}

var car2 = { name : '소나타', price : [50000, 3000, 4000] } 

document.querySelector('#name').innerHTML = car2.name;
document.querySelector('#price').innerHTML = car2.price[2];

    var pants = [28,30,32]; //서버에서 가져오는 대신, 서버에서 가져와도 이렇게 옴
    var shirts = [95, 100, 105];

$('.form-select').eq(0).on('input', function(){

    var value = $('.form-select').eq(0).val();
    if(value == '셔츠'){
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');
        shirts.forEach(function(a){
            console.log(a)
            $('.form-select').eq(1).append(`<option>${a}<option>`)
        });
    }else if(value == '바지'){
        $('.form-select').eq(1).removeClass('form-hide');
        $('.form-select').eq(1).html('');

        pants.forEach(function(a){
            console.log(a)
            $('.form-select').eq(1).append(`<option>${a}<option>`)
        });
    }
    else{
        $('.form-select').eq(1).addClass('form-hide');
    }

    //console.log($('.form-select').eq(0).val());
});

// document.querySelectorAll('.form-select')[0].addEventListener('input', function(){
//     console.log($('.form-select').eq(0).val());
// })


// $('.form-select').eq(0).on('input', function(){

//     var value = $('.form-select').eq(0).val();
//     if(value == '바지'){
//         var pants = '<option>28</option> <option>30</option>'
//         $('.form-select').eq(1).append(pants);
//     }

// })