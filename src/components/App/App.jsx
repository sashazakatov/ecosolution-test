import Icons from '../../Icons/sprite.svg';

const App = () => { 
  return (
    <>
      <div>Привет</div>
      <svg>
        <use href={Icons + '#maximize-circle'}></use>
      </svg>
    </>
  );
}

export default App;