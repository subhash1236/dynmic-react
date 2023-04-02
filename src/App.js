import './App.css';

function App() {
  let curDate = new Date(2023,4 ,2 ,12);
  curDate = curDate.getHours();
  let greeting = "";
  const cssStyle ={};
  

  if(curDate>=1 && curDate<12){
    greeting = "Good morning";
    cssStyle.color="green";
    cssStyle.backgroundcolor="pink";

  }else if(curDate>=12 &&curDate<19){
    greeting ="Good afternoon";
    cssStyle.color="Orange";
    cssStyle.backgroundcolor ="yellow";
  }else{
    greeting = "good nigte";
    cssStyle.color="black";
    cssStyle.backgroundcolor="navyblue"
  }
  return (
    <div className="app">

      <h1> hello every one, <span style={cssStyle}> {greeting}</span></h1>
   
   
     
     
     
    </div>
  );
}

export default App;
