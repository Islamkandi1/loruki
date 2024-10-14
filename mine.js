let company=document.querySelector(".btn2")
let main1=document.querySelector(".main1")
let exit =document.getElementById("exit")

company.addEventListener("click",() =>{
main1.classList.remove('hide')
})
exit.addEventListener("click",() =>{
    main1.classList.add('hide')
})

