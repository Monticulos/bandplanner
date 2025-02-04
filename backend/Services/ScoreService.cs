using Backend.Models;
using Backend.Repositories;

namespace Backend.Services;

public class ScoreService(IScoreRepository repository) : IScoreService
{
    public WeeklyScores GetWeeklyScores()
    {
        var participants = repository.GetWeeklyScores();
        return participants;
    }
}