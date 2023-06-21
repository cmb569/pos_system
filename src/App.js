import logo from './logo.svg';
import './App.css';



function App() 

{
  return (

    
    
    <div className="App">
      <header className="App-header">
        <div class="left-position">
     <h1> Icy Cone Sweets Treats</h1>
     <p>
      <span id="display" class="total-display">0</span>
     </p>
     <p>
      <button class="scoop" id="btn-one-scoop" value="1.00">one-scoop</button>
      <button class="scoop" id="btn-one-scoop" value="2.00">two-scoops</button>
      <button class="scoop" id="btn-one-scoop" value="3.00">three-scoops</button>
     </p>
     <p>
     <div class="grid-container">
      <div class="grid-item">
      <button class="vanilla" >Vanilla</button>
      </div>
      <div class="grid-item">
      <button class="mocha" >Mocha</button>
      </div>
      <div class="grid-item">
      <button class="strawberry" >Strawberry</button>
      </div>
      <div class="grid-item">
      <button class="mango" >Mango</button>
      </div>
      <div class="grid-item">
      <button class="cotton-candy" value="5.00" onclick="dis('5.00')" onkeydown="myFunction(event)" >Cotton Candy</button>
      </div>
      <div class="grid-item">
      <button class="pineapple" >Pineapple</button>
      </div>
      <div class="grid-item">
      <button class="cherry">Cherry</button>
      </div>
      <div class="grid-item">
      <button class="watermelon">Watermelon</button>
      </div>
      <div class="grid-item">
      <button class="orange">Orange</button>
      </div>
      </div>
     </p>
     </div>
      </header>
    </div>
  );
}

export default App;
