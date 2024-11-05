function click1(val){
    document.getElementById('screen').value += val
}
function clr(){
    document.getElementById('screen').value = ""
}
function equalclick(){
    let text = document.getElementById('screen').value
    let result = eval(text)
    document.getElementById('screen').value = result
}