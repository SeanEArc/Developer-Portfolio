import { useRef } from 'react';
import { RiArrowLeftWideLine, RiArrowRightWideLine } from 'react-icons/ri';

const LanguageModal = ({ onClose, language, onPrev, onNext }) => {
    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) onClose();
    };

    return (
        <div
            ref={modalRef}
            onClick={closeModal}
            className="flex fixed inset-0 backdrop-blur-3xl items-center justify-center z-50"
        >
            <div className="grid grid-cols-[5%_90%_5%] p-6 rounded-lg shadow-xl w-[90%] md:w-[75%] border-black text-zinc-100 max-h-screen overflow-y-auto">
                <button
                    onClick={onPrev}
                    className="flex items-center justify-center"
                >
                    <RiArrowLeftWideLine
                        size="3em"
                        className="cursor-pointer hover:scale-110 transition-transform duration-200"
                    />
                </button>

                <div>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <img
                            src={language.logo}
                            className="brightness-90 rounded-lg w-[30%] h-auto sm:w-[15%] md:w-[10%] object-cover"
                            alt={`${language.name} Logo`}
                        />
                        <h3 className="text-5xl font-bold text-center">
                            {language.name}
                        </h3>
                        <img
                            src={language.logo}
                            className="brightness-90 rounded-lg w-[30%] h-auto sm:w-[15%] md:w-[10%] object-cover"
                            alt={`${language.name} Logo`}
                        />
                    </div>

                    <div className="w-[75%] mx-auto mb-6">
                        <p>{language.description}</p>
                    </div>

                    <h3 className="text-4xl font-bold text-center">
                        Libraries | Frameworks | Tools
                    </h3>

                    <div className="flex flex-wrap justify-center items-center mt-5 gap-10 text-zinc-200">
                        {language.tools.map((tool, idx) => (
                            <img
                                key={idx}
                                src={tool.src}
                                className="inline-block max-w-[40%] sm:max-w-[20%] md:max-w-[10%] h-auto"
                                alt={tool.alt}
                                title={tool.title}
                            />
                        ))}
                    </div>
                </div>

                <button
                    onClick={onNext}
                    className="flex items-center justify-center"
                >
                    <RiArrowRightWideLine
                        size="3em"
                        className="cursor-pointer hover:scale-110 transition-transform duration-200"
                    />
                </button>
            </div>
        </div>
    );
};

export default LanguageModal;
