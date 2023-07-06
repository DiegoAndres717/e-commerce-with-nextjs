"use client";

import { Card } from "@/components/Card/Card";
import CheckoutSide from "@/components/CheckoutSide/CheckoutSide";
import { ProductDetail } from "@/components/Product/ProductDetail";
import { ShoppiContext } from "@/components/context/Context";
import { fetchCards } from "@/utils";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const context = useContext(ShoppiContext);
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  useEffect(() => {
    fetchCards().then((data) => setItems(data));
  }, []);

  const searchTitle = context.searchByTitle;
  const filteredItemsByTitle = (items, searchTitle) => {
    return items?.filter((item) =>
      item?.title?.toLowerCase().includes(searchTitle)
    );
  };

  const searchCategory = context.searchByCategory;
  const filteredItemsByCategory = (items, searchCategory) => {
    return items?.filter((item) =>
      item?.category?.toLowerCase().includes(searchCategory)
    );
  };

  const filterBy = (searchType, items, searchTitle, searchCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchTitle);
    }
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchCategory);
    }
    if (!searchType) {
      return items;
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchCategory)?.filter((item) =>
        item?.title?.toLowerCase().includes(searchCategory)
      );
    }
  };

  useEffect(() => {
    if (searchTitle && searchCategory)
      setFilteredItems(
        filterBy("BY_TITLE_AND_CATEGORY", items, searchTitle, searchCategory)
      );
    if (searchTitle && !searchCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchTitle, searchCategory)
      );
    if (searchCategory && !searchTitle)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchTitle, searchCategory)
      );
    if (!searchCategory && !searchTitle)
      setFilteredItems(filterBy(null, items, searchTitle, searchCategory));
  }, [items, searchCategory, searchTitle]);

  const renderView = () => {
    if (filteredItems?.length > 0) {
      return filteredItems?.map((item) => <Card key={item.id} card={item} />);
    } else {
      return <p>No Results Found</p>;
    }
  };

  return (
    <>
      <div className="relative flex items-center justify-center mt-16 w-80">
        <h1 className="text-xl font-bold">Exclusive products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="p-4 mt-3 mb-4 border border-black rounded-lg w-80 focus:outline-none"
        onChange={(e) => context.setSearchByTitle(e.target.value)}
      />
      <div className="grid w-full max-w-screen-lg gap-4 place-items-center mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {renderView()}
      </div>
      <ProductDetail />
      <CheckoutSide />
    </>
  );
}
