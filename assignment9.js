function reset()
{
    document.getElementById("result").value=0;
}
function cal(v)
{
    var rectangular = document.getElementById("result").value+=v;
}
function ans()
{
    var values =document.getElementById("result").value;
    document.getElementById("result").value=eval(values);
}