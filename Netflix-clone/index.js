function ques(num) {
    var number  = parseInt(num)-1;
    var ele = document.getElementsByClassName("answers")
    if(window.getComputedStyle(ele[number]).display === 'none')
    {
        ele[number].style.display = "block"
        document.querySelectorAll('.answer i')[number].setAttribute('class','fa fa-close')
    }
    else
    {
        ele[number].style.display = "none"
        document.querySelectorAll('.answer i')[number].setAttribute('class','fa fa-plus')
    }
}
