using Backend.Models;

namespace Backend.Repositories;

public class ScoreRepository : IScoreRepository
{
    public WeeklyScores GetWeeklyScores()
    {
        var weeklyScores = new WeeklyScores
        {
            Monday = new DailyScore { Score = 10, Description = ["The hardest day of the week."] },
            Tuesday = new DailyScore { Score = 20 },
            Wednesday = new DailyScore { Score = 30 },
            Thursday = new DailyScore { Score = 40 },
            Friday = new DailyScore { Score = 50 },
            Saturday = new DailyScore { Score = 60 },
            Sunday = new DailyScore { Score = 70, Description = ["Fits for most of the participants."] },
        };

        return weeklyScores;
    }
}