import { Header } from './Header/Header';
import { AllCategories } from './AllCategories/AllCategories';
import { fetchBookByCategory } from 'api';
import { BookList } from './BookList/BookList';
import { useEffect, useState } from 'react';

export const App = () => {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState('All categories');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setBooks(await fetchBookByCategory(category, controller));
      } catch (error) {
        if (error.code === 'ERR_CANCELED') {
          return;
        }
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [category]);

  return (
    <>
      <Header />
      <main className="flex gap-[20px] px-6 py-6">
        <AllCategories setCategory={setCategory} />
        <div>
          <BookList
            setCategory={setCategory}
            currentCategory={category}
            books={books}
          />
        </div>
      </main>
    </>
  );
};
