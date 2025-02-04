using Backend.Models;

namespace Backend.Interfaces;

public interface IParticipantRepository
{
    Participant[] GetParticipants();
    Participant[] GetExampleParticipants();
}