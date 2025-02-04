using Backend.Data;
using Backend.Interfaces;
using Backend.Models;

namespace Backend.Repositories;

public class ParticipantRepository(AppDbContext context) : IParticipantRepository
{
    public Participant[] GetParticipants()
    {
        return context.Participants.ToArray();
    }
    
    public Participant[] GetExampleParticipants()
    {
        Participant[] participants =
        [
            new Participant { Name = "Jack Sparrow" },
            new Participant { Name = "Will Turner" },
            new Participant { Name = "Elizabeth Swan" }
        ];

        return participants;
    }
}