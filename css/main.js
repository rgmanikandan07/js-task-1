var toggleBtn = document.getElementById('toggle-button')
var toggleTxt = document.getElementById('toggle-text')
var colors = ['red','blue','yellow','orange']
var flag = 0;

var handleToggle = function(){
    toggleTxt.style.color = colors[flag];
    flag++
    if(flag >= 3){
        flag = 0;
    }
};

toggleBtn.addEventListener('click', handleToggle);