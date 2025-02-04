using Backend.Models;

namespace Backend.Interfaces;

public interface IScoreService
{
    DailyScore[] GetDailyScores();
    WeeklyScores GetExampleWeeklyScores();
}