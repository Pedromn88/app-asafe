


export const ButtonTab = ({ className, onClick, children, id, disabled, datatestid, activeTab }) => {
    return (
        <button
            datatestid={datatestid}
            disabled={disabled}
            id={id}
            onClick={onClick}
            className={`${className} ${activeTab === id ? 'bg-asafe  text-white' : "text-asafe bg-white border-1 border-asafe"} px-6 py-2 rounded-full text-lg font-bold buttonStyled`}>
            {children}
        </button >
    );
};