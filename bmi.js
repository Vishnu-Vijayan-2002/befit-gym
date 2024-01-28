const calcuLate=()=>{
    const height=heightvalue.value
    const weight=weightvalue.value
    if(height==""||weight=="")
    {
      result.innerHTML="Please provide the valide data"
      result.style.color="red"
    }
    else{
      
      const sentimeterValue= height/100
      const meterValue=sentimeterValue**2
      console.log(meterValue);
      const bmiValue=(weight/meterValue).toFixed(2)
      console.log(`bmiValue${bmiValue}`);
      
      if(bmiValue<18.5)
      {
        result.innerHTML=`Under Weight:${bmiValue}`
  
      }else if(bmiValue>=18.5 && bmiValue <24.9)
      {
        result.innerHTML=`Normal Weight:${bmiValue}`
      }
      else if(bmiValue>=25 && bmiValue <29.9)
      {
        result.innerHTML=`Over Weight:${bmiValue}`
      }
      else if(bmiValue>=30 && bmiValue <34.9)
      {
        result.innerHTML=`Obesity Weight(Class I):${bmiValue}`
      }
      else if(bmiValue>=35.5 && bmiValue <39.9)
      {
        result.innerHTML=`Obesity (Class II):${bmiValue}`
      }
      else  {
       result.innerHTML=`Extreme Obesity:${bmiValue}`
      }
    }
   
}
localStorage.getItem('user')
displayUser.innerHTML=localStorage.getItem("user")
var logout=()=>{
 localStorage.removeItem("user")
 window.location="register.html"
}