const generateMessage = (locations) => {
    return `Nucamp offers classes in ${locations.join(', ')}`;
};

module.exports = generateMessage;
