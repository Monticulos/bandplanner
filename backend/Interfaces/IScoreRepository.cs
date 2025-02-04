using Backend.Models;

namespace Backend.Interfaces;

public interface IScoreRepository
{
    DailyScore[] GetDailyScores();
    WeeklyScores GetExampleWeeklyScores();
}