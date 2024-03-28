import { NoteContainer } from "../features/notes/NoteContainer";
import { NoteList } from "../features/notes/NoteList";

export const NoteSection = () => {
  return (
    <div className="container mx-auto p-6 lg:w-[calc(100%_-_10rem)] lg:p-0">
      <NoteContainer />
      <NoteList />
    </div>
  );
};
