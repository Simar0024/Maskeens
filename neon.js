document.querySelectorAll('input[type="radio"]').forEach(radio => {
  radio.addEventListener("change", getValue);
});

function getValue()
{
  let myValue = document.querySelector('.anythingInput').value || "Text Preview";
  const box = document.querySelector('.text-box');
  const price = document.querySelector('.price-box');
  const selectedFont = document.querySelector('input[name="font"]:checked').value;
  const selectedColor = document.querySelector('input[name="color"]:checked').value;
  const selectedSize = document.querySelector('input[name="size"]:checked').value;

  document.querySelector('.displayValue').innerHTML = `${myValue}`;
  box.style.fontFamily = selectedFont;
  box.style.color = selectedColor;
  box.style.fontSize = selectedSize;
  box.style.textShadow = `
  0 0 ${15}px ${selectedColor},
  0 0 ${30}px ${selectedColor},
  0 0 ${45}px ${selectedColor}
`;
  box.style.animation = "glowPulse 1.5s infinite alternate";

  for(let i=0; i<= myValue.length; i++)
  {
    let set_price = 2100;
      
    if(myValue.length === 0 || myValue === "Text Preview"){
      price.innerHTML = `Price: ${ 0 }`;
      price.style.color = "gold";
    }
    else if(myValue.length === 1){
      price.innerHTML = `Price: ${set_price}`;
      price.style.color = "gold";
    }
    else{
      price.innerHTML = `Price: ${set_price + (i-1)*500}`;
      price.style.color = "gold";
    }
  }
}