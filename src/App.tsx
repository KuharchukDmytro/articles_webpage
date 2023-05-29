import { Routes, Route, Navigate } from 'react-router-dom';

import { NavigationBar } from './components/NavigationBar';

import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { TenArticlesPage } from './pages/TenArticlesPage';
import { AddArticle } from './pages/AddArticle/AddArticle';

export const App = () => {
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
