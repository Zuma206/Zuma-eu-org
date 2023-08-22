import { searchTextAtom } from "@lib/search";
import { useStore } from "@nanostores/react";

export default function SearchFunction() {
  const searchText = useStore(searchTextAtom);

  return (
    <form className="grow">
      <input
        type="text"
        className="w-full bg-zinc-900 rounded-full px-3 py-2 outline-none transition focus:scale-125 focus:shadow-lg"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => searchTextAtom.set(e.target.value)}
      />
    </form>
  );
}
