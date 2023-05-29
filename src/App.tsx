import { Routes, Route, Navigate } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { NavigationBar } from './components/NavigationBar';
import { HomePage } from './pages/HomePage';
import { TenArticlesPage } from './pages/TenArticlesPage';
import { AddArticle } from './pages/AddArticle/AddArticle';
import { useLocalStorage } from './app/hooks';

export const App = () => {
  const [user, setUser] = useLocalStorage('user');

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<Navigate to='/' replace />} />

        <Route path='/tenArticles' element={<TenArticlesPage />} />

        <Route path='/addArticle' element={<AddArticle />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
