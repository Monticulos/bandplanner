using Backend.Interfaces;
using Backend.Models;

namespace Backend.Services;

public class ScoreService(IScoreRepository repository) : IScoreService
{
    public DailyScore[] GetDailyScores()
    {
        var scores = repository.GetDailyScores();
        return scores;
    }
    
    public WeeklyScores GetExampleWeeklyScores()
    {
        var scores = repository.GetExampleWeeklyScores();
        return scores;
    }
}