import './App.css';
import Rating from './components/Rating'

function App() {
  return (
    <div className="App">
      <header className="App-header">Milwaukee Bucks Ratings</header>
      <p>Welcome to Milwaukee Bucks Ratings!</p>
      <form action="/team_name_url/" method="post">
        <Rating name='Giannis Antetokounmpo'/>
        <Rating name='Khris Middleton'/>
        <Rating name='Jrue Holiday'/>
        <Rating name='Brook Lopez'/>
        <Rating name='Donte DiVincenzo'/>
        <Rating name='D.J. Augustin'/>
        <Rating name='Bobby Portis'/>
        <Rating name='Pat Connaughton'/>
        <Rating name='D.J. Wilson'/>
        <Rating name='Bryn Forbes'/>
        <Rating name='Thanasis Antetokounmpo'/>
        <Rating name='Torrey Craig'/>
        <Rating name='Jordan Nwora'/>
        <Rating name='Sam Merrill'/>
      </form>
      <button>Submit!</button>
    </div>
  );
}

export default App;
