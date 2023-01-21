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


$('.form-select').eq(0).on('input', function(){

    var value = $('.form-select').eq(0).val();
    if(value == '셔츠'){
        $('.form-select').eq(1).removeClass('form-hide');
        var shirts = '<option>95</option> <option>100</option>'
        $('.form-select').eq(1).html(shirts);
    }else if(value == '바지'){
        $('.form-select').eq(1).removeClass('form-hide');
        var pants = '<option>28</option> <option>30</option>'
        $('.form-select').eq(1).html(pants);
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