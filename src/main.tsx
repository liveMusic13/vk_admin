import ReactDOM from 'react-dom/client';
import './assets/styles/global.scss';
import App from './components/App.tsx';
import FactDataProvider from './providers/FactDataProvider.tsx';
import NameProvider from './providers/NameProvider.tsx';
import SaveDataRequestProvider from './providers/SaveDataRequestProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<FactDataProvider>
		<NameProvider>
			<SaveDataRequestProvider>
				<App />
			</SaveDataRequestProvider>
		</NameProvider>
	</FactDataProvider>
);
