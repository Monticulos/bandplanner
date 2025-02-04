using Backend.Interfaces;
using Backend.Models;

namespace Backend.Services;

public class ParticipantService(IParticipantRepository repository) : IParticipantService
{
    public Participant[] GetParticipants()
    {
        var participants = repository.GetParticipants();
        return participants;
    }
    
    public Participant[] GetExampleParticipants()
    {
        var participants = repository.GetExampleParticipants();
        return participants;
    }
}