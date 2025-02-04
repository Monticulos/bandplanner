using Backend.Models;

namespace Backend.Interfaces;

public interface IParticipantService
{
    Participant[] GetParticipants();
    Participant[] GetExampleParticipants();
}