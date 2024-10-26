export const ButtonStyled = ({ className, onClick, children, id, disabled, datatestid }) => {
    return (
        <button
            datatestid={datatestid}
            disabled={disabled}
            id={id}
            onClick={onClick}
            className={`${className} ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-asafe hover:bg-asafehover text-white'} px-6 py-2 rounded-full text-lg font-bold buttonStyled`}>
            {children}
        </button >
    );
};