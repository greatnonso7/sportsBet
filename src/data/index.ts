import theme from 'theme';

export const coupons = [
  {
    id: 1,
    title: 'Today',
    count: 1,
    data: [
      {
        id: 1,
        title: 'Judah King',
        image: theme.images['profile-1'],
        status: 'Completed',
        stats: ['w', 'w', 'w', 'w', 'w'],
        wins: 5,
        totalOdds: 146,
        games: 8,
        totalReturns: '120%',
        matches: [
          {
            home: 'Chelsea FC',
            away: 'Manchester United',
            odds: 'Over 1.5 odds',
          },
          {
            home: 'Barcelona FC',
            away: 'Southampton',
            odds: 'Over 1.5 odds',
          },
          {
            home: 'Real Madrid',
            away: 'Aston Villa FC',
            odds: 'Over 2.5 odds',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Yesterday',
    count: 2,
    data: [
      {
        id: 1,
        title: 'John Bellion',
        status: 'Completed',
        image: theme.images['profile-2'],
        stats: ['w', 'w', 'w', 'w', 'w'],
        wins: 5,
        totalOdds: 176,
        games: 11,
        totalReturns: '150%',
        matches: [
          {
            home: 'Chelsea FC',
            away: 'Manchester United',
            odds: 'Over 1.5 odds',
          },
          {
            home: 'Barcelona FC',
            away: 'Southampton',
            odds: 'Over 1.5 odds',
          },
          {
            home: 'Real Madrid',
            away: 'Aston Villa FC',
            odds: 'Over 2.5 odds',
          },
        ],
      },
      {
        id: 2,
        title: 'Judah King',
        status: 'Completed',
        image: theme.images['profile-1'],
        stats: ['w', 'w', 'l', 'w', 'l'],
        wins: 3,
        totalOdds: 146,
        games: 8,
        totalReturns: '120%',
        matches: [
          {
            home: 'Chelsea FC',
            away: 'Manchester United',
            odds: 'Over 1.5 odds',
          },
          {
            home: 'Barcelona FC',
            away: 'Southampton',
            odds: 'Over 1.5 odds',
          },
          {
            home: 'Real Madrid',
            away: 'Aston Villa FC',
            odds: 'Over 2.5 odds',
          },
        ],
      },
    ],
  },
];
