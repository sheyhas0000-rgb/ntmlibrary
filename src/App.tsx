import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Library, 
  Search, 
  ChevronRight, 
  ArrowLeft, 
  BookOpen, 
  Users, 
  Map, 
  TrendingUp,
  Download,
  Info
} from 'lucide-react';
import { booksData, type Book } from './data/books';

export default function App() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = useMemo(() => {
    return booksData.books.filter(book => 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleDownload = (book: Book) => {
    const content = `
${book.title.toUpperCase()}
Muallif: ${book.author}
-----------------------------
Qisqacha tavsif:
${book.description}

Syujet:
${book.plotSummary}

Tahlil:
${book.fullAnalysis}

Qahramonlar:
${book.characters.map(c => `- ${c.name}: ${c.role} (${c.description})`).join('\n')}

Mavzular:
${book.themes.map(t => `- ${t.title}: ${t.explanation}`).join('\n')}

Tarixiy ta'siri:
${book.impact}
    `;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${book.title}_arxiv.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-orange-600/30 font-sans antialiased">
      <AnimatePresence mode="wait">
        {!selectedBook ? (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-6 md:p-12 lg:p-20"
          >
            {/* Nav */}
            <nav className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-600 flex items-center justify-center rounded-sm">
                    <Library className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black text-orange-600">NTMLibrary</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-serif font-black tracking-tighter leading-[0.85] uppercase">
                  Ma'rifat<br/>Arxivi
                </h1>
              </div>

              <div className="relative w-full md:w-80 group">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-orange-600 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Qidiruv..."
                  className="w-full bg-transparent border-b border-gray-800 py-3 pl-8 text-lg outline-none focus:border-orange-600 transition-all font-serif placeholder:italic placeholder:text-gray-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </nav>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 border-t border-gray-800">
              {filteredBooks.map((book, i) => (
                <motion.div
                  key={book.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedBook(book)}
                  className="group relative h-[500px] border-r border-b border-gray-800 cursor-pointer overflow-hidden p-8 flex flex-col justify-between hover:bg-white/[0.02] transition-colors"
                >
                  <div className="space-y-2 relative z-10">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-600 group-hover:text-orange-600 transition-colors">
                      {book.genre}
                    </span>
                    <h2 className="text-4xl font-serif font-bold leading-tight group-hover:italic transition-all">
                      {book.title}
                    </h2>
                  </div>

                  <div className="space-y-6 relative z-10">
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      "{book.description}"
                    </p>
                    <div className="flex items-center justify-between font-serif">
                      <span className="text-xs text-gray-700 uppercase tracking-widest">{book.author}</span>
                      <ChevronRight className="w-5 h-5 text-gray-800 group-hover:text-orange-600 group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>

                  {/* Decorative number */}
                  <span className="absolute -bottom-10 -right-4 text-9xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-orange-600/[0.03] transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.div>
              ))}
            </div>

            <footer className="mt-40 border-t border-gray-900 pt-10 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-gray-700 font-bold">
              <span>© 2026 NTMLibrary — Milliy Meros Arxivi</span>
              <div className="flex gap-10">
                <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
                <span className="hover:text-white cursor-pointer transition-colors">Telegram</span>
              </div>
            </footer>
          </motion.div>
        ) : (
          <motion.div 
            key="details"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="min-h-screen flex flex-col lg:flex-row"
          >
            {/* Left: Sticky Hero */}
            <aside className="w-full lg:w-[45vw] lg:h-screen lg:sticky lg:top-0 h-[60vh] p-8 md:p-16 flex flex-col justify-between border-r border-gray-900 bg-[#080808]">
              <button 
                onClick={() => setSelectedBook(null)}
                className="flex items-center gap-3 text-gray-600 hover:text-white transition-colors group uppercase text-[10px] font-bold tracking-[0.4em] mb-12"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Orqaga qaytish
              </button>

              <div className="space-y-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-white text-black text-[10px] font-black uppercase tracking-widest">
                      {selectedBook.year}
                    </span>
                    <span className="text-orange-600 text-[10px] font-black uppercase tracking-[0.3em]">
                      {selectedBook.genre}
                    </span>
                  </div>
                  <h1 className="text-7xl md:text-[8vw] font-serif font-black leading-[0.85] uppercase tracking-tighter">
                    {selectedBook.title}
                  </h1>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-[1px] bg-gray-800" />
                  <p className="text-2xl font-serif italic text-gray-500">
                    {selectedBook.author}
                  </p>
                </div>
              </div>

              <div className="pt-12">
                <button 
                  onClick={() => handleDownload(selectedBook)}
                  className="flex items-center gap-4 bg-orange-600 text-black px-10 py-5 font-black uppercase text-xs tracking-[0.3em] hover:bg-orange-500 transition-all active:scale-95 cursor-pointer shadow-2xl shadow-orange-600/20"
                >
                  <Download className="w-4 h-4" /> To'liq arxivni yuklash
                </button>
              </div>
            </aside>

            {/* Right: Scrollable Content */}
            <main className="flex-1 p-8 md:p-16 lg:p-32 space-y-40">
              {/* Introduction */}
              <section className="space-y-10 max-w-3xl">
                <div className="flex items-center gap-4">
                  <Info className="w-4 h-4 text-orange-600" />
                  <h3 className="text-xs font-black uppercase tracking-[0.5em] text-gray-600">Asar haqida</h3>
                </div>
                <p className="text-3xl md:text-4xl font-serif font-light leading-relaxed text-gray-300">
                  {selectedBook.description}
                </p>
                <div className="prose prose-invert prose-2xl text-gray-500 leading-relaxed font-sans">
                  {selectedBook.fullAnalysis}
                </div>
              </section>

              {/* Plot Summary */}
              <section className="space-y-10 bg-white/[0.02] -mx-8 md:-mx-16 lg:-mx-32 p-8 md:p-16 lg:p-32 border-y border-gray-900">
                <div className="max-w-4xl mx-auto space-y-10">
                  <div className="flex items-center gap-4">
                    <Map className="w-4 h-4 text-orange-600" />
                    <h3 className="text-xs font-black uppercase tracking-[0.5em] text-gray-600">Syujet chizig'i</h3>
                  </div>
                  <p className="text-4xl md:text-5xl font-serif text-white font-bold leading-tight">
                    {selectedBook.plotSummary}
                  </p>
                </div>
              </section>

              {/* Characters */}
              <section className="space-y-16">
                <div className="flex items-center gap-4">
                  <Users className="w-4 h-4 text-orange-600" />
                  <h3 className="text-xs font-black uppercase tracking-[0.5em] text-gray-600">Asosiy qahramonlar</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-900">
                  {selectedBook.characters.map(char => (
                    <div key={char.name} className="bg-[#050505] p-10 space-y-6">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-orange-600/60">{char.role}</span>
                        <h4 className="text-3xl font-serif font-bold italic">{char.name}</h4>
                      </div>
                      <p className="text-gray-500 font-medium leading-relaxed">{char.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Themes */}
              <section className="space-y-16">
                <div className="flex items-center gap-4">
                  <BookOpen className="w-4 h-4 text-orange-600" />
                  <h3 className="text-xs font-black uppercase tracking-[0.5em] text-gray-600">Markaziy mavzular</h3>
                </div>
                <div className="space-y-24">
                  {selectedBook.themes.map((theme, idx) => (
                    <div key={theme.title} className="flex flex-col md:flex-row gap-10 md:gap-20 group">
                      <span className="text-7xl font-serif font-black text-gray-900 group-hover:text-orange-900 transition-colors duration-500">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="space-y-6 pt-4">
                        <h4 className="text-4xl font-serif font-bold uppercase tracking-tighter">{theme.title}</h4>
                        <p className="text-xl text-gray-500 leading-relaxed max-w-xl">{theme.explanation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Impact */}
              <section className="space-y-10 border-t border-gray-900 pt-20">
                <div className="flex items-center gap-4">
                  <TrendingUp className="w-4 h-4 text-orange-600" />
                  <h3 className="text-xs font-black uppercase tracking-[0.5em] text-gray-600">Tarixiy Ahamiyati</h3>
                </div>
                <div className="text-5xl md:text-7xl font-serif font-black italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-800 leading-[1.1] tracking-tighter">
                  {selectedBook.impact}
                </div>
              </section>

              {/* Share/CTA */}
              <footer className="pt-40 pb-20 text-center space-y-8">
                <div className="w-px h-24 bg-gray-900 mx-auto" />
                <p className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-700">Ma'rifat ulashish</p>
                <div className="flex justify-center gap-10 text-3xl font-serif italic text-gray-800">
                  <span className="hover:text-orange-600 cursor-pointer transition-all">Facebook</span>
                  <span className="hover:text-orange-600 cursor-pointer transition-all">Twitter</span>
                  <span className="hover:text-orange-600 cursor-pointer transition-all">Link</span>
                </div>
              </footer>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}



