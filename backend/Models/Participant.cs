namespace Backend.Models;

public class Participant
{
    public required string Name { get; set; }
    public WeeklyScores? Scores { get; set; }
}

