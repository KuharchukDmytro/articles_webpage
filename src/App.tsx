import { Routes, Route, Navigate } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { NavigationBar } from './components/NavigationBar';
import { HomePage } from './pages/HomePage';
import { TenArticlesPage } from './pages/TenArticlesPage';

export const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<Navigate to='/' replace />} />

        <Route path='/tenArticles' element={<TenArticlesPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
