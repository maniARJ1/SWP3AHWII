console.log('here is my query:');

function getWatchListNamesForUser(userId) {
    return db.watchlists.find({ userId: userId }, { name: 1 });
}

function getTrackFromWatchList(watchlistId) {
    return db.watchlists.find({ watchlistId: watchlistId }, { track: 1 });
}