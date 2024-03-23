"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const SearchNote = () => {
  const [searchValue, setsSearchValue] = useState("");
  const [hasTyped, setHasTyped] = useState(false);
  const router = useRouter();
  const search = useSearchParams().get("search");

  function onChangeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setHasTyped(true);
    setsSearchValue(e.target.value);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchValue === "" && hasTyped) {
        return router.push("/");
      }

      if (searchValue !== "") {
        router.push(`/?search=${searchValue}`);
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchValue, router, hasTyped]);

  return (
    <>
      <input
        type="text"
        onChange={onChangeSearch}
        placeholder="Search my mind..."
        className="focus-none mb-4 w-full bg-transparent py-4 font-louize text-7xl italic outline-none"
        defaultValue={search || ""}
      />
    </>
  );
};
