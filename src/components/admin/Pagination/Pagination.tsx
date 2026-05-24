import styles from "./Pagination.module.css";

const DIVIDER = "…";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};

function buildPages(current: number, total: number): (number | "…")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "…")[] = [1];
  const left = Math.max(2, current - 1);
  const right = Math.min(total - 1, current + 1);

  if (left > 2) pages.push(DIVIDER);
  for (let p = left; p <= right; p += 1) pages.push(p);
  if (right < total - 1) pages.push(DIVIDER);

  pages.push(total);
  return pages;
}

function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const pages = buildPages(currentPage, totalPages);

  const goTo = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange?.(page);
  };

  return (
    <nav className={styles.pagination} aria-label="Пагинация">
      <button
        type="button"
        className={styles.paginationArrow}
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Предыдущая страница"
      >
        «
      </button>
      {pages.map((page, idx) => {
        if (page === DIVIDER) {
          return (
            <span
              key={`divider-${idx}`}
              className={`${styles.paginationItem} ${styles.paginationDivider}`}
            >
              {DIVIDER}
            </span>
          );
        }
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            type="button"
            className={`${styles.paginationItem} ${
              isActive ? styles.paginationItemActive : ""
            }`}
            onClick={() => goTo(page)}
          >
            {page}
          </button>
        );
      })}
      <button
        type="button"
        className={styles.paginationArrow}
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Следующая страница"
      >
        »
      </button>
    </nav>
  );
}

export default Pagination;
