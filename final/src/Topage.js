export default function Topage({ page, setPage, totalPages }) {
  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <nav className="d-flex flex-column flex-md-row justify-content-between align-items-center border rounded p-2 mt-4">
      <div className=" fs-7">
        Page <span>{page}</span> of{" "}
        <span className="fw-medium ">{totalPages}</span>
      </div>

      <ul className="list-unstyled d-flex align-items-center gap-2 mb-0 mt-2 mt-md-0">
        {pages.map((p) => (
          <a
            key={p}
            onClick={() => setPage(p)}
            className={`page-numbers ${page === p ? "current" : ""}`}
          >
            {p}
          </a>
        ))}

        <a
          onClick={handleNext}
          disabled={page === totalPages}
          className="page-numbers-next"
        >
          {">"}
        </a>
      </ul>
    </nav>
  );
}
