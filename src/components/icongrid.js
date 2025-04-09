    import React, { useState, useEffect } from 'react';
    import { FaPlus, FaTimes, FaTrash } from 'react-icons/fa';
    import '../stylesheets/IconsGrid.css';

    const getInitialIcons = () => {
    try {
        const saved = localStorage.getItem('shortcuts');
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        console.error("Failed to load shortcuts", e);
        return [];
    }
    };

    const IconsGrid = () => {
    const [icons, setIcons] = useState(getInitialIcons);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        try {
        localStorage.setItem('shortcuts', JSON.stringify(icons));
        } catch (e) {
        console.error("Failed to save shortcuts", e);
        }
    }, [icons]);

    const handleAddShortcut = ({ label, url }) => {
        const newIcon = {
        label: label.toLowerCase(),
        url: url.startsWith('http') ? url : `https://${url}`,
        iconSrc: `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=32`
        };
        setIcons(prev => [...prev, newIcon]);
        setShowModal(false);
    };

    const handleDeleteShortcut = (index) => {
        setIcons(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="icons-container">
        {icons.map((icon, index) => (
            <div key={`${icon.url}-${index}`} className="icon">
            <div className="icon-container">
                <img 
                src={icon.iconSrc} 
                alt={icon.label} 
                className="icon-img" 
                onClick={() => window.open(icon.url)}
                />
                <button 
                className="delete-button" 
                onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteShortcut(index);
                }}
                >
                <FaTrash />
                </button>
            </div>
            <span className="icon-label">{icon.label}</span>
            </div>
        ))}

        <div className="icon add-button" onClick={() => setShowModal(true)}>
            <div className="icon-img add-button-bg">
            <FaPlus className="plus-icon" />
            </div>
            <span className="icon-label">add shortcut</span>
        </div>

        {showModal && (
            <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={() => setShowModal(false)}>
                <FaTimes />
                </button>
                <h3>Add New Shortcut</h3>
                <form onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                handleAddShortcut({
                    label: form.name.value,
                    url: form.url.value
                });
                }}>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                    name="name"
                    type="text" 
                    placeholder="Enter website name"
                    required
                    />
                </div>
                <div className="form-group">
                    <label>URL</label>
                    <input 
                    name="url"
                    type="url" 
                    placeholder="example.com"
                    required
                    />
                </div>
                <button type="submit" className="save-button">Save</button>
                </form>
            </div>
            </div>
        )}
        </div>
    );
    };

    export default IconsGrid;   