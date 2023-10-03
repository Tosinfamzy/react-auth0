import './App.css';
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';

function App() {
	return (
		<>
			<main>
				<h1>Auth0 Login</h1>
				<LoginButton />
				<LogoutButton />
			</main>
		</>
	);
}

export default App;
