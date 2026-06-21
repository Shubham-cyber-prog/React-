import Card from './components/Card'
import './App.css'

function App() {
  return (
    <div className="parent">
      <Card user="Subham" age={20} description="Full Stack Developer" img="https://th.bing.com/th/id/OIP.YIre5HGHiqBa7DCmrF4KwwHaJQ?w=158&h=198&c=7&r=0&o=7&pid=1.7&rm=3" />
      <Card user="Rahul" age={22} description="Trainer" img="https://th.bing.com/th/id/OIP.Y6TxrlNYQs3IIDylc6dLawHaHa?w=187&h=187&c=7&r=0&o=7&pid=1.7&rm=3" />
      <Card user="Aadesh" age={21} description="Software Engineer" img="https://th.bing.com/th/id/OIP.U0lavRZhl9Y5-e_-UiptAwHaHa?w=216&h=216&c=7&r=0&o=7&pid=1.7&rm=3" />
    </div>
  )
}

export default App