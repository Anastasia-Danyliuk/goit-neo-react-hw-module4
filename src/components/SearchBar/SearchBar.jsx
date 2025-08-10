import { useState } from 'react';
import { toast } from 'react-toastify';
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error('Введіть пошуковий запит!');
      return;
    }
    onSubmit(query.trim());
    setQuery('');
  };

  return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
              className={css.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Пошук зображень"
              value={query}
              onChange={e => setQuery(e.target.value)}
          />
          <button type="submit" className={css.button}>Пошук</button>
        </form>
      </header>
  );
}
