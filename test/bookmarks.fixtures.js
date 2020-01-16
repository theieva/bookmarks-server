function makeBookmarksArray() {
    return [
            {
                id: 1,
                title: 'Test Bookmark 1',
                url: 'http://www.google.com',
                description: 'Test description 1',
                rating: 1
            },
            {
                id: 2,
                title: 'Test Bookmark 2',
                url: 'http://www.google.com/2',
                description: 'Test description 2',
                rating: 3
            },
            {
                id: 3,
                title: 'Test Bookmark 3',
                url: 'http://www.google.com/3',
                description: 'Test description 3',
                rating: 4
            }
        ];
}

module.exports = {
    makeBookmarksArray,
}