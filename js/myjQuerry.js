// selector in jqyerry============================================
$(document).ready(function () {
    //     $('p').click(function(){
    // console.log('you click on!!',this)
    //     });
    //     $('p:first').click()
    // events in j querrry========================================
    // form event,mouse event document /window event,keyboard event
    //     $('p').mouseenter(function(){
    //         console.log('you click on!!',this)
    // });
    // on click handeler=================================================
//   $('p').on({
// click:function(){
//     console.log('this is click function',this);
// },
// mouseleave:function(){
//     console.log('mouse leaft');
// }
//   });
// show and hidden function===================================================
// $('#text').on(
//     {
//         click:function(){
// $('#text').hide(1000);
//          } 
//     });
$('#text').hide(1000,function(){
    console.log('hidden');
});
$('#text').show(1000,function(){
    console.log('show');
});
});