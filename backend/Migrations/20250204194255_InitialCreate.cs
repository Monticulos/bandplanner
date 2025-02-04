using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DailyScores",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Score = table.Column<double>(type: "double precision", nullable: false),
                    Description = table.Column<string[]>(type: "text[]", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DailyScores", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WeeklyScores",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    MondayId = table.Column<int>(type: "integer", nullable: false),
                    TuesdayId = table.Column<int>(type: "integer", nullable: false),
                    WednesdayId = table.Column<int>(type: "integer", nullable: false),
                    ThursdayId = table.Column<int>(type: "integer", nullable: false),
                    FridayId = table.Column<int>(type: "integer", nullable: false),
                    SaturdayId = table.Column<int>(type: "integer", nullable: false),
                    SundayId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WeeklyScores", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WeeklyScores_DailyScores_FridayId",
                        column: x => x.FridayId,
                        principalTable: "DailyScores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_WeeklyScores_DailyScores_MondayId",
                        column: x => x.MondayId,
                        principalTable: "DailyScores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_WeeklyScores_DailyScores_SaturdayId",
                        column: x => x.SaturdayId,
                        principalTable: "DailyScores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_WeeklyScores_DailyScores_SundayId",
                        column: x => x.SundayId,
                        principalTable: "DailyScores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_WeeklyScores_DailyScores_ThursdayId",
                        column: x => x.ThursdayId,
                        principalTable: "DailyScores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_WeeklyScores_DailyScores_TuesdayId",
                        column: x => x.TuesdayId,
                        principalTable: "DailyScores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_WeeklyScores_DailyScores_WednesdayId",
                        column: x => x.WednesdayId,
                        principalTable: "DailyScores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Participants",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    ScoresId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Participants", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Participants_WeeklyScores_ScoresId",
                        column: x => x.ScoresId,
                        principalTable: "WeeklyScores",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Participants_ScoresId",
                table: "Participants",
                column: "ScoresId");

            migrationBuilder.CreateIndex(
                name: "IX_WeeklyScores_FridayId",
                table: "WeeklyScores",
                column: "FridayId");

            migrationBuilder.CreateIndex(
                name: "IX_WeeklyScores_MondayId",
                table: "WeeklyScores",
                column: "MondayId");

            migrationBuilder.CreateIndex(
                name: "IX_WeeklyScores_SaturdayId",
                table: "WeeklyScores",
                column: "SaturdayId");

            migrationBuilder.CreateIndex(
                name: "IX_WeeklyScores_SundayId",
                table: "WeeklyScores",
                column: "SundayId");

            migrationBuilder.CreateIndex(
                name: "IX_WeeklyScores_ThursdayId",
                table: "WeeklyScores",
                column: "ThursdayId");

            migrationBuilder.CreateIndex(
                name: "IX_WeeklyScores_TuesdayId",
                table: "WeeklyScores",
                column: "TuesdayId");

            migrationBuilder.CreateIndex(
                name: "IX_WeeklyScores_WednesdayId",
                table: "WeeklyScores",
                column: "WednesdayId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Participants");

            migrationBuilder.DropTable(
                name: "WeeklyScores");

            migrationBuilder.DropTable(
                name: "DailyScores");
        }
    }
}
