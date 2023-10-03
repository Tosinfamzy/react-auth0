import './App.css';
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './components/Profile';

function App() {
	const { isLoading, error } = useAuth0();
	return (
		<>
			<main>
				<h1>Auth0 Login</h1>
				{error && <p>Authentication Error</p>}
				{!error && !isLoading && (
					<>
						<LoginButton />
						<LogoutButton />
						<Profile />
					</>
				)}
			</main>
		</>
	);
}

export default App;
