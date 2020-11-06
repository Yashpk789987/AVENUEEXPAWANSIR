export default (code) => {
  switch (code) {
    case '30_SECOND_LISTEN':
      return { points: 1, actionType: 1 };
    case '5_STAR_RATING':
      return { points: 2, actionType: 2 };
    case 'SHARE_TO_EXECUTIVE':
      return { points: 3, actionType: 3 };
    case 'PER_CONTACT':
      return { points: 5, actionType: 4 };
    case 'SONG_FULL_PLAYED':
      return { points: 4, actionType: 5 };
    case 'SHARE_SONG':
      return { points: 4, actionType: 6 };
    case 'FOLLOW_ARTIST':
      return { points: 4, actionType: 7 };
    default:
      return {};
  }
};
