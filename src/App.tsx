import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book as BookIcon, Library, Search, ChevronRight, X } from 'lucide-react';
import { booksData, type Book } from './data/books';

export default function App() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = booksData.books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-80 bg-white border-r border-[#E5E1DA] flex flex-col h-screen overflow-hidden">
        <div className="p-6 border-bottom border-[#E5E1DA]">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg">
              <Library className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl leading-tight">Ziyo</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold">Kutubxonasi</p>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Kitob qidirish..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-transparent focus:border-orange-200 focus:bg-white rounded-xl text-sm transition-all outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-6">
          <div className="space-y-1">
            {filteredBooks.map((book) => (
              <button
                key={book.title}
                onClick={() => setSelectedBook(book)}
                className={`w-full group flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer ${
                  selectedBook?.title === book.title 
                    ? 'bg-orange-50 text-orange-900 border border-orange-100 shadow-sm' 
                    : 'hover:bg-gray-50 text-gray-600 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors ${
                    selectedBook?.title === book.title ? 'bg-orange-100' : 'bg-gray-100 group-hover:bg-white'
                  }`}>
                    <BookIcon className={`w-4 h-4 ${
                      selectedBook?.title === book.title ? 'text-orange-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <span className="font-medium text-sm text-left line-clamp-1">{book.title}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${
                  selectedBook?.title === book.title ? 'scale-110 opacity-100' : 'opacity-0 group-hover:opacity-40'
                }`} />
              </button>
            ))}
          </div>
          {filteredBooks.length === 0 && (
            <div className="py-12 text-center text-gray-400 text-sm">
              Kitob topilmadi
            </div>
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative overflow-y-auto bg-[#FDFCFB] flex items-center justify-center p-6 md:p-12">
        <AnimatePresence mode="wait">
          {selectedBook ? (
            <motion.div
              key={selectedBook.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl w-full"
            >
              <button 
                onClick={() => setSelectedBook(null)}
                className="md:hidden absolute top-6 right-6 p-2 bg-white rounded-full shadow-sm border border-gray-100"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Siz tanlagan asar
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1A1A1A] leading-tight">
                    {selectedBook.title}
                  </h2>
                  <div className="h-1 w-20 bg-orange-200 rounded-full" />
                </div>

                <div className="prose prose-orange max-w-none">
                  <p className="text-xl md:text-2xl font-serif italic text-gray-700 leading-relaxed indent-8">
                    {selectedBook.description}
                  </p>
                </div>

                <div className="pt-8 flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-[#1A1A1A] text-white rounded-full font-medium hover:bg-black transition-colors cursor-pointer shadow-lg shadow-black/10">
                    O'qishni boshlash
                  </button>
                  <button className="px-6 py-3 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors cursor-pointer">
                    Saqlab qo'yish
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center space-y-4"
            >
              <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <Library className="w-12 h-12 text-orange-200" />
              </div>
              <h2 className="font-serif text-3xl font-medium text-gray-400">Kitob tanlang</h2>
              <p className="text-gray-400 max-w-xs mx-auto">
                Kutubxonamizdan o'zingizga ma'qul asarni tanlang va uning qisqacha tavsifi bilan tanishing.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-20 -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-20 -ml-32 -mb-32 pointer-events-none" />
      </main>
    </div>
  );
}

