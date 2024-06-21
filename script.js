let input=document.querySelectorAll("input"),
form=document.querySelector('form')

age=document.querySelector("select"),
content=document.getElementById('content')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let users=[
        {
            nomi:input[0].value,
            mualifi:input[1].value,
            soni:age.value
        }
    ]
        if (
            users[0].nomi === '' ||
            users[0].mualifi === '' ||
            users[0].nomi === null ||
            users[0].mualifi === null
        ){
            alert("ma'lumotni to'ldiring")
        }else{
            let newDiv=document.createElement('div')
            newDiv.innerHTML=`<div id='row'> <h2 class='alert alert-danger'> nomi: ${
                users[0].nomi
            }--------mualifi:${users[0].mualifi}---------soni:${
                users[0].soni
            }--------------tavsiya qilasmi:${
                input[2].checked ? 'ha':'yoq'
            }<button class='btn btn-danger' onclick="remove(this)">delete</button></h2></div>`
        
            function remove(btn){
                btn.closest('div').remove
            }
            content.append(newDiv)
            form.reset()
        }
        })
function remove(btn) {
    btn.closest('div').remove()
}