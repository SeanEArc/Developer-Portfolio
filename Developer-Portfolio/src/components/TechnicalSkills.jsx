import { useState } from 'react';
import languageInfo from './modals/languageInfo.js';
import LanguageModal from './modals/LanguageModal.jsx';

const TechnicalSkills = () => {
    const [modalIndex, setModalIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...new Set(languageInfo.map(l => l.category))];

    const filteredSkills =
        activeCategory === 'All' ? languageInfo : languageInfo.filter(l => l.category === activeCategory);

    const buttonStyling =
        'bg-bg-elevated rounded-xl shadow-lg p-4 border border-bg-elevated hover:border-accent hover:scale-105 hover:cursor-pointer transition-all duration-200';

    return (
        <div className="mb-5 px-5">
            <h2 className="text-3xl font-bold text-text-primary">Technical Skills</h2>
            <hr className="m-5 w-[60%] mx-auto border-accent/20" />
            <p className="text-sm text-text-muted">*click to see the languages, frameworks, projects made with the language</p>

            <div className="flex flex-wrap gap-2 mt-4 mb-2 items-center justify-center">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => {
                            setActiveCategory(cat);
                            setModalIndex(null);
                        }}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                            activeCategory === cat
                                ? 'bg-accent text-white border-white'
                                : 'bg-bg-elevated text-text-muted border-bg-elevated hover:border-accent'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 w-[80%] mx-auto p-4">
                {filteredSkills.map((language, index) => (
                    <button key={language.name} onClick={() => setModalIndex(index)} className={buttonStyling}>
                        <h3 className="text-2xl text-center font-semibold mb-2 text-text-primary">{language.name}</h3>
                        {language.logo ? (
                            <img src={language.logo} alt={language.name + ' Logo'} className="max-h-45 mx-auto mb-2" />
                        ) : (
                            <div className="flex items-center justify-center h-24 text-5xl font-bold text-accent opacity-60">
                                {language.name[0]}
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {modalIndex !== null && (
                <LanguageModal
                    onClose={() => setModalIndex(null)}
                    language={filteredSkills[modalIndex]}
                    onPrev={() => setModalIndex(index => (index - 1 + filteredSkills.length) % filteredSkills.length)}
                    onNext={() => setModalIndex(index => (index + 1) % filteredSkills.length)}
                />
            )}
        </div>
    );
};

export default TechnicalSkills;
