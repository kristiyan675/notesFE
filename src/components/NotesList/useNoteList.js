import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useNotes = (notes, saveNotes) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const notesPerPage = 5;

  const offset = (currentPage - 1) * notesPerPage;
  const currentNotes = notes.slice(offset, offset + notesPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    saveNotes(updatedNotes);
    navigate("/");
  };

  return {
    currentNotes,
    currentPage,
    notesPerPage,
    handlePageClick,
    handleDelete,
  };
};

export default useNotes;
