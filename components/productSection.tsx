"use client";

import { useMemo, useState } from "react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";

const openSans = Open_Sans({
  subsets: ["latin"],
});

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  bestseller?: boolean;
};

const initialProducts: Product[] = [
  { id: 1, title: "Essential Electrolytes", price: 60, category: "Biscuits", image: "/productImage1.png", bestseller: true },
  { id: 2, title: "Essential Electrolytes", price: 70, category: "Snacks", image: "/productImage2.png", bestseller: false },
  { id: 3, title: "Essential Electrolytes", price: 80, category: "Rice", image: "/productImage3.png", bestseller: false },
  { id: 4, title: "Essential Electrolytes", price: 90, category: "Sweets", image: "/productImage2.png", bestseller: false },
  { id: 5, title: "Essential Electrolytes", price: 100, category: "Milk", image: "/productImage1.png", bestseller: false },
  { id: 6, title: "Essential Electrolytes", price: 110, category: "Curry Powder", image: "/productImage3.png", bestseller: true },
  { id: 7, title: "Essential Electrolytes", price: 18, category: "Noodles", image: "/productImage2.png", bestseller: false },
  { id: 8, title: "Essential Electrolytes", price: 18, category: "Coconut Milk  ", image: "/productImage3.png", bestseller: true },
  { id: 9, title: "Essential Electrolytes", price: 18, category: "Jam", image: "/productImage3.png", bestseller: true },
  { id: 10, title: "Essential Electrolytes", price: 18, category: "Spices", image: "/productImage1.png", bestseller: true },
  { id: 11, title: "Essential Electrolytes", price: 18, category: "Oil & Ghee", image: "/productImage1.png", bestseller: true },
  { id: 12, title: "Essential Electrolytes", price: 18, category: "Dairy Products", image: "/productImage1.png", bestseller: true },
  { id: 13, title: "Essential Electrolytes", price: 60, category: "Biscuits", image: "/productImage1.png", bestseller: true },
  { id: 14, title: "Essential Electrolytes", price: 70, category: "Snacks", image: "/productImage2.png", bestseller: false },
  { id: 15, title: "Essential Electrolytes", price: 80, category: "Rice", image: "/productImage3.png", bestseller: false },
  { id: 16, title: "Essential Electrolytes", price: 90, category: "Sweets", image: "/productImage2.png", bestseller: false },
  { id: 18, title: "Essential Electrolytes", price: 100, category: "Milk", image: "/productImage1.png", bestseller: false },
  { id: 19, title: "Essential Electrolytes", price: 110, category: "Curry Powder", image: "/productImage3.png", bestseller: true },
  { id: 20, title: "Essential Electrolytes", price: 18, category: "Noodles", image: "/productImage2.png", bestseller: false },
  { id: 21, title: "Essential Electrolytes", price: 18, category: "Coconut Milk  ", image: "/productImage3.png", bestseller: true },
  { id: 22, title: "Essential Electrolytes", price: 18, category: "Jam", image: "/productImage3.png", bestseller: true },
  { id: 23, title: "Essential Electrolytes", price: 18, category: "Spices", image: "/productImage1.png", bestseller: true },
  { id: 24, title: "Essential Electrolytes", price: 18, category: "Oil & Ghee", image: "/productImage1.png", bestseller: true },
  { id: 25, title: "Essential Electrolytes", price: 18, category: "Dairy Products", image: "/productImage1.png", bestseller: true },
  { id: 26, title: "Essential Electrolytes", price: 110, category: "Curry Powder", image: "/productImage3.png", bestseller: true },
  { id: 27, title: "Essential Electrolytes", price: 18, category: "Noodles", image: "/productImage2.png", bestseller: false },
  { id: 28, title: "Essential Electrolytes", price: 18, category: "Coconut Milk  ", image: "/productImage3.png", bestseller: true },
  { id: 29, title: "Essential Electrolytes", price: 18, category: "Jam", image: "/productImage3.png", bestseller: true },
  { id: 30, title: "Essential Electrolytes", price: 18, category: "Spices", image: "/productImage1.png", bestseller: true },
  { id: 31, title: "Essential Electrolytes", price: 18, category: "Oil & Ghee", image: "/productImage1.png", bestseller: true },
  { id: 32, title: "Essential Electrolytes", price: 18, category: "Dairy Products", image: "/productImage1.png", bestseller: true },
  { id: 33, title: "Essential Electrolytes", price: 60, category: "Biscuits", image: "/productImage1.png", bestseller: true },
  { id: 34, title: "Essential Electrolytes", price: 70, category: "Snacks", image: "/productImage2.png", bestseller: false },
  { id: 35, title: "Essential Electrolytes", price: 80, category: "Rice", image: "/productImage3.png", bestseller: false },
  { id: 36, title: "Essential Electrolytes", price: 90, category: "Sweets", image: "/productImage2.png", bestseller: false },
  { id: 38, title: "Essential Electrolytes", price: 100, category: "Milk", image: "/productImage1.png", bestseller: false },
  { id: 39, title: "Essential Electrolytes", price: 110, category: "Curry Powder", image: "/productImage3.png", bestseller: true },
  { id: 40, title: "Essential Electrolytes", price: 18, category: "Noodles", image: "/productImage2.png", bestseller: false },


];

export default function ProductsSection() {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<
    "bestselling" | "price-asc" | "price-desc" | "alpha"
  >("bestselling");
  const [showImageOnly, setShowImageOnly] = useState(false);

  // pagination state
  const pageSize = 9; 
  const [page, setPage] = useState(0);

  // derive categories from product data
  const categories = useMemo(() => {
    const set = new Set(initialProducts.map((p) => p.category));
    return ["View All", ...Array.from(set)];
  }, []);

  // toggle category selection
  function toggleCategory(cat: string) {
    if (cat === "View All") {
      setSelectedCategories([]); // clear filters = view all
      setPage(0);
      return;
    }
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    setPage(0);
  }

  // filtered + sorted products
  const filtered = useMemo(() => {
    let list = initialProducts.slice();

    // category filter
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }

   

    

    return list;
  }, [query, selectedCategories, sortBy]);

  // pagination helpers
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const clampPage = (p: number) => Math.max(0, Math.min(totalPages - 1, p));
  const goToPage = (p: number) => setPage(clampPage(p));
  const paginated = filtered.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <div className={`${openSans.className} w-full ml-18 max-w-[1200px] mx-auto py-8 -px-2`}>
       

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
        {/* Categories (left) */}
        <aside className="hidden lg:block mt-5  leading-14">
          <div className="space-y-3">
            <div className="flex items-center  justify-between ">
              <h4 className="font-bold mb-7 text-[28px]">Categories</h4>
            </div>

            <div className="flex flex-col gap-9">
              {categories
                .filter((c) => c !== "View All")
                .map((cat) => {
                  const checked = selectedCategories.includes(cat);
                  return (
                    <label
                      key={cat}
                      className="flex items-center gap-6 text-lg cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleCategory(cat)}
                        className="w-4 h-4"
                      />
                      <span className={checked ? "font-medium" : "text-[#495057]"}>
                        {cat}
                      </span>
                    </label>
                  );
                })}
            </div>
          </div>
        </aside>

        {/* Product grid */}
        <main>
          <div className="mb-6 mt-9">
            <p className="uppercase text-black tracking-[0.5em] text-sm font-bold mb-5">
              Product
            </p>
            <h3 className="text-4xl font-bold tracking-tight">PICK YOUR FAVORITE FOOD</h3>
            <p className="text-black mt-2 text-lg font-normal max-w-5xl">
              Discover our wide range of authentic Sri Lankan products, thoughtfully sourced
              and carefully packaged to meet international standards. This section is designed to
              help supermarket owners, distributors, and trade partners explore our product
              portfolio and gain insight into the quality and variety we deliver across the UAE and
              beyond.
            </p>
          </div>

          {/* grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginated.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 py-20">No products found.</div>
            ) : (
              paginated.map((p) => (
                <article
                  key={p.id}
                  className="bg-white rounded-xl shadow-sm p-0 hover:shadow-lg transition-shadow duration-200"
                >
                  <div
                    className={`rounded-2xl overflow-hidden mb-3 bg-black flex items-center justify-center`}
                    style={{ height: 350 }}
                  >

                    <div className="relative w-full h-[350px] rounded-2xl overflow-hidden mb-3 bg-black flex items-center justify-center">
  <Image
    src={p.image}
    alt={p.title}
    fill
    className="object-contain transition-transform duration-300 transform hover:scale-105"
  />
</div>

                  </div>

                  {!showImageOnly ? (
                    <>
                      <div className="flex items-center mt-5 ml-5 justify-between mb-2">
                        <h4 className="font-semibold text-sm">{p.title}</h4>
                      </div>
                      <div className="text-3xl ml-5 mb-5 font-bold">${p.price}</div>
                    </>
                  ) : (
                    <div className="h-0 m-0 p-0"></div>
                  )}
                </article>
              ))
            )}
          </div>

          {/* Slider Controls: arrows + dots */}
          <div className="w-full flex items-center justify-center gap-96 mt-10">
            {/* Left Arrow */}
            <button
              onClick={() => goToPage(page - 1)}
              className="text-xl font-bold px-4 py-2"
              aria-label="Previous page"
            >
             &#x2190;
            </button>

            {/* Dots */}
<div className="flex items-center gap-0">
  {Array.from({ length: totalPages }).map((_, i) => (
    <button
      key={i}
      onClick={() => goToPage(i)}
      aria-label={`Go to page ${i + 1}`}
      className="relative w-4 h-4 flex items-center justify-center"
    >
      {/* Outer Ring */}
      <span
        className={`absolute w-4 h-4 rounded-full transition 
          ${i === page ? "border-1 border-black" : "border border-transparent"}`}
      />

      {/* Inner Dot */}
      <span
        className={`absolute w-1 h-1 rounded-full transition 
          ${i === page ? "bg-black" : "bg-black"}`}
      />
    </button>
  ))}
</div>


            {/* Right Arrow */}
            <button
              onClick={() => goToPage(page + 1)}
              className="text-xl font-bold px-4 py-2"
              aria-label="Next page"
            >
              &#x2192;
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
