namespace Backend.Models;

public class Participant
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public WeeklyScores? Scores { get; set; }
}

