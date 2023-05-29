import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.tsx'
import { Provider } from 'react-redux';
import store from './app/store.ts';
import { UserProvider } from './context/UserContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/articles_webpage">
        <UserProvider>
          <App />
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
