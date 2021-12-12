    suggestTier(totalScore, scoreBySection) {
      switch (true) {
        case totalScore > 30 || scoreBySection['S2000'] >= 6:           // total score of S2000 >= 6 
          return 'nc4';
        case totalScore >= 22 || scoreBySection['S1000'] >= 8:          // total score of S1000 >= 8
          return 'nc3';
        case totalScore >= 14 || scoreBySection['S1000'] >= 4:          // total score of S1000 >= 4
          return 'nc2';
        case totalScore >= 6:
          return 'nc1';
        default:
          return 'nc0';
      }
    },
