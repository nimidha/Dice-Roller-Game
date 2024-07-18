function rolldice(){
    const input=document.getElementById("input").value;
    const dice=document.getElementById("dice_result");
    const result=document.getElementById("dice_image");


   const values=[];
    const image=[];

    for(let i=0;i<input;i++)
        {const value=Math.floor(Math.random()*6) +1;
            values.push(value);
            image.push(`<img src="dice_images/dice_${value}.png" alt="dice ${value}">`);
        }
       dice.textContent=`dice: ${values.join(' , ')}`;
       result.innerHTML=image.join('');

    
}