import CounterContainer from './containers/CounterContainer';
import Todos from './components/Todos';

const App = () => {
  return (
    <div>
      <CounterContainer number={0} />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
