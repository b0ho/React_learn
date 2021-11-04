import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import History from './History';

const App = () => {
  function increase(number) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = number + 10;

        if (result > 50) {
          const e = new Error('NumberTooBig');
          return reject(e);
        }
        resolve(result);
      }, 1000);
    });
    return promise;
  }

  async function runTasks() {
    try {
      let result = await increase(0);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  runTasks();

  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={History} />
        <Route
          render={({ location }) => (
            <div>
              <h2>존재하지 않는 페이지</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
