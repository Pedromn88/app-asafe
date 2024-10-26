import { useState, useEffect } from 'react';

export const useTheme = (themes) => {
    const [currentTheme, setCurrentTheme] = useState('light');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(storedTheme);
        setCurrentTheme(storedTheme);
    }, []);

    const applyTheme = (themeValue) => {
        const selectedTheme = themes.find((theme) => theme.value === themeValue);

        const bodyClasses = Array.from(document.body.classList).filter(
            (className) => !themes.map(theme => theme.value).includes(className)
        );

        document.body.className = '';
        bodyClasses.forEach((className) => document.body.classList.add(className));
        document.body.classList.add(themeValue);

        const buttons = document.querySelectorAll('.buttonStyled');
        buttons.forEach((button) => {
            button.classList.remove('bg-asafe', 'bg-white', 'bg-yellow-300', 'text-asafe', 'text-white', "bg-gray-400");
            button.classList.add(selectedTheme.buttonBG, selectedTheme.buttonText);
        });

        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.style.color = 'black'; // Mantener el color negro para el tema oscuro
        });
    };

    const handleThemeChange = (selectedTheme) => {
        applyTheme(selectedTheme);
        setCurrentTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
        setDropdownOpen(false);
    };

    return {
        currentTheme,
        dropdownOpen,
        setDropdownOpen,
        handleThemeChange,
        themes,
    };
};

