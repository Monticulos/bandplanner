using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[Route("api/members")]
[ApiController]
public class MemberController : ControllerBase
{
    [HttpGet]
    public ActionResult<string> GetMembers()
    {
        return Ok("Member data");
    }
}
